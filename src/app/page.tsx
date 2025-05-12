import { Template } from "@/components/template";
import Spline from "@splinetool/react-spline/next";

export default function Home() {
  return (
    <Template>
      <div className="w-full h-full">
        <div className="flex flex-col h-full relative">
          <div className="flex flex-col justify-center items-center pt-12 md:pt-20 px-4 z-10 relative">
            <h1 className="text-3xl tracking-widest uppercase font-bold mb-1 text-white font-[Audiowide] text-center">
              Surya Zulfikar
            </h1>
            <p className="text-xs text-white text-center font-[Montserrat] font-light">
              Front-End Website Developer | AI & Automation With N8N
            </p>
          </div>
          <div className="flex-1 md:h-full absolute md:relative w-full ">
            <div className="mx-auto w-[300%] md:w-full aspect-square md:aspect-auto -translate-x-1/2 md:translate-x-0 left-1/2 md:left-0 relative">
              <Spline scene="https://prod.spline.design/QwHTUku6HjNMOzE3/scene.splinecode" />
            </div>
          </div>
        </div>
      </div>
    </Template>
  );
}
