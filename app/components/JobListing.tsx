import type { IJobs } from '~/types/jobs.type'

export default function JobListing(props: { jobs: IJobs[] }) {
  const { jobs } = props
  return (
    <ul>
      {jobs.map(job => (
        <li key={job.job_id} className="card card-side bg-base-100 shadow-sm">
          <figure>
            <img
              src={job.employer_logo}
              alt={`logo of ${job.employer_name}`}
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">{job.job_title}</h2>
            <div>{job.job_highlights.Benefits}</div>
            <div>{job.job_highlights.Qualifications}</div>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">Watch</button>
            </div>
          </div>
        </li>
      ))}
    </ul>
  )
}
