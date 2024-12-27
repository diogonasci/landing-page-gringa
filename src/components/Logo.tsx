import "../styles/fonts.css";

export const Logo = () => {
  return (
    <div className="flex items-center font-semibold">
      <svg className="mr-1 h-12 w-auto" viewBox="0 0 500 100">
        <text
          x="50%"
          y="50%"
          dominantBaseline="middle"
          textAnchor="middle"
          style={{
            fontFamily: "Peralta, sans-serif",
            fontSize: "48px",
            fill: "hsl(210, 73%, 59%)",
            fontWeight: 400,
          }}
        >
          profcerto
        </text>
      </svg>
    </div>
  );
};

export default Logo;
