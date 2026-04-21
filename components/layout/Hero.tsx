interface HeroProps {
  title: string;
  description: string;
}

function Hero({ title, description }: HeroProps) {
  return (
    <div className="flex flex-col gap-y-5 py-5 lg:py-15 text-center">
      <h1 className="text-7xl text-blue-600 font-bold font-jersey">{title}</h1>
      <p className="text-gray-300">{description}</p>
    </div>
  );
}

export default Hero;
