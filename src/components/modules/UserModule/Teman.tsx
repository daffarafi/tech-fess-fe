import { Button } from '@elements'
import Image from 'next/image'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import { TemanPageProps } from './interface'

export const Teman: React.FC<TemanPageProps> = ({
    displayName,
    closefriends,
}) => {
    const router = useRouter()
    const renderUser: React.FC<{
        id: number
        displayName: string
        username: string
        biodata: string
    }> = ({ id, displayName, username, biodata }) => {
        const [photo, setPhoto] = useState('/default-profile.jpeg')

        const getFriendPhoto = async () => {
            try {
                const response = await fetch(
                    `${process.env.NEXT_PUBLIC_API_URL}/users/photo/${id}`
                )
                const responseHeader = response.headers.get('content-type')

                if (responseHeader?.includes('image')) {
                    const blob = await response.blob()
                    const img = URL.createObjectURL(blob)
                    setPhoto(img)
                    return
                }

                const responseJson = await response.json()
                throw new Error(responseJson.message)
            } catch (err) {
                console.log(err)
            }
        }

        const profileButtonHandler = () => {
            router.push(`/users/${username}`)
        }

        useEffect(() => {
            getFriendPhoto()
        }, [])

        return (
            <div
                className="flex gap-3 px-3 py-2 justify-between border-b border-gray-700"
                key={username}
            >
                <div className="w-12 h-12 rounded-full bg-gray-400 relative overflow-hidden">
                    <Image
                        src={photo}
                        alt={username}
                        fill
                        className="object-cover"
                    />
                </div>
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
                        <Button onClick={profileButtonHandler}>Profile</Button>
                    </div>
                    <div>{biodata || '-'}</div>
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
