import { animate, motion } from 'framer-motion'
import React, { useState } from 'react'


export default function Box3() {

    const [boxes, setBoxes] = useState([
        1,2,3
    ]);

    const boxVariant = {
        hidden: {
            x: "-100vw"
        },
        visible: {
            x: 0,
            transition:{
                delay: 1,
                delayChildren: 1,
                staggerChildren: 0.3
            }
        }
    }

    const listVariants = {
        hidden: {
            x: -10,
            opacity: 0
        },
        visible: {
            x: 0,
            opacity: 1,
            
        }
    }
    // const boxVariant ={
    //     lion: {
    //         opacity: 0,
    //         x: 100,
    //         scale: 1.5,
    //         backgroundColor: 'yellow'
    //     },
    //     lion2: {
    //         opacity: 1,
    //         x: 800,
    //         scale: 0.5,
    //         backgroundColor: 'blue'
    //     }
    // }

  return (
    <div className='box-container'>
        <motion.div
            className='box'
            variants={boxVariant}
            animate="visible"
            initial="hidden"
            //Variants
            // variants={boxVariant}
            // initial="lion"
            // animate="lion2"
            // transition={
            //    { duration: 1}
            // }
            // animate={{ x: 0 }}


            // initial={{x: -1000}}
           
            >
            {boxes.map(box => {
                return <motion.li
                    key={box}
                    className='boxItem'
                    variants={listVariants}
                    >
                    </motion.li>
            })}
        </motion.div>
    </div>
  )
}
