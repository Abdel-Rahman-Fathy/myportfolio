'use client';
import React, { useState, useTransition } from 'react'
import Transition from '/src/app/Transtion/page'
import TabButton from '../TabButton/page';
import { motion } from 'framer-motion';
import Archievments from '../Archievments/page';

const DataTab = [
    {
        id: "skills",
        title: "Skills",
        content: <ul className='list-none  gap-y-2  grid grid-cols-3  '>
            <li>HTML5</li>
            <li>CSS3</li>
            <li>Bootstrap</li>
            <li>Tailwind</li>
            <li>JavaScript</li>
            <li>TypeScript</li>
            <li>LocalStorage</li>
            <li>Jquery</li>
            <li>Regax</li>
            <li>JSON</li>
            <li>React JS</li>
            <li>Next JS</li>
            <li>Figma</li>
            <li>Git && Github</li>
        </ul>
    },
    {
        id: "education",
        title: "Education",
        content: <ul className=' grid gap-3 pl-2'>
            <li>Bachelors in computer science | 2023 | MUST </li>
            <li>Major : Computer science</li>
            <li>GPA : 3.5</li>
        </ul>
    },
    {
        id: "experience",
        title: "Experience",
        content: <ul className='grid gap-3 pl-2'>
            <li>3rd place, Smart Government Hackathon</li>

        </ul>
    },
]

export default function AboutSection() {
    const [tab, setTap] = useState("skills");
    const [isPanding, startTransition] = useTransition();
    const handelTabChange = (nextTab) => {
        startTransition(() => {
            setTap(nextTab)
        })
    };

    return (

        <section className='text-white bg-banner-bg bg-no-repeat bg-center bg-cover md:h-screen pt-20 '>
            <Transition />
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1, duration: 3 }}
                className='container mx-auto md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16'>
                <div className=' mt-4 md:mt-0 text-left flex flex-col h-full '>
                    <h2 className='text-cyan-600 text-4xl md:py-0 pt-10  font-bold  mb-4'>About Me</h2>
                    <p className=' leading-10 font-serif '>Ambitious front-end developer with extensive experience developing user experiences across the web and turning designs into responsive and interactive web pages. I am excited to work with a professional team to expand my skills, knowledgeable with skills in HTML5, CSS3, Tailwind CSS, JavaScript, and in working with front-end libraries such as React.js.                   </p>

                </div>
                <div>

                    <div className='mt-5 flex flex-row justify-start'>
                        {
                            DataTab.map((tabb, id) => <TabButton key={id} selectTab={() => handelTabChange(tabb.id)} active={tab === tabb.id}>{tabb.title}</TabButton>)
                        }
                    </div>
                    <div className='my-5'>
                        {DataTab.find((t) => t.id == tab).content}
                    </div>
                </div>
            </motion.div>
            <Archievments />
        </section>
    )
}
