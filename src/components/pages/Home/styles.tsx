import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  height: 100%;
  display: flex;
  padding-bottom: 2.5rem;
  justify-content: center;

  background-color: rgba(149, 69, 255, 0.9);
`;

export const Content = styled.div`
  width: 1365px;
  margin: 0 1rem;
`;

export const Header = styled.div`
  display: flex;
  margin: 2.5rem 0;
  justify-content: right;

  span {
    font-size: 12px;
  }
  img {
    width: 22px;
    height: 22px;
  }
`;

export const GridProducts = styled.div`
  display: grid;
  gap: 1rem;
  @media (min-width: 1365px) {
    grid-template-columns: repeat(4, 1fr);
  }
  @media (max-width: 1364px) {
    grid-template-columns: repeat(3, 1fr);
  }
  @media (max-width: 1035px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: 590px) {
    grid-template-columns: repeat(1, 1fr);
  }

  .product {
    padding-top: 0.5rem;
    padding-bottom: 1rem;
    max-width: 300px;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    background-color: rgba(0, 0, 0, 0.7);
    color: white;

    order: reverse;
    cursor: pointer;

    img {
      margin-top: 1rem;
      width: 300px;
      height: 200px;
    }

    transition: filter 0.2s;
    &:hover {
      filter: brightness(0.4);
    }

    span {
      margin: 0 1rem;
      display: flex;

      text-align: justify;
      overflow: auto;
    }
  }
`;

export const UserInfo = styled.div`
  display: flex;
  align-items: center;
  color: rgb(239, 239, 239);

  span {
    font-size: 16px;
    @media (max-width: 720px) {
      display: none;
    }
  }
`;

export const UserName = styled.span`
  margin-right: 1rem;
  font-size: 12px;
  font-weight: bold;
`;

export const IconButton = styled.div`
  width: 40px;
  height: 40px;

  display: flex;
  justify-content: center;
  align-items: center;

  border: 1px solid rgb(239, 239, 239);
  border-radius: 30px;
  padding: 5px;
  cursor: pointer;

  transition: filter 0.2s;

  &:hover {
    filter: brightness(0.8);
  }
`;

export const Main = styled.div`
  width: 100%;
`;
