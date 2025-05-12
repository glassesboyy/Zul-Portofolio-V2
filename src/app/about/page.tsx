import { Template } from "@/components/template";

export default function About() {
  return (
    <Template>
      <div className="bg-black flex flex-col items-center justify-center">
        <h1 className="text-3xl font-bold font-[Audiowide]">
          Welcome to About Page
        </h1>
        <p className="text-xs text-white text-center font-[Montserrat] font-light">
          Subheading About Page Here..
        </p>
      </div>
    </Template>
  );
}
