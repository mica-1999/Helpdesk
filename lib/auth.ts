import { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { prisma } from '@/lib/prisma';

export const authOptions: NextAuthOptions = {
    providers: [
        CredentialsProvider({
            name: "credentials",
            credentials: {
                username: { label: "Username", type: "text" },
                password: { label: "Password", type: "password" },
            },
            async authorize(credentials) {
                if (!credentials?.username || !credentials?.password) {
                    return null;
                }

                try {
                    // Find user in database (using 'name' field to match your schema)
                    const user = await prisma.user.findFirst({
                        where: {
                            name: credentials.username
                        }
                    });

                    if (!user) {
                        console.log("User not found:", credentials.username);
                        return null;
                    }

                    // Simple password comparison (you can add bcrypt later)
                    if (user.password !== credentials.password) {
                        console.log("Invalid password for:", credentials.username);
                        return null;
                    }

                    // Return user object
                    return {
                        id: user.id.toString(),
                        name: user.name,
                    };
                } catch (error) {
                    console.error("Auth error:", error);
                    return null;
                }
            },
        }),
    ],
    session: {
        strategy: "jwt",
    },
    callbacks: {
        async jwt({ token, user }) {
            if (user) {
                token.id = user.id;
            }
            return token;
        },
        async session({ session, token }) {
            if (session.user) {
                session.user.id = token.id as string;
            }
            return session;
        },
    },
    pages: {
        signIn: "/login",
    },
    secret: process.env.NEXTAUTH_SECRET,
};
