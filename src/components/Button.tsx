import React, { FC } from "react"

type Props = {
  bgColor: string
  color: string
  size: string
  text: string
  borderRadius: string
}
const Button: FC<Props> = ({ bgColor, color, size, text, borderRadius }) => {
  return (
    <button
      className={`text-${size} p-3 hover:drop-shadow-xl`}
      style={{
        backgroundColor: bgColor,
        color,
        borderRadius,
      }}>
      {text}
    </button>
  )
}

export default Button
