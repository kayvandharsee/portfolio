import "./skills.scss"
import { motion } from "framer-motion"

const titleVariants = {
    initial: {
        x: 50,
        opacity: 0
    },
    animate: {
        x: 0,
        opacity: 1,
        transition: {
            duration: 0.65,
        }
    }
}
const imageVariants = {
    initial: {
        x: -20,
        opacity: 0
    },
    animate: {
        x: 0,
        opacity: 1,
        transition: {
            duration: 0.65,
            staggerChildren: 0.05
        }
    }
}

const boxVariants = {
    initial: {
        x: 40,
        opacity: 0
    },
    animate: {
        x: 0,
        opacity: 1,
        transition: {
            type: 'spring',
            stiffness: 40,
            staggerChildren: 0.2
        }
    }
}

const Skills = () => {
  return (
    <div className="skills">
        <div className="title">
            <motion.h1 variants={titleVariants} initial='initial' whileInView='animate'>
                <motion.b whileHover={{color:'#a07855', fontSize:'55px'}}>Computer</motion.b> and <motion.b whileHover={{color:'#a07855', fontSize:'55px'}}>Mathematical</motion.b> Skills
            </motion.h1>
            <br /><br />
            <motion.div className="images" variants={imageVariants} initial='initial' whileInView='animate'>
                <motion.img src="python.png" alt="Python logo" variants={imageVariants} />
                <motion.img src="java.png" alt="Java logo" variants={imageVariants} />
                <motion.img src="c.png" alt="C logo" variants={imageVariants} />
                <motion.img src="javascript.svg" alt="JavaScript logo" variants={imageVariants}/>
                <motion.img src="react.png" alt="React logo" variants={imageVariants} />
                <motion.img src="html2.png" alt="HTML logo" variants={imageVariants} />
                <motion.img src="css.png" alt="CSS logo" variants={imageVariants} />
            </motion.div>
        </div>
        <motion.div className="box-wrapper">
            <motion.div className="boxes" variants={boxVariants} initial='initial' whileInView='animate'>
                <motion.div className="box" variants={boxVariants} whileHover={{backgroundColor: '#a07855', color: '#000000', scale: 1.2}}>
                    <h1>Languages and Frameworks</h1>
                    <br />
                    <b>Scripting Languages:</b> <br /> Python, JavaScript, R, Bash <br /><br />
                    <b>Programming Languages:</b> <br /> Java, C, SQL <br /><br />
                    <b>Web Development: </b> <br /> HTML, CSS, React, SCSS <br /><br />
                    <b>Assembly Languages:</b> <br /> MIPS
                    
                </motion.div>
                <motion.div className="box" variants={boxVariants} whileHover={{backgroundColor: '#a07855', color: '#000000', scale: 1.2}}>
                    <h1>Computer Knowledge</h1>
                    <br />
                    <b>Software:</b> <br /> Data Structures & Algorithms, Web Development, Data Analysis, Linux/Unix <br /><br /><br />
                    <b>Hardware:</b> <br /> Computer Architecture, Computer Circuitry
                </motion.div>
                <motion.div className="box" variants={boxVariants} whileHover={{backgroundColor: '#a07855', color: '#000000', scale: 1.2}}>
                    <h1>Mathematics</h1>
                    <br />
                    <b>Statistics:</b> <br /> Markov Chains, Monte Carlo Method <br /><br />
                    <b>Algebra:</b> <br /> Linear Algebra, Abstract Algebra (All Both Computational and Proof-Based) <br /><br />
                    <b>Calculus:</b> <br /> Computational and Proof-Based Calculus <br /><br />
                    
                </motion.div>
            </motion.div>
        </motion.div>
    </div>
  )
}

export default Skills
