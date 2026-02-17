import "./globals.css"
import MorphicNavbar from "@/components/kokonutui/morphic-navbar"

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="bg-black text-white">

        {/* GLOBAL NAVBAR */}
        <MorphicNavbar />

        {/* PAGE CONTENT */}
        {children}

      </body>
    </html>
  )
}
