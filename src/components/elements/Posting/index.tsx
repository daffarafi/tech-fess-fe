import { Comment, Ellipsis, Like, Share } from '@icons'
import React from 'react'
import { PostingProps } from './interface'

export const Posting: React.FC<PostingProps> = ({
    displayName,
    username,
    createdAt,
    content,
}) => {
    const renderRelativeCreatedDate = (rawCreatedDate: Date) => {
        const createdDate = new Date(rawCreatedDate)
        const currentDate = new Date()
        const diffInMilliseconds = currentDate.getTime() - createdDate.getTime()

        const diffInSeconds = Math.floor(diffInMilliseconds / 1000)
        const diffInMinutes = Math.floor(diffInMilliseconds / (1000 * 60))
        const diffInHours = Math.floor(diffInMilliseconds / (1000 * 60 * 60))
        const diffInDays = Math.floor(
            diffInMilliseconds / (1000 * 60 * 60 * 24)
        )

        if (diffInDays > 7) {
            return createdDate.toLocaleDateString()
        }

        if (diffInHours > 0) {
            return `${diffInHours}h`
        }

        if (diffInMinutes > 0) {
            return `${diffInMinutes}m`
        }

        return `${diffInSeconds}s`
    }

    return (
        <div className="flex w-full gap-2 border-y-[1px] border-gray-700 px-3 py-2">
            <div>
                <div className="w-12 h-12 bg-gray-500 rounded-full "></div>
            </div>
            <div className="w-full">
                <div className="flex w-full justify-between">
                    <div className="flex gap-2 ">
                        <h1 className="font-medium">{displayName}</h1>
                        <p className="text-secondary">{`@${username} - ${renderRelativeCreatedDate(
                            createdAt
                        )}`}</p>
                    </div>
                    <div>
                        <Ellipsis />
                    </div>
                </div>
                <div className="w-full">
                    <p className="text-sm break-words">{content}</p>
                </div>
                <div className="flex w-full justify-around text-xs text-secondary py-3">
                    <div className="flex items-center gap-1">
                        <div>
                            <Like />
                        </div>
                        <p>999</p>
                    </div>
                    <div className="flex items-center gap-1">
                        <div>
                            <Comment />
                        </div>
                        <p>999</p>
                    </div>
                    <div className="flex items-center gap-1">
                        <div>
                            <Share />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
