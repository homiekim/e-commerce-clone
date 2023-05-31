import React from 'react'

import styles from './button.module.scss'

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  text: string
  isColor?: boolean
}

const Button = ({ text, isColor = true, ...props }: Props) => {
  return (
    <button className={`${styles.button} ${isColor ? styles.color : styles.outline}`} {...props}>
      {text}
    </button>
  )
}

export default Button
