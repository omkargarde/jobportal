import { SearchIcon } from '~/Icons/SearchIcon'
import { HomeLayout } from '~/layouts/HomeLayout'

export default function Home() {
  return (
    <>
      <HomeLayout>
        <h1>Welcome</h1>
        <div className="flex justify-center">
          <label className="input input-xl w-full max-w-full lg:mx-16">
            <SearchIcon className="text-2xl" />
            <input
              id="search"
              type="search"
              placeholder="Search"
              className=""
            />
          </label>
        </div>
      </HomeLayout>
    </>
  )
}
