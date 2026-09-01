"use client"
import AboutUs from "@/components/home/AboutUs";
import CarromScrollSection from "@/components/home/CarromScrollSection";
import ToyParkCategories from "@/components/home/Categories";
import CategoriesSlider from "@/components/home/CategoriesSlider";
import EveryGameSection from "@/components/home/EveryGameSection";
import Hero from "@/components/home/Hero";
import ProductSection from "@/components/home/ProductSection";
import Testimonials from "@/components/home/Testimonials";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import FAQItem from "@/components/home/Faq";
import { useState } from "react";
import ContactCTA from "@/components/home/Contact";
import ExperienceStats from "@/components/home/ExperienceStats";
import AnyproCategoryMarquee from "@/components/home/Marquee";
import AnyproCTA from "@/components/home/CTA";
import AnyproProcess from "@/components/home/AnyproProcess";

export default function Home() {

  return (
    <main>
      <Hero />
      <AboutUs />
      <ExperienceStats />
      <CategoriesSlider />
      <AnyproCTA />
      <AnyproCategoryMarquee />
      <ToyParkCategories />
      <WhyChooseUs />
      <AnyproProcess />
      <CarromScrollSection />
      <ProductSection />
      <EveryGameSection />
      <Testimonials />
      <FAQItem />
      <ContactCTA />
    </main>
  );
}