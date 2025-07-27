import { BookOpenText, Folders, Map, Hotel, Newspaper, Handshake, AppWindow } from "lucide-react";

export const SidebarStructure = [
  {
    title: "Danh sách đặt tour",
    url: "/booking",
    icon: BookOpenText,
  },
  {
    title: "Tour",
    url: "/tour",
    icon: Map,
    items: [
      {
        title: "Tạo Tour mới",
        url: "/tour/new",
      },
    ],
  },
  {
    title: "Khách sạn",
    url: "/hotel",
    icon: Hotel,
    items: [
      {
        title: "Tạo khách sạn mới",
        url: "/hotel/new",
      },
    ],
  },
  {
    title: "Tin tức",
    url: "/news",
    icon: Newspaper,
    items: [
      {
        title: "Tạo bài viết mới",
        url: "/news/new",
      },
    ],
  },
  {
    title: "Quản lý tệp",
    url: "/file",
    icon: Folders,
  },
  {
    title: "Combo",
    url: "/combo",
    icon: Handshake,
    items: [
       {
        title: "Tạo combo mới",
        url: "/combo/new",
      },
    ],
  },
   {
    title: "Banner",
    url: "/banner",
    icon: AppWindow,
  },
];
