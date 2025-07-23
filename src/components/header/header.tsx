"use client"
import { PROFILE } from "@/components/profile/constants/profile.constants";
import { DropdownMenuSeparator } from "@/components/ui/dropdown-menu";
import { SidebarTrigger } from "@/components/ui/sidebar";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuTrigger } from "@radix-ui/react-dropdown-menu";
import { LogOut, User } from "lucide-react";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { Button } from "../ui/button";
import { removeAccessToken } from "@/lib/cookie-handler";

export default function Header({ title }: { title: string }) {
    const router = useRouter();

    const handleLogout = () => {
        removeAccessToken();
        toast( "LOGOUT",{
            description: "Log out successfully"
        });
        router.push('/login');

    };
    return (
        <div className="flex h-16 items-center justify-between w-full border-b sticky top-0 z-10 bg-background ">
            <SidebarTrigger className=" h-10 w-10" />
            <h2 className="ml-2 text-xl font-bold">{title}</h2>
            <div className="ml-auto mr-4">
                <DropdownMenu >
                    <DropdownMenuTrigger asChild>
                        <Button variant='default'>
                            Thông tin tài khoản
                        </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent
                        side="bottom"
                        align="end"
                        sideOffset={2}
                        className="shadow-md max-w-60 p-2 rounded-md border bg-background z-40">
                        <DropdownMenuLabel className="p-1 pr-8">
                            <h3 className="font-bold text-md ">{PROFILE.name}</h3>
                            <p className="text-sm text-secondary">{PROFILE.mail}</p>
                        </DropdownMenuLabel>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem
                            onClick={() => router.push('/profile')}
                            className="flex p-2 hover:bg-accent hover:outline-none rounded-md">
                            <User />
                            Thông tin cá nhân
                        </DropdownMenuItem>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem
                            onClick={handleLogout}
                            className="flex p-2 hover:bg-accent hover:outline-none rounded-md">
                            <LogOut />
                            Đăng xuất
                        </DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
            </div>
        </div>
    )
}