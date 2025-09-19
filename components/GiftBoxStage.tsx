"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Sparkles, Heart } from "lucide-react"

interface GiftBoxStageProps {
  onNext: () => void
}

export default function GiftBoxStage({ onNext }: GiftBoxStageProps) {
  const [isOpened, setIsOpened] = useState(false)
  const [showSparkles, setShowSparkles] = useState(false)

  const handleGiftClick = () => {
    if (isOpened) return

    setIsOpened(true)
    setShowSparkles(true)

    // Navigate to next stage after animation completes
    setTimeout(() => {
      onNext()
    }, 3000)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-100 via-purple-50 to-pink-100 flex items-center justify-center p-4 relative overflow-hidden">
      {/* Background floating elements */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute text-2xl"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [-30, 30, -30],
              x: [-20, 20, -20],
              rotate: [-10, 10, -10],
              opacity: [0.3, 0.7, 0.3],
            }}
            transition={{
              duration: 4 + Math.random() * 2,
              repeat: Number.POSITIVE_INFINITY,
              delay: Math.random() * 3,
            }}
          >
            {i % 4 === 0 ? "✨" : i % 4 === 1 ? "🎀" : i % 4 === 2 ? "💝" : "🌟"}
          </motion.div>
        ))}
      </div>

      <div className="text-center z-10">
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "backOut" }}
          className="mb-12"
        >
          <h1 className="font-pacifico text-3xl md:text-5xl text-primary mb-4">Your Special Gift Awaits!</h1>
          <p className="font-dancing text-lg md:text-xl text-muted-foreground">
            {!isOpened ? "Click the gift box to reveal your surprise..." : "Opening your gift..."}
          </p>
        </motion.div>

        {/* Gift Box Container */}
        <div className="relative">
          {/* Gift Box */}
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            animate={{
              scale: 1,
              rotate: 0,
              y: isOpened ? 0 : [-5, 5, -5],
            }}
            transition={{
              scale: { duration: 1, ease: "backOut", delay: 0.3 },
              rotate: { duration: 1, ease: "backOut", delay: 0.3 },
              y: {
                duration: 2,
                repeat: isOpened ? 0 : Number.POSITIVE_INFINITY,
                repeatType: "reverse",
              },
            }}
            whileHover={!isOpened ? { scale: 1.05 } : {}}
            whileTap={!isOpened ? { scale: 0.95 } : {}}
            onClick={handleGiftClick}
            className={`relative cursor-pointer ${isOpened ? "cursor-default" : ""}`}
          >
            {/* Gift Box Base */}
            <motion.div
              animate={
                isOpened
                  ? {
                      scale: [1, 1.2, 1.1],
                      rotateY: [0, 15, -15, 0],
                    }
                  : {}
              }
              transition={{ duration: 1.5, ease: "easeInOut" }}
              className="w-32 h-32 md:w-40 md:h-40 bg-gradient-to-br from-primary to-secondary rounded-lg shadow-2xl mx-auto relative"
            >
              {/* Gift Box Ribbon Vertical */}
              <motion.div
                animate={
                  isOpened
                    ? {
                        scaleY: [1, 0.8, 1.2],
                        opacity: [1, 0.7, 1],
                      }
                    : {}
                }
                className="absolute left-1/2 top-0 bottom-0 w-4 bg-accent transform -translate-x-1/2"
              />

              {/* Gift Box Ribbon Horizontal */}
              <motion.div
                animate={
                  isOpened
                    ? {
                        scaleX: [1, 0.8, 1.2],
                        opacity: [1, 0.7, 1],
                      }
                    : {}
                }
                className="absolute top-1/2 left-0 right-0 h-4 bg-accent transform -translate-y-1/2"
              />

              {/* Gift Box Lid */}
              <motion.div
                animate={
                  isOpened
                    ? {
                        rotateX: [-180],
                        y: [-20],
                        scale: [1, 1.1],
                      }
                    : {}
                }
                transition={{ duration: 1, ease: "backOut", delay: 0.2 }}
                className="absolute -top-2 left-0 right-0 h-6 bg-gradient-to-r from-primary to-secondary rounded-t-lg shadow-lg"
              >
                {/* Bow on top */}
                <motion.div
                  animate={
                    isOpened
                      ? {
                          scale: [1, 1.3, 1.1],
                          rotate: [0, 10, -10, 0],
                        }
                      : {
                          rotate: [0, 5, -5, 0],
                        }
                  }
                  transition={{
                    scale: { duration: 1, delay: 0.5 },
                    rotate: {
                      duration: isOpened ? 1 : 3,
                      repeat: isOpened ? 0 : Number.POSITIVE_INFINITY,
                      repeatType: "reverse",
                    },
                  }}
                  className="absolute -top-3 left-1/2 transform -translate-x-1/2 text-2xl md:text-3xl"
                >
                  🎀
                </motion.div>
              </motion.div>

              {/* Gift emoji in center */}
              <motion.div
                animate={
                  isOpened
                    ? {
                        scale: [1, 0, 1.5],
                        rotate: [0, 180, 360],
                        opacity: [1, 0, 1],
                      }
                    : {
                        scale: [1, 1.1, 1],
                      }
                }
                transition={{
                  scale: isOpened
                    ? { duration: 1.5, times: [0, 0.5, 1] }
                    : { duration: 2, repeat: Number.POSITIVE_INFINITY },
                  rotate: { duration: 1.5 },
                  opacity: { duration: 1.5, times: [0, 0.5, 1] },
                }}
                className="absolute inset-0 flex items-center justify-center text-4xl md:text-5xl"
              >
                {isOpened ? "💖" : "🎁"}
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Sparkle Effects */}
          <AnimatePresence>
            {showSparkles && (
              <>
                {[...Array(20)].map((_, i) => (
                  <motion.div
                    key={i}
                    initial={{
                      scale: 0,
                      x: 0,
                      y: 0,
                      opacity: 1,
                    }}
                    animate={{
                      scale: [0, 1, 0],
                      x: (Math.random() - 0.5) * 400,
                      y: (Math.random() - 0.5) * 400,
                      opacity: [1, 1, 0],
                    }}
                    exit={{ opacity: 0 }}
                    transition={{
                      duration: 2,
                      delay: Math.random() * 0.5,
                      ease: "easeOut",
                    }}
                    className="absolute top-1/2 left-1/2 pointer-events-none"
                    style={{
                      color: ["#FF6F61", "#A77BCA", "#4DB6AC", "#FF9A8D", "#FFF5E1"][Math.floor(Math.random() * 5)],
                    }}
                  >
                    <Sparkles className="w-6 h-6" />
                  </motion.div>
                ))}

                {/* Heart explosion */}
                {[...Array(12)].map((_, i) => (
                  <motion.div
                    key={`heart-${i}`}
                    initial={{
                      scale: 0,
                      x: 0,
                      y: 0,
                      opacity: 1,
                    }}
                    animate={{
                      scale: [0, 1.2, 0.8],
                      x: Math.cos((i * 360) / 12) * 200,
                      y: Math.sin((i * 360) / 12) * 200,
                      opacity: [1, 1, 0],
                      rotate: [0, 360],
                    }}
                    exit={{ opacity: 0 }}
                    transition={{
                      duration: 2.5,
                      delay: 0.3 + Math.random() * 0.3,
                      ease: "easeOut",
                    }}
                    className="absolute top-1/2 left-1/2 pointer-events-none text-pink-500"
                  >
                    <Heart className="w-4 h-4 fill-current" />
                  </motion.div>
                ))}
              </>
            )}
          </AnimatePresence>
        </div>

        {/* Instructions */}
        {!isOpened && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.5 }} className="mt-8">
            <motion.p
              animate={{
                scale: [1, 1.05, 1],
                opacity: [0.7, 1, 0.7],
              }}
              transition={{
                duration: 2,
                repeat: Number.POSITIVE_INFINITY,
                repeatType: "reverse",
              }}
              className="font-dancing text-lg md:text-xl text-muted-foreground"
            >
              Tap the gift box! 👆
            </motion.p>
          </motion.div>
        )}

        {/* Opening message */}
        {isOpened && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 }}
            className="mt-8"
          >
            <motion.p
              animate={{
                scale: [1, 1.02, 1],
              }}
              transition={{
                duration: 2,
                repeat: Number.POSITIVE_INFINITY,
                repeatType: "reverse",
              }}
              className="font-dancing text-xl md:text-2xl text-secondary font-medium"
            >
              Your gift is opening... Get ready for something special! ✨
            </motion.p>
          </motion.div>
        )}
      </div>

      {/* Magical particles */}
      {showSparkles && (
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(30)].map((_, i) => (
            <motion.div
              key={`particle-${i}`}
              className="absolute w-1 h-1 bg-yellow-400 rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                scale: [0, 1, 0],
                opacity: [0, 1, 0],
                y: [0, -50],
              }}
              transition={{
                duration: 2,
                delay: Math.random() * 1,
                repeat: Number.POSITIVE_INFINITY,
                repeatDelay: Math.random() * 3,
              }}
            />
          ))}
        </div>
      )}
    </div>
  )
}
