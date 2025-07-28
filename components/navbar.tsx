import Link from "next/link";

export default function NavBar() {
  return (
    <header className="flex p-2 pl-8 space-x-5 font-navbar  text-lg font-bold bg-burgundy-700">
      <Link
        className="hover:bg-burgundy-600 py-2 px-4 rounded-3xl"
        href={"about"}
      >
        About Me
      </Link>
      <Link
        className="hover:bg-burgundy-600 py-2 px-4 rounded-3xl"
        href={"projects"}
      >
        My Projects
      </Link>
      <Link
        className="hover:bg-burgundy-600 py-2 px-4 rounded-3xl"
        href={"contact"}
      >
        Contact
      </Link>
      <Link
        className="hover:bg-burgundy-600 py-2 px-4 rounded-3xl"
        href={"blog"}
      >
        Blog
      </Link>
    </header>
  );
}
