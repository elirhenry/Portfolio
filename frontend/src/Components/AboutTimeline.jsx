import React from "react";
import styled from "styled-components";

const timelineItems = [
  {
    title: "Systems Operator",
    subtitle: "United States\nSpace Force",
    year: "2021–2022",
    detail: "Satellite communications\n& mission operations",
    iconSrc: "/icons/satellite.svg",
  },
  {
    title: "Supra Coders",
    subtitle: "Full-stack\nBootcamp",
    year: "2023",
    detail: "Full-stack\nsoftware engineering\nbootcamp",
    iconSrc: "/icons/code.svg",
  },
  {
    title: "Launch/Weather Support",
    subtitle: "Space Launch Delta\n45 Internship",
    year: "Mid 2024",
    detail: "Space Launch\nDelta 45\nInternship",
    iconSrc: "/icons/radar.svg",
  },
  {
    title: "Operations Support",
    subtitle: "Palantir Project",
    year: "Early 2025",
    detail: "Operations\nSupport",
    iconSrc: "/icons/tools.svg",
  },
  {
    title: "SkillBridge Fellow",
    subtitle: "Disney Data\nTech/Scrum",
    year: "Late 2025",
    detail: "SkillBridge\nFellow",
    iconSrc: "/icons/castle.svg",
  },
];

export default function AboutTimeline({
  accent = "#64ffda",
  text = "#0a192f",
  topOffset = 120,
}) {
  const lastIndex = timelineItems.length - 1;

  return (
    <Outer style={{ marginTop: topOffset, ["--accent"]: accent, ["--text"]: text }}>
      <Wrap>
        {/* TOP ROW */}
        <TopGrid>
          {timelineItems.map((item) => (
            <TopCell key={item.title}>
              <IconWrap>
                <Icon src={item.iconSrc} alt="" />
              </IconWrap>
              <Title>{item.title}</Title>
              <SubTitle>{item.subtitle}</SubTitle>
            </TopCell>
          ))}
        </TopGrid>

        {/* TIMELINE + BOTTOM */}
        <BottomGrid>
          <LineRow>
            <Line />
            <Arrow />

            {timelineItems.map((item) => (
              <PinCell key={item.title}>
                <Pin>
                  <Stem />
                  <Dot />
                </Pin>
              </PinCell>
            ))}
          </LineRow>

          {timelineItems.map((item, idx) => (
            <BottomCell
              key={item.title}
              $align={idx === 0 ? "center" : idx === timelineItems.length - 1 ? "center" : "center"}
            >
              <Year>{item.year}</Year>
              <Detail>{item.detail}</Detail>
            </BottomCell>
          ))}
        </BottomGrid>

      </Wrap>
    </Outer>
  );
}

/* ---------------- styles ---------------- */

const Outer = styled.div`
  width: 100%;
  overflow: hidden;
  padding: 0 10px;
  box-sizing: border-box;
`;

const Wrap = styled.section`
  width: 100%;
  background: transparent;
  box-sizing: border-box;
  font-family: system-ui, -apple-system, Segoe UI, Roboto, Arial, sans-serif;
`;

/* TOP GRID */
const TopGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(5, minmax(0, 1fr));
  gap: 12px;
  align-items: start;
`;

const TopCell = styled.div`
  text-align: center;
  min-width: 0;
`;

const IconWrap = styled.div`
  display: grid;
  place-items: center;
  margin-bottom: 8px;
`;

const Icon = styled.img`
  width: clamp(28px, 3.4vw, 38px);
  height: clamp(28px, 3.4vw, 38px);
  filter: drop-shadow(0 0 10px rgba(100, 255, 218, 0.25));
`;

const Title = styled.div`
  color: var(--text);
  font-weight: 800;
  font-size: clamp(11px, 1.2vw, 13px);
  line-height: 1.15;
  margin-bottom: 4px;
`;

const SubTitle = styled.div`
  color: var(--text);
  font-weight: 500;
  font-size: clamp(10px, 1.1vw, 11px);
  line-height: 1.25;
  white-space: pre-line;
`;

/* BOTTOM GRID */
const BottomGrid = styled.div`
  margin-top: 4px;
  display: grid;
  grid-template-columns: repeat(5, minmax(0, 1fr));
  column-gap: 12px;
  align-items: start;
`;

const LineRow = styled.div`
  grid-column: 1 / -1;
  position: relative;

  display: grid;
  grid-template-columns: repeat(5, minmax(0, 1fr));
  column-gap: 12px;       /* ✅ MUST match TopGrid gap */

  height: 28px;
  margin-top: 2px;
  margin-bottom: 6px;
  align-items: start;
`;

const PinCell = styled.div`
  display: flex;
  justify-content: center; /* ✅ centers pin in its column */
  position: relative;
  z-index: 2;              /* ensures pin sits above the line */
`;

const LINE_Y = 15; /* ✅ single source of truth for line Y */

const Line = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  top: 16px;
  height: 2px;
  background: var(--accent);
  opacity: 0.95;
  z-index: 1;
`;

const Arrow = styled.div`
  position: absolute;
  right: -1px;
  top: 16px;
  transform: translateY(-50%);
  width: 0;
  height: 0;
  border-top: 7px solid transparent;
  border-bottom: 7px solid transparent;
  border-left: 14px solid var(--accent);
  z-index: 1;
`;

/* Pins sit on the line */
const Pin = styled.div`
  width: 1px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Stem = styled.div`
  width: 2px;
  height: 20px;
  background: var(--accent);
  opacity: 0.9;

  /* ✅ push stem downward into the line */
  transform: translateY(5px);
`;

const Dot = styled.div`
  width: 10px;
  height: 10px;
  border-radius: 999px;
  background: transparent;
  border: 2px solid var(--accent);
  margin-top: -8px; /* ✅ dot center sits on the line */
`;

/* bottom label cells */
const BottomCell = styled.div`
  text-align: ${(p) => p.$align};
  min-width: 0;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: ${(p) =>
    p.$align === "left" ? "flex-start" : p.$align === "right" ? "flex-end" : "center"};
`;

const Year = styled.div`
  margin-top: 0px;
  color: var(--text);
  font-weight: 900;
  font-size: clamp(11px, 1.2vw, 13px);
`;

const Detail = styled.div`
  color: var(--text);
  font-weight: 500;
  font-size: clamp(10px, 1.1vw, 11px);
  line-height: 1.25;
  white-space: pre-line;
`;
