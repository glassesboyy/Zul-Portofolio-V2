"use client";
import { Template } from "@/animation/template";
import { TechStack } from "@/components/tech-stack";

export default function Tech() {
  return (
    <Template>
      <div className="w-full overflow-hidden">
        <div className="mx-auto mt-8 w-full max-w-2xl">
          <TechStack />
        </div>
      </div>
    </Template>
  );
}
