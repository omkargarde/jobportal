import { SearchIcon } from '~/Icons/SearchIcon'
import { HomeLayout } from '~/layouts/HomeLayout'

export default function Home() {
  function placeholder() {
    console.error('placeholder: not implemented')
  }
  return (
    <>
      <HomeLayout>
        <div className="lg:mx-16">
          <h1 className=" py-4 text-2xl">Welcome User</h1>
          <div className="flex justify-center ">
            <form className="w-full max-w-full flex gap-4" action={placeholder}>
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
          {/* List start */}

        </div>
      </HomeLayout>
    </>
  )
}
