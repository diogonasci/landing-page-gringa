import { COMPANY_DESCRIPTION, FORM_URL } from "@/constants/urls";

const Hero = () => {
  return (
    <section className="bg-radial-dark py-10 md:py-16">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
          <h1 className="text-white text-2xl md:text-4xl font-bold mb-2">
            Pare de dar dinheiro pra <br className="hidden sm:block" />
            concessionária.
          </h1>
          <h2 className="text-radial-orange text-xl md:text-3xl font-bold mb-4">
            Reduza sua conta de luz em até 95%
            <br className="hidden sm:block" />
            com energia solar!
          </h2>

          <p className="text-white mb-8 text-base md:text-lg">
            {COMPANY_DESCRIPTION}
          </p>

          {/* Video Player */}
          <div className="w-full max-w-2xl mb-8">
            <div className="relative pt-[56.25%]">
              {" "}
              {/* 16:9 Aspect Ratio */}
              <iframe
                className="absolute top-0 left-0 w-full h-full rounded-md"
                src="https://www.youtube.com/embed/ekxYqw220rA?start=1"
                title="Como funciona energia solar?"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>

          <a
            href={FORM_URL}
            className="bg-radial-orange text-white py-3 px-8 rounded-md text-lg font-medium hover:brightness-110 transition-all"
          >
            Quero receber minha conta de luz $0
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
