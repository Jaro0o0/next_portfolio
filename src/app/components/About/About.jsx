"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBook,
  faCode,
  faLocationCrosshairs,
  faPaperPlane,
} from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";
import { TextField } from "@mui/material";

import { Code } from "../txt/code.jsx";
import { codeData } from "../../../lib/codeData.js";


//FORMS
import { useForm } from "react-hook-form";
import emailjs from '@emailjs/browser';

// SuBMIT FORM
 const onSubmit = (data) => {
        const loadingToast = toast.loading('Wysyłanie wiadomości...');
       
        
        emailjs.send(process.env.VITE_EMAILJS_SERVICE_ID, process.env.VITE_EMAILJS_TEMPLATE_ID, data, import.meta.env.VITE_EMAILJS_PUBLIC_KEY)
            .then(() => {
                toast.success('Wiadomość została wysłana pomyślnie!', { id: loadingToast });
                reset();
            })
            .catch(() => {
                toast.error('Wystąpił błąd podczas wysyłania wiadomości. Spróbuj ponownie.', { id: loadingToast });
            });
    }





const details = [
  { icon: faCode, label: "Role", value: "Software Engineer" },
  { icon: faBook, label: "Experience", value: "1 year of building" },
  { icon: faLocationCrosshairs, label: "Based in", value: "Poland" },
];

const fieldStyles = {
  "& .MuiOutlinedInput-root": {
    borderRadius: "0.75rem",
    backgroundColor: "rgba(255,255,255,0.025)",
    "& fieldset": { borderColor: "rgba(255,255,255,0.1)" },
    "&:hover fieldset": { borderColor: "rgba(23,113,191,0.7)" },
    "&.Mui-focused fieldset": { borderColor: "#1771BF" },
  },
  "& .MuiInputLabel-root": { color: "#a1a1aa" },
  "& .MuiInputLabel-root.Mui-focused": { color: "#4ba3ee" },
  "& input, & textarea": { color: "#f4f4f5" },
};

function About() {

  // FORM
   const { register, handleSubmit, reset, formState: { errors } } = useForm();



  const containerVariants = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.12 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 22 },
    show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: "easeOut" } },
  };

  return (
    <section id="about" className="relative overflow-hidden px-4 py-24 sm:px-6 lg:py-32">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -left-36 top-10 h-80 w-80 rounded-full bg-[#1771BF]/15 blur-[120px]" />
        <div className="absolute -right-36 bottom-0 h-96 w-96 rounded-full bg-sky-400/10 blur-[140px]" />
        <div className="absolute -left-12 top-0 hidden w-[38rem] opacity-[0.07] lg:block">
          <Code language="jsx" showCopyButton={false}>{codeData}</Code>
        </div>
      </div>

      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.18 }}
        variants={containerVariants}
        className="relative mx-auto grid max-w-7xl overflow-hidden rounded-[2rem] border border-white/10 bg-[#0d0d0f]/85 shadow-2xl shadow-black/30 backdrop-blur-sm lg:grid-cols-[1.05fr_0.95fr]"
      >
        <div className="relative p-7 sm:p-10 lg:p-14">
          <div aria-hidden="true" className="absolute inset-y-0 right-0 hidden w-px bg-gradient-to-b from-transparent via-white/15 to-transparent lg:block" />

          <motion.p variants={itemVariants} className="mb-5 flex items-center gap-3 text-xs font-bold tracking-[0.24em] text-[#4ba3ee]">
            <span className="h-px w-9 bg-[#1771BF]" />
            ABOUT ME
          </motion.p>

          <motion.div variants={itemVariants}>
            <h2 className="max-w-md text-4xl font-bold tracking-tight text-white sm:text-5xl">
              Turning ideas into thoughtful digital experiences.
            </h2>
            <p className="mt-5 text-lg font-medium text-[#73b7ed]">Maciej Lach · Software Engineer</p>
          </motion.div>

          <motion.p variants={itemVariants} className="mt-7 max-w-xl text-base leading-8 text-zinc-400 sm:text-lg">
            I&apos;m a front-end focused software engineer who enjoys creating fast, polished interfaces with React, TypeScript and Next.js. I combine clean code with purposeful motion and practical user experience.
          </motion.p>

          <motion.ul variants={itemVariants} className="mt-9 grid gap-3 sm:grid-cols-3">
            {details.map(({ icon, label, value }) => (
              <li key={label} className="group rounded-2xl border border-white/8 bg-white/[0.025] p-4 transition duration-300 hover:-translate-y-1 hover:border-[#1771BF]/50 hover:bg-[#1771BF]/[0.07]">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#1771BF]/15 text-[#54acef] transition group-hover:bg-[#1771BF] group-hover:text-white">
                  <FontAwesomeIcon icon={icon} />
                </div>
                <p className="mt-4 text-xs font-medium uppercase tracking-wider text-zinc-500">{label}</p>
                <p className="mt-1 text-sm font-semibold text-zinc-200">{value}</p>
              </li>
            ))}
          </motion.ul>

          <motion.div variants={itemVariants} className="mt-10 border-t border-white/8 pt-6">
            <p className="text-sm leading-7 text-zinc-500">
              Also working with Material UI, Framer Motion, Tailwind CSS, Node.js, Express and Docker.
            </p>
          </motion.div>
        </div>

        <div className="relative border-t border-white/10 bg-white/[0.025] p-7 sm:p-10 lg:border-t-0 lg:p-14">
          <motion.div variants={itemVariants}>
            <p className="text-xs font-bold tracking-[0.2em] text-[#4ba3ee]">LET&apos;S CONNECT</p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-white">Have a project in mind?</h2>
            <p className="mt-3 leading-7 text-zinc-400">Tell me a little about it and I&apos;ll get back to you.</p>
          </motion.div>

          <form onSubmit={handleSubmit(onSubmit)} className="mt-8 flex flex-col gap-5">
            <motion.div variants={itemVariants}>
              <TextField fullWidth id="name" name="name" label="Name" placeholder="Your name" required sx={fieldStyles}  {...register('name', { required: true })} />
            </motion.div>
            <motion.div variants={itemVariants}>
              <TextField fullWidth id="email" name="email" type="email" label="Email" placeholder="you@example.com" required sx={fieldStyles}  {...register('email', { required: true })} />
            </motion.div>
            <motion.div variants={itemVariants}>
              <TextField fullWidth id="message" name="message" label="Message" placeholder="Tell me about your project" required multiline rows={4} sx={fieldStyles}  {...register('text', { required: true })} />
            </motion.div>
            <motion.button
              variants={itemVariants}
              type="submit"
              className="mt-1 flex w-full items-center justify-center gap-3 rounded-xl bg-[#1771BF] px-5 py-4 font-semibold text-white shadow-lg shadow-[#1771BF]/20 transition hover:-translate-y-0.5 hover:bg-[#2589df] hover:shadow-[#1771BF]/35 focus:outline-none focus:ring-2 focus:ring-[#4ba3ee] focus:ring-offset-2 focus:ring-offset-[#0d0d0f] sm:w-fit"
            >
              Send message
              <FontAwesomeIcon icon={faPaperPlane} className="h-4 w-4" />
            </motion.button>
          </form>
        </div>
      </motion.div>
    </section>
  );
}

export default About;
