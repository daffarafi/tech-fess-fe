import { useAuthContext } from '@contexts'
import type { NextPage } from 'next'
import { useRouter } from 'next/router'
import { useEffect } from 'react'

const Profile: NextPage = () => {
    const router = useRouter()
    const { user } = useAuthContext()

    useEffect(() => {
        if (!user) {
            router.push('/')
        } else {
            router.push(`/users/${user.username}`)
        }
    }, [])

    return (
        <div className="w-full my-20 flex justify-center">
            <div className="w-8 aspect-square rounded-full animate-spin border-2 border-secondary border-x-transparent"></div>
        </div>
    )
}

export default Profile
