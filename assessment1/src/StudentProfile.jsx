import { useUser } from './useUser'

function StudentProfile() {
  const userInfo = useUser()

  return (
    <div>
      <h3>Student Details</h3>
      <p>Name: {userInfo.name}</p>
      <p>Email: {userInfo.email}</p>
      <p>Program: {userInfo.program}</p>
    </div>
  )
}

export default StudentProfile
