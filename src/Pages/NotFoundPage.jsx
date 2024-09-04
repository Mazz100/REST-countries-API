import { Link } from "react-router-dom";

function NotFoundPage() {
  return (
    <div className="flex min-h-screen items-center justify-center gap-4 text-3xl">
      <span>404 Not Found</span>
      <div className="h-[30px] w-[2px] bg-black"></div>
      <Link
        className="transform transition-transform will-change-transform hover:translate-x-1"
        to="/"
      >
        Home
      </Link>
    </div>
  );
}

export default NotFoundPage;
