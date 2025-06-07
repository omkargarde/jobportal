import type { Route } from './+types/home'
import ErrorDisplay from '~/components/ErrorDisplay'
import JobListing from '~/components/JobListing'
import LoadingDisplay from '~/components/LoadingDisplay'
import { FetchAllJobs } from '~/functions/fetchAllJobs'
import { SearchIcon } from '~/Icons/SearchIcon'
import { HomeLayout } from '~/layouts/HomeLayout'

function handleFormSubmit() {
  console.error('Form submission: not implemented')
}

export async function loader() {
  const jobs = await FetchAllJobs()
  return jobs
}

export function HydrateFallback() {
  return <div>Loading...</div>
}

export default function Home({
  loaderData,
}: Route.ComponentProps) {
  const jobs = loaderData
  if (jobs instanceof Error) {
    return (
      <>
        <ErrorDisplay message={jobs.message} />
      </>
    )
  }
  return (
    <>
      <HomeLayout>
        <div className="lg:mx-16">
          <h1 className=" py-4 text-2xl">Welcome User</h1>
          <div className="flex justify-center ">
            <form className="w-full max-w-full flex gap-4" action={handleFormSubmit}>
              <label className="input input-xl w-full" htmlFor="search">
                <SearchIcon className="text-2xl" aria-hidden="true" />
                <span className="sr-only">Search jobs</span>
                <input
                  id="search"
                  type="search"
                  placeholder="Search jobs"
                  name="search"
                />
              </label>
              <label className="input input-xl w-full" htmlFor="location">
                <SearchIcon className="text-2xl" aria-hidden="true" />
                <span className="sr-only">Location</span>
                <input
                  id="location"
                  type="location"
                  placeholder="Location"
                  name="location"
                />
              </label>
              <button type="submit" className="btn btn-accent text-xl input-xl">Find jobs</button>
            </form>
          </div>
          {jobs.length === 0 && (
            <>
              <LoadingDisplay />
            </>
          ) }
          <JobListing jobs={jobs} />
        </div>
      </HomeLayout>
    </>
  )
}
