import Image from "next/image";

export const GOALS_ID = "goals";

const goals = [
  {
    image: "/beginner_cook.png",
    title: "Anfänger",
    description: "Lerne die Grundlagen des Kochens mit einfachen, Schritt-für-Schritt Rezepten.",
  },
  {
    image: "/health_cook.png",
    title: "Gesund Leben",
    description: "Erreiche deine Fitnessziele mit ausgewogenen, nährstoffreichen Mahlzeiten.",
  },
  {
    image: "/expert_cook.png",
    title: "Experte werden",
    description: "Meistere fortgeschrittene Techniken und beeindrucke mit Gourmet-Gerichten.",
  },
  {
    image: "/teacher_cook.png",
    title: "Familie bekochen",
    description: "Kreiere leckere Gerichte, die der ganzen Familie schmecken.",
  },
];

export default function Goals() {
  return (
    <section id="goals" className="py-16 sm:py-20 md:py-24 bg-linear-to-b from-white to-lime-50/30 relative overflow-hidden scroll-mt-20">
      {/* Decorative elements */}
      <div className="absolute top-20 right-10 text-yellow-300 opacity-20 text-3xl sm:text-5xl animate-float">✦</div>
      <div className="absolute bottom-20 left-10 opacity-30 hidden sm:block">
        <svg width="50" height="50" viewBox="0 0 50 50" className="text-lime-400 animate-wiggle">
          <circle cx="25" cy="25" r="20" fill="none" stroke="currentColor" strokeWidth="2" strokeDasharray="8 4" />
        </svg>
      </div>

      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-10 sm:mb-12 md:mb-16">
          <div className="inline-flex items-center gap-2 text-lime-600 text-xs sm:text-sm font-medium mb-3 sm:mb-4">
            <span className="w-1 h-1 sm:w-1.5 sm:h-1.5 rounded-full bg-lime-500" />
            <span className="w-1 h-1 sm:w-1.5 sm:h-1.5 rounded-full bg-lime-500" />
            <span>Deine Ziele</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-6xl text-stone-800 mb-3 sm:mb-4">
            <span className="font-pacifico">Was ist </span>
            <span className="relative inline-block">
              <span className="font-pacifico text-lime-600">dein Ziel?</span>
              <svg className="absolute -bottom-1 left-0 w-full" height="6" viewBox="0 0 100 6" fill="none">
                <path d="M2 4C25 2 75 2 98 4" stroke="#fde047" strokeWidth="3" strokeLinecap="round" />
              </svg>
            </span>
          </h2>
          <p className="text-base md:text-lg text-stone-600 max-w-2xl mx-auto px-2 sm:px-0">
            Chabis passt sich deinen persönlichen Kochzielen an und begleitet dich auf deinem Weg.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 max-w-5xl mx-auto">
          {goals.map((goal, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl sm:rounded-3xl p-4 sm:p-6 shadow-sm hover:shadow-xl transition-all duration-300 border border-stone-100 hover:border-lime-200 text-center"
            >
              <div className="relative w-30 h-30 sm:w-20 sm:h-20 md:w-24 md:h-24 mx-auto mb-3 sm:mb-4 group-hover:scale-110 transition-transform duration-300">
                <Image src={goal.image} alt={goal.title} fill className="object-contain" />
              </div>
              <h3 className="font-semibold text-stone-800 mb-1 sm:mb-2 text-sm sm:text-base">{goal.title}</h3>
              <p className="text-xs sm:text-sm text-stone-500 leading-relaxed">{goal.description}</p>
            </div>
          ))}
        </div>

        {/* Mascot with speech bubble */}
        <div className="mt-10 sm:mt-12 md:mt-16 flex flex-col items-center justify-center gap-4 sm:gap-6">
          <div className="relative">
            <Image
              src="/power-transparent.svg"
              alt="Chabis Koch Mascot"
              width={150}
              height={150}
              className="drop-shadow-xl w-24 h-24 sm:w-32 sm:h-32 md:w-[150px] md:h-[150px]"
            />
          </div>
          <div className="bg-white rounded-2xl px-4 sm:px-6 py-3 sm:py-4 shadow-lg border border-lime-100 max-w-md mx-4 sm:mx-0">
            <p className="text-stone-700 text-sm sm:text-base">
              <span className="font-semibold text-lime-600">Hoi!</span> Egal welches Ziel du hast – ich helfe dir dabei, es zu erreichen. Lass uns gemeinsam
              kochen! 🍳
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
