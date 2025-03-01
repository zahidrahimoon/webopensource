import { Button } from "@/components/ui/button";
import { Star } from "lucide-react";

const Hero = () => {
  return (
    <div className="relative bg-gradient-to-br from-purple-600 via-blue-500 to-indigo-700 text-white py-24">
      <div className="absolute inset-0 bg-black/40 backdrop-blur-sm"></div>
      <div className="relative z-10 container mx-auto px-6 text-center">
        <h1 className="text-6xl font-extrabold tracking-tight leading-tight mb-6 drop-shadow-lg">
          Elevate Open Source 🚀
        </h1>
        <p className="text-xl max-w-2xl mx-auto opacity-90">
          Contribute, innovate, and collaborate on groundbreaking open-source projects.
          Join us in shaping the future of development.
        </p>
        <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
          <Button variant="secondary" size="lg">
            Explore Projects
          </Button>
          <a
            href="https://github.com/zahidrahimoon/webopensource"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button variant="secondary" size="lg" className="flex items-center gap-2">
              <Star className="w-5 h-5" />
              Star on GitHub
            </Button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
