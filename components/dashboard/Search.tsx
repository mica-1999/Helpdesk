"use client";

export default function Search() {

    return (
        <>
            <div className="w-80 h-full flex flex-col bg-white">
                <div className="flex w-full h-16 bg-[#F3F7F9] border-b-2 border-r-2 justify-between items-center">
                    <h4 className="ml-4 text-gray-700 dark:text-gray-500 text-xl font-bold font-sans tracking-wide">Tickets   </h4>
                    <button className="w-32 h-9 mr-4 text-white bg-[#666cff] hover:bg-[#5a5fe6] rounded-md cursor-pointer transition-colors duration-200">+ New ticket</button>

                </div>
                
                <div className="w-full flex-1 bg-[#F3F7F9] border-r-2">
                    <div className="w-full h-18 border-b-2 p-3 flex items-center">  
                        <div className="relative w-full">
                            <input 
                                type="text" 
                                placeholder="Search in all tickets..." 
                                className="w-full h-11 pl-10 pr-4 border border-[#666cff] rounded-sm outline-none bg-white placeholder-gray-400 focus:border-[#5a5fe6] transition-colors duration-200" 
                            />
                            <i className="ri-search-line absolute left-3 top-1/2 transform -translate-y-1/2 text-[#666cff] text-lg"></i>
                        </div>
                    </div> 

                    {/* Estados e Filtros Principais */}
                    


                </div>

            </div>
        </> 
    )

}