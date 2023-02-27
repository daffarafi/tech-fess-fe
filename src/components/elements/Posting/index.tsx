import { Comment, Like, Share } from '@icons'
import Link from 'next/link'
import React from 'react'
import { Dropdown } from './Dropdown'
import { PostingProps } from './interface'

export const Posting: React.FC<PostingProps> = ({
    displayName,
    username,
    createdAt,
    content,
    isMine,
    isClosefriend,
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

    const getPostingBackground = () => {
        if (isMine) {
            return 'bg-secondary/10'
        }
        if (isClosefriend) {
            return 'bg-success/10'
        }
        return 'bg-primary'
    }

    return (
        <div
            className={`flex w-full gap-2 border-y-[1px] ${getPostingBackground()} border-gray-700 px-3 py-2`}
        >
            <div>
                <Link
                    href={`/users/${username}`}
                    className="block w-12 h-12 bg-gray-500 rounded-full "
                ></Link>
            </div>
            <div className="flex-1">
                <div className="flex w-full justify-between">
                    <Link href={`/users/${username}`} className="flex gap-2 ">
                        <h1 className="font-medium w-min max-w-[14rem] truncate">
                            {displayName}
                        </h1>
                        <p className="text-secondary">{`@${username} - ${renderRelativeCreatedDate(
                            createdAt
                        )}`}</p>
                    </Link>
                    <Dropdown username={username} />
                </div>
                <p
                    className="text-sm break-words"
                    style={{ wordBreak: 'break-word' }}
                >
                    {content}
                </p>
                <div className="flex w-full justify-around text-xs text-secondary py-3">
                    <div className="flex items-center gap-1">
                        <div>
                            <Like size="w-4 h-4" fill="fill-secondary" />
                        </div>
                        <p>999</p>
                    </div>
                    <div className="flex items-center gap-1">
                        <div>
                            <Comment size="w-4 h-4" fill="fill-secondary" />
                        </div>
                        <p>999</p>
                    </div>
                    <div className="flex items-center gap-1">
                        <div>
                            <Share size="w-4 h-4" fill="fill-secondary" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
