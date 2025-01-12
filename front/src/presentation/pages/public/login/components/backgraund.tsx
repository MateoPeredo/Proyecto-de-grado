export const BackgroundSVG = () => {
  return (
    <div className="fixed inset-0 w-[100dvh] h-full overflow-hidden bg-secondary rotate-90">
      <svg
        className="w-full h-full"
        viewBox="0 0 1000 1000"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <radialGradient
            id="tunnelGradient"
            cx="50%"
            cy="50%"
            r="50%"
            fx="50%"
            fy="50%"
          >
            <stop offset="0%" stopColor="#E30613" stopOpacity="0.2" />
            <stop offset="100%" stopColor="#E30613" stopOpacity="0" />
          </radialGradient>
          <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#E30613" stopOpacity="0" />
            <stop offset="50%" stopColor="#E30613" stopOpacity="0.5" />
            <stop offset="100%" stopColor="#E30613" stopOpacity="0" />
          </linearGradient>
        </defs>

        {/* Tunnel Effect */}
        <g className="tunnel">
          {Array.from({ length: 10 }).map((_, index) => (
            <ellipse
              key={`tunnel-${index}`}
              cx="500"
              cy="500"
              rx={500 - index * 50}
              ry={250 - index * 25}
              fill="none"
              stroke="url(#tunnelGradient)"
              strokeWidth="2"
              opacity={1 - index * 0.1}
            >
              <animateTransform
                attributeName="transform"
                type="scale"
                additive="sum"
                values="1 1; 1.05 1.05; 1 1"
                dur={`${4 + index * 0.5}s`}
                repeatCount="indefinite"
              />
            </ellipse>
          ))}
        </g>

        {/* Dynamic Lines */}
        {Array.from({ length: 40 }).map((_, index) => (
          <path
            key={`line-${index}`}
            d={`M${Math.random() * 1000},0 Q${
              500 + Math.random() * 200 - 100
            },${500 + Math.random() * 200 - 100} ${Math.random() * 1000},1000`}
            fill="none"
            stroke="url(#lineGradient)"
            strokeWidth="1"
            opacity={0.5}
          >
            <animate
              attributeName="d"
              values={`
                    M${Math.random() * 1000},0 Q${
                500 + Math.random() * 200 - 100
              },${500 + Math.random() * 200 - 100} ${Math.random() * 1000},1000;
                    M${Math.random() * 1000},0 Q${
                500 + Math.random() * 200 - 100
              },${500 + Math.random() * 200 - 100} ${Math.random() * 1000},1000;
                    M${Math.random() * 1000},0 Q${
                500 + Math.random() * 200 - 100
              },${500 + Math.random() * 200 - 100} ${Math.random() * 1000},1000
                  `}
              dur={`${15 + Math.random() * 10}s`}
              repeatCount="indefinite"
            />
          </path>
        ))}

        {/* Particles */}
        {Array.from({ length: 50 }).map((_, index) => (
          <circle
            key={`particle-${index}`}
            r={Math.random() * 2 + 1}
            fill="#E30613"
          >
            <animateMotion
              path={`M${Math.random() * 1000},0 Q${
                500 + Math.random() * 200 - 100
              },${500 + Math.random() * 200 - 100} ${
                Math.random() * 1000
              },1000`}
              dur={`${Math.random() * 10 + 5}s`}
              repeatCount="indefinite"
            />
            <animate
              attributeName="opacity"
              values="0;0.8;0"
              dur={`${Math.random() * 10 + 5}s`}
              repeatCount="indefinite"
            />
          </circle>
        ))}
      </svg>
    </div>
  );
};

export default BackgroundSVG;
