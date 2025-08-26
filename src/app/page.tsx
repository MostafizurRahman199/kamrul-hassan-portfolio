import Hero from '@/components/sections/Hero'
import About from '@/components/sections/About'
import Experience from '@/components/sections/Experience'
import Skills from '@/components/sections/Skills'
import Contact from '@/components/sections/Contact'
import GallerySection from '@/components/sections/GallerySection'
import Achievements from '@/components/sections/Achievements'
import Modules from '@/components/sections/Modules'

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Experience />
      <Skills />
      <Modules />
      <GallerySection />
      <Achievements></Achievements>
      <Contact />
    </>
  )
}