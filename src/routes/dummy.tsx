import styled from "styled-components";

export default function Dummy() {
  return (
    <DummyWrapper>
      <main>
        <h2>Dummy</h2>
      </main>
    </DummyWrapper>
  );
}

const DummyWrapper = styled.div`
  height: calc(100vh - 6em);
  width: 100vw;
  overflow-y: auto;
  padding-top: 6em;
`;
