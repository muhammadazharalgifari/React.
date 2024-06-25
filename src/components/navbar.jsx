import { useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { AiFillGithub } from "react-icons/ai";

export default function Navbar() {
  // logic area
  const [nav, setNav] = useState(false);

  function handleNav() {
    // setNav(!nav)
    setNav((prev) => (prev = !prev));
  }

  return (
    // view area
    <nav className="h-16 bg-blue-400 flex justify-between items-center pt-5 pb-5 pl-[4%] pr-[6%] font-semibold">
      {/* brand navbar */}
      <div className="text-xl cursor-pointer md:pl-4">
        <h1 className="text-white">
          Jvalley Booth<span className="text-black">camp.</span>
        </h1>
      </div>

      {/* ekspresi js */}
      {nav ? (
        <div
          className={`p-8 flex flex-col bg-white rounded-b-lg shadow-lg absolute top-16 right-0 gap-6`}
        >
          <a href="#home" className="hover:text-blue-400">
            Home
          </a>
          <a href="#about" className="hover:text-blue-400">
            About
          </a>
          <a href="#" className="hover:text-blue-400">
            Content
          </a>
        </div>
      ) : null}

      {/* content navbar */}
      <div className="flex items-center gap-10 max-md:hidden">
        <a href="#home" className="hover:text-white">
          Home
        </a>
        <a href="#about" className="hover:text-white">
          About
        </a>
        <a href="#" className="hover:text-white">
          Content
        </a>
        <a href="#" className="hover:text-white text-2xl">
          <AiFillGithub />
        </a>
      </div>

      {/* mode layar hp (lebih kecil) */}
      <div className="md:hidden">
        <a href="#" className="hover:text-white">
          <AiOutlineMenu onClick={handleNav} />
        </a>
      </div>
    </nav>
  );
}
