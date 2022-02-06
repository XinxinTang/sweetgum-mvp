import logo from "../assets/imgs/logo.png";
import Image from "next/image";
import Link from "next/link";

const Layout = ({ children }) => {
  return (
    <>
      <div className="w-full">
        <nav className="flex justify-between items-center m-auto px-6">
          <Image width={125} height={100} src={logo} alt="" />

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
        {/* Main */}
        {children}

        {/* Footer  */}
        <div className="w-full flex justify-center mt-2 items-center">
          <label className="text-sm text-gray-700 underline mt-3">
            All right reserved to
          </label>
          <Image width={80} height={60} src={logo} alt="" />
        </div>
      </div>
    </>
  );
};

export default Layout;
