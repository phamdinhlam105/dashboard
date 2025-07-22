"use client"
import Header from "@/components/header/header";
import TourList from "./tour-list";
import { loginAuth } from "@/components/api/login-auth";

export default function TourPage(){

    loginAuth();
    return <>
        <Header title="Tour"/>
        <TourList />
    </>
}