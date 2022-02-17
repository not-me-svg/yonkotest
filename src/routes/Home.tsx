import styled from "styled-components";
import { Controller, Scene } from "react-scrollmagic";
import { Yonko3D } from "../components/Yonko3D";
import { useScrollHandler } from "../hooks/useScrollHandler";
import { BottomContent } from "../components/BottomContent";

export default function Home() {
  const scroll = useScrollHandler();
  return (
    <>
      <HomeWrapper className="bg-color">
        <ScrollContainer id="scroll-container">
          <div
          className="h-100vh"
            // className={`h-100vh ${scroll > 100 ? "z-index-0" : "z-index-1"}`}
          >
            <Yonko3D />
          </div>

          <div
          className="h-100vh"
            // className={`h-100vh ${scroll > 100 ? "z-index-1" : "z-index-0"}`}
          >
              <BottomContent></BottomContent>
          </div>
        </ScrollContainer>
      </HomeWrapper>
    </>
  );
}

const HomeWrapper = styled.div`
  height: 100vh;
  position: relative;
  overflow: hidden;
`;

const ScrollContainer = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  right: -17px;
  overflow-y: scroll;
`;