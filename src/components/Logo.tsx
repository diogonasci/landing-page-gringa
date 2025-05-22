import logoRadial from "@/assets/radial-logo-texto.png";

export const Logo = () => {
  return (
    <div className="flex items-center font-semibold">
      <img
        src={logoRadial}
        alt="Radial"
        className="h-20 w-auto" // Ajuste a altura conforme necessário
      />
    </div>
  );
};

export default Logo;
