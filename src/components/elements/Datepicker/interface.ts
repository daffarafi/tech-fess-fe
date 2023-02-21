import React from 'react'

export interface DatepickerProps {
  date: string
  setDate: React.Dispatch<React.SetStateAction<string>>
}
