import './hero.scss'
import {motion} from "framer-motion"

const textVariants = {
    initial: {
        x: -500,
        opacity: 0,
    },
    animate: {
        x: 0,
        opacity: 1,
        transition: {
            duration: 1,
            staggerChilderen: 0.1
        }
    },
    scrollButton: {
        opacity: 0,
        y: 10,
        transition: {
            duration: 2,
            repeat: Infinity
        }
    }
}

const sliderVariants = {
    initial: {
        x: 0,
    },
    animate: {
        x: "-220%",
        transition: {
            duration: 20,
            repeat: Infinity,
            repeatType:"mirror"
        }
    },
    scrollButton: {
        opacity: 0,
        y: 10,
        transition: {
            duration: 2,
            repeat: Infinity
        }
    }
}

const Hero = () => {
    return (
        <div className="hero">
            <div className="wrapper">
                <motion.div className="text-container" variants={textVariants} initial="initial" animate="animate">
                    <motion.h2 variants={textVariants}>Riley Moore</motion.h2>
                    <motion.h1 variants={textVariants}>Software Engineer</motion.h1>
                    <motion.div variants={textVariants} className="buttons">
                        <motion.button variants={textVariants}>See the Latest Work</motion.button>
                        <motion.button variants={textVariants}>Contact Me</motion.button>
                    </motion.div>
                    <motion.img variants={textVariants} src="/scroll.png" animate="scrollButton"></motion.img>
                </motion.div>
            </div>
            <motion.div className="sliding-text-container" variants={sliderVariants} initial="initial" animate="animate">
                Programmer
                Investor
                Business Owner 
            </motion.div>
            <div className="image-container">
                <img src="/hero.png" alt=""></img>
            </div>
        </div>
    )
}

export default Hero