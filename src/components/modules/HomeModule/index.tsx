import { Posting } from '@elements'
import React, { useEffect, useState } from 'react'
import { PostProps } from './interface'
import { SendPost } from './SendPost'

export const HomeModule: React.FC = () => {
    const [loadingState, setLoadingState] = useState(false)
    const [posts, setPosts] = useState<PostProps[]>([])

    const getPosts = async () => {
        try {
            setLoadingState(true)
            const response = await fetch(
                `${process.env.NEXT_PUBLIC_API_URL}/postings`
            )
            const responseJson = await response.json()

            setPosts(responseJson)
        } catch (err) {
            console.log(err)
        } finally {
            setLoadingState(false)
        }
    }

    useEffect(() => {
        getPosts()
    }, [])

    const renderPosts = () => {
        if (loadingState) {
            return (
                <div className="w-full my-20 flex justify-center">
                    <div className="w-8 aspect-square rounded-full animate-spin border-2 border-secondary border-x-transparent"></div>
                </div>
            )
        }
        if (posts.length === 0) {
            return <p className="text-secondary text-xl">Terjadi kesalahan!</p>
        } else {
            return (
                <>
                    {posts.map((post) => (
                        <Posting
                            key={post.id}
                            displayName={post.user.displayName}
                            username={post.user.username}
                            content={post.content}
                            createdAt={post.createdAt}
                        />
                    ))}
                </>
            )
        }
    }

    return (
        <>
            <div className="sticky top-0 py-3 px-3 border-b-[1px] border-gray-700 before:backdrop-blur-sm before:absolute before:-z-10 before:top-0 before:left-0 before:w-full before:h-full">
                <h1 className="font-medium text-lg">Beranda</h1>
            </div>
            <div>
                <SendPost />
                {renderPosts()}
            </div>
        </>
    )
}
