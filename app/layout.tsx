import "./globals.css";
import MorphicNavbar from "@/components/kokonutui/morphic-navbar";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-[#f3f5f7]">

        {/* 🔝 GLOBAL NAVBAR */}
        <MorphicNavbar />

        {/* 📄 PAGE CONTENT WRAPPER */}
        <main
          className="
            pt-[100px]     /* Mobile navbar gap */
            md:pt-[120px] /* Desktop gap */
            px-4 md:px-8
            min-h-screen
          "
        >
          {children}
        </main>

      </body>
    </html>
  );
}
