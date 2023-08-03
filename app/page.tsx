"use client";
import Image from 'next/image'
import styles from './page.module.css'
import './style.css';
import React, { Suspense } from "react";
import AboutSection from "../components/about-section/AboutSection";
import ConnectSection from "../components/connect-section/ConnectSection";
import ExperienceSection from "../components/experience-section/ExperienceSection";
import Footer from "../components/footer/Footer";
import LandingPage from "../components/landing-page/LandingPage";
import NavBar from "../components/nav-bar/NavBar";
import SkillsSection from "../components/skills-section/SkillsSection";
// hi
export default function Home() {
  return (
    <div>
      <NavBar />
      <LandingPage />
      <AboutSection />
      <SkillsSection />
      <ExperienceSection />
      <ConnectSection />
      <Footer />
    </div>
  )
}
