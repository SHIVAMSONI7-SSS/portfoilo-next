import "./globals.css";
import MorphicNavbar from "@/components/kokonutui/morphic-navbar";
import Footer from "@/components/kokonutui/footer"; 
import Chatbot from "@/components/kokonutui/chatbot";
import MouseTrail from "@/components/kokonutui/mouse";
import themebutton from "@/components/kokonutui/themebutton";

import TextHighlighter from "@/components/kokonutui/higllli";


    <p>
      Welcome to <TextHighlighter>Sera UI</TextHighlighter>
    </p>
  


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-[#f3f5f7] flex flex-col min-h-screen">
        {/* ✨ Effects */}
        <MouseTrail />

        {/* 🔝 Navigation */}
        <MorphicNavbar />

        {/* 📄 Page Content - Next.js automatically injects page.tsx here */}
        <main className="flex-grow pt-[100px] md:pt-[120px] px-4 md:px-8 relative">
          {children}
       
        </main>

        {/* 🤖 AI ChatBot (Floating) */}
        <Chatbot/>

        {/* 底部 Footer */}
        <Footer />
      </body>
    </html>
  );
}