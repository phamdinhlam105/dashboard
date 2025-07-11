"use client"
import { ARTICLE_LIST } from "@/components/article/constants/article.constants";
import { DataTable } from "@/components/table/data-table";
import { getArticleColumns } from "@/components/article/column-def/columns";
import { useState } from "react";
import ActionsNavigation from "@/components/table/actions-navigation";
import { Article } from "@/components/article/model/article-model";


export default function NewsList() {
    const [data, setData] = useState(ARTICLE_LIST);
    const [filteredData, setFilteredData] = useState<Article[]>(ARTICLE_LIST);
    const onDelete = (id: string) => {
        setData((prev) => prev.map((item) => item.id === id ? { ...item, status: 'deleted' } : item));
    }

    const searchTitle = (search: string) => {
        const lowerSearch = search.toLowerCase();
        setFilteredData(data.filter(item =>
            item.title.toLowerCase().includes(lowerSearch)
        ));
    };

    const statusFilter = (selectedStatus:string)=>{
        const lowerSearch = selectedStatus.toLowerCase();
         setFilteredData(data.filter(item =>
            item.status.toLowerCase().includes(lowerSearch)
        ));
    }

    const columns = getArticleColumns({ onDelete });
    return (
        <div className="p-3 w-full dark:bg-black h-full">
            <ActionsNavigation 
            searchTitle={searchTitle} 
            onDelete={onDelete} 
            allStatus={['deleted','published','draft']}
            searchStatus={statusFilter} />
            <DataTable columns={columns}
                data={filteredData}
                onDelete={onDelete}
                allStatus={['published', 'deleted', 'draft']} />
        </div>
    )
}