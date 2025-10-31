/**
 * NextAuth Session Provider Wrapper
 * 
 * This component wraps the application with Next-Auth's SessionProvider to enable
 * authentication throughout the app. It must be used on the client side and is
 * positioned as the outermost provider in the component tree.
 * Since this project doesn't have DB yet, this isn't important now but good to have
 * 
 */

"use client";
import { SessionProvider } from "next-auth/react";
import { ReactNode } from "react";

type Props = {
    children: ReactNode;
};

export default function NextAuthSessionProvider({ children }: Props) {
    return <SessionProvider>{children}</SessionProvider>;
}