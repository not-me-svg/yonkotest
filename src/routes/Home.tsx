import styled from "styled-components";
import { Yonko3D } from "../components/Yonko3D";
import { BottomContent } from "../components/BottomContent";

export default function Home() {
  return (
    <>
      <HomeWrapper className="bg-color">
          <div className="h-100vh">
            <Yonko3D />
          </div>

          <div className="bg-color">
              <BottomContent></BottomContent>
          </div>
      </HomeWrapper>
    </>
  );
}

const HomeWrapper = styled.div`
  height: 100vh;
  position: relative;
`;
