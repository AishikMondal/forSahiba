"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { Progress } from "@/components/ui/progress"

interface LoadingScreenProps {
  onNext: () => void
}

export default function LoadingScreen({ onNext }: LoadingScreenProps) {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer)
          setTimeout(onNext, 500)
          return 100
        }
        return prev + 2
      })
    }, 60)

    return () => clearInterval(timer)
  }, [onNext])

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-100 via-purple-50 to-teal-100 flex flex-col items-center justify-center p-4">
      {/* Floating balloons */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute text-4xl"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [-20, -40, -20],
              x: [0, 10, 0],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Number.POSITIVE_INFINITY,
              delay: Math.random() * 2,
            }}
          >
            🎈
          </motion.div>
        ))}
      </div>

      {/* Main content */}
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.8, ease: "backOut" }}
        className="text-center z-10"
      >
        <motion.div
          animate={{
            rotate: [0, -10, 10, -10, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 2,
            repeat: Number.POSITIVE_INFINITY,
            repeatDelay: 1,
          }}
          className="text-8xl mb-8"
        >
          🎂
        </motion.div>

        <h1 className="font-pacifico text-4xl md:text-6xl text-primary mb-4">Loading Your Surprise...</h1>

        <p className="font-dancing text-xl md:text-2xl text-muted-foreground mb-8">
          Something magical is coming your way!
        </p>
      </motion.div>

      {/* Progress bar */}
      <div className="w-full max-w-md z-10">
        <Progress value={progress} className="h-3 mb-4" />
        <p className="text-center font-dancing text-lg text-muted-foreground">{progress}% Complete</p>
      </div>

      {/* Confetti */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-primary rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: "-10px",
            }}
            animate={{
              y: ["0vh", "110vh"],
              rotate: [0, 360],
              opacity: [1, 0],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Number.POSITIVE_INFINITY,
              delay: Math.random() * 3,
              ease: "linear",
            }}
          />
        ))}
      </div>
    </div>
  )
}
