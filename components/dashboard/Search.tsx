"use client";
import { useState, useEffect } from "react";

export default function Search() {
    const [searchBox, setSearchBox] = useState("");
    const [placeholder, setPlaceholder] = useState("Search in all tickets...");

    // Handle search input
    const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchBox(e.target.value);
    };

    const handleFocus = () => {
        setPlaceholder("");
    };
    const handleBlur = () => {
        if (searchBox === "") {
            setPlaceholder("Search in all tickets...");
        }
    };

    return (
        <>
            <div className="w-80 h-full flex flex-col bg-[#F3F7F9]">
                <div className="flex w-full h-16 border-b-2 border-r-2 border-gray-200 justify-between items-center">
                    <h4 className="ml-4 text-gray-700 dark:text-gray-500 text-xl font-bold font-sans tracking-wide">Tickets   </h4>
                    <button className="w-32 h-9 mr-4 text-white bg-[#666cff] hover:bg-[#5a5fe6] rounded-md cursor-pointer transition-colors duration-200">+ New ticket</button>

                </div>
                
                <div className="w-full flex-1  border-r-2 border-gray-200">
                    <div className="w-full h-18 p-3 flex items-center border-gray-200">  
                        <div className="relative w-full">
                            <input 
                                type="text" 
                                placeholder={placeholder} 
                                value={searchBox}
                                onChange={handleSearchChange}
                                onFocus={handleFocus}
                                onBlur={handleBlur}
                                className="w-full h-11 pl-10 pr-4 border border-[#666cff] rounded-sm outline-none bg-white placeholder-gray-400 text-gray-800 focus:border-[#5a5fe6] focus:bg-blue-50 focus:text-gray-900 transition-all duration-200" 
                            />
                            <i className="ri-search-line absolute left-3 top-1/2 transform -translate-y-1/2 text-[#666cff] text-lg"></i>
                        </div>
                    </div> 

                    {/* Estados e Filtros Principais */}
                    <div className="w-full flex flex-col px-4">
                         <div className="mt-4">
                            <h5 className="text-[#666cff] dark:text-[#666cff] text-[16px] font-bold font-sans tracking-wide">All tickets</h5>
                         </div>
                         
                         <div className="mt-3 flex justify-between items-center hover:bg-gray-300 dark:hover:bg-gray-600 cursor-pointer transition-colors duration-200">
                            <h5 className="text-black dark:text-white text-[15px] font-sans tracking-wide">Tickets to handle</h5>
                            <span className="bg-[#E1E9ED] dark:bg-gray-600 text-black dark:text-gray-300 px-2 py-1 rounded-full text-sm font-semibold text-center">8</span>
                         </div>
                         
                         <div className="mt-3 flex justify-between items-center hover:bg-gray-300 dark:hover:bg-gray-600 cursor-pointer transition-colors duration-200">
                            <h5 className="text-black dark:text-white text-[15px] font-sans tracking-wide">My open tickets</h5>
                            <span className="bg-[#E1E9ED] dark:bg-gray-600 text-black dark:text-gray-300 px-2 py-1 rounded-full text-sm font-semibold text-center">3</span>
                         </div>

                         {/* My Views Section */}
                         <div className="mt-6 flex justify-between items-center">
                            <h5 className="text-[#666cff] dark:text-[#666cff] text-[16px] font-bold font-sans tracking-wide">My views</h5>
                            <button className="text-[#666cff] hover:text-[#5a5fe6] text-sm font-semibold transition-colors duration-200">Manage</button>
                         </div>
                         
                         <div className="mt-3 flex justify-between items-center hover:bg-gray-300 dark:hover:bg-gray-600 cursor-pointer transition-colors duration-200">
                            <h5 className="text-black dark:text-white text-[15px] font-sans tracking-wide">My tickets last 7 days</h5>
                            <span className="bg-[#E1E9ED] dark:bg-gray-600 text-black dark:text-gray-300 px-2 py-1 rounded-full text-sm font-semibold text-center">12</span>
                         </div>
                         
                         <div className="mt-3 flex justify-between items-center hover:bg-gray-300 dark:hover:bg-gray-600 cursor-pointer transition-colors duration-200">
                            <h5 className="text-black dark:text-white text-[15px] font-sans tracking-wide">Open tickets</h5>
                            <span className="bg-[#E1E9ED] dark:bg-gray-600 text-black dark:text-gray-300 px-2 py-1 rounded-full text-sm font-semibold text-center">15</span>
                         </div>

                         {/* Statuses Section */}
                         <div className="mt-6 flex justify-between items-center">
                            <h5 className="text-[#666cff] dark:text-[#666cff] text-[16px] font-bold font-sans tracking-wide">Statuses</h5>
                            <i className="ri-information-line text-[#666cff] text-lg hover:text-[#5a5fe6] cursor-pointer transition-colors duration-200"></i>
                         </div>
                         
                         <div className="mt-3 flex justify-between items-center hover:bg-gray-300 dark:hover:bg-gray-600 cursor-pointer transition-colors duration-200">
                            <h5 className="text-black dark:text-white text-[15px] font-sans tracking-wide">Awaiting Intervention</h5>
                            <span className="bg-red-200 dark:bg-red-700 text-red-800 dark:text-red-200 px-2 py-1 rounded-full text-sm font-semibold text-center">5</span>
                         </div>
                         
                         <div className="mt-3 flex justify-between items-center hover:bg-gray-300 dark:hover:bg-gray-600 cursor-pointer transition-colors duration-200">
                            <h5 className="text-black dark:text-white text-[15px] font-sans tracking-wide">Open</h5>
                            <span className="bg-blue-200 dark:bg-blue-700 text-blue-800 dark:text-blue-200 px-2 py-1 rounded-full text-sm font-semibold text-center">8</span>
                         </div>
                         
                         <div className="mt-3 flex justify-between items-center hover:bg-gray-300 dark:hover:bg-gray-600 cursor-pointer transition-colors duration-200">
                            <h5 className="text-black dark:text-white text-[15px] font-sans tracking-wide">Closed</h5>
                            <span className="bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 px-2 py-1 rounded-full text-sm font-semibold text-center">42</span>
                         </div>
                         
                         <div className="mt-2 flex justify-between items-center hover:bg-gray-300 dark:hover:bg-gray-600 cursor-pointer transition-colors duration-200">
                            <h5 className="text-black dark:text-white text-[15px] font-sans tracking-wide">Awaiting Stock</h5>
                            <span className="bg-yellow-200 dark:bg-yellow-700 text-yellow-800 dark:text-yellow-200 px-2 py-1 rounded-full text-sm font-semibold text-center">2</span>
                         </div>
                         
                         <div className="mt-2 flex justify-between items-center hover:bg-gray-300 dark:hover:bg-gray-600 cursor-pointer transition-colors duration-200">
                            <h5 className="text-black dark:text-white text-[15px] font-sans tracking-wide">Completed</h5>
                            <span className="bg-green-200 dark:bg-green-700 text-green-800 dark:text-green-200 px-2 py-1 rounded-full text-sm font-semibold text-center">156</span>
                         </div>

                    </div>
                </div>

            </div>
        </> 
    )

}