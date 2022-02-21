import { Link } from "react-router-dom";
import styled from "styled-components";

export default function Dummy() {
  return (
    <DummyWrapper className="bg-color">
      <main>
        <h2>Dummy</h2>
        <br />
        <p>Hello, this is me!</p>
        <br />
        <p>Was a bit tough, but it was totally worth it. Thanks for this amazing test since I've enjoyed like a kid doing it :).</p>
        <br />
        <img src="./dummy.gif" alt="" />
        <br />
        <Link to="/">
          <button className="btn" type="button">
            Back to home
          </button>
        </Link>
      </main>
    </DummyWrapper>
  );
}

const DummyWrapper = styled.div`
  height: calc(100vh);
  width: 100vw;
  padding: 6em;
`;
