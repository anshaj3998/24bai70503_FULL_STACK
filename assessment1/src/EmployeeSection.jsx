import CourseList from './CourseList'

function EmployeeSection({ user, enrolledCount, setEnrolledCount }) {
  return (
    <div>
      <CourseList user={user} enrolledCount={enrolledCount} setEnrolledCount={setEnrolledCount} />
    </div>
  )
}

export default EmployeeSection
