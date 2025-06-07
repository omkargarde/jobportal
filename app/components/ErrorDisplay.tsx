export default function ErrorDisplay(props: { message: string }) {
  const message = props.message
  return (
    <>
      <div className="flex justify-center items-center h-64">
        <div className="alert alert-error" role="alert">
          <span className="font-bold">Error:</span>
          {' '}
          {message || 'Failed to load jobs.'}
        </div>
      </div>
    </>
  )
}
