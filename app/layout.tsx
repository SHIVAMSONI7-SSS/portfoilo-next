import "./globals.css"
import MorphicNavbar from "@/components/kokonutui/morphic-navbar"

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className=" ">

        {/* GLOBAL NAVBAR */}
        <MorphicNavbar />

        {/* PAGE CONTENT */}
        {children}

      </body>
    </html>
  )
}
