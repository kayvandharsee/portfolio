import { useRef } from 'react'
import './portfolio.scss'
import { motion, useScroll, useSpring, useTransform } from 'framer-motion'

const variants = {
  initial: {
    opacity: 0
  },
  animate: {
    opacity: 1,
    transition: {
      duration: 1
    }
  }
}

const items = [
    {
        id: 1,
        title: 'Tic-Tac-Toe',
        img: './tictactoe.png',
        desc: 'I built this Tic-Tac-Toe web app with React. After becoming familiar with HTML, CSS, and JavaScript, this project helped me become comfortable with the basics of React, and let me improve on my CSS skills.',
        href: 'https://kayvandharsee.github.io/tic-tac-toe/'
    },
    {
        id: 2,
        title: 'NBA Trivia',
        img: './nba.png',
        desc: 'I built this NBA Trivia website with vanilla JavaScript. Building this website provided me with a foundational understanding of basic web development technologies such as HTML and CSS. It also introduced me to frontend use of JavaScript.',
        href: 'https://kayvandharsee.github.io/nba-trivia/'
    },
    {
        id: 3,
        title: 'Code-Dump',
        img: './code.webp',
        desc: 'This repository is a collection of various coding projects in a plethora of languages including but not limited to C, Python, and SQL. This mainly consists of code I wrote for school or for extracurricular learning.',
        href: 'https://github.com/kayvandharsee/code-dump.git'
    },
]

const Single = ({item}) =>{

  const ref = useRef()
  
  const {scrollYProgress} = useScroll({target: ref})

  const y = useTransform(scrollYProgress, [0,1], [-300, 300])

  return(
    <section>
      <div className="container">
        <div className="wrapper">
          <div className="img-container" ref={ref}>
            <img src={item.img} alt="an image of one of my projects"/>
          </div>
          <motion.div className="text-container" style={{y}}>
            <h2>{item.title}</h2>
            <p>{item.desc}</p>
            <a href={item.href} target='_blank'>
              <button>View Work</button>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

const Portfolio = () => {
  
  const ref = useRef()

  const {scrollYProgress} = useScroll({target: ref, offset: ['end end', 'start start']})

  const scaleX = useSpring(scrollYProgress,{
    stiffness: 100,
    damping: 25
  })

  return (
    <div className="portfolio" ref={ref}>
      <motion.div className="progress" variants={variants} initial='initial' whileInView='animate'>
        <motion.h1 variants={variants}>Featured Works</motion.h1>
        <motion.div style={{ scaleX }} className="progress-bar"></motion.div>
      </motion.div>
      {items.map(item=>(
        <Single item={item} key={item.id} />
      ))}
    </div>
  )
}

export default Portfolio
