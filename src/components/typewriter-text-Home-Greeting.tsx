import { TypewriterEffectSmooth } from "./ui/typewriter-effect";

export function TypewriterEffectTextGreeting() {
  const words = [
    {
      text: "Hi!!",
    },
    {
      text: "I'm",
    },
    {
      text: "Dhruv Krrish Ghimiray",
      className: "text-blue-500 dark:text-blue-500",
    },
  ];

  return (
    <div className="text-4xl md:text-4xl lg:text-6xl flex flex-col items-center justify-center">
      <TypewriterEffectSmooth words={words} />
    </div>
  );
}
