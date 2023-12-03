import Image from "next/image";
import Link from "next/link";

const DashboardHeader = () => {
  return (
    <div className="w-full py-2 px-4 flex items-center">
      <Link href="/" className="normal-case text-xl">
        <Image
          src="/logo_7.png"
          alt="logo"
          width={200}
          height={200}
          // style={{ scale: "150%" }}
          className="w-48 cursor-pointer"
        />
      </Link>
      <div>
        <label
          htmlFor="default-search"
          className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
        >
          Search
        </label>
        <div className="relative w-96">
          <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
            <svg
              className="w-4 h-4 text-gray-500 dark:text-gray-400"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 20"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
              />
            </svg>
          </div>
          <input
            type="search"
            id="default-search"
            className="block w-full px-4 py-3.5 ps-10 text-base outline-none rounded-lg bg-slate-800 dark:placeholder-gray-400"
            placeholder="Search"
            required
          />
        </div>
      </div>
      <div>
        <button className="py-3 px-6 text-white ml-2 border border-gray-700 rounded font-medium uppercase bg-slate-900 shadow-xl">
          Create New Event
        </button>
      </div>
    </div>
  );
};

export default DashboardHeader;
