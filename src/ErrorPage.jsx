import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { Button } from "./styles/Button";

const ErrorPage = () => {
  return (
    <Wrapper>
      <div className="container">
        <div>
          <h2>404</h2>
          <h3>UH OH! You're lost.</h3>
          <p>
            Check for errors in the URL. Often times this error appears because
            the URL was typed wrong or the link selected points to the wrong
            URL.
          </p>
          <NavLink to="/">
            <Button>Go Back To Home</Button>
          </NavLink>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .container {
    padding: 9rem 0;
    text-align: center;

    h3 {
      font-size: 4.2rem;
    }
    h2 {
      font-size: 10rem;
    }

    p {
      margin: 2rem;
    }
  }
`;
export default ErrorPage;
