import TextHighlighter from "@/components/kokonutui/higllli";
import ImageSwiperPage from "@/components/kokonutui/carousel";
import OrbitingSkills from "@/components/kokonutui/orbit";
export default function Example() {
  return (
    <>
      <p>
        Welcome to <TextHighlighter>Sera UI</TextHighlighter>
      </p>
    <ImageSwiperPage/>

    <div className="min-h-screen flex items-center justify-center bg-gray-900">
      <OrbitingSkills />
    </div>


     
    </>
  );
}