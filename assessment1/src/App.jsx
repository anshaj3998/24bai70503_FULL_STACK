import { createContext, useState } from 'react'
import './App.css'
import Dashboard from './Dashboard'

export const UserContext = createContext(null)

function App() {
  const user = {
    name: 'Karan Mehta',
    email: 'karan@gmail.com',
    program: 'Web Development',
  }

  const [enrolledCount, setEnrolledCount] = useState(0)

  return (
    <UserContext.Provider value={user}>
      <div>
        <Dashboard user={user} enrolledCount={enrolledCount} setEnrolledCount={setEnrolledCount} />
      </div>
    </UserContext.Provider>
  )
}

export default App
