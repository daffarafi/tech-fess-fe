import { Dispatch, SetStateAction } from 'react'

export interface tabsProps {
  tab: 'post' | 'disukai' | 'teman'
}

export interface ContentTabsProps extends tabsProps {
  setTab: Dispatch<SetStateAction<tabsProps['tab']>>
}

export interface PostProps {
  id: number
  createdAt: Date
  updatedAt: Date
  content: string
  isPrivate: boolean
  userId: number
  user: {
    displayName: string
    username: string
  }
}

export interface PostsProps {
  posts: PostProps[]
}

export interface PostPageProps extends PostsProps {
  loadingState: boolean
}

export interface TemanPageProps {
  displayName: string
  closefriends: []
}

export interface UserModuleProps {
  props: {
    id: number
    displayName: string
    username: string
    birthdate: string
    biodata: string
    createdAt: string
    closefriends: []
  }
}

export interface ProfileHeaderProps {
  userId: number
  displayName: string
  username: string
  birthdate: string
  joinDate: string
  closefriends: []
  openEditForm: () => void
  biodata: string
  banner: string | null | undefined
  photo: string | null | undefined
}
