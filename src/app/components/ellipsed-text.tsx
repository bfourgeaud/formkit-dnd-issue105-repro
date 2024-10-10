"use client"

import { cn } from "@/lib/utils"
import { ComponentProps, MouseEventHandler, useState } from "react"

interface Props extends ComponentProps<"span"> {
  nbLines?: number
  defaultOpened?: boolean
}

export const EllipsedText = ({
  nbLines,
  defaultOpened = false,
  className,
  onClick,
  ...props
}: Props) => {
  const [clampValue, setClampValue] = useState(
    defaultOpened ? undefined : nbLines
  )

  const handleClick: MouseEventHandler<HTMLSpanElement> = (e) => {
    setClampValue((prev) => {
      if (prev) return undefined
      return nbLines
    })
    onClick?.(e)
  }

  return (
    <span
      className={cn("cursor-pointer", className)}
      style={{
        overflow: "hidden",
        display: "-webkit-box",
        WebkitLineClamp: clampValue,
        WebkitBoxOrient: "vertical",
      }}
      {...props}
      onClick={handleClick}
    />
  )
}
