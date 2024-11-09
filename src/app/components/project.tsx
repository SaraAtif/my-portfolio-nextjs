import Image from "next/image";
import Link from "next/link";

const ProjectPage=() =>{
    return(
        <div id="projects">
            <section className="text-gray-600 body-font bg-teal-100">
  <div className="container px-5 py-24 mx-auto">
    <div className="flex flex-col text-center w-full mb-20">
    <h1 className="title-font sm:text-4xl text-6xl mb-14 font-bold text-gray-900">
        My Projects
      </h1>

    <div className="flex flex-wrap -m-4">
      <div className="lg:w-1/3 sm:w-1/2 p-4 cursor-pointer">
        <div className="flex relative">
          <Image
            alt="gallery"
            className="absolute inset-0 w-full h-full object-cover object-center border-2 border-solid border-teal-900 rounded-2xl"
            src={require("../../../public/projects/static-resume.PNG")}
            width={300}
            height={300}
          />
          <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
            <h2 className="tracking-widest text-sm title-font font-medium text-teal-500 mb-1">
              Resume project
            </h2>
            <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
              Static Resume
            </h1>
            <p className="leading-relaxed">
              This is the Static Resume which i create using html, css and js
            </p>
            <Link target="_blank" href={"https://vercel.com/sara-atifs-projects/milestone1-static-interactive-resume"}>
            <p className="leading-relaxed text-teal-500 hover:underline">
              View Project..
            </p>
            </Link>
          </div>
        </div>
      </div>
      <div className="lg:w-1/3 sm:w-1/2 p-4 cursor-pointer">
        <div className="flex relative">
          <Image
            alt="gallery"
            className="absolute inset-0 w-full h-full object-cover object-center border-2 border-solid border-teal-900 rounded-2xl"
            src={require("../../../public/projects/shareable-resume.PNG")}
            width={300}
            height={300}
          />
          <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
            <h2 className="tracking-widest text-sm title-font font-medium text-teal-500 mb-1">
              Resume project
            </h2>
            <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
              Shareable Resume
            </h1>
            <p className="leading-relaxed">
              Now you can easy to generate your resume,save it and share to everyone
            </p>
            <Link target="_blank" href={"https://vercel.com/sara-atifs-projects/milestone5-shareable-resume-builder"}>
            <p className="leading-relaxed text-teal-500 hover:underline">
              View Project..
            </p>
            </Link>
          </div>
        </div>
      </div>
      <div className="lg:w-1/3 sm:w-1/2 p-4 cursor-pointer">
        <div className="flex relative">
          <Image
            alt="gallery"
            className="absolute inset-0 w-full h-full object-cover object-center border-2 border-solid border-teal-900 rounded-2xl"
            src={require("../../../public/projects/form.PNG")}
            width={300}
            height={300}
          />
          <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
            <h2 className="tracking-widest text-sm title-font font-medium text-teal-500 mb-1">
              Form project
            </h2>
            <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
              Registration form
            </h1>
            <p className="leading-relaxed">
              Here it is student registration form. Now you can easily store the data
            </p>
            <Link target="_blank" href={"https://vercel.com/sara-atifs-projects/simple-form"}>
            <p className="leading-relaxed text-teal-500 hover:underline">
              View Project..
            </p>
            </Link>
          </div>
        </div>
      </div>
    </div>
      
      
    </div>
  </div>
</section>

        </div>

    )
}
export default ProjectPage;