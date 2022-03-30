import styled from "styled-components";

export const Container = styled.div`
  height: 100%;
  padding-bottom: 2.5rem;

  .content {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  header {
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
      justify-content: right;

      border-radius: 4px;
      padding: 1rem 0;

      span {
        font-size: 12px;
      }
      img {
        width: 22px;
        height: 22px;
      }
    }
  }

  main {
    max-width: 1296px;
    margin-top: 8rem;
  }

  .userInfo {
    display: flex;
    align-items: center;
    color: rgb(239, 239, 239);

    span {
      font-size: 16px;
      @media (max-width: 720px) {
        display: none;
      }
    }
  }
`;

export const GridProducts = styled.div`
  display: grid;
  gap: 2rem;

  justify-content: space-evenly;
  justify-items: center;
  align-content: space-evenly;
  align-items: center;

  @media (min-width: 1365px) {
    grid-template-columns: repeat(4, 1fr);
  }
  @media (max-width: 1364px) {
    grid-template-columns: repeat(3, 1fr);
  }
  @media (max-width: 1035px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: 650px) {
    grid-template-columns: repeat(1, 1fr);
  }

  .product {
    padding-top: 0.5rem;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    background-color: rgba(0, 0, 0, 0.7);
    box-shadow: rgba(0, 0, 0, 0.3) 0px 19px 38px,
      rgba(0, 0, 0, 0.22) 0px 15px 12px;
    border-radius: 4px;
    color: white;

    order: reverse;
    cursor: pointer;

    img {
      max-width: 280px;
      height: 200px;
      padding: 1rem;
    }

    transition: filter 0.2s;
    &:hover {
      filter: brightness(0.4);
    }

    span {
      margin: 0 1rem;
      display: flex;

      text-align: justify;
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

  border: 2px solid rgb(239, 239, 239);
  border-radius: 30px;
  padding: 5px;
  cursor: pointer;

  transition: filter 0.2s;

  &:hover {
    filter: brightness(0.8);
  }
`;
