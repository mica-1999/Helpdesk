export interface StatusConfig {
    key: string;
    translationKey: string;
    count: number;
    baseColors: {
        badge: string;
        text: string;
    };
    darkColors: {
        badge: string;
        text: string;
    };
    selectedColors: {
        background: string;
        text: string;
        badge: string;
    };
}

export const statusConfigs: StatusConfig[] = [
    {
        key: "all",
        translationKey: "tickets.all",
        count: 11,
        baseColors: {
            badge: "bg-[#E1E9ED] dark:bg-gray-600",
            text: "text-black dark:text-gray-200"
        },
        darkColors: {
            badge: "dark:bg-gray-600",
            text: "dark:text-gray-200"
        },
        selectedColors: {
            background: "bg-[#666cff] dark:bg-[#7c3aed]",
            text: "text-white",
            badge: "bg-white bg-opacity-20 text-[#666cff] dark:text-[#7c3aed]"
        }
    },
    {
        key: "Pendente",
        translationKey: "tickets.pending",
        count: 5,
        baseColors: {
            badge: "bg-red-200 dark:bg-red-800",
            text: "text-red-800 dark:text-red-100"
        },
        darkColors: {
            badge: "dark:bg-red-800",
            text: "dark:text-red-100"
        },
        selectedColors: {
            background: "bg-red-500 dark:bg-red-600",
            text: "text-white",
            badge: "bg-white bg-opacity-20 text-red-800 dark:text-red-600"
        }
    },
    {
        key: "Aberto",
        translationKey: "tickets.open",
        count: 3,
        baseColors: {
            badge: "bg-blue-200 dark:bg-blue-800",
            text: "text-blue-800 dark:text-blue-100"
        },
        darkColors: {
            badge: "dark:bg-blue-800",
            text: "dark:text-blue-100"
        },
        selectedColors: {
            background: "bg-blue-500 dark:bg-blue-600",
            text: "text-white",
            badge: "bg-white bg-opacity-20 text-blue-800 dark:text-blue-600"
        }
    },
    {
        key: "Fechado",
        translationKey: "tickets.closed",
        count: 1,
        baseColors: {
            badge: "bg-gray-200 dark:bg-gray-600",
            text: "text-gray-800 dark:text-gray-100"
        },
        darkColors: {
            badge: "dark:bg-gray-600",
            text: "dark:text-gray-100"
        },
        selectedColors: {
            background: "bg-gray-500 dark:bg-gray-600",
            text: "text-white",
            badge: "bg-white bg-opacity-20 text-gray-800 dark:text-gray-600"
        }
    },
    {
        key: "Aguarda Stock",
        translationKey: "tickets.awaitingStock",
        count: 1,
        baseColors: {
            badge: "bg-yellow-200 dark:bg-yellow-800",
            text: "text-yellow-800 dark:text-yellow-100"
        },
        darkColors: {
            badge: "dark:bg-yellow-800",
            text: "dark:text-yellow-100"
        },
        selectedColors: {
            background: "bg-yellow-500 dark:bg-yellow-600",
            text: "text-white",
            badge: "bg-white bg-opacity-20 text-yellow-800 dark:text-yellow-600"
        }
    },
    {
        key: "Concluído",
        translationKey: "tickets.completed",
        count: 1,
        baseColors: {
            badge: "bg-green-200 dark:bg-green-800",
            text: "text-green-800 dark:text-green-100"
        },
        darkColors: {
            badge: "dark:bg-green-800",
            text: "dark:text-green-100"
        },
        selectedColors: {
            background: "bg-green-500 dark:bg-green-600",
            text: "text-white",
            badge: "bg-white bg-opacity-20 text-green-800 dark:text-green-600"
        }
    }
];

// Helper function to get the styling classes for a status
export const getStatusStyling = (statusConfig: StatusConfig, isSelected: boolean) => {
    if (isSelected) {
        return {
            containerClass: `h-9 px-4 flex justify-between items-center cursor-pointer transition-colors duration-200 ${statusConfig.selectedColors.background} ${statusConfig.selectedColors.text}`,
            textClass: `text-[15px] font-sans tracking-wide ${statusConfig.selectedColors.text}`,
            badgeClass: `px-2 py-1 rounded-full text-sm font-semibold text-center ${statusConfig.selectedColors.badge}`
        };
    }
    
    return {
        containerClass: `h-9 px-4 flex justify-between items-center cursor-pointer transition-colors duration-200 hover:bg-gray-300 dark:hover:bg-gray-700`,
        textClass: `text-[15px] font-sans tracking-wide text-black dark:text-gray-100`,
        badgeClass: `px-2 py-1 rounded-full text-sm font-semibold text-center ${statusConfig.baseColors.badge} ${statusConfig.baseColors.text}`
    };
};