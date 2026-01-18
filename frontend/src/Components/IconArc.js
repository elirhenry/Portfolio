// This file creates and modifies the avatar, icons, and labels visual in the Home page
import styled from "styled-components";

// Adds each icon and label
const ICONS = [
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

// Positions and adjusts arc, icon/label radius, and avatar position
function IconArc({
  size = 500,
  circleRadius = 150,
  ringWidth = 2,
  ringColor = "var(--accent)",
  arcRadius = 150,
  arcDegrees = 180,
  iconSize = 25,
  labelSize = "0.55rem",
  offsetTop = 85,
  avatarWidth = 250,
  avatarHeight = 300,
  avatarOffsetY = 10,
  bottomText = "Software Development Life Cycle",
}) {
  const cx = size / 2;
  const cy = size / 2 + 45;

  const start = 180 + (arcDegrees - 180) / 2;
  const end = 0 - (arcDegrees - 180) / 2;

  return (
    <Outer style={{ marginTop: offsetTop }}>
      <Wrap style={{ width: size, height: size }}>
        <Svg width={size} height={size} viewBox={`0 0 ${size} ${size}`}>
          <circle cx={cx} cy={cy} r={circleRadius} fill="none" stroke={ringColor} strokeWidth={ringWidth} />

          <defs>
            <path
              id="sdlcPath"
              d={`M ${cx - circleRadius} ${cy} A ${circleRadius} ${circleRadius} 0 0 0 ${cx + circleRadius} ${cy}`}
            />
          </defs>

          <text fill="#0a192f" fontSize="14" opacity="1" dy="12">
            <textPath href="#sdlcPath" startOffset="50%" textAnchor="middle">
              {bottomText}
            </textPath>
          </text>
        </Svg>

        <AvatarClip style={{ left: cx, top: cy + avatarOffsetY, width: avatarWidth, height: avatarHeight }}>
          <AvatarImg src="/avatar/avatar.png" alt="Avatar" />
        </AvatarClip>

        {ICONS.map((icon, i) => {
          const t = ICONS.length === 1 ? 0.5 : i / (ICONS.length - 1);
          const angle = ((start + (end - start) * t) * Math.PI) / 180;

          const left = cx + arcRadius * Math.cos(angle) - iconSize / 2;
          const top = cy - arcRadius * Math.sin(angle) - iconSize / 2;

          return (
            <Badge key={icon.id} style={{ left, top, width: iconSize }}>
              <Icon src={icon.src} alt={icon.label} style={{ width: iconSize, height: iconSize }} />
              <Label style={{ fontSize: labelSize }}>{icon.label}</Label>
            </Badge>
          );
        })}
      </Wrap>
    </Outer>
  );
}

/* ---------- Styled Components ---------- */

const Outer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

const Wrap = styled.div`
  position: relative;
  overflow: visible;
`;

const Svg = styled.svg`
  position: absolute;
  inset: 0;
  z-index: 3;
  pointer-events: none;
`;

const AvatarClip = styled.div`
  position: absolute;
  z-index: 2;
  transform: translate(-50%, -50%) scaleY(1.3);
  clip-path: circle(58% at 50% 23.5%);
  overflow: hidden;
`;

const AvatarImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
  object-position: center;
  display: block;
`;

const Badge = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.35rem;
  z-index: 4;
`;

const Icon = styled.img`
  display: block;
  filter: brightness(0) saturate(100%) invert(14%) sepia(18%) saturate(1084%)
    hue-rotate(182deg) brightness(92%) contrast(92%);
`;

const Label = styled.div`
  color: #0a192f;
  text-align: center;
  white-space: nowrap;
`;

export default IconArc;
