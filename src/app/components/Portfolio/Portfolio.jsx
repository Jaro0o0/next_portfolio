import Image from "next/image";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRightLong } from "@fortawesome/free-solid-svg-icons";

const projects = [
  {
    title: "Social Media",
    image: "/portfolio-imgs/portfolio-card-img-one.jpg",
    tags: ["Django", "ThreeJS", "PostgreSQL"],
    link: "/SocialMedia",
  },
  {
    title: "Medical Website",
    image: "/portfolio-imgs/portfolio-card-img-one.jpg",
    tags: ["React", "Framer Motion", "Material UI", "React Router"],
    link: "/SocialMedia",
  },
  {
    title: "E-commerce",
    image: "/portfolio-imgs/portfolio-card-img-one.jpg",
    tags: ["React", "Framer Motion", "Tailwind CSS", "Django", "DRF"],
    link: "/SocialMedia",
  },
];

function Portfolio() {
  return (
    <section className="py-24 px-4 sm:px-6">
      <div className="container mx-auto max-w-7xl">
        {/* HEADER */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6 mb-12">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-2">My work</h2>
            <p className="text-zinc-400 max-w-md">Explore my latest projects where I combine design and engineering.</p>
          </div>
          
          <Link 
            href="#" 
            className="group bg-white text-black py-3 px-8 rounded-full flex items-center gap-3 font-medium hover:bg-zinc-200 transition-all"
          >
            All Work
            <FontAwesomeIcon icon={faArrowRightLong} className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index} 
              className="group bg-[#111111] border border-white/5 rounded-2xl overflow-hidden hover:border-white/10 transition-all duration-300"
            >
              {/* IMAGE_BOX */}
              <div className="aspect-[16/10] overflow-hidden relative">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* CONTENT_BOX */}
              <div className="p-6">
                <div className="flex justify-between items-end gap-4">
                  <div className="flex-1">
                    <h3 className="text-2xl font-semibold text-white mb-4">{project.title}</h3>
                    
                    {/* TAGS */}
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span 
                          key={tag} 
                          className="px-3 py-1 bg-white/5 text-zinc-300 text-xs font-medium rounded-full border border-white/5"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* ACTION_BTN */}
                  <Link 
                    href={project.link} 
                    className="w-14 h-14 bg-sky-600 hover:bg-sky-500 text-white rounded-xl flex items-center justify-center transition-colors group/btn"
                    aria-label={`View ${project.title} project`}
                  >
                    <FontAwesomeIcon 
                      icon={faArrowRightLong} 
                      className="w-6 h-6 -rotate-45 group-hover/btn:rotate-0 transition-transform" 
                    />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Portfolio;