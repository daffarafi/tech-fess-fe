import React from 'react'

export interface LoginRegisterFormProps {
  setShowLoginForm: React.Dispatch<React.SetStateAction<boolean>>
  setShowRegisterForm: React.Dispatch<React.SetStateAction<boolean>>
}
