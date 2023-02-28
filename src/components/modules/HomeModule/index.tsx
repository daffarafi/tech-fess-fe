import { useAuthContext } from '@contexts'
import { Posting } from '@elements'
import React, { useEffect, useState } from 'react'
import { PostProps } from './interface'
import { SendPost } from './SendPost'

export const HomeModule: React.FC = () => {
    const [loadingState, setLoadingState] = useState(true)
    const [posts, setPosts] = useState<PostProps[]>([])
    const { user } = useAuthContext()

    const getPosts = async () => {
        try {
            setLoadingState(true)
            const response = await fetch(
                `${process.env.NEXT_PUBLIC_API_URL}postings`,
                {
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem('AT')}`,
                    },
                }
            )
            const responseJson = await response.json()
            if (responseJson.statusCode) {
                throw new Error(responseJson.message)
            }

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
            return (
                <p className="text-secondary text-xl text-center py-2">
                    Terjadi kesalahan!
                </p>
            )
        } else {
            return (
                <>
                    {posts.map((post) => (
                        <Posting
                            key={post.id}
                            id={post.id}
                            userId={post.userId}
                            displayName={post.user.displayName}
                            username={post.user.username}
                            content={post.content}
                            createdAt={post.createdAt}
                            updatedAt={
                                post.createdAt === post.updatedAt
                                    ? null
                                    : post.updatedAt
                            }
                            isMine={post.userId === user?.id}
                            isClosefriend={
                                post.isPrivate && post.userId !== user?.id
                            }
                            isPrivate={post.isPrivate}
                        />
                    ))}
                </>
            )
        }
    }

    return (
        <>
            <div className="sticky w-full z-10 top-0 py-3 px-3 border-b border-gray-700">
                <div className="absolute top-0 left-0 w-full h-full backdrop-blur-sm "></div>
                <h1 className="font-medium text-lg relative">Beranda</h1>
            </div>
            <div>
                {user ? (
                    <SendPost getPosts={getPosts} photo={user.photo} />
                ) : (
                    ''
                )}{' '}
                {renderPosts()}
            </div>
        </>
    )
}
