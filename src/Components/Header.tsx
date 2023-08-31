import styled from "styled-components";
import Burdger from "./Burger";
import { useAppDispatch, useAppSelector } from "../Reducer/store";
import Loader from "./Loaders/Loader";
import { useResize } from "../Hooks/useResize";
import LogIn from "./LogIn";
import { Link } from "react-router-dom";
import Navigation from "./Navigation";
import { changeBoolean, changeBooleanName } from "../Reducer/appSlice";
import { useEffect } from "react";
import { requestInfo } from "../api/requstInfo";

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
    font-size: 14px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
`;
const Box = styled.div`
    display: flex;
    align-items: center;
    gap: 9px;
    justify-content: flex-end;
`;
const Header = () => {
    const { loadingLogIn, loadingInfo, activeBurger, eventFiltersInfo, resultLogIn } = useAppSelector((state) => state.appSlice);
    const dispatch = useAppDispatch();

    const clickLogo = () => {
        if (activeBurger) {
            dispatch(changeBoolean("activeBurger"));
        }
    };
    const { size } = useResize();

    useEffect(() => {
        if (loadingLogIn ==='true') {
            console.log("запуск Инфо");
            dispatch(requestInfo(resultLogIn.accessToken));
        }
    }, [loadingLogIn]);

    return (
        <HeaderContainer position={activeBurger ? "sticky" : "none"} background={activeBurger ? "#029491" : "#FFF"}>
            <Link to="/">
                <Logo onClick={clickLogo} src={activeBurger ? "images/logowhite.svg" : "images/logo.svg"} alt="logo" />
            </Link>

            {size && <Navigation />}
            {loadingLogIn === "true"&& resultLogIn.accessToken !== "" && size && (
                <Container>
                    <div>
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
                    </div>
                </Container>
            )}
            {!size ? <Burdger /> : <LogIn />}
        </HeaderContainer>
    );
};

export default Header;
