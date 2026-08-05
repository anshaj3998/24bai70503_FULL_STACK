import LeaveForm from './LeaveForm'

function CourseList({ user, enrolledCount, setEnrolledCount }) {
  return (
    <div>
      <LeaveForm user={user} enrolledCount={enrolledCount} setEnrolledCount={setEnrolledCount} />
    </div>
  )
}

export default CourseList
