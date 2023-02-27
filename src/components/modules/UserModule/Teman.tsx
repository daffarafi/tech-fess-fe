import { Button } from '@elements'
import React from 'react'
import { TemanPageProps } from './interface'

export const Teman: React.FC<TemanPageProps> = ({
    displayName,
    closefriends,
}) => {
    const renderUser: React.FC<{
        displayName: string
        username: string
        biodata: string
    }> = ({ displayName, username, biodata }) => {
        return (
            <div className="flex gap-3 px-3 py-2 justify-between border-b border-gray-700">
                <div className="w-12 h-12 rounded-full bg-gray-400"></div>
                <div className="flex-1 flex flex-col gap-1">
                    <div className="flex w-full justify-between items-center">
                        <div>
                            <p className="text-sm font-semibold text-start truncate">
                                {displayName}
                            </p>
                            <p className="text-sm text-secondary text-start truncate">
                                @{username}
                            </p>
                        </div>
                        <Button>Ikuti</Button>
                    </div>
                    <div>{biodata}</div>
                </div>
            </div>
        )
    }

    const renderCloseFriends = () => {
        if (closefriends.length === 0) {
            return (
                <div className="py-5">
                    <p className="italic text-secondary text-center">
                        {displayName} belum menambah seorangpun kedalam daftar
                        temannya!
                    </p>
                </div>
            )
        }
        return closefriends.map((closefriend) => renderUser(closefriend))
    }

    return <div className="w-full flex flex-col">{renderCloseFriends()}</div>
}
