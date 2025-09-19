"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { Progress } from "@/components/ui/progress"
import { CheckCircle, Sparkles } from "lucide-react"

interface QuizStageProps {
  onNext: () => void
}

const quizQuestions = [
  {
    question: "What's my favorite way of annoying you?",
    options: [
      "Stealing your snacks when you're not looking 😏",
      "Playing the same song on repeat until you sing along",
      "Tickling you at the most random moments",
      "Making terrible puns that make you groan and laugh",
    ],
  },
  {
    question: "If I could eat one thing you cook forever, what would it be?",
    options: [
      "Your amazing chocolate chip cookies 🍪",
      "That perfect pasta dish you make",
      "Your legendary birthday cake",
      "Those breakfast pancakes that are pure magic",
    ],
  },
  {
    question: "What's something about me that makes you smile?",
    options: [
      "The way I get excited about little things",
      "How I always remember your favorite things",
      "My terrible dance moves that somehow work",
      "The random compliments I give you",
    ],
  },
]

export default function QuizStage({ onNext }: QuizStageProps) {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [answers, setAnswers] = useState<string[]>([])
  const [selectedAnswer, setSelectedAnswer] = useState("")
  const [showSuccess, setShowSuccess] = useState(false)
  const [isComplete, setIsComplete] = useState(false)

  const handleAnswerSelect = (value: string) => {
    setSelectedAnswer(value)
  }

  const handleNextQuestion = () => {
    if (!selectedAnswer) return

    const newAnswers = [...answers, selectedAnswer]
    setAnswers(newAnswers)
    setSelectedAnswer("")

    if (currentQuestion < quizQuestions.length - 1) {
      setCurrentQuestion(currentQuestion + 1)
    } else {
      setIsComplete(true)
      setShowSuccess(true)
      setTimeout(() => {
        onNext()
      }, 3000)
    }
  }

  const progress = ((currentQuestion + (selectedAnswer ? 1 : 0)) / quizQuestions.length) * 100

  if (showSuccess) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-green-100 via-teal-50 to-blue-100 flex items-center justify-center p-4">
        <motion.div
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ duration: 0.8, ease: "backOut" }}
          className="text-center"
        >
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              rotate: [0, 10, -10, 0],
            }}
            transition={{
              duration: 2,
              repeat: Number.POSITIVE_INFINITY,
            }}
            className="text-8xl mb-6"
          >
            ✨
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }}>
            <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
            <h2 className="font-pacifico text-4xl md:text-6xl text-primary mb-4">Perfect Answers!</h2>
            <p className="font-dancing text-xl md:text-2xl text-secondary">
              You know me so well! Time for your reward...
            </p>
          </motion.div>

          {/* Sparkle animation */}
          <div className="absolute inset-0 pointer-events-none">
            {[...Array(15)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                }}
                animate={{
                  scale: [0, 1, 0],
                  rotate: [0, 180, 360],
                  opacity: [0, 1, 0],
                }}
                transition={{
                  duration: 2,
                  repeat: Number.POSITIVE_INFINITY,
                  delay: Math.random() * 2,
                }}
              >
                <Sparkles className="w-6 h-6 text-yellow-400" />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-100 via-pink-50 to-orange-100 p-4">
      {/* Floating decorative elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute text-3xl"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [-20, 20, -20],
              x: [-10, 10, -10],
              rotate: [-15, 15, -15],
            }}
            transition={{
              duration: 4 + Math.random() * 2,
              repeat: Number.POSITIVE_INFINITY,
              delay: Math.random() * 2,
            }}
          >
            {i % 3 === 0 ? "💭" : i % 3 === 1 ? "❓" : "💝"}
          </motion.div>
        ))}
      </div>

      <motion.div
        className="fixed top-8 right-8 z-10"
        animate={{
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 1.5,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
      >
        <div className="relative w-20 h-20 md:w-24 md:h-24">
          <div className="absolute inset-0 bg-gradient-to-br from-pink-400 to-red-400 rounded-full transform rotate-45 shadow-lg"></div>
          <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 w-12 h-12 md:w-14 md:h-14 bg-gradient-to-br from-pink-400 to-red-400 rounded-full shadow-lg"></div>
          <div className="absolute -top-2 right-1/2 transform translate-x-1/2 w-12 h-12 md:w-14 md:h-14 bg-gradient-to-br from-pink-400 to-red-400 rounded-full shadow-lg"></div>
          <div className="absolute inset-2 rounded-full overflow-hidden border-2 border-white/30">
            <img
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-NlpZmEFZedj34K4uf2SUXcmHH5puYs.png"
              alt="Karamjeet"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </motion.div>

      <div className="max-w-2xl mx-auto pt-8">
        {/* Progress section */}
        <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} className="mb-8">
          <div className="flex items-center justify-between mb-4">
            <h1 className="font-sans font-bold text-2xl md:text-4xl text-primary">Let's Play a Game! 🎮</h1>
            <span className="font-sans text-lg text-muted-foreground font-medium">
              {currentQuestion + 1} of {quizQuestions.length}
            </span>
          </div>
          <Progress value={progress} className="h-3" />
        </motion.div>

        {/* Question card */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentQuestion}
            initial={{ opacity: 0, x: 50, scale: 0.9 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: -50, scale: 0.9 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
          >
            <Card className="border-2 border-primary/20 shadow-xl bg-card/95 backdrop-blur-sm">
              <CardHeader className="text-center pb-4">
                <motion.div
                  animate={{
                    rotate: [0, 5, -5, 0],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Number.POSITIVE_INFINITY,
                    repeatDelay: 2,
                  }}
                  className="text-4xl mb-4"
                >
                  🤔
                </motion.div>
                <CardTitle className="font-sans font-semibold text-xl md:text-2xl text-foreground leading-relaxed">
                  {quizQuestions[currentQuestion].question}
                </CardTitle>
              </CardHeader>

              <CardContent className="space-y-4">
                <RadioGroup value={selectedAnswer} onValueChange={handleAnswerSelect}>
                  {quizQuestions[currentQuestion].options.map((option, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 + 0.2 }}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <Label
                        htmlFor={`option-${index}`}
                        className="flex items-center space-x-3 p-4 rounded-lg border-2 border-border hover:border-primary/50 cursor-pointer transition-all duration-200 bg-muted/30 hover:bg-muted/50"
                      >
                        <RadioGroupItem value={option} id={`option-${index}`} />
                        <span className="font-sans text-base md:text-lg leading-relaxed flex-1 font-medium">
                          {option}
                        </span>
                      </Label>
                    </motion.div>
                  ))}
                </RadioGroup>

                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: selectedAnswer ? 1 : 0.5 }}
                  transition={{ duration: 0.3 }}
                  className="pt-6"
                >
                  <Button
                    onClick={handleNextQuestion}
                    disabled={!selectedAnswer}
                    size="lg"
                    className="w-full font-sans font-semibold text-lg md:text-xl py-6 bg-gradient-to-r from-primary to-secondary hover:from-secondary hover:to-primary transition-all duration-300 shadow-lg hover:shadow-xl disabled:opacity-50"
                  >
                    {currentQuestion < quizQuestions.length - 1 ? (
                      <>
                        Next Question
                        <motion.span
                          animate={{ x: [0, 5, 0] }}
                          transition={{
                            duration: 1,
                            repeat: Number.POSITIVE_INFINITY,
                            repeatDelay: 2,
                          }}
                          className="ml-2"
                        >
                          →
                        </motion.span>
                      </>
                    ) : (
                      <>
                        Finish Quiz
                        <motion.span
                          animate={{
                            rotate: [0, 10, -10, 0],
                          }}
                          transition={{
                            duration: 2,
                            repeat: Number.POSITIVE_INFINITY,
                            repeatDelay: 1,
                          }}
                          className="ml-2"
                        >
                          ✨
                        </motion.span>
                      </>
                    )}
                  </Button>
                </motion.div>
              </CardContent>
            </Card>
          </motion.div>
        </AnimatePresence>

        {/* Decorative bottom elements */}
        <motion.div
          className="flex justify-center mt-8 space-x-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
        >
          {[...Array(3)].map((_, i) => (
            <motion.div
              key={i}
              animate={{
                y: [-5, 5, -5],
                rotate: [0, 10, -10, 0],
              }}
              transition={{
                duration: 2 + i * 0.5,
                repeat: Number.POSITIVE_INFINITY,
                delay: i * 0.3,
              }}
              className="text-2xl"
            >
              {i === 0 ? "🎯" : i === 1 ? "🎪" : "🎨"}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  )
}
