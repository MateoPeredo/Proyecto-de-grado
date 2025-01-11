export const BackgroundSVG = () => {
    return (
      <svg
        className="w-full h-full"
        viewBox="0 0 1000 1000"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <radialGradient
            id="sphereGradient"
            cx="50%"
            cy="50%"
            r="50%"
            fx="50%"
            fy="50%"
          >
            <stop offset="0%" stopColor="#E30613" stopOpacity="1" />
            <stop offset="100%" stopColor="#E30613" stopOpacity="0" />
          </radialGradient>
          <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#E30613" stopOpacity="0" />
            <stop offset="50%" stopColor="#E30613" stopOpacity="0.5" />
            <stop offset="100%" stopColor="#E30613" stopOpacity="0" />
          </linearGradient>
        </defs>
  

        {Array.from({ length: 20 }).map((_, index) => (
          <g key={index}>
            <path
              d={`M0,${500 - index * 25} Q500,${500 - index * 12.5} 1000,${
                500 - index * 25
              }`}
              fill="none"
              stroke="url(#lineGradient)"
              strokeWidth="2"
              opacity={1 - index * 0.05}
            >
              <animate
                attributeName="d"
                values={`
                  M0,${500 - index * 25} Q500,${500 - index * 12.5} 1000,${
                  500 - index * 25
                };
                  M0,${510 - index * 25} Q500,${490 - index * 12.5} 1000,${
                  510 - index * 25
                };
                  M0,${500 - index * 25} Q500,${500 - index * 12.5} 1000,${
                  500 - index * 25
                }
                `}
                dur={`${10 + index * 0.5}s`}
                repeatCount="indefinite"
              />
            </path>
            <path
              d={`M0,${500 + index * 25} Q500,${500 + index * 12.5} 1000,${
                500 + index * 25
              }`}
              fill="none"
              stroke="url(#lineGradient)"
              strokeWidth="2"
              opacity={1 - index * 0.05}
            >
              <animate
                attributeName="d"
                values={`
                  M0,${500 + index * 25} Q500,${500 + index * 12.5} 1000,${
                  500 + index * 25
                };
                  M0,${490 + index * 25} Q500,${510 + index * 12.5} 1000,${
                  490 + index * 25
                };
                  M0,${500 + index * 25} Q500,${500 + index * 12.5} 1000,${
                  500 + index * 25
                }
                `}
                dur={`${10 + index * 0.5}s`}
                repeatCount="indefinite"
              />
            </path>
          </g>
        ))}
  
        {/* Traveling Data Points */}
        {Array.from({ length: 10 }).map((_, index) => (
          <circle key={`data-point-${index}`} r="3" fill="#E30613">
            <animateMotion
              path={`M0,${500 - Math.random() * 500 + 250} Q500,${
                500 - Math.random() * 250 + 125
              } 1000,${500 - Math.random() * 500 + 250}`}
              dur={`${Math.random() * 5 + 5}s`}
              repeatCount="indefinite"
            />
            <animate
              attributeName="opacity"
              values="0;1;0"
              dur={`${Math.random() * 5 + 5}s`}
              repeatCount="indefinite"
            />
          </circle>
        ))}
      </svg>
    );
  };
  
  export default BackgroundSVG;
  