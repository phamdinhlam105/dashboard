"use client"
import Header from "@/components/header/header";
import TourList from "./tour-list";
import { useLoginAuth } from "@/components/api/login-auth";

export default function TourPage(){

    useLoginAuth();
    return <>
        <Header title="Tour"/>
        <TourList />
    </>
}