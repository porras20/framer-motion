import { motion } from 'framer-motion'
import React, { useState } from 'react'


export default function Box1() {

    const [isAnimate, setIsAnimate] = useState(false);

  return (
    <div className='box-container'>
        <motion.div 
            className='box'
            animate={{
                x: isAnimate ? 800 : 0,
                opacity: isAnimate ? 1 : 0.5,
                rotate: isAnimate ? 360 : 0
            }}
            initial={{
                opacity: 0.1,
            }}
            transition={{
                type: "tween",
                duration: 1
                // stiffness: 60,
                // damping: 100
            }}
            onClick={() => setIsAnimate(!isAnimate)}
            >
            
        </motion.div>
    </div>
  )
}
