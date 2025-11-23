import { ComponentPropsWithoutRef, useEffect, useRef } from "react"
import { useInView, useMotionValue } from "motion/react"
import { animate } from "motion"

import { cn } from "@/lib/utils"

interface NumberTickerProps extends ComponentPropsWithoutRef<"span"> {
  value: number
  startValue?: number
  direction?: "up" | "down"
  delay?: number
  decimalPlaces?: number
  duration?: number
  startOnView?: boolean
}

export function NumberTicker({
                               value,
                               startValue = 0,
                               direction = "up",
                               delay = 0,
                               className,
                               decimalPlaces = 0,
                               duration = 0.8,
                               startOnView = true,
                               ...props
                             }: NumberTickerProps) {
  const ref = useRef<HTMLSpanElement>(null)
  const motionValue = useMotionValue(
    direction === "down" ? value : startValue
  )
  const isInView = useInView(ref, { once: true, margin: "0px" })

  const shouldStart = startOnView ? isInView : true;

  useEffect(() => {
    if (shouldStart) {
      const timer = setTimeout(() => {
        const target = direction === "down" ? startValue : value
        animate(motionValue, target, { duration, easing: "easeOut" })
      }, delay * 1000)
      return () => clearTimeout(timer)
    }
  }, [motionValue, shouldStart, delay, value, direction, startValue, duration])

  useEffect(() => {
    const unsubscribe = motionValue.on("change", (latest) => {
      if (ref.current) {
        ref.current.textContent = Intl.NumberFormat("en-US", {
          minimumFractionDigits: decimalPlaces,
          maximumFractionDigits: decimalPlaces,
        }).format(Number(latest.toFixed(decimalPlaces)))
      }
    })
    return unsubscribe
  }, [motionValue, decimalPlaces])

  return (
    <span
      ref={ref}
      className={cn(
        "inline-block tracking-wider text-black text-5xl md:text-8xl xl:text-9xl font-bold tabular-nums dark:text-white",
        className
      )}
      {...props}
    >
      {startValue}
    </span>
  )
}