import { Link } from "react-router-dom"

export const Logout = () => {
  return (
    <div>
        <Link to={"/"}
            type="button"
            className="ml-4 text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-full text-sm px-5 py-2.5 me-2 mb-2"
          >
            Logout
          </Link>
    </div>
  )
}
