'use client'


import Header from '@/components/common/Header/Header'; 
import Footer from '@/components/common/Footer/Footer';

import { useState } from 'react';
import { projects } from '@/lib/portfolioCardsData'
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import BackButton from '@/components/common/BackButton/BackButton';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRightLong } from "@fortawesome/free-solid-svg-icons";


import allWorkAnimations from '@/animations/allWorkAnimations';

function Page() {


    const [filterValue,setFilterValue] = useState('all');


    const filteredProjects = filterValue === 'all'
        ? projects
        : projects.filter((item) => item.cat === filterValue);


    return (  
        <>
     <Header/>
      {/* BACK BUTTON */}
      <BackButton className="hidden md:block"  linkTo={'/#work'}/>
        <div className="min-h-screen w-full  mt-8  px-4 py-24 sm:px-6">
            <div className="container mx-auto max-w-7xl">
                <div className='flex flex-col justify-center gap-4 mb-5 fle md:flex-row'>
                    <button onClick={() => setFilterValue('all')} className='inline-flex items-center justify-center rounded-full bg-white px-10 font-semibold leading-none text-black shadow-lg hover:bg shadow-white/10 hover:bg-[#1771BF]   hover:text-white transition-all duration-300 p-4'>All</button>
                    <button onClick={ ()=>setFilterValue('comercial') } className='inline-flex items-center justify-center rounded-full bg-white px-10 font-semibold leading-none text-black shadow-lg hover:bg shadow-white/10 hover:bg-[#1771BF]   hover:text-white transition-all duration-300 p-4'>Comercial</button>
                    <button onClick={ ()=>setFilterValue('finished')}  className='inline-flex items-center justify-center rounded-full bg-white px-10 font-semibold leading-none text-black shadow-lg hover:bg shadow-white/10 hover:bg-[#1771BF]   hover:text-white transition-all duration-300 p-4'>Finished</button>
                    <button onClick={ ()=>setFilterValue('soon')} className='inline-flex items-center justify-center rounded-full bg-white px-10 font-semibold leading-none text-black shadow-lg hover:bg shadow-white/10 hover:bg-[#1771BF]   hover:text-white transition-all duration-300 p-4'>Comming Soon</button>
                    
                    
                    
                </div>
                {/* CARD_GRID */}
                <motion.div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3"
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.15 }}
                key={filterValue}
                variants={allWorkAnimations.container}

                >
                    {/* CARDS */}
                    {filteredProjects.map((project) => (
                        <motion.div 
                        key={project.link} 
                        variants={allWorkAnimations.item}
                     
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
                                href={`${project.link}?from=all-work`} 
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


                    

                </motion.div>

            </div>
        </div>
        <Footer/>
        </>
    );
}

export default Page;
