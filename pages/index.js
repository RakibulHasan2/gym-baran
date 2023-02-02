import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import Navbar from '@/Components/Navbar/Navbar'
import Header from '@/Components/Header/Header'
import HealthyInside from '@/Components/HealthyInside/HealthyInside'
import WorkoutInfo from '@/Components/WorkoutInfo/WorkoutInfo'
import WorkoutPlan from '@/Components/WorkoutPlan/WorkoutPlan'


const inter = Inter({ subsets: ['latin'] })
export default function Home() {
  return (
    <>
      <Navbar></Navbar>
      <Header></Header>
      <HealthyInside></HealthyInside>
      <WorkoutPlan></WorkoutPlan>
      <WorkoutInfo></WorkoutInfo>
    </>
  )
}
