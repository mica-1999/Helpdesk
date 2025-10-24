"use client";
import Link from "next/link";

export default function Sidebar() {
    return (
        <>  
            <div className="w-6 bg-black h-full flex flex-col items-center justify-center">  
                <h1 className="text-white">Welcome to the Helpdesk</h1>
                <p className="text-white">Your one-stop solution for all your support needs.</p>
                <Link className="text-white" href="/support">Get Support</Link>
            </div>
        </>
    )
}