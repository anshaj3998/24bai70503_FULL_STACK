import { useContext } from 'react'
import { UserContext } from './App'

export function useUser() {
  return useContext(UserContext)
}
