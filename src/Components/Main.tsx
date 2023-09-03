import styled from "styled-components";
import Authorization from "./page/AuthorizationPage";
import { Route, Routes } from "react-router-dom";
import MainPage from "./page/MainPage";
import SearchPage from "./page/SearchPage";
import MenuBurger from "./MenuBurger";
import { useAppSelector } from "../Reducer/store";
import ResultPage from "./page/ResultPage";
import Proba from "./page/proba";

const MainContainer = styled.main`
    grid-area: main;
    position: relative;
    max-width: 1440px;
`;

const Main = () => {
    const { activeBurger } = useAppSelector((state) => state.appSlice);
    return (
        <MainContainer>
            {activeBurger && <MenuBurger />}
            <Routes>
                <Route path="/" Component={MainPage} />
                <Route path="/auth" Component={Authorization} />
                <Route path="/search" Component={SearchPage} />
                <Route path="/result" Component={ResultPage} />
                <Route path="/proba" Component={Proba} />
            </Routes>
        </MainContainer>
    );
};

export default Main;

