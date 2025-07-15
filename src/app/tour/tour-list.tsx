"use client"
import { DataTable } from "@/components/table/data-table";
import { useState } from "react";
import ActionsNavigation from "@/components/table/actions-navigation";
import { TourModel } from "@/components/tour/model/tour-model";
import { TOUR_MOCK_DATA } from "@/components/tour/mock-data/tour-data";
import { getTourColumns } from "@/components/tour/tour-detail/column-def";


export default function TourList() {
    const [data, setData] = useState(TOUR_MOCK_DATA);
    const [filteredData, setFilteredData] = useState<TourModel[]>(TOUR_MOCK_DATA);
    const [selectedIds,setSelectedIds] = useState<string[]>([])
    const onDelete = (id: string) => {
        setData((prev) => prev.map((item) => item.id === id ? { ...item, status: 'deleted' } : item));
    }

    const searchTitle = (search: string) => {
        const lowerSearch = search.toLowerCase();
        setFilteredData(data.filter(item =>
            item.name.toLowerCase().includes(lowerSearch)
        ));
    };

    const statusFilter = (selectedStatus:string)=>{
        const lowerSearch = selectedStatus.toLowerCase();
        if(lowerSearch === 'available')
            setFilteredData(data.filter(item => item.isAvailable));
        else if(lowerSearch === 'unavailable')
            setFilteredData(data.filter(item => !item.isAvailable));
    }
    const onSelectionChange = (ids:string[])=>{
        setSelectedIds(ids);
    }

    const columns = getTourColumns({ onDelete });
    return (
        <div className="p-3 w-full dark:bg-black h-full">
            <ActionsNavigation 
            searchTitle={searchTitle} 
            onDelete={onDelete} 
            allStatus={['available', 'unavailable']}
            searchStatus={statusFilter} 
            newItemLink="/tour/new"
            />
            <DataTable columns={columns}
                data={filteredData}
                onDelete={onDelete} 
                onSelectionChange={onSelectionChange}/>
        </div>
    )
}