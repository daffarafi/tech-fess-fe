import { useAuthContext } from '@contexts'
import { Compass, Home, Profile } from '@icons'
import Link from 'next/link'
import React from 'react'

export const Navbar: React.FC = () => {
    const { loadingState, user } = useAuthContext()

    const renderNavbar = () => {
        if (loadingState) {
            return (
                <div className="w-full my-20 flex justify-center">
                    <div className="w-8 aspect-square rounded-full animate-spin border-2 border-secondary border-x-transparent"></div>
                </div>
            )
        }
        return (
            <>
                <li>
                    <Link
                        href={'/'}
                        className="flex gap-4 hover:bg-secondary/25 transition p-3 pr-6 rounded-full"
                    >
                        <Home />
                        <p>Beranda</p>
                    </Link>
                </li>
                {user ? (
                    <li>
                        <Link
                            href={`/users/${user.username}`}
                            className="flex gap-4 hover:bg-secondary/25 transition p-3 pr-6 rounded-full"
                        >
                            <Profile />
                            <p>Profile</p>
                        </Link>
                    </li>
                ) : (
                    ''
                )}
                <li>
                    <Link
                        href={'/explore'}
                        className="flex gap-4 hover:bg-secondary/25 transition p-3 pr-6 rounded-full"
                    >
                        <Compass />
                        <p>Jelajahi</p>
                    </Link>
                </li>
            </>
        )
    }

    return (
        <nav>
            <div className="flex flex-col pr-4 gap-5 pt-3  sticky top-0">
                <div className="flex text-xl  gap-4">
                    <Link
                        href={'/'}
                        className="flex gap-4 hover:bg-secondary/25 transition p-3 pr-6 rounded-full"
                    >
                        <div className="w-[25px] h-[25px] bg-gray-500 rounded-full"></div>
                        <p className="">TechFess</p>
                    </Link>
                </div>
                <ul className="flex flex-col gap-3 text-xl">
                    {renderNavbar()}
                </ul>
            </div>
        </nav>
    )
}
