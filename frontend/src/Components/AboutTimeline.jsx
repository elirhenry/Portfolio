import React from "react";
import styled from "styled-components";

const timelineItems = [
  {
    title: "Space\u00A0Force Apprentice",
    year: "2021",
    detail: "Joined the Space\u00A0Force\n & trained as a Satellite\u00A0Operator",
    iconSrc: "/AboutIcons/spaceforcelogo.png"
  },
  {
    title: "Satellite Operator",
    year: "2023",
    detail: "Supported systems' optimization & data analytics",
    iconSrc: "/AboutIcons/satellite.png",
  },
  {
    title: "Supra Coder",
    subtitle: "Full-stack Software Developer bootcamp",
    year: "2024",
    detail: "Trained in Full Stack Software Developer bootcamp",
    iconSrc: "/AboutIcons/coding.png",
  },
  {
    title: "Supra\u00A0Coder Internship",
    subtitle: "Space Launch Delta 45 Internship",
    year: "Mid 2024",
    detail: "Optimized Cape\u00A0Canaveral weather application for launch support",
    iconSrc: "/AboutIcons/launchicon.png",
  },
  {
    title: "Software Developer",
    subtitle: "Palantir Project",
    year: "2025",
    detail: "Delivered dashboard for asset reporting, resources, & alerts",
    iconSrc: "/AboutIcons/dashboard.png",
  },
  {
    title: "Walt\u00A0Disney Fellowship",
    subtitle: "Disney Data\nTech/Scrum",
    year: "Mid 2025",
    detail: "Supported Project Management for data migration",
    iconSrc: "/AboutIcons/disney.png",
  },
];

function AboutTimeline({
  accent = "#64ffda",
  text = "#0a192f",
  topOffset = 120,
}) {
  const cols = timelineItems.length;

  return (
    <Outer
      style={{
        marginTop: topOffset,
        "--accent": accent,
        "--text": text,
      }}
    >
      <Wrap>
        {/* TOP ROW */}
        <TopGrid $cols={cols}>
          {timelineItems.map((item) => (
            <TopCell key={`${item.title}-${item.year}`}>
              <IconWrap>
                <Icon src={item.iconSrc} alt="" />
              </IconWrap>
              <Title>{item.title}</Title>
              {/* <SubTitle>{item.subtitle}</SubTitle> */}
            </TopCell>
          ))}
        </TopGrid>

        {/* TIMELINE + BOTTOM */}
        <BottomGrid $cols={cols}>
          <LineRow $cols={cols}>
            <Line />
            <Arrow />

            {timelineItems.map((item) => (
              <PinCell key={`${item.title}-${item.year}`}>
                <Pin>
                  <Stem />
                  <Dot />
                </Pin>
              </PinCell>
            ))}
          </LineRow>

          {timelineItems.map((item) => (
            <BottomCell key={`${item.title}-${item.year}`} $align="center">
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

const GRID_GAP = "60px";

const Outer = styled.div`
  width: 100%;
  overflow: hidden;
  box-sizing: border-box;
`;

const Wrap = styled.section`
  width: 100%;
  background: transparent;
  box-sizing: border-box;
  font-family: system-ui, -apple-system, Segoe UI, Roboto, Arial, sans-serif;

  /* ✅ keeps the exact layout, just scales down slightly when more than 5 items */
  transform-origin: top center;
  transform: scale(0.88);
`;

/* TOP GRID */
const TopGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(${(p) => p.$cols}, minmax(0, 1fr));
  gap: ${GRID_GAP};
  align-items: start;
`;

const TopCell = styled.div`
  min-width: 0;
  display: flex;
  flex-direction: column;
  align-items: center;   /* centers the block itself */
  text-align: center;    /* centers wrapped lines */
`;

const IconWrap = styled.div`
  display: grid;
  place-items: center;
  margin-bottom: 8px;
`;

const Icon = styled.img`
  width: clamp(28px, 3.4vw, 38px);
  height: clamp(28px, 3.4vw, 38px);
  /* converts PNG → #0a192f */
  filter: brightness(0)
          saturate(100%)
          invert(10%)
          sepia(38%)
          saturate(900%)
          hue-rotate(185deg)
          brightness(90%)
          contrast(95%);
`;

const Title = styled.div`
  color: var(--text);
  font-weight: 800;
  font-size: clamp(11px, 1.2vw, 13px);
  line-height: 1.15;
  margin-bottom: 4px;
  text-align: center;
  white-space: pre-line;
`;


// const SubTitle = styled.div`
//   color: var(--text);
//   font-weight: 500;
//   font-size: clamp(10px, 1.1vw, 11px);
//   line-height: 1.25;
//   white-space: pre-line;
// `;

/* BOTTOM GRID */
const BottomGrid = styled.div`
  margin-top: 4px;
  display: grid;
  grid-template-columns: repeat(${(p) => p.$cols}, minmax(0, 1fr));
  column-gap: ${GRID_GAP};  /* ✅ add this */
  align-items: start;
`;

const LineRow = styled.div`
  grid-column: 1 / -1;
  position: relative;
  display: grid;
  grid-template-columns: repeat(${(p) => p.$cols}, minmax(0, 1fr));
  column-gap: ${GRID_GAP};  /* ✅ match the others */
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
  right: -14px;
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
  overflow: visible;
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
  white-space: nowrap;
`;

const Detail = styled.div`
  color: var(--text);
  font-weight: 500;
  font-size: clamp(10px, 1.1vw, 11px);
  line-height: 1.25;
  white-space: pre-line;
  text-align: center;
`;

export default AboutTimeline;