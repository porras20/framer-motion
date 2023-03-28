import { motion, useAnimation } from 'framer-motion'
import React, { useState } from 'react'

export default function Box5() {

    const control = useAnimation();

  return (
    <div className='box-container'>
        <button onClick={() => {
            control.start({
                x: 800,
                transition: {duration: 2}
            })
        }}>Move Right</button>
        <button onClick={() => {
            control.start({
                x: 0,
                transition: {duration: 2}
            })
        }}>Move left</button>
        <button onClick={() => {
            control.start({
                borderRadius: "50%",
                transition: {duration: 0.5}
            })
        }}>circle</button>
        <button onClick={() => {
            control.start({
                borderRadius: "0%",
                transition: {duration: 1}
            })
        }}>Square</button>
        <button onClick={() => {
            control.stop()
        }}>Stop</button>
        <motion.div 
            className='box'
            animate={control}
            >
            
        </motion.div>
    </div>
  )
}
