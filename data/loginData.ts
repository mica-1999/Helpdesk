export interface LoginProvider {
    id: string;
    icon: string;
    color: string;
    textColor?: string;
    textColorBase?: string;
    hoverBase?: string;
}

export const loginProviders: LoginProvider[] = [
    {
        id: 'google',
        icon: 'ri-google-fill',
        color: 'hover:bg-[#4285F4]',
        textColor: 'text-white',
        textColorBase: 'text-black',
        hoverBase: 'hover:text-white'
    },
    {
        id: 'github',
        icon: 'ri-github-fill',
        color: 'hover:bg-black',
        textColor: 'text-white',
        textColorBase: 'text-black',
        hoverBase: 'hover:text-white'
    },
    {
        id: 'twitter',
        icon: 'ri-twitter-x-fill',
        color: 'hover:bg-black',
        textColor: 'text-white',
        textColorBase: 'text-black',
        hoverBase: 'hover:text-white'
        
    },
    {
        id: 'instagram',
        icon: 'ri-instagram-fill',
        color: 'hover:bg-[#E1306C]',
        textColor: 'text-white',
        textColorBase: 'text-black',
        hoverBase: 'hover:text-white'
    }
];