"use server";
import prisma from "@/db";
import { getServerSession } from "next-auth";
import { Next_Auth } from "@/lib/Next_Auth";

export async function publisPost(title: string, mediaList: any) {
    const session = await getServerSession(Next_Auth);
    if (!session || !session.user) {
        console.error("User is not authenticated.");
        return null;
    }
    const userId = session.user.id;
    try {
        const post = await prisma.post.create({
            data: {
                title: title,
                userId: userId,
                image: mediaList
            },
        });
        return post;
    } catch (error) {
        console.error("Error creating post:", error);
        return null;
    }
}
export async function likePost(postId: number) {
    const session = await getServerSession(Next_Auth);
    if (!session || !session.user) {
        console.error("User is not authenticated.");
        return null;
    }
    try {
        const like = await prisma.like.create({
            data: {
                postId: postId,
            },
        });
        return like; 
    } catch (error) {
        console.error("Error liking the post:", error);
        return null;
    }
}
export async function getPosts() {
    return await prisma.post.findMany({
        select: {
            id: true,
            title: true,
            createdAt: true,
            userId: true,
            image: true,
            likes: {
                select: {
                    id: true
                }
            },
            comments: {
                select: {
                    text: true
                }
            }
        },
        orderBy: {
            createdAt: "desc"
        }
    });
}