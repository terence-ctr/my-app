import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import HomePage from '@/Components/HomePage/Index'
import Image from 'next/image'
import Forum from "@/Components/Forum";
import AccueilF from "@/Components/Forum/Pages/Accueil/Index";

export default function Home() {
  return (
    <>
    
      
        <AccueilF />
      
    </>
  )
}
