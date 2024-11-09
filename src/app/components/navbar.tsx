import react from "react";
import Link from "next/link";
import { IoMdDownload } from "react-icons/io";

const Navbar =()=>{
    return(
        <div className="z-50 sticky top-0">
        <header className="text-white bg-teal-600 body-font">
  <div className="container mx-auto flex flex-wrap p-3 flex-col md:flex-row items-center">
    <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
      
      <span className="ml-3 text-3xl font-samibold text-white">Sara Atif</span>
    </a>
    <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
      <Link href="/" className="mr-5 hover:text-teal-900">Home</Link>
      <Link href="#about" className="mr-5 hover:text-teal-900">About</Link>
      <Link href="#skills" className="mr-5 hover:text-teal-900">Skills</Link>
      <Link href="#projects" className="mr-5 hover:text-teal-900">Projects</Link>
      <Link href="#contact" className="mr-5 hover:text-teal-900">Contact</Link>
      </nav>
      <a href="/my-cv.PNG" target="blank">
    <button className="inline-flex items-center bg-white text-teal-600 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">

        Download CV
        <IoMdDownload className="ml-2 text-xl" />      
    </button>
    </a>
  </div>
</header>
</div>
    )
}
export default Navbar;