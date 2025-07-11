"use client"

import {
    ChevronDown
} from "lucide-react";
import {
    SidebarContent,
    SidebarGroup,
    SidebarGroupContent,
    SidebarGroupLabel,
    SidebarHeader,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
    SidebarRail,
    Sidebar
} from "../ui/sidebar";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "../ui/collapsible";
import Logo from "./logo";
import Link from "next/link";
import { SidebarStructure } from "./structure";
import { usePathname } from "next/navigation";


export function AppSideBar({ ...props }: React.ComponentProps<typeof Sidebar>) {
    const path = usePathname();
    return (
        <Sidebar {...props} className="z-30"
        >
            <SidebarHeader>
                <Logo />
            </SidebarHeader>
            <SidebarContent className="gap-0">
                {SidebarStructure.map((item) => (
                    <Collapsible
                        key={item.title}
                        title={item.title}
                        defaultOpen={false}
                        className="group/collapsible"
                    >
                        <SidebarGroup>
                            <SidebarGroupLabel
                                asChild
                                className="h-10 group/label text-md text-sidebar-foreground "
                            >
                                <div className={`items-center flex rounded-md transition-colors duration-50 
                                    ${path.includes(item.url) || (path === '/' && item.url === '/article') ?
                                        'bg-primary text-white dark:text-black' :
                                        'hover:bg-sidebar-accent hover:text-sidebar-accent-foreground'}`}>
                                    <Link className="flex px-4" href={item.url}>
                                        {<item.icon className="mr-2 w-6 h-6 " />}
                                        {item.title}{" "}
                                    </Link>
                                    {item.items ? <CollapsibleTrigger
                                        data-state={path.includes(item.url + '/') ? "open" : "closed"}
                                        className="ml-auto">
                                        <ChevronDown  className="ml-auto transition-transform group-data-[state=open]/collapsible:-rotate-180" />
                                    </CollapsibleTrigger> : ""}
                                </div>
                            </SidebarGroupLabel>
                            <CollapsibleContent>
                                <SidebarGroupContent>
                                    <SidebarMenu>
                                        {item.items ? item.items.map((item) => (
                                            <SidebarMenuItem key={item.title} >
                                                <SidebarMenuButton asChild className="h-10 px-8">
                                                    <Link
                                                        className={`${path.includes(item.url) ? 'text-primary hover:text-primary' : ''}`}
                                                        href={item.url}>{item.title}</Link>
                                                </SidebarMenuButton>
                                            </SidebarMenuItem>
                                        )) : ""}
                                    </SidebarMenu>
                                </SidebarGroupContent>
                            </CollapsibleContent>
                        </SidebarGroup>
                    </Collapsible>
                ))}
            </SidebarContent>
            <SidebarRail />
        </Sidebar>
    )
}