import { useAuthContext } from '@contexts'
import { Button } from '@elements'
import { Cake, Date as DateIcon } from '@icons'
// import Image from 'next/image'
import { useEffect, useState } from 'react'
import { ProfileHeaderProps } from './interface'
import PropTypes, { Validator } from 'prop-types'
import Image from 'next/image'

export const ProfileHeader: React.FC<ProfileHeaderProps> = ({
    userId,
    displayName,
    username,
    birthdate,
    joinDate,
    closefriends,
    openEditForm,
    biodata,
    banner,
    photo,
}) => {
    const [isCloseFriend, setIsCloseFriend] = useState(true)
    const [friendButtonLoading, setFriendButtonLoading] = useState(false)
    const { user, loadingState } = useAuthContext()

    const renderBirthdate = () => {
        const date = new Date(birthdate)
        return date.toLocaleDateString('id-ID', {
            day: 'numeric',
            month: 'long',
            year: 'numeric',
        })
    }

    const renderJoinDate = () => {
        const date = new Date(joinDate)
        return date.toLocaleDateString('id-ID', {
            month: 'long',
            year: 'numeric',
        })
    }

    const tambahTeman = async () => {
        try {
            setFriendButtonLoading(true)
            if (!user) {
                throw new Error('Anda belum login!')
            }

            const response = await fetch(
                `${process.env.NEXT_PUBLIC_API_URL}closefriends/${userId}`,
                {
                    method: 'post',
                    headers: {
                        'Content-Type': 'application/json',
                        Authorization: `Bearer ${localStorage.getItem('AT')}`,
                    },
                }
            )
            const responseJson = await response.json()

            if (responseJson.statusCode === 400) {
                throw new Error(responseJson.message)
            }

            setIsCloseFriend(true)
        } catch (err) {
            console.log(err)
        } finally {
            setFriendButtonLoading(false)
        }
    }

    const hapusTeman = async () => {
        try {
            setFriendButtonLoading(true)
            if (!user) {
                throw new Error('Anda belum login!')
            }

            const response = await fetch(
                `${process.env.NEXT_PUBLIC_API_URL}closefriends/${userId}`,
                {
                    method: 'delete',
                    headers: {
                        'Content-Type': 'application/json',
                        Authorization: `Bearer ${localStorage.getItem('AT')}`,
                    },
                }
            )
            const responseJson = await response.json()

            if (responseJson.statusCode === 400) {
                throw new Error(responseJson.message)
            }

            setIsCloseFriend(false)
        } catch (err) {
            console.log(err)
        } finally {
            setFriendButtonLoading(false)
        }
    }

    const renderAddRemoveFriendButton = () => {
        if (!user) return
        if (loadingState || friendButtonLoading) {
            return (
                <div className="w-6 aspect-square rounded-full animate-spin border-2 border-secondary border-x-transparent"></div>
            )
        }
        if (isCloseFriend) {
            return (
                <Button variant="tertiary" onClick={hapusTeman}>
                    Hapus Teman
                </Button>
            )
        }
        return (
            <Button variant="tertiary" onClick={tambahTeman}>
                Tambah Teman
            </Button>
        )
    }

    const checkIsClosefriend = () => {
        if (
            user?.closefriends.some((closefriend) => closefriend.id === userId)
        ) {
            setIsCloseFriend(true)
            return
        }
        setIsCloseFriend(false)
    }

    useEffect(() => {
        if (!user) {
            return
        }
        if (user) {
            checkIsClosefriend()
        }
    }, [loadingState])

    return (
        <>
            <div className="w-full h-60 bg-gray-400 relative">
                {banner ? (
                    <Image
                        fill
                        className="object-cover"
                        src={banner}
                        alt="user_banner"
                    />
                ) : (
                    ''
                )}
            </div>
            <div className="relative">
                <div className="absolute top-0 right-0 mx-4 my-3">
                    {user?.id === userId ? (
                        <Button variant="tertiary" onClick={openEditForm}>
                            Edit Profile
                        </Button>
                    ) : (
                        renderAddRemoveFriendButton()
                    )}
                </div>
                <div className="px-4 py-3 flex flex-col gap-3">
                    <div className="rounded-full relative border-4 border-primary bg-gray-400 w-40 h-40 -mt-24">
                        {photo ? (
                            <Image
                                fill
                                className="object-cover rounded-full"
                                src={photo}
                                alt="user_photo"
                            />
                        ) : (
                            ''
                        )}
                    </div>
                    <div className="flex flex-col gap-2">
                        <div className="flex flex-col">
                            <h2 className="text-xl font-semibold -mb-1">
                                {displayName}
                            </h2>
                            <p className="text-secondary/75 text-sm">
                                @{username}
                            </p>
                        </div>
                        <p>{biodata || '-'}</p>
                        <div className="flex gap-4 text-sm">
                            <div className="flex gap-1 items-center">
                                <Cake />
                                <p className="text-secondary/75">
                                    Lahir {renderBirthdate()}
                                </p>
                            </div>
                            <div className="flex gap-1 items-center">
                                <DateIcon />
                                <p className="text-secondary/75">
                                    Bergabung {renderJoinDate()}
                                </p>
                            </div>
                        </div>
                        <div>
                            <p className="text-secondary/75 text-sm">
                                <span className="text-white">
                                    {closefriends.length}
                                </span>{' '}
                                Teman dekat
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

ProfileHeader.propTypes = {
    userId: PropTypes.number.isRequired,
    displayName: PropTypes.string.isRequired,
    username: PropTypes.string.isRequired,
    birthdate: PropTypes.string.isRequired,
    joinDate: PropTypes.string.isRequired,
    closefriends: PropTypes.arrayOf(PropTypes.any).isRequired as Validator<[]>,
    openEditForm: PropTypes.func.isRequired,
    biodata: PropTypes.string.isRequired,
    banner: PropTypes.string,
    photo: PropTypes.string,
}
