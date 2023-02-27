import { useAuthContext } from '@contexts'
import { Button } from '@elements'
import Image from 'next/image'
import React, { useState } from 'react'
import { EditFormProps } from './interface'

export const EditModule: React.FC<EditFormProps> = ({
    closeEditForm,
    displayName,
    biodata,
}) => {
    const [editedDisplayName, setEditedDisplayName] = useState(displayName)
    const [editedBio, setEditedBio] = useState(biodata || '')
    const [photo, setPhoto] = useState<File | null>(null)
    const [photoPreview, setPhotoPreview] = useState<string>('')
    const [banner, setBanner] = useState<File | null>(null)
    const [bannerPreview, setBannerPreview] = useState<string>('')
    const { submitEditForm } = useAuthContext()

    const inputDisplayName = (value: string) => {
        if (value.length > 50) return
        setEditedDisplayName(value)
    }

    const inputBio = (value: string) => {
        if (value.length > 280) return
        setEditedBio(value)
    }

    const uploadPhotoHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.files) {
            const file = event.target.files[0]
            setPhoto(file)
            if (file) {
                const reader = new FileReader()
                reader.onload = () => {
                    setPhotoPreview(reader.result as string)
                }
                reader.readAsDataURL(file)
            }
        }
    }

    const uploadBannerHandler = (
        event: React.ChangeEvent<HTMLInputElement>
    ) => {
        if (event.target.files) {
            const file = event.target.files[0]
            setBanner(file)
            if (file) {
                const reader = new FileReader()
                reader.onload = () => {
                    setBannerPreview(reader.result as string)
                }
                reader.readAsDataURL(file)
            }
        }
    }

    const saveButtonHandler = async () => {
        const response = await submitEditForm({
            displayName: editedDisplayName,
            biodata: editedBio,
            photo,
            banner,
        })
        console.log(response)
    }

    return (
        <div className="fixed z-20 p-2 flex justify-center items-center w-full h-screen top-0 left-0 bg-secondary/30">
            <div className="w-full  flex flex-col max-w-xl h-full max-h-[40rem] rounded-2xl bg-primary">
                <div className="flex justify-between items-center py-3 px-4 gap-8">
                    <div className="flex items-center gap-8">
                        <button className="w-4 h-4 " onClick={closeEditForm}>
                            <div className="w-full h-0.5 bg-white rotate-45" />
                            <div className="w-full h-0.5 bg-white -rotate-45 -translate-y-0.5" />
                        </button>
                        <h1 className="font-semibold text-xl">Edit Profile</h1>
                    </div>
                    <Button onClick={saveButtonHandler}>Simpan</Button>
                </div>
                <div className="relative w-full h-60 bg-gray-400 ">
                    <Image
                        src={bannerPreview || ''}
                        fill
                        className="object-cover"
                        alt="banner"
                    ></Image>
                    <input
                        type="file"
                        accept="image/png, image/jpeg"
                        onChange={uploadBannerHandler}
                        className="relative"
                    />
                </div>
                <div className="px-4 flex flex-col gap-3">
                    <div className="relative overflow-hidden w-36 h-36 bg-gray-400 rounded-full border-[3px] border-primary -mt-20">
                        <Image
                            src={photoPreview || ''}
                            fill
                            className="object-cover"
                            alt="profile"
                        ></Image>
                        <input
                            type="file"
                            accept="image/png, image/jpeg"
                            onChange={uploadPhotoHandler}
                            className="relative"
                        />
                    </div>
                    <label>
                        <div className="w-full flex justify-between">
                            <p>Nama</p>
                            <p>{editedDisplayName.length}/50</p>
                        </div>
                        <input
                            type="text"
                            value={editedDisplayName}
                            onChange={(e) => {
                                const target = e.target as HTMLButtonElement
                                inputDisplayName(target.value)
                            }}
                            className="bg-transparent border w-full border-secondary/50 px-2 py-4 rounded-lg placeholder-secondary/50"
                        />
                    </label>
                    <label>
                        <div className="w-full flex justify-between">
                            <p>Bio</p>
                            <p>{editedBio.length}/280</p>
                        </div>
                        <input
                            type="text"
                            value={editedBio}
                            onChange={(e) => {
                                const target = e.target as HTMLButtonElement
                                inputBio(target.value)
                            }}
                            className="bg-transparent border w-full border-secondary/50 px-2 py-4 rounded-lg placeholder-secondary/50"
                        />
                    </label>
                </div>
            </div>
        </div>
    )
}
