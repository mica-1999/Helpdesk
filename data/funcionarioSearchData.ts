export interface FuncionarioStatusConfig {
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

// Secretarias with their departments
export const secretariasConfigs: FuncionarioStatusConfig[] = [
    // Default GRM option
    {
        key: "GRM",
        translationKey: "secretarias.grm",
        count: 50,
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
    // SRE - Secretaria Regional de Educação
    {
        key: "SRE",
        translationKey: "secretarias.sre",
        count: 12,
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
    // SRF - Secretaria Regional das Finanças
    {
        key: "SRF",
        translationKey: "secretarias.srf",
        count: 6,
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
    },
    // SRAP - Secretaria Regional de Agricultura e Pescas
    {
        key: "SRAP",
        translationKey: "secretarias.srap",
        count: 3,
        baseColors: {
            badge: "bg-emerald-200 dark:bg-emerald-800",
            text: "text-emerald-800 dark:text-emerald-100"
        },
        darkColors: {
            badge: "dark:bg-emerald-800",
            text: "dark:text-emerald-100"
        },
        selectedColors: {
            background: "bg-emerald-500 dark:bg-emerald-600",
            text: "text-white",
            badge: "bg-white bg-opacity-20 text-emerald-800 dark:text-emerald-600"
        }
    },
    // SRITJ - Secretaria Regional de Inclusão, Trabalho e Juventude
    {
        key: "SRITJ",
        translationKey: "secretarias.sritj",
        count: 3,
        baseColors: {
            badge: "bg-purple-200 dark:bg-purple-800",
            text: "text-purple-800 dark:text-purple-100"
        },
        darkColors: {
            badge: "dark:bg-purple-800",
            text: "dark:text-purple-100"
        },
        selectedColors: {
            background: "bg-purple-500 dark:bg-purple-600",
            text: "text-white",
            badge: "bg-white bg-opacity-20 text-purple-800 dark:text-purple-600"
        }
    },
    // SRSPC - Secretaria Regional de Saúde e Proteção Civil
    {
        key: "SRSPC",
        translationKey: "secretarias.srspc",
        count: 3,
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
    // SRETC - Secretaria Regional de Economia, Turismo e Cultura
    {
        key: "SRETC",
        translationKey: "secretarias.sretc",
        count: 3,
        baseColors: {
            badge: "bg-orange-200 dark:bg-orange-800",
            text: "text-orange-800 dark:text-orange-100"
        },
        darkColors: {
            badge: "dark:bg-orange-800",
            text: "dark:text-orange-100"
        },
        selectedColors: {
            background: "bg-orange-500 dark:bg-orange-600",
            text: "text-white",
            badge: "bg-white bg-opacity-20 text-orange-800 dark:text-orange-600"
        }
    },
    // SREI - Secretaria Regional de Equipamentos e Infraestruturas
    {
        key: "SREI",
        translationKey: "secretarias.srei",
        count: 16,
        baseColors: {
            badge: "bg-indigo-200 dark:bg-indigo-800",
            text: "text-indigo-800 dark:text-indigo-100"
        },
        darkColors: {
            badge: "dark:bg-indigo-800",
            text: "dark:text-indigo-100"
        },
        selectedColors: {
            background: "bg-indigo-500 dark:bg-indigo-600",
            text: "text-white",
            badge: "bg-white bg-opacity-20 text-indigo-800 dark:text-indigo-600"
        }
    },
    // SPRG - Secretaria Regional da Presidência do Governo Regional
    {
        key: "SPRG",
        translationKey: "secretarias.sprg",
        count: 4,
        baseColors: {
            badge: "bg-slate-200 dark:bg-slate-800",
            text: "text-slate-800 dark:text-slate-100"
        },
        darkColors: {
            badge: "dark:bg-slate-800",
            text: "dark:text-slate-100"
        },
        selectedColors: {
            background: "bg-slate-500 dark:bg-slate-600",
            text: "text-white",
            badge: "bg-white bg-opacity-20 text-slate-800 dark:text-slate-600"
        }
    }
];

// Helper function to get the styling classes for funcionario status
export const getFuncionarioStatusStyling = (statusConfig: FuncionarioStatusConfig, isSelected: boolean) => {
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