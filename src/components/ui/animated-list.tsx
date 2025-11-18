"use client"

import React, {
  ComponentPropsWithoutRef,
  useEffect,
  useMemo,
  useState,
  useRef,
} from "react"
import { AnimatePresence, motion, MotionProps, useInView } from "motion/react"

import { cn } from "@/lib/utils"

export function AnimatedListItem({ children }: { children: React.ReactNode }) {
  const animations: MotionProps = {
    initial: { scale: 0, opacity: 0 },
    animate: { scale: 1, opacity: 1, originY: 0 },
    exit: { scale: 0, opacity: 0 },
    transition: { type: "spring", stiffness: 350, damping: 40 },
  }

  return (
    <motion.div {...animations} layout className="mx-auto w-full">
      {children}
    </motion.div>
  )
}


export interface AnimatedListProps extends ComponentPropsWithoutRef<"div"> {
  children: React.ReactNode
  delay?: number
  startOnView?: boolean
}

export const AnimatedList = React.memo(
  ({ children, className, delay = 100, startOnView = true, ...props }: AnimatedListProps) => {
    const childrenArray = useMemo(
      () => React.Children.toArray(children),
      [children]
    )
    const listRef = useRef<HTMLDivElement>(null)
    const isInView = useInView(listRef, {
      amount: 0.1,
      once: true,
    });

    const [index, setIndex] = useState(-1);
    const [hasStarted, setHasStarted] = useState(false);

    useEffect(() => {
      if (!startOnView) {
        setHasStarted(true);
      } else if (isInView && !hasStarted) {
        setHasStarted(true);
        setIndex(0);
      }
    }, [isInView, startOnView, hasStarted]);


    useEffect(() => {
      if (!hasStarted) return;

      if (index < childrenArray.length - 1) {
        const timeout = setTimeout(() => {
          setIndex((prevIndex) => prevIndex + 1);
        }, delay);

        return () => clearTimeout(timeout)
      }
    }, [index, delay, childrenArray.length, hasStarted])

    const itemsToShow = useMemo(() => {
      const finalIndex = hasStarted ? index : (startOnView ? -1 : childrenArray.length - 1);
      const result = childrenArray.slice(0, finalIndex + 1).reverse();
      return result
    }, [index, childrenArray, hasStarted, startOnView])

    return (
      <div
        ref={listRef}
        className={cn(`flex flex-col items-center gap-4`, className)}
        {...props}
      >
        <AnimatePresence>
          {itemsToShow.map((item) => (
            <AnimatedListItem key={(item as React.ReactElement).key}>
              {item}
            </AnimatedListItem>
          ))}
        </AnimatePresence>
      </div>
    )
  }
)

AnimatedList.displayName = "AnimatedList"