'use client'

import { useState } from 'react';
import { projects } from '@/lib/portfolioCardsData'
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRightLong } from "@fortawesome/free-solid-svg-icons";

function Page() {


    const [filterValue,setFilterValue] = useState('all');


    const filteredProjects = filterValue === 'all'
        ? projects
        : projects.filter((item) => item.cat === filterValue);


    return (  
        <>
        <div className="min-h-screen w-full px-4 py-24 sm:px-6">
            <div className="container mx-auto max-w-7xl">
                <div className='flex justify-center gap-4 mb-2'>
                    <button onClick={() => setFilterValue('all')}>All</button>
                    <button onClick={ ()=>setFilterValue('comercial') }>Comercial</button>
                    <button onClick={ ()=>setFilterValue('finished')} >Finished</button>
                    <button onClick={ ()=>setFilterValue('soon')}>Comming Soon</button>
                    
                    
                    
                </div>
                {/* CARD_GRID */}
                <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                    {/* CARDS */}
                    {filteredProjects.map((project, index) => (
                        <motion.div 
                        key={index} 
                        variants={{
                            hidden: { opacity: 0, y: 30 },
                            show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
                        }}
                        className="group bg-[#111111] border border-white/5 rounded-2xl overflow-hidden hover:border-white/10  "
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
                                className="w-14 h-14 bg-sky-600 hover:bg-sky-500 text-white rounded-xl flex items-center justify-center transition-colors group/btn duration-300"
                                aria-label={`View ${project.title} project`}
                            >
                                <FontAwesomeIcon 
                                icon={faArrowRightLong} 
                                className="w-6 h-6 -rotate-45 group-hover/btn:rotate-0 transition-transform" 
                                />
                            </Link>
                            </div>
                        </div>
                        </motion.div>
                    ))}


                    

                </div>

            </div>
        </div>
        </>
    );
}

export default Page;
