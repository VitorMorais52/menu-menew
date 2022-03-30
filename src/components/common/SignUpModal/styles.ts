import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  .submit-user {
    margin-top: 1rem;
    width: 100%;
    height: 54px;
    cursor: pointer;
    border: none;

    background: rgb(239, 239, 239);
    color: #b22e6f;
    border-radius: 4px;

    transition: filter 0.2s;
    &:hover {
      filter: brightness(0.9);
    }
  }
`;

export const Wrapper = styled.div`
  width: 400px;
  max-width: 400px;
  display: grid;
  grid-template-columns: 1fr;
  gap: 1rem;
`;
