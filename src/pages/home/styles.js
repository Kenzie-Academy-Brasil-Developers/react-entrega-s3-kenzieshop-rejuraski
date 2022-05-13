import styled from "styled-components";

export const Container = styled.div`
    align-items: center;
    display: flex;
    justify-content: center;
`;

export const Content = styled.ul`
    align-items: center;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    max-width: 800px;
    padding: 16px;
    width: 100%;

    li {
        display: flex;
        flex-direction: column;
        align-items: center;
        background: #fff;
        margin-top: 20px;
        width: 32%;
        padding: 16px;
        border-radius: 8px;

    }

    li > *:not(:last-child) {
        margin-bottom: 8px;
    }

    img {
        height: 190px;
    }
`;

export const Button = styled.button`
  width: 60%;
  font-size: 14px;
  padding: 5px 8px;
  width: 100px;
  height: 40px;
  margin: 0;
  border: none;
  border-radius: 8px;
  color: var(--primary);
`;