import Image from "next/image"
import { cn } from "../../lib/utils"

interface SliderItemProps {
  itemActive: number
  id: number
  image: string
  brand: string
  name: string
  desc: string
  scrollToDestinos: () => void
}

export default function SliderItem({
  itemActive,
  id,
  image,
  brand,
  name,
  desc,
  scrollToDestinos,
}: SliderItemProps) {
  return (
    <div className="li_cont">
      <li
        className={cn(
          "absolute inset-0 transition-all duration-700 ease-out",
          itemActive === id ? "opacity-100 z-10" : "opacity-0"
        )}
      >
        <div className="relative h-[110vh] w-[100vw]">
          <Image
            src={image}
            alt={name}
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/40" />
        </div>
        <div className="space-y-4 absolute left-[10%] top-[20%] w-[500px] max-w-[80%] z-10">
          <p
            className={cn(
              "uppercase tracking-[10px] text-white opacity-0 translate-y-10 transition-all duration-700 ease-out",
              itemActive === id && "opacity-100 translate-y-0"
            )}
          >
            {brand}
          </p>
          <h2
            className={cn(
              "text-6xl lg:text-8xl m-0 text-white font-bold opacity-0 translate-y-10 transition-all duration-700 ease-out delay-100",
              itemActive === id && "opacity-100 translate-y-0"
            )}
          >
            {name}
          </h2>
          <p
            className={cn(
              "text-gray-200 opacity-0 translate-y-10 transition-all duration-700 ease-out delay-200",
              itemActive === id && "opacity-100 translate-y-0"
            )}
          >
            {desc}
          </p>
        </div>
        {/*<button
          onClick={scrollToDestinos}
          className={cn(
            "absolute bottom-28 left-[10%] px-6 py-3 bg-yellow-500 text-white rounded-lg text-xl font-bold opacity-0 translate-y-10 transition-all duration-700 ease-out delay-300",
            itemActive === id && "opacity-100 translate-y-0"
          )}
        >
          Explorar Destinos
        </button>*/}
      </li>
    </div>
  )
}