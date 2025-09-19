"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

interface LetterStageProps {
  onNext: () => void
}

const letterText = `🌹 "Some people are beautiful by looks… but you, Karamjeet, are beautiful by soul too 💫✨." 🌹

💫 "No language has words to describe you… only vibes can, and they're brighter than any song 🎶❤️, Karamjeet." 💫

🌙 "The world calls it beauty, I call it Karamjeet 🌸💖." 🌙

🌸✨ Happy Birthday Karamjeet! ✨🌸

Happiesttt birthday to you 🥳🎂💖 — you're such a pure soul 🌼, a jolly heart 💫, and honestly one of the most amazing people I've ever met 🌍❤️.

I know life can feel heavy sometimes — money worries, pressure, and all the future stuff 🕊️📚… but Karamjeet, I'm so proud of you 🙌💪. The way you love and support your mom 👩‍👧 and how you work so hard to make her dreams come true shows what a strong, beautiful person you are 🌟💐. One day you'll give her the happiest life, and she'll be so proud of you 🤍🥹.

I'm sorry if I ever hurt you or made you feel bad 🙏💔. Maybe some things were misunderstood, or maybe I teased too much 😅 (like that broken umbrella rain day 😂🌧️). Still, deep down I truly admire you 💕 — your ambition 👩‍💻, your cooking magic 👩‍🍳🍫 (those brownies and cakes are forever in my heart 😋), your kindness, and your bright soul 🌈💫.

Every moment I've spent with you has been a special part of my life — I won't forget them 🥹✨. I really want to make many more happy memories with you, whenever you feel ready and well 💞. If you ever need help or someone to talk to, please tell me — I'll do my best to handle it and be there for you 🫂💪. You don't have to carry everything alone.

Also — small (funny) question: when am I giving you the treat? 😏🍕 I can't wait to hang out again, eat something delicious, and laugh like idiots. I promise this time it's on me — no umbrella drama, I'll take care of everything 😂💸🍰.

You're too pretty 🥰✨ and too amazing 🧿🌸. Words sometimes feel small — maybe Karan Aujla's vibe fits best 🎶💖 — but just know I admire you a lot, quietly and truly 🥹. I'm here for you, cheering for every dream you chase 🚀, and I quietly hope we can get closer in a way that feels safe and nice for you.

So keep smiling like you do 😍💫, keep chasing your goals 🚀, and keep shining like the star you are ⭐🌙. I hope this year gives you endless happiness, success, and lovely little moments you'll always remember 🥰🎉.

With lots of admiration and a silly heart,
💙 — Aishik 💙

P.S. If this letter made you smile even a little, my mission is complete 😉🌸`

export default function LetterStage({ onNext }: LetterStageProps) {
  const [displayedText, setDisplayedText] = useState("")
  const [currentIndex, setCurrentIndex] = useState(0)
  const [showCandle, setShowCandle] = useState(false)
  const [candleLit, setCandleLit] = useState(true)
  const [showSmoke, setShowSmoke] = useState(false)
  const [showFireworks, setShowFireworks] = useState(false)
  const [showFinalMessage, setShowFinalMessage] = useState(false)

  // Typing effect
  useEffect(() => {
    if (currentIndex < letterText.length) {
      const timer = setTimeout(() => {
        setDisplayedText(letterText.slice(0, currentIndex + 1))
        setCurrentIndex(currentIndex + 1)
      }, 30) // Typing speed

      return () => clearTimeout(timer)
    } else {
      // Show candle after typing is complete
      setTimeout(() => setShowCandle(true), 1000)
    }
  }, [currentIndex])

  const handleCandleBlow = () => {
    if (!candleLit) return

    setCandleLit(false)
    setShowSmoke(true)
    setShowFireworks(true)

    setTimeout(() => {
      setShowFinalMessage(true)
    }, 2000)

    setTimeout(() => {
      onNext()
    }, 6000)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-50 p-4 relative overflow-hidden">
      {/* Parchment texture overlay */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cg fill='%23d4a574' fillOpacity='0.4'%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />

      {/* Floating decorative elements */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute text-2xl opacity-20"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [-20, 20, -20],
              rotate: [-10, 10, -10],
              opacity: [0.1, 0.3, 0.1],
            }}
            transition={{
              duration: 6 + Math.random() * 2,
              repeat: Number.POSITIVE_INFINITY,
              delay: Math.random() * 3,
            }}
          >
            {i % 3 === 0 ? "💌" : i % 3 === 1 ? "🌸" : "✨"}
          </motion.div>
        ))}
      </div>

      <div className="max-w-4xl mx-auto pt-8">
        {/* Letter Card */}
        <motion.div
          initial={{ opacity: 0, y: 50, rotateX: -15 }}
          animate={{ opacity: 1, y: 0, rotateX: 0 }}
          transition={{ duration: 1, ease: "backOut" }}
        >
          <Card className="bg-gradient-to-br from-amber-50 to-yellow-50 border-2 border-amber-200 shadow-2xl relative overflow-hidden">
            {/* Decorative border */}
            <div className="absolute inset-0 border-8 border-amber-300/20 rounded-lg pointer-events-none" />
            <div className="absolute inset-2 border-4 border-amber-400/10 rounded-lg pointer-events-none" />

            <CardContent className="p-8 md:p-12">
              {/* Letter content */}
              <div className="relative">
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5 }}
                  className="font-dancing text-lg md:text-xl leading-relaxed text-amber-900 whitespace-pre-line"
                >
                  {displayedText}
                  {currentIndex < letterText.length && (
                    <motion.span
                      animate={{ opacity: [1, 0, 1] }}
                      transition={{ duration: 0.8, repeat: Number.POSITIVE_INFINITY }}
                      className="text-primary"
                    >
                      |
                    </motion.span>
                  )}
                </motion.div>

                {/* Decorative flourishes */}
                <div className="absolute -top-4 -left-4 text-3xl text-amber-400/30 rotate-12">❦</div>
                <div className="absolute -bottom-4 -right-4 text-3xl text-amber-400/30 -rotate-12">❦</div>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Candle Section */}
        <AnimatePresence>
          {showCandle && (
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "backOut" }}
              className="flex flex-col items-center mt-12"
            >
              <motion.div
                animate={
                  candleLit
                    ? {
                        scale: [1, 1.02, 1],
                      }
                    : {}
                }
                transition={{
                  duration: 2,
                  repeat: candleLit ? Number.POSITIVE_INFINITY : 0,
                  repeatType: "reverse",
                }}
                className="relative cursor-pointer"
                onClick={handleCandleBlow}
              >
                {/* Candle */}
                <div className="w-8 h-24 bg-gradient-to-b from-pink-200 to-pink-300 rounded-t-full mx-auto relative shadow-lg">
                  {/* Candle flame */}
                  <AnimatePresence>
                    {candleLit && (
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{
                          scale: [1, 1.1, 1],
                          y: [-2, -4, -2],
                        }}
                        exit={{
                          scale: 0,
                          opacity: 0,
                        }}
                        transition={{
                          scale: {
                            duration: 1,
                            repeat: Number.POSITIVE_INFINITY,
                            repeatType: "reverse",
                          },
                          y: {
                            duration: 1.5,
                            repeat: Number.POSITIVE_INFINITY,
                            repeatType: "reverse",
                          },
                        }}
                        className="absolute -top-6 left-1/2 transform -translate-x-1/2 text-2xl"
                      >
                        🕯️
                      </motion.div>
                    )}
                  </AnimatePresence>

                  {/* Wick */}
                  <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 w-1 h-2 bg-amber-800 rounded-full" />
                </div>

                {/* Candle base */}
                <div className="w-12 h-3 bg-gradient-to-b from-amber-200 to-amber-300 rounded-full mx-auto -mt-1 shadow-md" />
              </motion.div>

              {/* Smoke effect */}
              <AnimatePresence>
                {showSmoke && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: [0, 1, 0], scale: [0, 1, 1.5], y: [-10, -50] }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 3, ease: "easeOut" }}
                    className="absolute -top-8 text-2xl"
                  >
                    💨
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Instructions */}
              {candleLit && (
                <motion.div
                  animate={{
                    opacity: [0.7, 1, 0.7],
                    scale: [1, 1.02, 1],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Number.POSITIVE_INFINITY,
                    repeatType: "reverse",
                  }}
                  className="mt-6"
                >
                  <Button
                    onClick={handleCandleBlow}
                    size="lg"
                    className="font-dancing text-xl px-8 py-4 bg-gradient-to-r from-primary to-secondary hover:from-secondary hover:to-primary transition-all duration-300 shadow-lg hover:shadow-xl"
                  >
                    Blow out the candle 🎂
                  </Button>
                </motion.div>
              )}
            </motion.div>
          )}
        </AnimatePresence>

        {/* Fireworks */}
        <AnimatePresence>
          {showFireworks && (
            <div className="fixed inset-0 pointer-events-none z-50">
              {[...Array(15)].map((_, i) => (
                <motion.div
                  key={i}
                  initial={{
                    scale: 0,
                    x: Math.random() * window.innerWidth,
                    y: Math.random() * window.innerHeight,
                  }}
                  animate={{
                    scale: [0, 1, 0],
                    opacity: [0, 1, 0],
                  }}
                  transition={{
                    duration: 2,
                    delay: Math.random() * 2,
                    repeat: 2,
                    repeatDelay: Math.random() * 1,
                  }}
                  className="absolute text-4xl"
                  style={{
                    color: ["#FF6F61", "#A77BCA", "#4DB6AC", "#FF9A8D", "#FFF5E1"][Math.floor(Math.random() * 5)],
                  }}
                >
                  {i % 4 === 0 ? "🎆" : i % 4 === 1 ? "✨" : i % 4 === 2 ? "🎇" : "💫"}
                </motion.div>
              ))}
            </div>
          )}
        </AnimatePresence>

        {/* Final Message */}
        <AnimatePresence>
          {showFinalMessage && (
            <motion.div
              initial={{ opacity: 0, scale: 0.8, y: 50 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 1, ease: "backOut" }}
              className="fixed inset-0 flex items-center justify-center bg-black/50 z-40"
            >
              <Card className="bg-gradient-to-br from-pink-100 to-purple-100 border-4 border-primary/30 shadow-2xl max-w-md mx-4">
                <CardContent className="p-8 text-center">
                  <motion.div
                    animate={{
                      scale: [1, 1.1, 1],
                      rotate: [0, 5, -5, 0],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Number.POSITIVE_INFINITY,
                      repeatType: "reverse",
                    }}
                    className="text-6xl mb-6"
                  >
                    💙
                  </motion.div>

                  <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                    className="font-pacifico text-2xl md:text-3xl text-primary mb-4"
                  >
                    Happy Birthday once again!
                  </motion.h2>

                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8 }}
                    className="font-dancing text-lg md:text-xl text-secondary leading-relaxed"
                  >
                    From Aishik, with lots of admiration 💙
                  </motion.p>

                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 2 }}
                    className="mt-6"
                  >
                    <Button
                      onClick={onNext}
                      className="font-dancing text-lg px-6 py-3 bg-gradient-to-r from-primary to-secondary hover:from-secondary hover:to-primary"
                    >
                      Start Over ✨
                    </Button>
                  </motion.div>
                </CardContent>
              </Card>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  )
}
