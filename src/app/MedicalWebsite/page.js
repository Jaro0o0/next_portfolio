import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown, faCode, faGlobe } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

function SocialMedia() {
  return (
    <>
      <section className="h-screen w-full relative bg-black  ">
        {/* GRID_BACKGROUND */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#121212_1px,transparent_1px),linear-gradient(to_bottom,#121212_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)]" />

        {/* LIGHT EFFECT */}
        <div className="absolute top-[25%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-[#1771BF]/15 blur-[120px] rounded-full pointer-events-none" />

        {/* TEXT_BOX     */}
        <div className="flex flex-col  items-center absolute rounded-md top-[25%] left-1/2 -translate-x-1/2  -translate-y-1/2 pointer-events-none">
          <h1 className="text-white text-8xl font-bold">Medical website</h1>
          <p className="text-white text-xl mt-4 mb-5 text-center ">Social media app build in Django</p>
          <div className="animate-bounce">
            <FontAwesomeIcon icon={faArrowDown} className="w-15 h-15 text-white" />
          </div>
        </div>
      </section>

      {/* SECTION_PROJECT */}
      <section className="relative z-10 pb-32">
        <div className="container mx-auto max-w-7xl px-4">
          {/* IMG_BOX */}
          <div className="flex flex-col gap-10 -mt-100">
            <div className="flex justify-center">
              <Image
                src="/portfolio-imgs/portfolio-card-img-one.jpg"
                alt="Social Media Project"
                width={1000}
                height={1000}
                className="rounded-md shadow-2xl"
              />
            </div>

            {/* TEXT_COL */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-10">
              <div>
                <h1 className="text-white text-5xl font-bold mb-6">Project Overview</h1>
                {/* ICONS_BOX */}
                <div className="flex flex-wrap gap-2">
                  <div className="bg-[#1b1b1b] p-3 text-white rounded-md ">
                    Django
                  </div>
                  <div className="bg-[#1b1b1b] p-3 text-white rounded-md ">
                    ThreeJS
                  </div>
                  <div className="bg-[#1b1b1b] p-3 text-white rounded-md ">
                    PostgreSQL
                  </div>
                </div>
                {/* BUTTONS_BOX */}
                <div className="flex mt-5 gap-2">
                  {/* BBUTTON */}
                  <div className="bg-white py-3 px-6 rounded-md flex gap-2 w-30">
                    <Link href='#'>Code </Link>
                    <FontAwesomeIcon icon={faCode} className="h-6 w-6" />
                  </div>
                  {/* BBUTTON */}
                  <div className="bg-white py-3 px-6 rounded-md flex gap-2 w-30">
                    <Link href='#'>Demo</Link>
                    <FontAwesomeIcon icon={faGlobe} className="h-6 w-6" />
                  </div>
                </div>

              </div>

              {/* DESCRIPTION */}
              <div className="flex items-end">
                <p className="text-gray-300 text-lg leading-relaxed">
                  This project is a modern social media platform built using Django for the backend, PostgreSQL for reliable data storage, and JavaScript for dynamic client-side interactions. It also integrates Three.js to provide interactive 3D visual experiences, making the platform more engaging and visually unique. Users can create profiles, share content, and interact in real time, while the system ensures scalability, security, and high performance.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default SocialMedia;
