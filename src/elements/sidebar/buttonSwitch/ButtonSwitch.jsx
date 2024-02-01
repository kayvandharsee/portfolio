import React from 'react'
import { motion } from 'framer-motion'

const ButtonSwitch = ({ setOpen }) => {
  return (
    <button onClick={() => setOpen(prev => !prev)}>
      <svg width='20' height='53' viewBox='0 0 22 22'>
        <motion.path 
          strokeWidth='3' 
          stroke='white' 
          strokeLinecap='round' 
          // SVG path of crossed and straight line
          variants={{ 
            close: { d: "M 2 2.5 L 20 2.5" },
            open: { d: "M 3 16.5 L 17 2.5" },
          }}
        />
        <motion.path 
          strokeWidth='3' 
          stroke='white' 
          strokeLinecap='round' 
          d = "M 2 9.423 L 20 9.423"
          variants={{
            close: { opacity: 1 },
            open: { opacity: 0 }
          }}
        />
        <motion.path 
          strokeWidth='3' 
          stroke='white' 
          strokeLinecap='round' 
          variants={{
            close: { d: "M 2 16.346 L 20 16.346" },
            open: { d: "M 3 2.5 L 17 16.346" }
          }}
        />
      </svg>
    </button>
  )
}

export default ButtonSwitch
