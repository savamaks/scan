import styled from "styled-components";
import Burdger from "./Burger";
import {  useAppDispatch, useAppSelector } from "../Reducer/store";
import Loader from "./Loaders/Loader";
import { useResize } from "../Hooks/useResize";
import LogIn from "./LogIn";
import { Link } from "react-router-dom";
import Navigation from "./Navigation";
import { changeBoolean } from "../Reducer/appSlice";
import { useEffect } from "react";
import { requestInfo } from "../api/requstInfo";
import { Variable } from "../variable";

const HeaderContainer = styled.header<{ position: string; background: string }>`
    position: ${(props) => props.position};
    top: 0;
    grid-area: header;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 26px;
    background: ${(props) => props.background};
    z-index: 22;
    width: 100%;
    max-width: 1440px;
    
`;
const Logo = styled.img``;
const Container = styled.div`
    display: flex;
    flex-direction: column;
    gap: 7px;
    padding: 5px 10px;
    border-radius: 5px;
    background: rgb(217, 217, 217, 0.3);
`;
const Text = styled.p`
    margin-bottom: 2px;
    color: #000;
    font-family: Inter;
    font-size: 8px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
`;
const CountText = styled.p<{ color: string }>`
    color: ${(props) => props.color};
    font-family: Inter;
    font-size: ${Variable.fontSize.primary};
    font-style: normal;
    font-weight: 700;
    line-height: normal;
`;

const Box = styled.div`
    display: flex;
    align-items: center;
    gap: 7px;
    justify-content: flex-end;
    @media (max-width: 900px) {
        flex-direction: column;
        align-items: flex-start;
    }
`;
const Header = () => {
    const dispatch = useAppDispatch();
    const resultLogIn = useAppSelector((state) => state.appSlice.resultLogIn);
    const loadingLogIn = useAppSelector((state) => state.appSlice.loadingLogIn);
    const activeBurger = useAppSelector((state) => state.appSlice.activeBurger);
    const eventFiltersInfo = useAppSelector((state) => state.eventSlice.eventFiltersInfo);
    const loadingInfo = useAppSelector((state) => state.eventSlice.loadingInfo);

    const clickLogo = () => {
        if (activeBurger) {
            dispatch(changeBoolean("activeBurger"));
        }
    };
    const { size } = useResize();

    useEffect(() => {
        if (loadingLogIn === "true") {
            dispatch(requestInfo(resultLogIn.accessToken));
        }
    }, [loadingLogIn]);
    return (
        <HeaderContainer position={activeBurger ? "sticky" : "none"} background={activeBurger ? "#029491" : "#FFF"}>
            <Link to="/">
                <Logo onClick={clickLogo} src={activeBurger ? "images/logowhite.svg" : "images/logo.svg"} alt="logo" />
            </Link>

            {size && <Navigation />}
            {loadingLogIn === "true" && resultLogIn.accessToken !== "" && !activeBurger && (
                <Container>
                    {loadingInfo === "true" ? (
                        <>
                            <Box>
                                <Text>Использовано компаний </Text>
                                <CountText color={"#000"}>{eventFiltersInfo.usedCompanyCount}</CountText>
                            </Box>
                            <Box>
                                <Text>Лимит по компаниям</Text>
                                <CountText color={"#8AC540"}>{eventFiltersInfo.companyLimit}</CountText>
                            </Box>
                        </>
                    ) : (
                        <Loader />
                    )}
                </Container>
            )}
            {!size ? <Burdger /> : <LogIn />}
        </HeaderContainer>
    );
};

export default Header;
