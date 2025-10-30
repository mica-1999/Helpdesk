import { useState, useEffect } from 'react';

interface UseLoadingOptions {
    delay?: number; // Loading delay in milliseconds
}

export const useLoading = (options: UseLoadingOptions = {}) => {
    const { delay = 800 } = options;
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, delay);

        return () => clearTimeout(timer);
    }, [delay]);

    return isLoading;
};

// Loading component for consistent UI
interface LoadingSpinnerProps {
    message?: string;
}

export const LoadingSpinner = ({ message = "Loading..." }: LoadingSpinnerProps) => {
    return (
        <div className="flex-1 bg-gray-100 dark:bg-gray-800 flex items-center justify-center">
            <div className="flex flex-col items-center">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#666cff] dark:border-[#7c3aed]"></div>
                <p className="mt-4 text-gray-600 dark:text-gray-400 text-sm">{message}</p>
            </div>
        </div>
    );
};