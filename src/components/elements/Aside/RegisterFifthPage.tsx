import { Button } from '@elements'
import { Check } from '@icons'
import Link from 'next/link'
import React from 'react'
import { RegisterFifthPageProps } from './interface'

export const RegisterFifthPage: React.FC<RegisterFifthPageProps> = ({
    loadingState,
}) => {
    return (
        <>
            {loadingState ? (
                <div className="w-full h-full flex items-center justify-center">
                    <div className="w-8 aspect-square rounded-full animate-spin border-2 border-secondary border-x-transparent"></div>
                </div>
            ) : (
                <div className="px-20 pt-5 overflow-y-auto flex flex-col gap-8 flex-1 items-center text-center justify-center -mt-14">
                    <Check size="w-20 h-20" fill="fill-success" />
                    <h1 className="font-semibold text-3xl">
                        Terima kasih telah mendaftar!
                    </h1>
                    <div className="flex flex-col gap-6 w-full">
                        <Link href={'/'}>
                            <Button fullWidth>
                                <span className="py-2 block font-semibold">
                                    Beranda
                                </span>
                            </Button>
                        </Link>
                        <Link href={'/users'}>
                            <Button variant="secondary" fullWidth>
                                <span className="py-2 block font-semibold">
                                    Profile
                                </span>{' '}
                            </Button>
                        </Link>
                    </div>
                </div>
            )}
        </>
    )
}
