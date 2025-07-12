
import Header from "@/components/header/header";
import NewPostContent from "@/components/new-post/content";
import NewPostInformation from "@/components/new-post/post-infor";
import { Button } from "@/components/ui/button";

export default function NewPostPage() {

    const Post = {
        title: "Bài viết mới",
        slug:"bai-viet-moi",
        content: "Nội dung bài viết mới sẽ được hiển thị ở đây.",
        author: "Nguyễn Văn A",
        date: "01/01/2023",
        status:"draft",

    }

    return <>
        <Header title="Tin tức mới" />
        <div className="p-4 w-full dark:bg-black h-full space-y-4">
            <div className="flex space-x-6">
                <NewPostContent />
                <NewPostInformation />
            </div>
            <Button>
                Tạo bài viết
            </Button>
        </div>
    </>
}