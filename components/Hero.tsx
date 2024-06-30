import Image from "next/image";

function Hero() {
  return (
    <header className="bg-hero bg-center bg-cover bg-no-repeat sm:p-16 py-16 px-8 flex justify-center lg:items-center max-lg:flex-col w-full sm:gap-16 gap-0">
      <div className="flex-1 flex flex-col gap-10">
        <Image
          src="./logo.svg"
          alt="logo"
          width={101}
          height={96}
          className="object-contain rounded-full"
        />
          <h1 className="sm:text-6xl text-5xl text-white lg:max-w-lg font-bold leading-[120%]">
              Well, I don&apos;t know much about <span className="red-gradient">Anime</span> but, I dedicate this page to
              you, <span
              className="bg-gradient-to-r from-purple-600 to-red-400 bg-clip-text text-transparent py-2">Anku</span>
              <span className="red-gradient pt-4 whitespace-nowrap block text-[30px]">by Rage...</span>
          </h1>

      </div>
        <div className="lg:flex-1 relative w-full h-[50vh] flex flex-col items-center">
            <div className="relative w-full h-full">
                <Image src="/anime.png" alt="anime" fill className="object-contain"/>
            </div>
            <div className="text-center mt-2">
                <span className={"font-bold text-amber-50"}>Mad Scientist Hououin Kyouma (your fav)</span>
            </div>
        </div>
    </header>
  );
}

export default Hero;
