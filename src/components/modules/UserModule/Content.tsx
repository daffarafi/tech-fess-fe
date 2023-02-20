import { Posting } from '@elements'
import React from 'react'
import { ContentProps } from './interface'

export const Content: React.FC<ContentProps> = ({ posts, loadingState }) => {
    const renderPosts = () => {
        if (loadingState) {
            return (
                <div className="w-full my-20 flex justify-center">
                    <div className="w-8 aspect-square rounded-full animate-spin border-2 border-secondary border-x-transparent"></div>
                </div>
            )
        }
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

    return <div>{renderPosts()}</div>
}
