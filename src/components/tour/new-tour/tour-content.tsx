"use client"
import { useState } from "react";
import { Input } from "../../ui/input";
import { Label } from "../../ui/label";

import dynamic from 'next/dynamic'

const RichTextEditor = dynamic(() => import('@/components/rich-text-editor/rich-text-editor'), {
    ssr: false
})

export default function NewTourContent({
    name,
    slug,
    schedule,
    scheduleDetail,
    onChange
}:{
    name: string;
    slug: string;
    schedule: string;
    scheduleDetail: string;
    onChange: (field:string,value:string)=>void;
}) {
 
    return <div className="w-2/3 space-y-3">
        <Label htmlFor='name' className="block text-xl font-semibold text-gray-700 mb-1">
            Tên Tour
        </Label>
        <Input
            id='name'
            required
            className="text-xl block w-full px-3 py-2 rounded-md shadow-sm"
            value={name}
            onChange={(e) => onChange('name', e.target.value)}
        />
         <Label htmlFor='slug' className="block text-xl font-semibold text-gray-700 mb-1">
            Đường dẫn
        </Label>
        <Input
            id='slug'
            required
            className="text-xl block w-full px-3 py-2 rounded-md shadow-sm"
            value={slug}
            onChange={(e) => onChange('slug', e.target.value)}
        />
       <Label htmlFor='schedule' className="block text-xl font-semibold text-gray-700 mb-1">
            Lịch trình
        </Label>
        <Input
            id='schedule'
            required
            className="text-xl block w-full px-3 py-2 rounded-md shadow-sm"
            value={schedule}
            onChange={(e) => onChange('schedule', e.target.value)}
        />
        <Label htmlFor='content' className="block text-xl font-semibold text-gray-700 mb-1">
            Lịch trình chi tiết
        </Label>
        <RichTextEditor data={scheduleDetail} onChange={(value: string) => onChange('scheduleDetail', value)} />
    </div>
}