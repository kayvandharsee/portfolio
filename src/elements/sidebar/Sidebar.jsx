import { useState } from 'react'
import { motion } from 'framer-motion'
import './sidebar.scss'
import ButtonSwitch from './buttonSwitch/ButtonSwitch'
import Links from './links/Links'

const variants = {
  open: {
    // set to a large value to overflow the width boundary set in scss file, creating a rectangle
    clipPath: "circle(1200px at 50px 50px)",
    transition: {
      type: "spring",
      stiffness: 20
    }
  },
  close: {
    clipPath: "circle(25px at 50px 50px)",
    transition: {
      delay: 0.2,
      type: "spring",
      stiffness: 400,
      damping: 40
    }
  }
}

const Sidebar = () => {
  const [open, setOpen] = useState(false)

  return (
    <motion.div className='sidebar' animate={open ? 'open' : 'close'}>
        <motion.div className='background' variants={variants}>
            <Links />
        </motion.div>
        <ButtonSwitch setOpen = {setOpen} />
    </motion.div>
  )
}

export default Sidebar
