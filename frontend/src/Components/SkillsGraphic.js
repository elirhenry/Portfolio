import styled from "styled-components";
import IconArc from "./IconArc";

function SkillsGraphic() {
  return (
    <GraphicWrapper>
      <IconArc />
    </GraphicWrapper>
  );
}

const GraphicWrapper = styled.div`
  width: 420px;
  height: 420px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default SkillsGraphic;