"use client"
import Image from "next/image";
import Link from "next/link";
import Typewriter from 'typewriter-effect';
import picture from "../../../public/pic.jpg"

const HeroPage=()=>{
    return(
        
            <section className="text-gray-500  body-font bg-fixed bg-cover bg-center custom-image">
  <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
    <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
      <h1 className="title-font sm:text-4xl text-6xl  mb-4 font-bold text-gray-900">
        I am
        <br className="hidden lg:inline-block" />
        <Typewriter
  options={{
    strings: ['Teacher','Web Developer', 'UI/UX Designer'],
    autoStart: true,
    loop: true,
  }}
/>
      </h1>
      <div className="w-[100px] h-[2px] bg-teal-700 mb-2"></div>
      <p className="mb-8 leading-relaxed text-lg text-gray-900">
       I work in the sweet spot for innovation, somewhere between strategy, design and technology. I love the web and the work we do.
      </p>
      
      <div className="flex justify-center">
      <Link href={"#contact"}>
        <button className="inline-flex text-white bg-teal-800 border-0 py-2 px-6 focus:outline-none hover:bg-teal-900 rounded text-lg">
          Contact
        </button>
        </Link>
      </div>
    </div>
    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
      <Image
        className="object-cover object-center rounded-3xl mx-auto w-[400px] h-[400px] border-2 border-solid border-blue-500 "
        alt="myPic"
        width={300}
        height={300}
        src={picture}
      />
    </div>
  </div>
</section>

        

    )
}
export default HeroPage;