import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from './page.module.css'
import Hero from '@/compomemts/widgets/Hero'
import CoreTracks from '@/compomemts/widgets/CoreTracks'
import Special from '@/compomemts/widgets/Special'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main>
      {/* Hero */}

      <Hero/>

      {/* CoteTracks */}
      <CoreTracks/>

      {/* Specialized */}
      <Special/>

    </main>
  )
}
