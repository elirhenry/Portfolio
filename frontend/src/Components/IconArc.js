import styled from "styled-components";

const icons = [
  { id: "js", label: "JavaScript", src: "/icons/javascript.svg" },
  { id: "ts", label: "TypeScript", src: "/icons/typescript.svg" },
  { id: "py", label: "Python", src: "/icons/python.svg" },
  { id: "html", label: "HTML", src: "/icons/html5.svg" },
  { id: "snowflake", label: "SnowflakeSQL", src: "/icons/snowflake.svg" },
  { id: "docker", label: "Docker", src: "/icons/docker.svg" },
  { id: "react", label: "React", src: "/icons/react.svg" },
  { id: "github", label: "GitHub", src: "/icons/github.svg" },
  { id: "jira", label: "Jira", src: "/icons/jira.svg" },
];

function IconArc({
  size = 500,
  circleRadius = 100,   // perfect circle radius
  ringWidth = 3,
  ringColor = "var(--accent)",
  arcRadius = 300,      // icon arc placement radius
  arcDegrees = 180,
  iconSize = 35,
  labelSize = "0.75rem",
  offsetTop = 85,

  avatarWidth = 360,    // avatar can be non-square now
  avatarHeight = 300,
  avatarBorderRadius = "0 0 100px 100px",
  avatarOffsetY = -50,  // move avatar up/down independently
  bottomText = "Software Development Life Cycle",
}) {
  const cx = size / 2;

  // Circle center (fixed to keep perfect circle)
  const cy = size / 2 + 150; // adjust to move circle up/down in container

  // Avatar positioning (independent from circle)
  const avatarX = cx - avatarWidth / 2;
  const avatarY = cy - avatarHeight / 2 + avatarOffsetY;

  const start = 180 + (arcDegrees - 180) / 2;
  const end = 0 - (arcDegrees - 180) / 2;

  return (
    <ArcOuter style={{ marginTop: offsetTop }}>
      <ArcContainer style={{ width: size, height: size }}>
        {/* PERFECT CIRCLE RING + TEXT */}
        <RingSvg width={size} height={size} viewBox={`0 0 ${size} ${size}`}>
          <circle
            cx={cx}
            cy={cy}
            r={circleRadius}
            fill="none"
            stroke={ringColor}
            strokeWidth={ringWidth}
          />

          <defs>
            <path
              id="sdlcPath"
              d={`
                M ${cx - circleRadius} ${cy}
                A ${circleRadius} ${circleRadius} 0 0 1 ${cx + circleRadius} ${cy}
              `}
            />
          </defs>

          <text fill={ringColor} fontSize="14" opacity="0.85">
            <textPath href="#sdlcPath" startOffset="50%" textAnchor="middle">
              {bottomText}
            </textPath>
          </text>
        </RingSvg>

        {/* AVATAR (CUSTOM SHAPE) */}
        <Avatar
          src="/avatar/avatar.png"
          alt="Avatar"
          style={{
            left: avatarX,
            top: avatarY,
            width: avatarWidth,
            height: avatarHeight,
            borderRadius: avatarBorderRadius,
          }}
        />

        {/* ICONS (TOP ARC) */}
        {icons.map((icon, i) => {
          const t = icons.length === 1 ? 0.5 : i / (icons.length - 1);
          const angleDeg = start + (end - start) * t;
          const angle = (angleDeg * Math.PI) / 180;

          const x = cx + arcRadius * Math.cos(angle) - iconSize / 2;
          const y = cy - arcRadius * Math.sin(angle) - iconSize / 2;

          return (
            <IconBadge key={icon.id} style={{ left: x, top: y, width: iconSize }}>
              <IconImg
                src={icon.src}
                alt={icon.label}
                style={{ width: iconSize, height: iconSize }}
              />
              <IconLabel style={{ fontSize: labelSize }}>{icon.label}</IconLabel>
            </IconBadge>
          );
        })}
      </ArcContainer>
    </ArcOuter>
  );
}

const ArcOuter = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

const ArcContainer = styled.div`
  position: relative;
  overflow: visible;
`;

const RingSvg = styled.svg`
  position: absolute;
  inset: 0;
  z-index: 3;
  pointer-events: none;
`;

const Avatar = styled.img`
  position: absolute;
  z-index: 2; /* under ring, above background */
  object-fit: cover;
`;

const IconBadge = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.35rem;
  z-index: 4; /* above ring */
`;

const IconImg = styled.img`
  display: block;
`;

const IconLabel = styled.div`
  color: var(--bg-dark);
  opacity: 0.85;
  text-align: center;
  white-space: nowrap;
`;

export default IconArc;
