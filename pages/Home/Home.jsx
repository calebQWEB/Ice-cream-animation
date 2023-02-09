import React, { useState } from 'react'
import './home.css'
import { motion } from 'framer-motion'
import { iceCream2 } from '../../assets'
import { Link } from 'react-router-dom'

const Home = () => {

    const transition = { duration: 0.6, ease: [0.43, 0.13, 0.23, 0.96] }

    return (
        <motion.main className='ice-cream'>
            <div className='ice-cream__main'>
                <motion.div className='ice-cream__cream-container'
                    exit={{
                        opacity: 0,
                        transition: { duration: 0.5 }
                    }}

                    initial={{ opacity: 0 }}

                    animate={{
                        opacity: 1,
                        transition: { duration: 0.5 }
                    }}>

                    <h1 className='ice-cream__header'>VANILLA</h1>
                </motion.div>
                <picture>
                    <Link to='/details'>
                        <motion.img src={iceCream2} alt='ice-cream' className='ice-cream__image'
                            whileHover={{ scale: 1.2 }}
                            transition={transition} />
                    </Link>
                </picture>
            </div>
        </motion.main>
    )
}

export default Home