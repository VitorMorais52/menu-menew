import styled from "styled-components";

export const Container = styled.header`
  top: 0;
  position: fixed;

  width: 100%;
  margin-bottom: 2.5rem;

  display: flex;
  justify-content: center;

  background-color: rgba(0, 0, 0, 0.7);

  .content-header {
    width: 1216px;

    display: flex;
    justify-content: space-between;

    border-radius: 4px;
    padding: 1rem 0;

    svg {
      stroke: rgb(239, 239, 239);
    }

    span {
      font-size: 12px;
    }

    img {
      width: 22px;
      height: 22px;
    }

    button {
      width: 40px;
      height: 40px;

      display: flex;
      justify-content: center;
      align-items: center;

      background: transparent;
      border: 2px solid rgb(239, 239, 239);
      border-radius: 30px;
      padding: 5px;
      cursor: pointer;

      transition: filter 0.2s;

      &:hover {
        filter: brightness(0.8);
      }

      &:first-child {
        border: none;
      }
    }
  }
`;

export const UserName = styled.span`
  margin-right: 1rem;
  font-size: 12px;
  font-weight: bold;
`;
