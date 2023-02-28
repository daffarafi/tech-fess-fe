import { useModalContext } from '@contexts'
import { Comment, Like, Pencil, Share } from '@icons'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import { Dropdown } from './Dropdown'
import { EditPost } from './EditPost'
import { PostingProps } from './interface'

export const Posting: React.FC<PostingProps> = ({
    id,
    displayName,
    username,
    createdAt,
    updatedAt,
    content,
    isMine,
    isClosefriend,
    userId,
    isPrivate,
}) => {
    const router = useRouter()
    const [photo, setPhoto] = useState('/default-profile.jpeg')
    const [editMode, setEditMode] = useState(false)

    const {
        setShowModal,
        setLoadingState,
        setTitle,
        setMessage,
        setFirstBtnText,
        setSecondBtnText,
        setFirstBtnHandler,
        setSecondBtnHandler,
    } = useModalContext()

    const deletePost = async () => {
        try {
            setLoadingState(true)
            const response = await fetch(
                `${process.env.NEXT_PUBLIC_API_URL}/postings/${id}`,
                {
                    method: 'delete',
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem('AT')}`,
                    },
                }
            )

            console.log(response)
            const responseJson = await response.json()

            console.log(responseJson)

            closeDeleteModal()
            router.reload()
        } catch (err) {
            console.log(err)
        } finally {
            setLoadingState(false)
        }
    }

    const openDeleteModal = () => {
        setTitle('Hapus Postingan')
        setMessage('Postingan akan dihapus selamanya, anda yakin?')
        setFirstBtnText('Hapus')
        setFirstBtnHandler(() => deletePost)
        setSecondBtnText('Batal')
        setSecondBtnHandler(() => closeDeleteModal)
        setShowModal(true)
    }

    const closeDeleteModal = () => {
        setShowModal(false)
    }

    const renderStaticUpdatedDate = (rawUpdatedDate: Date) => {
        const date = new Date(rawUpdatedDate)
        const dateString = date.toLocaleDateString('id-ID', {
            day: '2-digit',
            month: '2-digit',
            year: 'numeric',
        })
        const timeString = date.toLocaleTimeString('id-ID', {
            hour: '2-digit',
            minute: '2-digit',
        })

        return `${timeString} - ${dateString}`
    }

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

    const getPhotoByUserId = async () => {
        try {
            const response = await fetch(
                `${process.env.NEXT_PUBLIC_API_URL}/users/photo/${userId}`
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

    useEffect(() => {
        getPhotoByUserId()
    }, [])

    return (
        <div
            className={`flex w-full gap-2 border-y-[1px] ${getPostingBackground()} border-gray-700 px-3 py-2`}
        >
            <div>
                <Link
                    href={`/users/${username}`}
                    className="relative block w-12 h-12 overflow-hidden bg-gray-500 rounded-full "
                >
                    <Image
                        src={photo}
                        alt="user-photo"
                        fill
                        className="object-cover"
                    />
                </Link>
            </div>
            <div className="flex-1 flex flex-col gap-1">
                <div className="flex w-full justify-between">
                    <Link href={`/users/${username}`} className="flex gap-2 ">
                        <h1 className="font-medium w-min max-w-[14rem] truncate">
                            {displayName}
                        </h1>
                        <p className="text-secondary">{`@${username} - ${renderRelativeCreatedDate(
                            createdAt
                        )}`}</p>
                    </Link>
                    <Dropdown
                        username={username}
                        deleteBtnHandler={openDeleteModal}
                        setEditMode={setEditMode}
                    />
                </div>
                <p
                    className="text-sm break-words"
                    style={{ wordBreak: 'break-word' }}
                >
                    {content}
                </p>
                {updatedAt ? (
                    <div className="flex items-center gap-1">
                        <Pencil size="w-3 h-3" fill="fill-secondary" />
                        <p className="text-xs text-secondary">
                            Terakhir diedit pada{' '}
                            {renderStaticUpdatedDate(updatedAt)}
                        </p>
                    </div>
                ) : (
                    ''
                )}
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
            <div className={`${editMode ? '' : 'hidden'}`}>
                <EditPost
                    postId={id}
                    content={content}
                    photo={photo}
                    isPrivate={isPrivate}
                    displayName={displayName}
                    closeEditForm={() => setEditMode(false)}
                />
            </div>
        </div>
    )
}
