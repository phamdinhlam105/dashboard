import { BookOpenText, ListTree, Folders, Settings } from "lucide-react";

export const SidebarStructure = [
    {
        title: "Tour",
        url: "/tour",
        icon: BookOpenText,
        items: [
            {
                title: "Tạo Tour mới",
                url: "/tour/new",
            }
        ],
    },
    {
        title: "Khách sạn",
        url: "/hotel",
        icon: ListTree,
        items: [
            {
                title: "Tạo khách sạn mới",
                url: "/hotel/new",
            }
        ],
    },
     {
        title: "Tin tức",
        url: "/news",
        icon: ListTree,
        items: [
            {
                title: "Tạo bài viết mới",
                url: "/news/new",
            }
        ],
    },
    {
        title: "Quản lý tệp",
        url: "/file",
        icon: Folders
    },
    {
        title: "Cài đặt",
        url: "/settings",
        icon: Settings,
        items: [
            {
                title: "Tài khoản",
                url: "/settings/account",
            },
            {
                title: "Giao diện",
                url: "/settings/appearance",
            },
        ],
    },
]
