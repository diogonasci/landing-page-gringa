import { Play, Star } from "lucide-react";
import { useEffect, useRef, useState } from "react";

export type VideoTestimonial = {
  id: number;
  name: string;
  location: string;
  text: string;
  videoUrl: string;
  videoId?: string;
  instagramUrl?: string;
};

interface VideoTestimonialCardProps {
  testimonial: VideoTestimonial;
  onVideoPlay?: (testimonial: VideoTestimonial) => void;
  onVideoStop?: () => void;
  shouldStop?: boolean;
}

export const VideoTestimonialCard = ({
  testimonial,
  onVideoPlay,
  onVideoStop,
  shouldStop = false,
}: VideoTestimonialCardProps) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const iframeRef = useRef<HTMLIFrameElement>(null);

  // Reage quando recebe comando para parar de fora
  useEffect(() => {
    console.log(`${testimonial.name}: shouldStop=${shouldStop}, isPlaying=${isPlaying}`);
    if (shouldStop && isPlaying) {
      console.log(`Parando vídeo de ${testimonial.name} via shouldStop`);
      setIsPlaying(false);
      // Força parar o vídeo recarregando o iframe
      if (iframeRef.current && testimonial.videoId) {
        console.log(`Recarregando iframe para ${testimonial.name}`);
        iframeRef.current.src = `https://www.youtube.com/embed/${testimonial.videoId}?rel=0&modestbranding=1&enablejsapi=1`;
      }
    }
  }, [shouldStop, isPlaying, testimonial.name, testimonial.videoId]);

  const handleStopClick = () => {
    setIsPlaying(false);
    // Força parar o vídeo recarregando o iframe
    if (iframeRef.current && testimonial.videoId) {
      console.log(`Parando vídeo de ${testimonial.name} via botão stop`);
      iframeRef.current.src = `https://www.youtube.com/embed/${testimonial.videoId}?rel=0&modestbranding=1&enablejsapi=1`;
    }
    onVideoStop?.();
  };

  const handlePlayClick = () => {
    // Se tem Instagram URL, abre em nova aba
    if (
      testimonial.instagramUrl &&
      testimonial.instagramUrl.includes("instagram.com")
    ) {
      window.open(testimonial.instagramUrl, "_blank");
      onVideoPlay?.(testimonial);
      return;
    }

    // Se tem videoId, reproduz o vídeo no local
    if (testimonial.videoId) {
      setIsPlaying(true);
      onVideoPlay?.(testimonial);
      return;
    }

    // Fallback para comportamento antigo se necessário
    onVideoPlay?.(testimonial);
  };

  return (
    <div className="relative max-w-sm mx-auto">
      {/* Banner laranja com nome - sobrepondo a parte SUPERIOR do vídeo */}
      <div className="flex justify-center mb-4 relative z-10">
        <div
          className="bg-radial-orange text-white px-4 md:px-12 py-2 rounded-full shadow-lg"
          style={{ width: "85%" }}
        >
          <h3 className="font-bold text-lg text-center">{testimonial.name}</h3>
        </div>
      </div>

      {/* Área do vídeo com thumbnail - formato Instagram Reels (9:16) - MENOR e CENTRALIZADO */}
      <div className="relative -mx-4 -mt-6">
        <div
          className="relative bg-gray-900 rounded-2xl overflow-hidden mx-auto"
          style={{ aspectRatio: "4/5", width: "85%" }}
        >
          {!isPlaying ? (
            // Thumbnail com botão de play
            <div
              className="cursor-pointer group w-full h-full"
              onClick={handlePlayClick}
            >
              {/* Thumbnail do vídeo com crop */}
              <img
                src={testimonial.videoUrl}
                alt={`Thumbnail do depoimento de ${testimonial.name}`}
                className="w-full h-full object-cover"
                style={{
                  width: "143%",
                  height: "143%",
                  transform: testimonial.name === "Célia Condé" 
                    ? "translate(0%, -24%)" 
                    : "translate(0%, -14%)",
                }}
              />

              {/* Overlay escuro no hover */}
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors" />

              {/* Botão de play centralizado */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="bg-white/90 backdrop-blur-sm rounded-full p-4 group-hover:bg-white group-hover:scale-110 transition-all duration-300 shadow-lg">
                  <Play className="w-8 h-8 text-radial-orange fill-radial-orange ml-1" />
                </div>
              </div>
            </div>
          ) : (
            // Iframe do YouTube no mesmo local
            <div className="w-full h-full overflow-hidden relative">
              <iframe
                ref={iframeRef}
                className="w-full h-full rounded-2xl"
                style={{
                  width: "143%",
                  height: "143%",
                  transform: testimonial.name === "Célia Condé" 
                    ? "translate(-15%, -24%)" 
                    : "translate(-15%, -14%)",
                }}
                src={`https://www.youtube.com/embed/${testimonial.videoId}?autoplay=1&rel=0&modestbranding=1&enablejsapi=1`}
                title={`Depoimento de ${testimonial.name}`}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
              
              {/* Botão para parar o vídeo */}
              <button
                onClick={handleStopClick}
                className="absolute top-4 right-4 bg-black/70 hover:bg-black/90 text-white rounded-full p-2 transition-all z-10"
                aria-label="Parar vídeo"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Caixa de depoimento - MAIS LARGA que o vídeo com pontas arredondadas */}
      <div className="relative -mx-4 -mt-2">
        <div
          className="bg-white rounded-3xl px-6 pt-5 pb-10 shadow-lg mx-auto flex flex-col"
          style={{
            width: "calc(100% + 2rem)",
            height: "160px",
          }}
        >
          {/* Estrelas laranjas no topo da caixa */}
          <div className="flex space-x-1 mb-3">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className="w-4 h-4 text-radial-orange fill-radial-orange"
              />
            ))}
          </div>

          {/* Texto do depoimento */}
          <div className="flex-1 pb-8">
            <p className="text-gray-700 italic text-sm leading-relaxed text-justify w-full">
              "{testimonial.text}"
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
