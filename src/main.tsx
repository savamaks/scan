import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { StyleSheetManager, createGlobalStyle } from "styled-components";
import store from "./Reducer/store.ts";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";

const GlobalStyle = createGlobalStyle`


@font-face {
	font-family: 'Ferry';
	src: url('Ferry-Black.eot');
	src: local('Ferry Black'), local('Ferry-Black'),
		url('font/Ferry-Black.woff') format('truetype'),
    url('font/Ferry-Black.woff') format('woff')

}
@font-face {
    font-family: 'Inter';
    src: url('Inter-Regular.eot');
    src: local('Inter Regular'), local('Inter-Regular'),
        url('font/Inter-Regular.woff2') format('woff2'),
        url('font/Inter-Regular.woff') format('woff'),
        url('font/Inter-Regular.ttf') format('truetype');
    
}
* {
	padding: 0px;
	margin: 0px;
	border: none;
}

*,
*::before,
*::after {
	box-sizing: border-box;
}
  a, a:link, a:visited  {
    text-decoration: none;
  }

  a:hover  {
      text-decoration: none;
  }
  button{
    background: none;
    border: none;
    cursor: pointer;
  }
  #root {
    position: relative;
    box-sizing: border-box;
    margin: 0 auto;
    padding: 0;
    display: grid;
    min-height: 100vh;
    grid-template: minmax(55px, auto) 1fr minmax(70px, auto) / 1fr;
    grid-template-areas: "header" "main" "footer";
    justify-items: center;
    width: 100%;
  }

  
`;

ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
        <Provider store={store}>
            <GlobalStyle />
            <BrowserRouter>
                <StyleSheetManager enableVendorPrefixes>
                    <App />
                </StyleSheetManager>
            </BrowserRouter>
        </Provider>
    </React.StrictMode>
);
