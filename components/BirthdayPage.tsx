"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import { Card, CardContent } from "@/components/ui/card"
import { ThemeToggle } from "@/components/theme-toggle"

interface BirthdayPageProps {
  onNext: () => void
}

export default function BirthdayPage({ onNext }: BirthdayPageProps) {
  const carouselImages = [
    {
      src: "/beautiful-birthday-cake-with-pink-frosting-and-can.jpg",
      alt: "Birthday Cake",
      title: "Sweet Treats",
    },
    {
      src: "/colorful-cupcakes-with-pastel-frosting-and-sprinkl.jpg",
      alt: "Cupcakes",
      title: "Delicious Cupcakes",
    },
    {
      src: "/festive-birthday-party-setup-with-balloons-and-dec.jpg",
      alt: "Party Setup",
      title: "Party Time",
    },
    {
      src: "/gift-boxes-wrapped-in-pastel-colors-with-ribbons.jpg",
      alt: "Gift Boxes",
      title: "Special Gifts",
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-100 via-purple-50 to-teal-100 relative overflow-hidden">
      {/* Theme toggle in top right */}
      <div className="absolute top-4 right-4 z-20">
        <ThemeToggle />
      </div>

      {/* Floating balloons background */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute text-3xl md:text-4xl"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [-30, -50, -30],
              x: [-10, 10, -10],
              rotate: [-5, 5, -5],
            }}
            transition={{
              duration: 4 + Math.random() * 2,
              repeat: Number.POSITIVE_INFINITY,
              delay: Math.random() * 3,
            }}
          >
            {i % 4 === 0 ? "🎈" : i % 4 === 1 ? "🎉" : i % 4 === 2 ? "✨" : "🎊"}
          </motion.div>
        ))}
      </div>

      {/* Confetti animation */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: "-10px",
              backgroundColor: ["#FF6F61", "#A77BCA", "#4DB6AC", "#FF9A8D", "#FFF5E1"][Math.floor(Math.random() * 5)],
            }}
            animate={{
              y: ["0vh", "110vh"],
              rotate: [0, 360],
              opacity: [1, 0],
            }}
            transition={{
              duration: 4 + Math.random() * 3,
              repeat: Number.POSITIVE_INFINITY,
              delay: Math.random() * 5,
              ease: "linear",
            }}
          />
        ))}
      </div>

      {/* Main content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen p-4 space-y-8">
        {/* Main heading */}
        <motion.div
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ duration: 1, ease: "backOut", delay: 0.2 }}
          className="text-center"
        >
          <motion.h1
            className="font-pacifico text-4xl md:text-7xl lg:text-8xl text-primary mb-4 text-balance"
            animate={{
              textShadow: [
                "0 0 20px rgba(255, 111, 97, 0.5)",
                "0 0 40px rgba(255, 111, 97, 0.8)",
                "0 0 20px rgba(255, 111, 97, 0.5)",
              ],
            }}
            transition={{
              duration: 2,
              repeat: Number.POSITIVE_INFINITY,
              repeatType: "reverse",
            }}
          >
            Happy Birthday Karamjeet! 🎉🎂
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="font-dancing text-xl md:text-3xl text-secondary font-medium"
          >
            Hope your special day is filled with happiness and cake!
          </motion.p>
        </motion.div>

        {/* Image carousel */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2 }}
          className="w-full max-w-md md:max-w-2xl"
        >
          <Carousel className="w-full">
            <CarouselContent>
              {carouselImages.map((image, index) => (
                <CarouselItem key={index}>
                  <Card className="border-2 border-primary/20 shadow-lg">
                    <CardContent className="p-2">
                      <div className="relative">
                        <img
                          src={image.src || "/placeholder.svg"}
                          alt={image.alt}
                          className="w-full h-64 md:h-80 object-cover rounded-lg"
                        />
                        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4 rounded-b-lg">
                          <h3 className="font-pacifico text-white text-lg md:text-xl">{image.title}</h3>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="border-primary/20 bg-card/80 hover:bg-primary hover:text-primary-foreground" />
            <CarouselNext className="border-primary/20 bg-card/80 hover:bg-primary hover:text-primary-foreground" />
          </Carousel>
        </motion.div>

        {/* Call to action button */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1.6 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Button
            onClick={onNext}
            size="lg"
            className="font-dancing text-xl md:text-2xl px-8 py-6 bg-gradient-to-r from-primary to-secondary hover:from-secondary hover:to-primary transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            <motion.span
              animate={{
                rotate: [0, 10, -10, 0],
              }}
              transition={{
                duration: 2,
                repeat: Number.POSITIVE_INFINITY,
                repeatDelay: 3,
              }}
              className="mr-2"
            >
              🎁
            </motion.span>
            Tap here for your surprise!
          </Button>
        </motion.div>

        {/* Decorative elements */}
        <motion.div
          className="absolute bottom-10 left-10 text-6xl"
          animate={{
            rotate: [0, 15, -15, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 3,
            repeat: Number.POSITIVE_INFINITY,
            repeatDelay: 2,
          }}
        >
          🎂
        </motion.div>

        <motion.div
          className="absolute top-20 right-20 text-5xl"
          animate={{
            y: [-10, 10, -10],
            rotate: [0, -10, 10, 0],
          }}
          transition={{
            duration: 4,
            repeat: Number.POSITIVE_INFINITY,
            repeatDelay: 1,
          }}
        >
          🎈
        </motion.div>
      </div>
    </div>
  )
}
