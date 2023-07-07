import TopNav from "../ui/TopNav";
import MiddleNav from "../ui/MiddleNav";
import Menu from "../ui/Menu";
export default function Navbar() {
  return (
    <>
      <TopNav />
      <hr className="mt-5"/>
      <MiddleNav/>
      <Menu/>
    </>
  );
}
