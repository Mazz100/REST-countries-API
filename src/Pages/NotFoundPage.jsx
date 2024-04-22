import { Link } from "react-router-dom"

function NotFoundPage() {
    return (
        <div className="flex justify-center items-center gap-4 text-3xl min-h-screen">
            <span>404 Not Found</span>
            <div className="h-[30px] w-[2px] bg-black"></div>
            <Link className="transform will-change-transform hover:translate-x-1 transition-transform" to="/">Home</Link>
        </div>
    )
}

export default NotFoundPage