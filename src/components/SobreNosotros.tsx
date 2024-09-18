'use client'

import React from "react"
import { AboutUs } from "./SobreNosotros/AboutUs"
import { OurTeam } from "./SobreNosotros/OurTeam"
import { MissionVisionTerms } from "./SobreNosotros/MissionVisionTerms"

export function SobreNosotros({ sobreNosotrosRef }: { sobreNosotrosRef: React.RefObject<HTMLDivElement> }) {
  return (
    <div ref={sobreNosotrosRef} className="bg-gradient-to-b from-yellow-100 via-pink-100 to-yellow-200">
      <AboutUs />
      <OurTeam />
      <MissionVisionTerms />
    </div>
  )
}
