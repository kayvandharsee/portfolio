import './homepage.scss'
import { motion } from 'framer-motion'


const textVariants = {
  initial: {
    x: -50,
    opacity: 0
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.65,
      staggerChildren: 0.2
    }
  }
}

const sliderVariants = {
  initial: {
    x: 0
  },
  animate: {
    // moves 220% of the parent container, in the left direction
    x: '-250%',
    transition: {
      repeat: Infinity,
      repeatType: 'mirror',
      duration: 10
    }
  }
}

const blobVariants = {
  initial: {
    scale: 0.5,
    rotate: 45,
    opacity: 0
  },
  animate: {
    rotate: 0, 
    scale: 1,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 260,
      damping: 60,
    }
  }
}

const Homepage = () => {
  return (
    <div className='homepage'>
        <motion.div className='text' variants={textVariants} initial='initial' whileInView='animate'>
          <motion.h2 variants={textVariants}>
            HI THERE! I'M
          </motion.h2>
          <motion.h1 variants={textVariants}>
            Kayvan Dharsee
          </motion.h1>
          <motion.h2 variants={textVariants}> 
            I'M A MCGILL STUDENT BASED IN TORONTO, ONTARIO
          </motion.h2>
        </motion.div>
      <motion.div className="sliding-text" variants={sliderVariants} initial='initial' animate='animate'>
        &nbsp;&nbsp;I CODE, I LIFT, I COOK&nbsp;&nbsp;
      </motion.div>
      <motion.div className='image' variants={blobVariants} initial='initial' whileInView='animate'>
          <div className='blob'></div>
      </motion.div>
    </div>
  )
}

export default Homepage
