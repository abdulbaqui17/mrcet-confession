import prisma from "@/db";
import GoogleProvider from "next-auth/providers/google";

export const Next_Auth = {
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID || "",
            clientSecret: process.env.GOOGLE_CLIENT_SECRET || ""
        })
    ],
    secret: process.env.NEXTAUTH_SECRET,
    callbacks: {
        async signIn({ profile }: any) {
            try {
                const user = await prisma.user.findFirst({
                    where: {
                        email: profile.email
                    }
                })
                if (!user) {
                    await prisma.user.create({
                        data: { email: profile.email }
                    });
                }

                return true;
            } catch (e) {

                return false;
            }
        },
        async jwt({ token, profile }: any) {

            if (profile) {
                const user = await prisma.user.findUnique({
                    where: { email: profile.email },
                });
                if (user) {
                    token.id = user.id;
                }
            }
            return token
        },
        async session({ session, token }: any) {
            session.user.id = token.id
            return session
        }
    }

}