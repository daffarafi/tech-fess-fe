import { useAuthContext } from '@contexts'
import { Button } from '@elements'
import { Cake, Date as DateIcon } from '@icons'
// import Image from 'next/image'
import { useEffect } from 'react'
import { ProfileHeaderProps } from './interface'
import PropTypes, { Validator } from 'prop-types'

export const ProfileHeader: React.FC<ProfileHeaderProps> = ({
    userId,
    displayName,
    username,
    birthdate,
    joinDate,
    closefriends,
    openEditForm,
    biodata,
}) => {
    const { user } = useAuthContext()

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

    const renderUserProfile = async () => {
        const response = await fetch(
            `${process.env.NEXT_PUBLIC_API_URL}/users/photo/${userId}`
        )
        const responseJson = await response.json()
        console.log(responseJson)

        if (!responseJson.content) {
            return
        }

        return <div></div>
    }

    useEffect(() => {
        renderUserProfile()
    })

    return (
        <>
            <div className="w-full h-60 bg-gray-400"></div>
            <div className="relative">
                <div className="absolute top-0 right-0 mx-4 my-3">
                    {user?.id === userId ? (
                        <Button variant="tertiary" onClick={openEditForm}>
                            Edit Profile
                        </Button>
                    ) : (
                        ''
                    )}
                </div>
                <div className="px-4 py-3 flex flex-col gap-3">
                    <div className="rounded-full relative border-4 border-primary bg-gray-400 w-40 h-40 -mt-24">
                        {/* {renderUserProfile()} */}
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
}
