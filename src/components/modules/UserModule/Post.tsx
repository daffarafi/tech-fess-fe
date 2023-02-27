import { useAuthContext } from '@contexts'
import { Posting } from '@elements'
import React from 'react'
import { PostPageProps } from './interface'

export const Post: React.FC<PostPageProps> = ({ posts, loadingState }) => {
    const { user } = useAuthContext()

    const renderPosts = () => {
        console.log(posts)
        if (loadingState) {
            return (
                <div className="w-full my-20 flex justify-center">
                    <div className="w-8 aspect-square rounded-full animate-spin border-2 border-secondary border-x-transparent"></div>
                </div>
            )
        }
        if (posts.length === 0) {
            return (
                <div className="py-5">
                    <p className="italic text-secondary text-center">
                        Tidak ada posts yang ditampilkan!
                    </p>
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
                        isMine={post.userId === user?.id}
                        isClosefriend={
                            post.isPrivate && post.userId !== user?.id
                        }
                    />
                ))}
            </>
        )
    }

    return <div>{renderPosts()}</div>
}
