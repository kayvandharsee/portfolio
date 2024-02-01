import Sidebar from "../sidebar/Sidebar"
import { motion } from "framer-motion"
import "./navbar.scss"

const Navbar = () => {

    const variants = {
        initial: {
            y: -10,
            opacity: 0
        },
        animate: {
            y: 0,
            opacity: 1,
            transition: {
                duration: 0.65,
                staggerChildren: 0.2
            }
        }
    }
    return(
        <div className="navbar">
            <Sidebar />
            <div className="wrapper">
                <motion.div className="name" variants={variants} initial='initial' whileInView='animate'>
                    Kayvan Dharsee
                    </motion.div>
                <motion.div className="socials" initial = 'initial' 
                whileInView = 'animate'
                variants = {variants}>
                    <motion.a variants = {variants} href="https://www.instagram.com/kayvan.dharsee/" target="_blank">
                        <img src="insta-port.png" alt="links to instagram account" />
                    </motion.a>
                    <motion.a variants = {variants} href="https://github.com/kayvandharsee/" target="_blank">
                        <img src="github-port.png" alt="links to github account" />
                    </motion.a>
                    <motion.a variants = {variants} href="https://www.linkedin.com/in/kayvan-dharsee-a41973297/" target="_blank">
                        <img src="linked-port.png" alt="links to linkedin account" />
                    </motion.a>
                </motion.div>
            </div>
        </div>
    )
}

export default Navbar