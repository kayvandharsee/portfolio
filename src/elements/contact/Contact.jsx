import { useRef, useState } from 'react'
import './contact.scss'
import { motion, useInView } from 'framer-motion'
import emailjs from '@emailjs/browser';

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

const svgVariants = {
    initial: {
        opacity:1
    },
    animate: {
        opacity: 0,
        transition: {
            delay: 1.5,
            duration: 1
        }
    }
}

const formVariants = {
    initial: {
        opacity:0
    },
    animate: {
        opacity: 1,
        transition: {
            delay: 2.5,
            duration: 1
        }
    }
}

const pathVariants = {
    initial: {
        pathLength: 0
    },
    animate: {
        pathLength:1,
        transition: {
            duration: 2.5
        }
    }
}

const Contact = () => {

    const [buttonDisabled,setButtonDisabled] = useState(false)

    const disableButton = () => {
        setButtonDisabled(true)
    }

    const form = useRef()

    const [error, setError] = useState(false)

    const [success, setSuccess] = useState(false)

    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_qmw3yno', 'template_xmbz9e6', form.current, 'wwO_tTkmgAAVRlPdk')
          .then((result) => {
              setSuccess(true)
              disableButton()

          }, (error) => {
              setError(true)
          });
      };

    const ref = useRef()

    const isInView = useInView(ref, { margin: '-150px'})

    return (
        <div className='contact' ref={ref}>
            <motion.div className='text-container' variants={textVariants} initial='initial' whileInView='animate'>
                <motion.h1 variants={textVariants}>Let's Connect</motion.h1>
                <motion.div className="info" variants={textVariants}>
                    <h2>Mail</h2>
                    <span>dharsee.kayvan@gmail.com</span>
                </motion.div>
                <motion.div className="info" variants={textVariants}>
                    <h2>Phone</h2>
                    <span>+1-647-970-0720</span>
                </motion.div>
            </motion.div>
            <div className='form-container'>
                <motion.div className='svg' variants={svgVariants} initial='initial' animate={isInView && 'animate'}>
                    <svg width='600px' height='600px' viewBox='-3.75 0.5 32.666 32.666'>
                        <motion.path strokeWidth={0.2} 
                        fill='none' 
                        variants={pathVariants}
                        initial= 'initial'
                        animate={isInView && 'animate'}
                        d="M16 1.1L4 5.9c-1.1.4-2 1.8-2 3v8.7c0 1.2.9 1.8 2 1.4l12-4.8c1.1-.4 2-1.8 2-3V2.5c0-1.2-.9-1.8-2-1.4zm.6 2.6l-6 9.3-6.7-4.5c-.1-.1-.4-.4-.2-.7.2-.4.7-.2.7-.2l6.3 2.3s4.8-6.3 5.1-6.7c.1-.2.4-.3.7-.1.3.2.2.5.1.6z"
                        />
                    </svg>
                </motion.div>
                <motion.form ref={form} onSubmit={sendEmail} variants={formVariants} initial='initial' animate={isInView && 'animate'}>
                    <input className='name' required placeholder='Name' name='name'/>
                    <input className='email' required placeholder='Email Address' name='email'/>
                    <textarea rows={8} required placeholder='Message' name='message'/>
                    <button disabled={buttonDisabled} className={buttonDisabled ? 'button-disabled' : 'button-enabled'}>
                        Send
                    </button>
                    {error && "Error"}
                    {success && "Success"}
                </motion.form>
            </div>
        </div>
    )
}

export default Contact
