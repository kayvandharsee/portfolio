import React from 'react'
import { motion } from 'framer-motion'

const sections = ['Homepage', 'Skills', 'Portfolio', 'Contact']
const variants = {
  open: {
    transition: {staggerChildren: 0.1}
  },
  close: {
    transition: {staggerChildren: 0.05, staggerDirection: -1}
  }
}
const secVariants = {
  open: {
    y: 0,
    opacity: 1
  },
  close: {
    y: 50,
    opacity:0
  }
}

const Links = () => {
  return (
    <motion.div className='links' variants={variants}>
      {sections.map((section) => (
        // To href to each section
        <motion.a 
        href={`/portfolio#${section}`} 
        key={section} 
        variants={secVariants} 
        whileHover={{scale: 1.05}}
        whileTap={{scale:0.95}}
        >
          {section}
        </motion.a>
      ))}
    </motion.div>
  )
}

export default Links