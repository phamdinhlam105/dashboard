"use client"
import { useState } from "react";
import { Input } from "../ui/input";
import { Label } from "../ui/label";

import dynamic from 'next/dynamic'

const RichTextEditor = dynamic(() => import('@/components/rich-text-editor/rich-text-editor'), {
    ssr: false
})

export default function NewPostContent() {
    const [data, setData] = useState("");

    const [title, setTitle] = useState('');
 
    return <div className="w-2/3 space-y-3">
        <Label htmlFor='title' className="block text-xl font-semibold text-gray-700 mb-1">
            Tiêu đề
        </Label>
        <Input
            id='title'
            required
            className="text-xl block w-full px-3 py-2 rounded-md shadow-sm"
        />
       <Label htmlFor='slug' className="block text-xl font-semibold text-gray-700 mb-1">
            Đường dẫn
        </Label>
        <Input
            id='slug'
            required
            className="text-xl block w-full px-3 py-2 rounded-md shadow-sm"
        />
        <Label htmlFor='content' className="block text-xl font-semibold text-gray-700 mb-1">
            Nội dung
        </Label>
        <RichTextEditor data={data} onChange={(value: string) => setData(value)} />
    </div>
}