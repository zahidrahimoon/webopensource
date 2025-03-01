import type React from "react"
import "./globals.css"
import Header from "@/components/header"
import Footer from "@/components/footer"

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="flex flex-col min-h-screen" style={{ fontFamily: 'Playfair Display, serif', overflowX: "hidden"}}>
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
