import styled from "styled-components";
import IconArc from "./IconArc";

export default function SkillsGraphic() {
  return (
    <Wrap>
      <IconArc />
    </Wrap>
  );
}

/* ---------- Styled Components ---------- */

const Wrap = styled.div`
  width: 420px;
  height: 420px;
  display: grid;
  place-items: center;
`;
