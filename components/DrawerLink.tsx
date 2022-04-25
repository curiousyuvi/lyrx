import Link from "next/link";

export default function DrawerLink({ ButtonIcon, buttonText, path, setOpen }) {
  return (
    <Link href={path} passHref>
      <button
        onClick={() => {
          setOpen(false);
        }}
      >
        <div
          className={"bg-transparent".concat(
            " flex items-center px-8 py-3 my-2 font-roboto-condensed font-bold hover:text-gray-800 hover:bg-black/5 rounded-xl"
          )}
        >
          <ButtonIcon className="inline-block mr-6 text-2xl" />
          <h2 className="inline-block">{buttonText}</h2>
        </div>
      </button>
    </Link>
  );
}
