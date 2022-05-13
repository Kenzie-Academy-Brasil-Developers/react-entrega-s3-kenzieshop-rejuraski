// import styled from "styled-components";

// export const Container = styled.div`
//     align-items: flex-start;
//     display: flex;
//     justify-content: center;
// `;

// export const Content = styled.ul`
//     align-items: center;
//     display: flex;
//     flex-wrap: wrap;
//     justify-content: flex-start;
//     max-width: 800px;
//     padding: 16px;
//     width: 100%;
//     gap: 12px 12px;

//     li {
//         display: flex;
//         flex-direction: column;
//         align-items: center;
//         background: #fff;
//         width: 32%;
//         padding: 16px;
//         border-radius: 8px;

//     }

//     img {
//         height: 190px;
//     }
// `;

// export const Button = styled.button`
//   width: 60%;
//   font-size: 14px;
//   padding: 5px 8px;
//   width: 100px;
//   height: 40px;
//   margin: 0;
//   border: none;
//   border-radius: 8px;
//   color: var(--primary);
// `;

import styled from "styled-components";

export const Container = styled.div`
    align-items: flex-start;
    display: flex;
    justify-content: center;
    border-radius: 8px solid;
`;

export const Content = styled.ul`
    align-items: center;
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
    max-width: 800px;
    padding: 16px;
    width: 100%;
    gap: 12px 12px;

    li {
        display: flex;
        flex-direction: column;
        align-items: center;
        background: #fff;
        width: 32%;
        padding: 16px;
        border-radius: 8px;

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