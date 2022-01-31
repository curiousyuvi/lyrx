import DesktopNav from "./DesktopNav";
import MobileNav from "./MobileNav";

export default function Navigation({ navBarOpen, setNavBarOpen }) {
  return (
    <>
      <div className="lg:hidden">
        <MobileNav navBarOpen={navBarOpen} setNavBarOpen={setNavBarOpen} />
      </div>
      <div className="hidden lg:flex">
        <DesktopNav />
      </div>
    </>
  );
}
