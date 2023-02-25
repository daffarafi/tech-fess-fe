import { Arrowleft } from '@icons'
import React, { useEffect, useState } from 'react'
import { EditModule } from '../EditModule'
import { Content } from './Content'
import { ContentTabs } from './ContentTabs'
import { tabsProps, UserModuleProps } from './interface'
import { ProfileHeader } from './ProfileHeader'

export const UserModule: React.FC<UserModuleProps> = ({ props }) => {
    const [tab, setTab] = useState<tabsProps['tab']>('post')
    const [content, setContent] = useState([])
    const [loadingState, setLoadingState] = useState(false)
    const [showEditForm, setShowEditForm] = useState(false)

    const getPostsByUserId = async () => {
        try {
            setLoadingState(true)

            const response = await fetch(
                `${process.env.NEXT_PUBLIC_API_URL}/users/${props.id}/postings`
            )
            const responseJson = await response.json()

            setContent(responseJson)
        } catch (err) {
            console.log(err)
        } finally {
            setLoadingState(false)
        }
    }

    const closeEditForm = () => {
        setShowEditForm(false)
    }

    const openEditForm = () => {
        setShowEditForm(true)
        console.log(showEditForm)
    }
    useEffect(() => {
        getPostsByUserId()
    }, [])

    return (
        <>
            <div className="sticky z-10 top-0 py-3 px-5 flex items-center gap-8 bg-primary/50   before:backdrop-blur-sm before:absolute before:-z-10 before:top-0 before:left-0 before:w-full before:h-full">
                <Arrowleft />
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
                biodata={props.biodata}
                joinDate={props.createdAt}
                closefriends={props.closefriends}
                openEditForm={openEditForm}
            />
            <ContentTabs tab={tab} setTab={setTab} />
            <Content posts={content} loadingState={loadingState} />
            <div className={`${showEditForm ? '' : 'hidden'}`}>
                <EditModule
                    closeEditForm={closeEditForm}
                    displayName={props.displayName}
                    biodata={props.biodata}
                />
            </div>
        </>
    )
}
