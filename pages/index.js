import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import Navbar from '@/Components/Navbar/Navbar'
import Header from '@/Components/Header/Header'
import HealthyInside from '@/Components/HealthyInside/HealthyInside'


const inter = Inter({ subsets: ['latin'] })
export default function Home() {
  return (
    <>
      <Navbar></Navbar>
      <Header></Header>
      <HealthyInside></HealthyInside>
    </>
  )
}
