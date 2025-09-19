"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import LoadingScreen from "@/components/LoadingScreen"
import BirthdayPage from "@/components/BirthdayPage"
import QuizStage from "@/components/QuizStage"
import GiftBoxStage from "@/components/GiftBoxStage"
import LetterStage from "@/components/LetterStage"

export default function Home() {
  const [currentStage, setCurrentStage] = useState(0)

  const stages = [
    <LoadingScreen key="loading" onNext={() => setCurrentStage(1)} />,
    <BirthdayPage key="birthday" onNext={() => setCurrentStage(2)} />,
    <QuizStage key="quiz" onNext={() => setCurrentStage(3)} />,
    <GiftBoxStage key="giftbox" onNext={() => setCurrentStage(4)} />,
    <LetterStage key="letter" onNext={() => setCurrentStage(0)} />,
  ]

  return (
    <main className="min-h-screen overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentStage}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 1.1 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="min-h-screen"
        >
          {stages[currentStage]}
        </motion.div>
      </AnimatePresence>
    </main>
  )
}
