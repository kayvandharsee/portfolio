import { useState, useEffect } from 'react'
import './cursor.scss'
import { motion } from 'framer-motion'

const Cursor = () => {

    const [position, setPosition] = useState({ x:0, y:0 })

    useEffect(() => {
        // function taking event as param and setting mouse x and y position
        const mouse = (e) =>{
            setPosition({ x: e.clientX, y: e.clientY })
        }

        // // cannot useRef as element is our screen
        window.addEventListener("mousemove", mouse)

        // cleanup function
        return () => {
            window.removeEventListener("mousemove", mouse)
        }
    }, [])

    // empty square brackets above are a dependancy, they make sure the function is only called if the mouse position changes

    return (
        <motion.div className='cursor' animate={{ x: position.x + 10, y: position.y + 10 }}></motion.div>
    )
}

export default Cursor
