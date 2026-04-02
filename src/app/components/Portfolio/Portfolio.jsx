import Image from "next/image";

function Portfolio() {
  return (
    <section>
      <div className="container mx-auto max-w-5xl">
        <h1 className="text-3xl text-white">My work</h1>
        {/* Grid */}
        <div className="grid grid-cols-2 gap-5 mt-5">
          {/* CARD_ONE */}
          <div className="bg-[#171717] p-4 flex flex-col gap-5">
            {/* IMG_BOX */}
            <div>
              <Image
                src="/portfolio-imgs/portfolio-card-img-one.jpg"
                alt="Social Media Project"
                width={500}
                height={500}
                className="rounded-md"
              />
            </div>
            {/* TEXT_BOX */}
            <div>
              <h1 className="text-2xl text-white">Social Media</h1>
              {/* TECH_STACK_BOX*/}
              <div className="flex gap-2">
                {/* ICON */}
                <div className="bg-[#1b1b1b] p-3 text-white rounded-md ">
                  Django
                </div>
                {/* ICON */}
                <div className="bg-[#1b1b1b] p-3 text-white rounded-md ">
                  ThreeJS
                </div>
                {/* ICON */}
                <div className="bg-[#1b1b1b] p-3 text-white rounded-md ">
                  PostgreSQL
                </div>
              </div>
            </div>
          </div>

          {/* CARD_TWO */}
          <div className="bg-[#171717] p-4 flex flex-col gap-5">
            {/* IMG_BOX */}
            <div>
              <Image
                src="/portfolio-imgs/portfolio-card-img-one.jpg"
                alt="Medical Website Project"
                width={500}
                height={500}
                className="rounded-md"
              />
            </div>
            {/* TEXT_BOX */}
            <div>
              <h1 className="text-2xl text-white">Medical Website</h1>
              {/* TECH_STACK_BOX*/}
              <div className="flex gap-2">
                {/* ICON */}
                <div className="bg-[#1b1b1b] p-3 text-white rounded-md ">
                  React
                </div>
                {/* ICON */}
                <div className="bg-[#1b1b1b] p-3 text-white rounded-md ">
                  Framer Motion
                </div>
                {/* ICON */}
                <div className="bg-[#1b1b1b] p-3 text-white rounded-md ">
                  Material UI
                </div>
                {/* ICON */}
                <div className="bg-[#1b1b1b] p-3 text-white rounded-md ">
                  React Router
                </div>
              </div>
            </div>
          </div>

          {/* CARD_THREE */}
          <div className="bg-[#171717] p-4 flex flex-col gap-5">
            {/* IMG_BOX */}
            <div>
              <Image
                src="/portfolio-imgs/portfolio-card-img-one.jpg"
                alt="E-commerce Project"
                width={500}
                height={500}
                className="rounded-md"
              />
            </div>
            {/* TEXT_BOX */}
            <div>
              <h1 className="text-2xl text-white">E commerce</h1>
              {/* TECH_STACK_BOX*/}
              <div className="flex gap-2">
                {/* ICON */}
                <div className="bg-[#1b1b1b] p-3 text-white rounded-md ">
                  React
                </div>
                {/* ICON */}
                <div className="bg-[#1b1b1b] p-3 text-white rounded-md ">
                  Framer Motion
                </div>
                {/* ICON */}
                <div className="bg-[#1b1b1b] p-3 text-white rounded-md ">
                  Material UI
                </div>
                {/* ICON */}
                <div className="bg-[#1b1b1b] p-3 text-white rounded-md ">
                  Tailwind CSS
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Portfolio;