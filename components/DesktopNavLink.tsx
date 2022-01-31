import Link from "next/link";

export default function DesktopNavLink({ path, title }) {
  return (
    <Link href={path} passHref>
      <a className="hover:bg-indigo-500/5  px-4 py-2 h-10 mx-1 font-medium text-gray-500 hover:text-indigo-500 rounded ">
        {title}
      </a>
    </Link>
  );
}
