import { Dispatch, SetStateAction } from 'react'

export interface tabsProps {
  tab: 'post' | 'dibagikan' | 'disukai'
}

export interface ContentTabsProps extends tabsProps {
  setTab: Dispatch<SetStateAction<'post' | 'dibagikan' | 'disukai'>>
}

export interface PostProps {
  id: number
  createdAt: Date
  updatedAt: Date
  content: string
  isPrivate: Boolean
  userId: number
  user: {
    displayName: string
    username: string
  }
}

export interface PostsProps {
  posts: PostProps[]
}

export interface ContentProps extends PostsProps {
  loadingState: Boolean
}
