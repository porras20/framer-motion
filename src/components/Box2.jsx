import { motion } from 'framer-motion'
import React, { useState } from 'react'


export default function Box2() {

    const [isAnimate, setIsAnimate] = useState(false);

  return (
    <div className='box-container'>
        <motion.div 
            className='box'
            drag
            dragConstraints={{
                right: 100,
                left: 10,
                top: 100,
                bottom: 100
            }}
            whileHover={{
                scale: 0.5,
            }}
            // whileTap={{
            //     scale: .5
            // }}
            >
            
        </motion.div>
    </div>
  )
}
