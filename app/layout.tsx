import type React from "react"
import type { Metadata } from "next"
// import { Analytics } from "@vercel/analytics/next"
import "./globals.css"


export const metadata: Metadata = {
  title: "FR Cleaning",
  description:
    " FR Cleaning is a cleaning service company that provides top-notch cleaning services to residential and commercial clients. We are committed to delivering exceptional results and ensuring customer satisfaction.",
  generator: "v0.app",
  icons: {
    icon: [
      {
        url: "/icon-light-32x32.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/icon-dark-32x32.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/icon.svg",
        type: "image/svg+xml",
      },
    ],
    apple: "/apple-icon.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans antialiased`}>
        {children}
        {/* <Analytics /> */}
      </body>
    </html>
  )
}
