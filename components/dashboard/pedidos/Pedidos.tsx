"use client"

export default function Pedidos() {
    return (
        <>
            <div className="w-full h-full bg-white">
                <div className="flex w-full h-16 bg-white border-b-2 border-r-2 border-gray-200 items-center justify-center">
                    <h2 className="text-gray-700 dark:text-gray-500 text-xl font-bold font-sans tracking-wide">All tickets</h2>
                </div>

                <div className="flex w-full h-16 bg-white border-b-2 border-r-2 border-gray-200 items-center justify-between px-4">
                    <button className="w-32 text-[#666cff] bg-white hover:bg-blue-100 px-4 py-2 rounded-md cursor-pointer transition-colors duration-200 text-sm font-semibold border border-[#666cff]">+ Add filter</button>
                </div>

                <div className="flex w-full h-9 bg-white border-b-2 border-r-2 border-gray-200 items-center justify-between px-4">

                </div>
            </div>
        </>
    )
}