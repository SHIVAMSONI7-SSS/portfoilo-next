import "./globals.css";
// Capital 'F' for Footer component
import MorphicNavbar from "@/components/kokonutui/morphic-navbar";
import Footer from "@/components/kokonutui/footer"; 
import ChatBot from "@/components/kokonutui/chatbot";
import MouseTrail from "@/components/kokonutui/mouse";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-[#f3f5f7] flex flex-col min-h-screen">
        
        {/* ✨ MOUSE TRAIL - Isse sabse upar rakha hai taaki ye pure background par particles dikhaye */}
        <MouseTrail />

        {/* 🔝 GLOBAL NAVBAR */}
        <MorphicNavbar />

        {/* 📄 PAGE CONTENT WRAPPER */}
        <main
          className="
            flex-grow      /* Content kam ho toh bhi footer niche rahega */
            pt-[100px]     /* Mobile navbar gap */
            md:pt-[120px]  /* Desktop gap */
            px-4 md:px-8
            relative       /* Z-index management ke liye */
          "
        >
          {children}
        </main>

        {/* 🤖 AI CHATBOT (YURI) - Floating element outside main */}
        <ChatBot />

        {/* 底部 FOOTER */}
        <Footer />

      </body>
    </html>
  );
}