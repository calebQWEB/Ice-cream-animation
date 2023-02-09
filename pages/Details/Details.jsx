import React from 'react'
import { motion } from 'framer-motion'
import './details.css'
import { iceCream2 } from '../../assets'

const Details = () => {

    const transition = { duration: 1.4, ease: [0.6, 0.01, -0.05, 0.9] }
    return (
        <motion.section className="ice-cream__details">
            <div className='ice-cream__details-main'>
                <motion.article className='ice-cream__details-container'
                    initial={{ opacity: 0 }}

                    animate={{
                        opacity: 1,
                        transition: { delay: 1 }
                    }}

                    exit={{
                        opacity: 0,
                        transition: { delay: 0.8 }
                    }}>

                    <motion.h1 className='ice-cream__details-header'
                        exit={{
                            x: 100,
                            opacity: 0,
                            transition: {
                                delay: 0.5,
                                duration: 0.5,
                                type: 'tween'
                            }
                        }}>VANILLA</motion.h1>

                    <motion.p
                        exit={{
                            x: 50,
                            opacity: 0,
                            transition: {
                                duration: 0.5,
                                type: 'tween'
                            }
                        }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</motion.p>
                </motion.article>

                <picture>
                    <motion.img src={iceCream2} alt='ice-cream' className='ice-cream__details-image'
                        initial={{ scale: 1.2, y: 30 }}

                        animate={{
                            x: -100,
                            scale: 1,
                            transition: { delay: .2, ...transition }
                        }}

                        exit={{
                            x: 7,
                            transition: { delay: 0.6, ...transition }
                        }} />
                </picture>
            </div>
        </motion.section>
    )
}

export default Details