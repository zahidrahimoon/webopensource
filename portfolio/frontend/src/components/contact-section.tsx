"use client";

import React from "react";
import { Globe } from "@/components/magicui/globe"; 
import ContactUs from "./contact-us";

export function ContactSection() {
  return (
    <section className="bg-gray-50 dark:bg-gray-900">
      <div className="mx-auto px-4 flex flex-col md:flex-row items-center justify-center">
        <div className="w-full md:w-1/2">
          <ContactUs />
        </div>
        <div className="w-full md:w-1/2 p-4 flex items-center justify-center">
        <div className="relative flex size-full max-w-lg items-center justify-center overflow-hidden rounded-lg border bg-background px-40 pb-40 pt-8 md:pb-60">
      <span className="pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-black to-gray-300/80 bg-clip-text text-center text-8xl font-semibold leading-none text-transparent dark:from-white dark:to-slate-900/10">
         Zahid
      </span>
      <Globe className="top-28" />
      <div className="pointer-events-none absolute inset-0 h-full bg-[radial-gradient(circle_at_50%_200%,rgba(0,0,0,0.2),rgba(255,255,255,0))]" />
    </div>
        </div>
      </div>
    </section>
  );
}
