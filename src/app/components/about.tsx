import Image from "next/image";
import Link from "next/link";

const AboutPage = () => {
    return (
        <div id="about">
            <section className="text-gray-600 body-font bg-teal-100">
                <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
                    
                    <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
                        <h1 className="title-font sm:text-4xl text-6xl  mb-4 font-bold text-gray-900">
                            About Me
                        </h1>
                        <p className="mb-5 leading-relaxed">
                            Hi, I’m SARA ATIF, a passionate web developer with 2 years of experience in IT. My expertise lies in UI/UX design, front-end development.</p>
                        <p className="mb-5 leading-relaxed">

                            I believe in blending creativity with functionality to deliver meaningful results. Every project I work on is a chance to push boundaries and explore innovative solutions.</p>
                        <p className="mb-5 leading-relaxed">

                            Feel free to explore my portfolio and get in touch if you'd like to collaborate!

                        </p>
                        <div className="flex justify-center">
                            <a href="/pictures/my-cv.PNG">
                            <button className="inline-flex text-white bg-teal-500 border-0 py-2 px-6 focus:outline-none hover:bg-teal-600 rounded text-lg">
                                View CV
                            </button>
                            </a>
                        </div>
                    </div>
                </div>
            </section>


        </div>
    )
}
export default AboutPage;