import Link from "next/link";
import Dropdown from "./Dropdown";
import Name from "./Name";

const Nav = () => {
    return (
        <div className="fixed top-0 p-4 w-screen h-18 flex justify-between items-center bg-cyan-300">
            <Name />

            <div className="flex justify-center items-center">
                <Link href="/">
                    <a className="px-2 text-white text-lg">Home</a>
                </Link>
                <Link href="/about">
                    <a className="px-2 text-white text-lg">About</a>
                </Link>
                <Dropdown />
            </div>
        </div>
    );
};

export default Nav;
