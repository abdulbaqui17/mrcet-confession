"use client";

import { publisPost } from '@/server/actions';
import { CldUploadWidget } from 'next-cloudinary'; // Ensure you have this package installed
import { useRouter } from "next/navigation";
import { useState } from "react";
import { FaUpload } from 'react-icons/fa'; // Importing an upload icon from react-icons
import { useSession, signOut } from "next-auth/react"; // Importing useSession and signOut
import toast from 'react-hot-toast';

export default function CreatePost() {
    const { data: session } = useSession(); // Get the current session
    const [title, setTitle] = useState(""); // State for the post title
    const [mediaList, setMediaList] = useState(""); // State for media URL
    const router = useRouter();

    const handlePostSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (title.trim().length < 3) {
            toast.error("Title must be 3 char long")
            return;
        }

        const res = await publisPost(title, mediaList);
        if (res) {
            router.push("/");
            toast.success("post published successfully")
        }
        setTitle(""); // Clear title after submission
        setMediaList(""); // Clear media after submission
    };

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setTitle(e.target.value);
    };

    const handleSuccess = (result: any) => {
        const uploadedMediaUrl = result.info.secure_url; // Extract the URL
        setMediaList(uploadedMediaUrl); // Update mediaList with the uploaded URL
    };

    if (!session) {
        return (
            <div className="my-2 w-full max-w-xl p-4 mx-auto m-6 border rounded-lg shadow-md bg-gray-800 text-white">
                <p>You are not logged in. Please <a href="/api/auth/signin" className="text-blue-400">log in</a> or <a href="/api/auth/signin" className="text-blue-400">create an account</a> to post and comment</p>
            </div>
        );
    }

    return (
        <div className="my-2 w-full max-w-xl p-4 mx-auto m-6 border rounded-lg shadow-md bg-gray-900 text-white">
            <div className="flex flex-col"> {/* Responsive flex direction */}
                <div className="flex justify-between mb-4"> {/* Container for Logout button */}
                    <h2 className="text-xl">Create a Post</h2>
                    <button
                        onClick={() => signOut()} // Logout functionality
                        className="px-4 py-2 font-semibold text-white rounded-full hover:bg-red-500"
                    >
                        Logout
                    </button>
                </div>

                {/* Upload Media Button */}
                <CldUploadWidget uploadPreset="o0ixtxpc" onSuccess={handleSuccess}>
                    {({ open }) => {
                        return (
                            <button
                                type="button"
                                onClick={() => open()}
                                className="flex items-center px-4 py-2 mb-4 font-semibold bg-black text-white rounded-full hover:bg-gray-800"
                            >
                                <FaUpload className="mr-2" /> {/* Icon added here */}
                                Upload an image
                            </button>
                        );
                    }}
                </CldUploadWidget>

                {/* Post Form */}
                <form onSubmit={handlePostSubmit} className="flex-grow ml-4">
                    <input
                        type="text"
                        value={title}
                        onChange={handleInputChange}
                        placeholder="Enter post title"
                        className="w-full p-2 mb-4 border border-gray-700 bg-gray-800 text-white rounded-lg focus:outline-none"
                    />

                    <div className="flex justify-end mt-2">
                        <button
                            type="submit"
                            className="px-4 py-2 font-semibold bg-black text-white rounded-full focus:ring focus:ring-blue-300 disabled:opacity-50"
                        >
                            Publish Post
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}
