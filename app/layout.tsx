import "./globals.css";
// Capital 'F' for Footer component
import MorphicNavbar from "@/components/kokonutui/morphic-navbar";
import Footer from "@/components/kokonutui/footer"; 
import ChatBot from "@/components/kokonutui/chatbot";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-[#f3f5f7] flex flex-col min-h-screen">

        {/* 🔝 GLOBAL NAVBAR - Sabse upar */}
        <MorphicNavbar />

        {/* 📄 PAGE CONTENT WRAPPER */}
        <main
          className="
            flex-grow      /* Content kam ho toh bhi footer niche rahega */
            pt-[100px]     /* Mobile navbar gap */
            md:pt-[120px]  /* Desktop gap */
            px-4 md:px-8
          "
        >
          {children}
        </main>

        {/* 🤖 AI CHATBOT - Floating element hamesha main ke bahar rakhein */}
        <ChatBot />

        {/* 底部 FOOTER */}
        <Footer />

      </body>
    </html>
  );
}