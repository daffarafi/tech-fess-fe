export interface PostingProps {
  id: number
  displayName: string
  username: string
  createdAt: Date
  updatedAt: Date | null
  content: string
  isMine: boolean
  isClosefriend: boolean
  userId: number
  isPrivate: boolean
}

export interface DropdownProps {
  username: string
  setEditMode: React.Dispatch<React.SetStateAction<boolean>>
  deleteBtnHandler: () => void
}

export interface EditPostProps {
  postId: number
  content: string
  photo: string
  isPrivate: boolean
  displayName: string
  closeEditForm: () => void
}
