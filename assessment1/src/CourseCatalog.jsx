import EmployeeSection from './EmployeeSection'

function CourseCatalog({ user, enrolledCount, setEnrolledCount }) {
  return (
    <div>
      <EmployeeSection user={user} enrolledCount={enrolledCount} setEnrolledCount={setEnrolledCount} />
    </div>
  )
}

export default CourseCatalog
