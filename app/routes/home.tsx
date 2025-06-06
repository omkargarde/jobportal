import { SearchIcon } from '~/Icons/SearchIcon'
import { HomeLayout } from '~/layouts/HomeLayout'

export default function Home() {
  return (
    <>
      <HomeLayout>
        <h1>Welcome</h1>
        <div className="flex justify-center">
          <form className="w-full max-w-full lg:mx-16">
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
          </form>
        </div>
      </HomeLayout>
    </>
  )
}
