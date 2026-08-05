import CourseCatalog from './CourseCatalog'

function Dashboard({ user, enrolledCount, setEnrolledCount }) {
  return (
    <div>
      <h1>SKILLNEST Online Learning Platform</h1>
      <CourseCatalog user={user} enrolledCount={enrolledCount} setEnrolledCount={setEnrolledCount} />
    </div>
  )
}

export default Dashboard
