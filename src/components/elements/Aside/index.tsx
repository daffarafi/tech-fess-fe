import { Button } from '@elements'
import React from 'react'
import { RegisterStep } from './RegisterStep'

export const Aside: React.FC = () => {
    const registerButtonHandler = () => {}

    const loginButtonHandler = () => {}

    return (
        <>
            <div className="pl-4 ">
                <div className="pt-3 sticky -z-10 top-0 ">
                    <div className="border-[1px] border-gray-700 rounded-2xl px-2 py-3">
                        <h1 className="font-bold text-xl border-b border-gray-700 pb-2">
                            Selamat datang di TechFess!
                        </h1>
                        <div className="pt-2 flex flex-col gap-3">
                            <p className="text-xs text-secondary">
                                Daftar sekarang dan bagikan pengalaman anda!
                            </p>
                            <div className="flex flex-col gap-1">
                                <Button fullWidth onClick={loginButtonHandler}>
                                    Masuk
                                </Button>
                                <Button
                                    fullWidth
                                    onClick={registerButtonHandler}
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
                </div>
            </div>
            <RegisterStep />
        </>
    )
}
