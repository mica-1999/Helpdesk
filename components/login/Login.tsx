"use client";
import { useState } from 'react';
import { useTheme } from '@/context/ThemeContext';
import { loginProviders } from '@/data/loginData';
import { showToast } from '@/components/reusable/Toasters';
import { useRouter } from 'next/navigation';
import { signIn } from 'next-auth/react';
import Image from 'next/image';
import Link from 'next/link';

export default function Login() {
    // Router instance to navigate between pages
    const router = useRouter();

    // State & Hooks
    const { t, savedTheme } = useTheme();
    const [form, setForm] = useState({ username: '', password: '', rememberMe: false, });
    const [isPasswordVisible, setIsPasswordVisible] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    // Function to handle password visibility toggle
    const togglePasswordVisibility = () => { setIsPasswordVisible(!isPasswordVisible); };

    // Function to handle form submission
    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);
        const { username, password } = form;

        // Check if username and password are provided
        if (!username || !password) {
            showToast('error', t('login.emptyFields'), savedTheme);
            setIsLoading(false);
            return;
        }

        try {
            // Call the signIn function from next-auth with credentials
            // Add a 2-second timeout before signing in
            await new Promise(resolve => setTimeout(resolve, 1500));

            const result = await signIn('credentials', {
                username,
                password,
                redirect: false,
            });

            if (result?.error) {
                showToast('error', t('login.invalidCredentials'), savedTheme);
                setIsLoading(false);
            } else {
                showToast('success', t('login.success'), savedTheme);
                resetFields();
                setIsLoading(false);
                router.push('/pages/dashboard');
            }

        } catch (error) {
            console.error('Error during login:', error);
            showToast('error', t('login.error'), savedTheme);
            setIsLoading(false);
        }
    };

    // Function to handle form reset
    const resetFields = () => {
        setForm({ username: '', password: '', rememberMe: false });
        setIsPasswordVisible(false);
    };

    return (
        <div className="w-screen h-screen flex justify-center items-center bg-gray-50 dark:bg-gray-900">
            <div id="layoutBox" className='flex w-full h-full bg-white dark:bg-gray-800 shadow-lg overflow-hidden'>
                <div id="leftSide" className='w-full xl:w-[50%] h-full flex flex-col'>
                    <div className='w-full flex items-center px-10 py-8 mb-2'>
                        <Link href="/pages/home" className="flex items-center">
                            <span className="text-gray-800 text-[2rem] font-bold tracking-wide dark:text-white">Help</span>
                            <span className="text-[#FF6B35] text-[2rem] font-bold ml-0.5 dark:text-[#666cff]">Desk</span>
                        </Link>
                    </div>

                    <div id="loginForm" className='w-full max-w-md mx-auto grow flex flex-col'>
                        <form className="space-y-6" onSubmit={handleSubmit}>
                            <div className="flex flex-col mb-8 items-center">
                                <h1 className="text-2xl font-bold text-gray-800 dark:text-white mb-2">{t('login.welcomeBack')}</h1>
                                <p className="text-gray-600 dark:text-gray-300">{t('login.enterDetails')}</p>
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="username" className="block text-sm font-medium text-gray-700 dark:text-gray-300">{t('login.username')}</label>
                                <input
                                    type="text"
                                    id="username"
                                    value={form.username}
                                    onChange={(e) => setForm({ ...form, username: e.target.value })}
                                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:outline-none focus:ring-[#FF6B35] focus:border-transparent dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:focus:ring-[#666cff] transition-all duration-200"
                                    placeholder={t('login.usernamePlaceholder')}
                                />
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="password" className="block text-sm font-medium text-gray-700 dark:text-gray-300">{t('login.password')}</label>
                                <div className="relative">
                                    <input
                                        type={isPasswordVisible ? 'text' : 'password'}
                                        id="password"
                                        value={form.password}
                                        onChange={(e) => setForm({ ...form, password: e.target.value })}
                                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:outline-none focus:ring-[#FF6B35] focus:border-transparent dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:focus:ring-[#666cff] transition-all duration-200"
                                        placeholder={t('login.passwordPlaceholder')}
                                    />
                                    <button
                                        type="button"
                                        onClick={togglePasswordVisibility}
                                        className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300 transition-colors"
                                    >
                                        <i className={`ri-${isPasswordVisible ? 'eye-off' : 'eye'}-line text-lg`}></i>
                                    </button>
                                </div>
                            </div>

                            <div className="flex items-center justify-between">
                                <div className="flex items-center">
                                    <input
                                        type="checkbox"
                                        id="rememberMe"
                                        checked={form.rememberMe}
                                        onChange={() => setForm({ ...form, rememberMe: !form.rememberMe })}
                                        className="h-4 w-4 text-[#FF6B35] dark:text-[#666cff] border-gray-300 rounded focus:ring-[#FF6B35] dark:focus:ring-[#666cff] dark:border-gray-600 cursor-pointer"
                                    />
                                    <label htmlFor="rememberMe" className="ml-2 block text-sm text-gray-700 dark:text-gray-300 cursor-pointer">
                                        {t('login.rememberMe')}
                                    </label>
                                </div>
                                <div>
                                    <Link
                                        href="/forgot-password"
                                        className="text-sm font-medium text-[#FF6B35] hover:text-[#e55a29] dark:text-[#666cff] dark:hover:text-[#5a5fe6] transition-colors"
                                    >
                                        {t('login.forgotPassword')}
                                    </Link>
                                </div>
                            </div>

                            <div className='w-full flex items-center'>
                                <button
                                    type="submit"
                                    disabled={isLoading}
                                    className="w-full bg-[#FF6B35] hover:bg-[#e55a29] text-white py-3 px-4 rounded-lg font-medium transition-all duration-300 hover:shadow-md dark:bg-[#666cff] dark:hover:bg-[#5a5fe6] focus:outline-none focus:ring-2 focus:ring-[#FF6B35] focus:ring-opacity-50 dark:focus:ring-[#666cff] cursor-pointer disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center"
                                >
                                    {isLoading ? (
                                        <>
                                            <span className="inline-block w-4 h-4 mr-2 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
                                            {t('login.signingIn')}
                                        </>
                                    ) : (
                                        t('login.signIn')
                                    )}
                                </button>
                            </div>

                            <div className='w-full flex items-center justify-center mt-8 gap-3'>
                                <div className='h-px bg-gray-300 dark:bg-gray-600 grow'></div>
                                <p className="text-gray-500 dark:text-gray-400 text-sm whitespace-nowrap">{t('login.continueWith')}</p>
                                <div className='h-px bg-gray-300 dark:bg-gray-600 grow'></div>
                            </div>

                            <div id="providerBtns" className='flex w-full justify-between items-center'>
                                <div className="flex flex-wrap gap-3 w-full justify-center items-center">
                                    {loginProviders.map((provider) => (
                                        <button
                                            key={provider.id}
                                            className={`w-[70px] h-[50px] text-gray-300 ${provider.color} ${provider.textColor}  flex items-center justify-center bg-white border border-gray-300 text-gray-700 py-3 rounded-lg font-medium transition-all duration-300 hover:shadow-md dark:bg-gray-800 dark:border-gray-600  focus:outline-none focus:ring-2 focus:ring-[#FF6B35] focus:ring-opacity-50 dark:focus:ring-[#666cff] cursor-pointer`}
                                        >
                                            <i className={`${provider.icon} mr-1`}></i>
                                        </button>
                                    ))}
                                </div>
                            </div>
                        </form>
                    </div>
                </div>

                <div id="rightSide" className='hidden xl:flex xl:w-[50%] h-full relative overflow-hidden'>
                    <div className="relative w-full h-full">
                        <Image
                            src="/login/maybe.jpg"
                            alt="Dashboard Preview"
                            fill
                            sizes="50vw"
                            priority
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}