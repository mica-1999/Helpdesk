// Import component u gonna use here 
"use client";
import Sidebar from "@/components/frontpage/Bar";
import Search from "@/components/frontpage/Search";

export default function FrontPage() {
    return (
        <>
        <div className="w-full h-full flex">
            <Sidebar />
            <Search />
        </div>
        </>
    );
}