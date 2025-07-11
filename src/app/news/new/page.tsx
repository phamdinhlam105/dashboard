
import Header from "@/components/header/header";
import NewPostContent from "@/components/new-post/content";
import NewPostInformation from "@/components/new-post/post-infor";
import { Button } from "@/components/ui/button";

export default function NewPostPage() {

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