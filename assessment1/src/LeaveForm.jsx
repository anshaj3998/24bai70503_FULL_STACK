import { useEffect } from 'react'
import StudentProfile from './StudentProfile'

function LeaveForm({ user, enrolledCount, setEnrolledCount }) {
  useEffect(() => {
    console.log(`Enrollment updated. Total courses: ${enrolledCount}`)
  }, [enrolledCount])

  return (
    <div>
      <h2>COURSE CATALOG</h2>
      <p>React Basics ₹999 <button onClick={() => setEnrolledCount(count => count + 1)}>Enroll</button></p>
      <p>Node.js Essentials ₹1199 <button onClick={() => setEnrolledCount(count => count + 1)}>Enroll</button></p>
      <p>UI/UX Design ₹799 <button onClick={() => setEnrolledCount(count => count + 1)}>Enroll</button></p>
      <StudentProfile user={user} />
      <p>Enrolled: {enrolledCount} courses</p>
    </div>
  )
}

export default LeaveForm
