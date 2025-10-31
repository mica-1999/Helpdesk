// Define the shape of our context
export type ThemeContextType = {
    theme: string;
    setTheme: (theme: string) => void;
    language: string;
    setLanguage: (language: string) => void;
    sidebarStyle: string;
    setSidebarStyle: (sidebarStyle: string) => void;
    savedTheme: string;
    setSavedTheme: (theme: string) => void;
    savedLanguage: string;
    setSavedLanguage: (language: string) => void;
    savedSidebarStyle: string;
    setSavedSidebarStyle: (sidebarStyle: string) => void;
    t: (key: string) => string;
    tArray: <T>(key: string) => T[];
    isLoading: boolean;
};

export interface HandleResetProps {
    method: "reset" | "cancel";
}

export interface SidebarProps {
    sidebarStyle: string;
}

// Define interfaces for translation structure
export interface NestedTranslations {
    [key: string]: string | NestedTranslations | Array<unknown>;
}

export interface Translations {
    [key: string]: NestedTranslations;
}
