'use client';

import { publisPost } from '@/server/actions';
import { CldUploadWidget } from 'next-cloudinary';
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useSession, signOut, signIn } from "next-auth/react";
import toast from 'react-hot-toast';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Upload, LogOut } from "lucide-react";
import { motion } from "framer-motion";

export default function CreatePost() {
    const { data: session } = useSession();
    const [title, setTitle] = useState("");
    const [mediaList, setMediaList] = useState("");
    const router = useRouter();

    const handlePostSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (title.trim().length < 3) {
            toast.error("Title must be 3 char long")
            return;
        }

        const res = await publisPost(title, mediaList);
        if (res) {
            router.push("/posts");
            toast.success("Post published successfully")
        }
        setTitle("");
        setMediaList("");
    };

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setTitle(e.target.value);
    };

    const handleSuccess = (result: any) => {
        const uploadedMediaUrl = result.info.secure_url;
        setMediaList(uploadedMediaUrl);
        toast.success("Image uploaded successfully");
    };

    if (!session) {
        return (
            <Card className="w-full max-w-xl mx-auto my-6">
                <CardContent className="pt-6">
                    <p className="text-center text-muted-foreground">
                        You are not logged in. Please{' '}
                        <Button 
                            variant="link" 
                            onClick={() => signIn('google', { callbackUrl: '/posts' })}
                            className="p-0 h-auto font-semibold"
                        >
                            log in
                        </Button>{' '}
                        to post and comment.
                    </p>
                </CardContent>
            </Card>
        );
    }

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="w-full max-w-xl mx-auto my-6"
        >
            <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-2xl font-bold">Create a Post</CardTitle>
                    <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => signOut({ callbackUrl: '/posts' })}
                        className="h-8 w-8"
                    >
                        <LogOut className="h-4 w-4" />
                    </Button>
                </CardHeader>
                <CardContent>
                    <form onSubmit={handlePostSubmit} className="space-y-4">
                        <CldUploadWidget uploadPreset="o0ixtxpc" onSuccess={handleSuccess}>
                            {({ open }) => (
                                <Button
                                    type="button"
                                    variant="outline"
                                    onClick={() => open()}
                                    className="w-full"
                                >
                                    <Upload className="mr-2 h-4 w-4" />
                                    {mediaList ? 'Change Image' : 'Upload an Image'}
                                </Button>
                            )}
                        </CldUploadWidget>

                        {mediaList && (
                            <div className="relative aspect-video w-full overflow-hidden rounded-lg border bg-muted">
                                <img
                                    src={mediaList}
                                    alt="Uploaded media"
                                    className="object-cover w-full h-full"
                                />
                            </div>
                        )}

                        <Input
                            type="text"
                            value={title}
                            onChange={handleInputChange}
                            placeholder="What's on your mind?"
                            className="w-full"
                        />

                        <Button 
                            type="submit" 
                            className="w-full"
                            disabled={!title.trim()}
                        >
                            Publish Post
                        </Button>
                    </form>
                </CardContent>
            </Card>
        </motion.div>
    );
}
