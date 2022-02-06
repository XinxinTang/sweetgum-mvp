import logo from "../assets/imgs/logo.png";
import Image from "next/image";
import Link from "next/link";

const Layout = ({ children }) => {
  return (
    <div className="">
      <nav className="flex justify-between items-center m-auto px-6">
        <Image width={120} height={100} src={logo} alt="" />

        <ul className="flex justify-center text-lg font-sans  items-center">
          <li className="mr-7 cursor-pointer ">
            <Link href="/">
              <a className="text-green-600 hover:text-green-700 transition ">
                Home
              </a>
            </Link>
          </li>
          <li className="mr-7 cursor-pointer ">
            <Link href="/">
              <a className="text-green-600 hover:text-green-700 transition ">
                Games
              </a>
            </Link>
          </li>
          <li className="mr-7 cursor-pointer ">
            <Link href="/">
              <a className="text-green-600 hover:text-green-700 transition ">
                Carbon Marketplace
              </a>
            </Link>
          </li>
          <li className="mr-7 cursor-pointer ">
            <Link href="/">
              <a className="text-green-600 hover:text-green-700 transition ">
                Seed SDKs
              </a>
            </Link>
          </li>
          <li className="mr-7 cursor-pointer ">
            <Link href="/">
              <a className="text-green-600 hover:text-green-700 transition ">
                Sweetgum DAO
              </a>
            </Link>
          </li>
        </ul>
      </nav>

      {children}
      <div>
        <h2>Footer</h2>
      </div>
    </div>
  );
};

export default Layout;
