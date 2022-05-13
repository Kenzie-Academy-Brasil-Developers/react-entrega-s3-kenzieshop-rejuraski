import styled from "styled-components";

export const Container = styled.div`
    align-items: center;
    display: flex;
    justify-content: center;
    background-color: #fff;
`;

export const Content = styled.div`
    align-items: center;
    display: flex;
    justify-content: space-between;
    max-width: 800px;
    padding: 16px;
    width: 100%;

    h1 {
        font-size: 24px;
        cursor: pointer;
    }

    h1 strong {
        color: var(--primary);
    }

    ul {
        display: flex;
    }

    li + li {
        margin-left: 16px;
    }

    li {
        align-items: center;
        display: flex;
        justify-content: center;
        position: relative;
        cursor: pointer;
    }

    li span {
        margin-left: 8px;
    }

    li div {
        align-items: center;
        background: var(--primary);
        border-radius: 50px;
        color: var(--grey-0);
        display: flex;
        font-size: 10px;
        justify-content: center;
        left: 16px;
        min-width: 16px;
        padding: 2px 2px;
        position: absolute;
        top: 0;
    }
`;