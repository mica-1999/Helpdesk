// Equipment status configurations
export const equipmentStatusConfigs = [
    { 
        key: "all", 
        count: 0,
        color: "bg-zinc-600 dark:bg-zinc-500",
        selectedColor: "bg-zinc-600 dark:bg-zinc-500",
        textColor: "text-zinc-600 dark:text-zinc-500",
        icon: "ri-list-check-3"
    },
    { 
        key: "inUse", 
        count: 0,
        color: "bg-green-500 dark:bg-green-400",
        selectedColor: "bg-green-500 dark:bg-green-400",
        textColor: "text-green-500 dark:text-green-400",
        icon: "ri-checkbox-circle-line"
    },
    { 
        key: "new", 
        count: 0,
        color: "bg-blue-500 dark:bg-blue-400",
        selectedColor: "bg-blue-500 dark:bg-blue-400",
        textColor: "text-blue-500 dark:text-blue-400",
        icon: "ri-sparkling-line"
    },
    { 
        key: "decommissioned", 
        count: 0,
        color: "bg-red-500 dark:bg-red-400",
        selectedColor: "bg-red-500 dark:bg-red-400",
        textColor: "text-red-500 dark:text-red-400",
        icon: "ri-delete-bin-line"
    }
];

// Equipment type configurations
export const equipmentTypeConfigs = [
    { 
        key: "all", 
        count: 0,
        color: "bg-zinc-600 dark:bg-zinc-500",
        selectedColor: "bg-zinc-600 dark:bg-zinc-500",
        textColor: "text-zinc-600 dark:text-zinc-500",
        icon: "ri-list-check-3"
    },
    { 
        key: "general", 
        count: 0,
        color: "bg-purple-500 dark:bg-purple-400",
        selectedColor: "bg-purple-500 dark:bg-purple-400",
        textColor: "text-purple-500 dark:text-purple-400",
        icon: "ri-computer-line"
    },
    { 
        key: "networks", 
        count: 0,
        color: "bg-orange-500 dark:bg-orange-400",
        selectedColor: "bg-orange-500 dark:bg-orange-400",
        textColor: "text-orange-500 dark:text-orange-400",
        icon: "ri-router-line"
    },
    { 
        key: "printers", 
        count: 0,
        color: "bg-indigo-500 dark:bg-indigo-400",
        selectedColor: "bg-indigo-500 dark:bg-indigo-400",
        textColor: "text-indigo-500 dark:text-indigo-400",
        icon: "ri-printer-line"
    },
    { 
        key: "voips", 
        count: 0,
        color: "bg-teal-500 dark:bg-teal-400",
        selectedColor: "bg-teal-500 dark:bg-teal-400",
        textColor: "text-teal-500 dark:text-teal-400",
        icon: "ri-phone-line"
    }
];

// Helper function to get styling for equipment items (status or type)
export const getEquipmentStyling = (item: any, isSelected: boolean) => {
    return {
        containerClass: `h-12 px-4 flex justify-between items-center cursor-pointer transition-colors duration-200 ${
            isSelected 
                ? `${item.selectedColor} text-white` 
                : 'hover:bg-gray-200 dark:hover:bg-gray-600 text-gray-700 dark:text-gray-200'
        }`,
        textClass: `text-[15px] font-sans ${isSelected ? 'font-semibold text-white' : 'font-normal'}`,
        badgeClass: `px-2 py-1 rounded-full text-xs font-medium ${
            isSelected 
                ? `bg-white bg-opacity-20 ${item.textColor} border border-white border-opacity-30` 
                : `bg-gray-200 dark:bg-gray-700 text-gray-600 dark:text-gray-300`
        }`,
        iconClass: `text-lg mr-3 ${isSelected ? 'text-white' : 'text-gray-500 dark:text-gray-400'}`
    };
};