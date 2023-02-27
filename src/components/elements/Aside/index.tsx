import { Button } from '@elements'
import React, { useEffect, useState } from 'react'
import { Login, Register } from '@modules'
import { useAuthContext } from '@contexts'
import { Arrowdown } from '@icons'
import Link from 'next/link'

export const Aside: React.FC = () => {
    const [showRegisterForm, setShowRegisterForm] = useState(false)
    const [showLoginForm, setShowLoginForm] = useState(false)
    const [profileDropdown, setProfileDropdown] = useState(false)
    const [logoutLoading, setLogoutLoading] = useState(false)

    const { loadingState, user } = useAuthContext()

    const toggleProfileDropdown = () => {
        setProfileDropdown(!profileDropdown)
    }

    const closeProfileDropdown = () => {
        setProfileDropdown(false)
    }

    const logoutButtonHandler = async () => {
        try {
            setLogoutLoading(true)
            localStorage.removeItem('AT')
            window.location.reload()
        } catch (err) {
        } finally {
            setLogoutLoading(false)
        }
    }

    useEffect(() => {
        const handleScroll = () => {
            setProfileDropdown(false)
        }
        window.addEventListener('scroll', handleScroll)
        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [])

    const renderProfile = () => {
        return (
            <div className="relative">
                <div
                    className={`fixed w-full top-0 left-0 h-screen z-10 ${
                        profileDropdown ? '' : 'hidden'
                    }`}
                    onClick={closeProfileDropdown}
                ></div>
                <button
                    className="flex justify-between relative z-10 bg-primary items-center w-full border-[1px] border-gray-700 rounded-full px-2 py-3 hover:bg-secondary/25 transition"
                    onClick={toggleProfileDropdown}
                >
                    <div className="flex items-center gap-2 overflow-hidden">
                        <div className="w-10 h-10 bg-gray-400 rounded-full"></div>
                        <div className="flex flex-col flex-1 overflow-hidden ">
                            <p className="text-sm font-semibold text-start truncate">
                                {user?.displayName}
                            </p>
                            <p className="text-sm text-secondary text-start truncate">
                                @{user?.username}
                            </p>
                        </div>
                    </div>
                    <div>
                        <div
                            className={`w-5 h-5 rounded-full flex justify-center items-center transition-all ${
                                profileDropdown ? 'rotate-180' : ''
                            }`}
                        >
                            <Arrowdown />
                        </div>
                    </div>
                </button>
                <div
                    className={`bg-black relative z-10 top-2 w-full py-3.5  shadow-[0_0_10px_-4px_#ffffff] text-sm font-semibold rounded-2xl  ${
                        profileDropdown ? '' : 'hidden'
                    }`}
                >
                    <Link
                        href={'/users'}
                        className="block hover:bg-white/25 w-full text-start py-3 px-2 transition-all"
                    >
                        Buka profile
                    </Link>
                    <button
                        className="block hover:bg-white/25 w-full text-start py-3 px-2 transition-all text-danger"
                        onClick={logoutButtonHandler}
                        disabled={logoutLoading}
                    >
                        {logoutLoading ? (
                            <div className="w-full my-20 flex justify-center">
                                <div className="w-8 aspect-square rounded-full animate-spin border-2 border-secondary border-x-transparent"></div>
                            </div>
                        ) : (
                            `Keluar dari @${user?.username}`
                        )}
                    </button>
                </div>
            </div>
        )
    }

    const renderWelcome = () => {
        return (
            <div className=" border-[1px] w-full border-gray-700 rounded-2xl px-2 py-3">
                <h1 className="font-bold text-xl border-b border-gray-700 pb-2">
                    Selamat datang di TechFess!
                </h1>
                <div className="pt-2 flex flex-col gap-3">
                    <p className="text-xs text-secondary">
                        Daftar sekarang dan bagikan pengalaman anda!
                    </p>
                    <div className="flex flex-col gap-1">
                        <Button
                            fullWidth
                            onClick={() => {
                                setShowLoginForm(true)
                            }}
                        >
                            Masuk
                        </Button>
                        <Button
                            fullWidth
                            onClick={() => {
                                setShowRegisterForm(true)
                            }}
                        >
                            Daftar
                        </Button>
                    </div>
                    <p className="text-xs text-secondary">
                        Dengan mendaftar, Anda telah berkontribusi dalam
                        mendukung proyek yang telah saya buat.
                    </p>
                </div>
            </div>
        )
    }

    const renderAuth = () => {
        return (
            <>
                <div className={`${showRegisterForm ? '' : 'hidden'}`}>
                    <Register
                        setShowRegisterForm={setShowRegisterForm}
                        setShowLoginForm={setShowLoginForm}
                    />
                </div>
                <div className={`${showLoginForm ? '' : 'hidden'}`}>
                    <Login
                        setShowLoginForm={setShowLoginForm}
                        setShowRegisterForm={setShowRegisterForm}
                    />
                </div>
            </>
        )
    }

    const renderAsideContent = () => {
        if (loadingState) {
            return (
                <div className="w-full my-20 flex justify-center">
                    <div className="w-8 aspect-square rounded-full animate-spin border-2 border-secondary border-x-transparent"></div>
                </div>
            )
        }
        if (user) {
            return renderProfile()
        } else {
            return renderWelcome()
        }
    }

    return (
        <div className="pl-4 ">
            <div className="pt-3 sticky z-10 top-0 w-64">
                {renderAsideContent()}
                {renderAuth()}
            </div>
        </div>
    )
}
