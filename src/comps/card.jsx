import { motion, useMotionValue, useTransform } from "framer-motion";
import { useState, useEffect } from "react";
import Calculator from "../img/calculator.jpg";
import Evolve from "../img/evolve.jpg";
import Port from "../img/port.jpg";
import Todo from "../img/todo.jpg";

function CardRotate({ children, onSendToBack, sensitivity }) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(y, [-100, 100], [60, -60]);
  const rotateY = useTransform(x, [-100, 100], [-60, 60]);

  function handleDragEnd(_, info) {
    if (
      Math.abs(info.offset.x) > sensitivity ||
      Math.abs(info.offset.y) > sensitivity
    ) {
      onSendToBack();
    } else {
      x.set(0);
      y.set(0);
    }
  }

  return (
    <motion.div
      className="absolute cursor-grab"
      style={{ x, y, rotateX, rotateY }}
      drag
      dragConstraints={{ top: 0, right: 0, bottom: 0, left: 0 }}
      dragElastic={0.6}
      whileTap={{ cursor: "grabbing" }}
      onDragEnd={handleDragEnd}
    >
      {children}
    </motion.div>
  );
}

export default function Stack({
  randomRotation = false,
  sensitivity = 200,
  cardDimensions = { width: 318, height: 500 },
  cardsData = [],
  animationConfig = { stiffness: 260, damping: 20 },
  sendToBackOnClick = false,
}) {
  const [cards, setCards] = useState(
    cardsData.length
      ? cardsData
      : [
          {
            id: 4,
            title: "To-do-list for books",
            description: "Track books and tasks effortlessly.Stay organized and productive.",
            link: "https://weatherapp.com",
            img: Todo,
            
          },
          {
            id: 2,
            title: "Evolver-edge",
            description: "An agency website using tailwind css.",
            link: "https://evolver-egde.vercel.app/",
            img: Evolve,
          },
          {
            id: 3,
            title: "Portfolio Website",
            description: "A responsive personal portfolio with animations.",
            link: "#home",
            img: Port,
          },
          {
            id: 1,
            title: "Calculator",
            description: "An application for performing arithmetic operations.",
            link: "https://calculator-ochre-one.vercel.app/",
            img: Calculator,
          },
        ]
  );

  // Update dimensions based on screen width
  const [responsiveDimensions, setResponsiveDimensions] = useState(cardDimensions);

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width < 640) {
        // Mobile
        setResponsiveDimensions({ width: 280, height: 420 });
      } else if (width < 1024) {
        // Tablet
        setResponsiveDimensions({ width: 320, height: 480 });
      } else {
        // Desktop
        setResponsiveDimensions(cardDimensions);
      }
    };

    handleResize(); // on mount
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [cardDimensions]);

  const sendToBack = (id) => {
    setCards((prev) => {
      const newCards = [...prev];
      const index = newCards.findIndex((card) => card.id === id);
      const [card] = newCards.splice(index, 1);
      newCards.unshift(card);
      return newCards;
    });
  };

  return (
    <section className="w-full flex flex-col items-center bg-black py-10 text-white px-4 sm:px-6 lg:px-0 overflow-hidden ">
      <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-8 text-center">
        My Projects
      </h2>
      <div
        className="relative  -ml-10 sm:ml-0"
        style={{
          width: responsiveDimensions.width,
          height: responsiveDimensions.height,
          perspective: 600,
        }}
      >
        {cards.map((card, index) => {
          const randomRotate = randomRotation
            ? Math.random() * 10 - 5
            : 0;

          return (
            <CardRotate
              key={card.id}
              onSendToBack={() => sendToBack(card.id)}
              sensitivity={sensitivity}
            >
              <motion.div
                className="rounded-2xl overflow-hidden border-2 border-white backdrop-blur-2xl flex flex-col"
                onClick={() => sendToBackOnClick && sendToBack(card.id)}
                animate={{
                  rotateZ: (cards.length - index - 1) * 4 + randomRotate,
                  scale: 1 + index * 0.06 - cards.length * 0.06,
                  transformOrigin: "90% 90%",
                }}
                initial={false}
                transition={{
                  type: "spring",
                  stiffness: animationConfig.stiffness,
                  damping: animationConfig.damping,
                }}
                style={{
                  width: responsiveDimensions.width,
                  height: responsiveDimensions.height,
                }}
              >
                <img
                  src={card.img}
                  alt={`card-${card.id}`}
                  className="w-full h-2/4 object-cover pointer-events-none"
                />
                <div className="p-4 flex flex-col justify-between h-2/4">
                  <h3 className="text-lg sm:text-xl font-semibold mb-2">{card.title}</h3>
                  <p className="text-sm sm:text-base mb-3 text-gray-300">{card.description}</p>
                  <a
                    href={card.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 hover:text-red-500 underline text-sm sm:text-base"
                  >
                    Visit Project →
                  </a>
                </div>
              </motion.div>
            </CardRotate>
          );
        })}
      </div>
    </section>
  );
}
