import { createGlobalStyle } from "styled-components";
import wallpaper from "../assets/img/wallpaper.jpg";

const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        outline: 0;
    }

    :root {
        --primary: #ff577f;
        --primary-focus: #ff427f;
        --primary-negative: #59323f;
        --grey-4: #121214;
        --grey-3: #212529;
        --grey-2: #343b41;
        --grey-1: #868e96;
        --grey-0: #f8f9fa;
        --success: #3fe864;
        --negative: #e83f5b;

        --toastify-color-dark: var(--grey-2);
        --toastify-color-success: var(--success);
        --toastify-color-error: var(--negative);
        --toastify-icon-color-success: var(--toastify-color-success);
        --toastify-icon-color-error: var(--toastify-color-error);
        --toastify-text-color-dark: var(--grey-0);
    }

    body {
        background: var(--grey-0);
        color: var(--grey-4);
        background-image: url(${wallpaper});
    }

    body, button, input, select {
        font-family: 'Inter', sans-serif;
        font-size: 1rem;
    }

    button {
        cursor: pointer;
    }

    a {
        text-decoration: none;
    }

    ol, ul {
	    list-style: none;
    }
`

export default GlobalStyle;