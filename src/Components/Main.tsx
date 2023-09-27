import styled from "styled-components";
import Authorization from "./page/AuthorizationPage";
import { Route, Routes } from "react-router-dom";
import MainPage from "./page/MainPage";
import SearchPage from "./page/SearchPage";
import MenuBurger from "./MenuBurger";
import { useAppSelector } from "../Reducer/store";
import ResultPage from "./page/ResultPage";
import Proba from "./page/Proba";

const MainContainer = styled.main`
    grid-area: main;
    position: relative;
    max-width: 1440px;
`;

const RoutesEnum = {
    MAIN: "/",
    AUTH: "/auth",
    SEARCH: "/search",
    RESULT: "/result",
    PROBA:'/proba'
};
const routes = [
    { path: RoutesEnum.MAIN, component: <MainPage /> },
    { path: RoutesEnum.AUTH, component: <Authorization /> },
    { path: RoutesEnum.SEARCH, component: <SearchPage /> },
    { path: RoutesEnum.RESULT, component: <ResultPage /> },
    { path: RoutesEnum.PROBA, component: <Proba /> },

];

const Main = () => {
    const activeBurger  = useAppSelector((state) => state.appSlice.activeBurger);
    return (
        <MainContainer>
            {activeBurger && <MenuBurger />}
            <Routes>
                {routes.map((route, index) => (
                    <Route key={index} path={route.path} element={route.component} />
                ))}
            </Routes>
        </MainContainer>
    );
};

export default Main;
