import { Arrowleft } from '@icons'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import { EditModule } from '../EditModule'
import { Post } from './Post'
import { Disukai } from './Disukai'
import { Teman } from './Teman'
import { ContentTabs } from './ContentTabs'
import { tabsProps, UserModuleProps } from './interface'
import { ProfileHeader } from './ProfileHeader'

export const UserModule: React.FC<UserModuleProps> = ({ props }) => {
    const [tab, setTab] = useState<tabsProps['tab']>('post')
    const [content, setContent] = useState([])
    const [loadingState, setLoadingState] = useState(false)
    const [showEditForm, setShowEditForm] = useState(false)
    const [banner, setBanner] = useState<string | null>(null)
    const [photo, setPhoto] = useState<string | null>(null)
    const router = useRouter()

    const getPostsByUserId = async () => {
        try {
            setLoadingState(true)

            const response = await fetch(
                `${process.env.NEXT_PUBLIC_API_URL}/users/${props.id}/postings`,
                {
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem('AT')}`,
                    },
                }
            )
            const responseJson = await response.json()

            setContent(responseJson)
            console.log(responseJson)
        } catch (err) {
            console.log(err)
        } finally {
            setLoadingState(false)
        }
    }

    const getUserProfile = async () => {
        try {
            const response = await fetch(
                `${process.env.NEXT_PUBLIC_API_URL}/users/photo/${props.id}`
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
            setPhoto('/default-profile.jpeg')
        }
    }

    const getUserBanner = async () => {
        try {
            const response = await fetch(
                `${process.env.NEXT_PUBLIC_API_URL}/users/banner/${props.id}`
            )
            const responseHeader = response.headers.get('content-type')

            if (responseHeader?.includes('image')) {
                const blob = await response.blob()
                const img = URL.createObjectURL(blob)
                setBanner(img)
                return
            }

            const responseJson = await response.json()
            throw new Error(responseJson.message)
        } catch (err) {
            setBanner(null)
        }
    }

    const closeEditForm = () => {
        setShowEditForm(false)
    }

    const openEditForm = () => {
        setShowEditForm(true)
    }

    const renderContent = () => {
        switch (tab) {
            case 'post':
                return <Post posts={content} loadingState={loadingState} />
            case 'disukai':
                return <Disukai />
            case 'teman':
                return (
                    <Teman
                        displayName={props.displayName}
                        closefriends={props.closefriends}
                    />
                )
        }
    }

    useEffect(() => {
        getPostsByUserId()
        getUserProfile()
        getUserBanner()
    }, [router])

    return (
        <>
            <div className="sticky z-10 top-0 py-3 px-5 flex items-center gap-8 bg-primary/50   before:backdrop-blur-sm before:absolute before:-z-10 before:top-0 before:left-0 before:w-full before:h-full">
                <button onClick={() => router.back()}>
                    <Arrowleft />
                </button>
                <div>
                    <h1 className="font-medium text-lg">{props.displayName}</h1>
                    <p className="text-sm text-secondary">
                        {content.length} Post
                    </p>
                </div>
            </div>
            <ProfileHeader
                userId={props.id}
                displayName={props.displayName}
                username={props.username}
                birthdate={props.birthdate}
                biodata={props.biodata || '-'}
                joinDate={props.createdAt}
                closefriends={props.closefriends}
                openEditForm={openEditForm}
                banner={banner}
                photo={photo}
            />
            <ContentTabs tab={tab} setTab={setTab} />
            {renderContent()}
            <div className={`${showEditForm ? '' : 'hidden'}`}>
                <EditModule
                    closeEditForm={closeEditForm}
                    displayName={props.displayName}
                    biodata={props.biodata}
                    banner={banner}
                    photo={photo}
                />
            </div>
        </>
    )
}
