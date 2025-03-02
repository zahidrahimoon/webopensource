'use client'

import Link from "next/link"
import { Facebook, Linkedin, Instagram } from "lucide-react"
import { Button } from "@/components/ui/button"

const Footer = () => {
  return (
    <footer className="bg-[#0A0F2C] text-white pt-16 pb-6 relative">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <Link href="/" className="inline-block mb-6">
              <span className="text-3xl font-bold">Zahid</span>
            </Link>
            <p className="text-gray-300 mb-6">
              Welcome to Zahid's Portfolio, where innovation and expertise converge to shape the future of the software industry.
              With over a decade of experience, we have established ourselves as a trusted leader in technology
              solutions.
            </p>
          </div>

          {/* Contact Information */}
          <div>
            <h3 className="text-xl font-semibold mb-6">Contact Information</h3>
            <div className="space-y-4">
              <p>Plot 12, Block 5, Gulshan-e-Iqbal, Karachi</p>
              <p>Tel: +92 3211234567</p>
              <p>info@zahid.com</p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/" className="hover:text-[#59B3F9] transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-[#59B3F9] transition-colors">
                  About Zahid
                </Link>
              </li>
              <li>
                <Link href="/how-it-works" className="hover:text-[#59B3F9] transition-colors">
                  How It Works
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-[#59B3F9] transition-colors">
                  Contact
                </Link>
              </li>
              <li>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="text-xl font-semibold mb-6">Social Media</h3>
            <div className="flex space-x-4">
              <Button
                className="hover:text-[#59B3F9] transition-colors"
              >
                <Facebook className="h-6 w-6" />
              </Button>
              <Button
                className="hover:text-[#59B3F9] transition-colors"
              >
                <Linkedin className="h-6 w-6" />
              </Button>
              <Button
                className="hover:text-[#59B3F9] transition-colors"
              >
                <Instagram className="h-6 w-6" />
              </Button>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 mt-12 pt-6 text-center text-gray-400">
          <p>© 2023, Zahid Software Inc.All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
