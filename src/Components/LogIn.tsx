import styled from "styled-components";
import { useAppDispatch, useAppSelector } from "../Reducer/store";
import { Link } from "react-router-dom";
import { changeBoolean,  removeToken } from "../Reducer/appSlice";
import ButtonCustom from "./ButtonCustom";

const LogInContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 20px;
    @media (max-width: 900px) {
        padding-top: 75px;
        flex-direction: column;
    }
`;
const RegistrationButton = styled.button`
    color: #000;
    font-family: Inter;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    opacity: 0.4;
    @media (max-width: 900px) {
        color: #fff;
        font-size: 16px;
    }
`;
const Line = styled.div`
    width: 2px;
    height: 26px;
    background: #029491;
`;
const EntryButton = styled.button`
    color: #000;
    font-family: Inter;
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    border-radius: 5px;
    background: #7ce3e1;
    padding: 5px 12px;
    @media (max-width: 900px) {
        color: #000;
        font-family: Inter;
        font-size: 20px;
        font-style: normal;
        font-weight: 500;
        line-height: normal;
        letter-spacing: 0.2px;
        width: 78vw;
        height: 52px;
    }
`;
const Container = styled.div`
    display: flex;
    gap: 3px;
    flex-direction: column;
    align-items: flex-end;
`;
const AvaImage = styled.img`
    width: 32px;
    height: 32px;
    border-radius: 50%;
`;
const NameText = styled.h2`
    color: #000;
    font-family: Inter;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    opacity: 0.7;
`;
const ButtonExit = styled.button`
    color: #000;
    font-family: Inter;
    font-size: 10px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    opacity: 0.4;
`;
const LogIn = () => {
    const { resultLogIn , activeBurger } = useAppSelector((state) => state.appSlice);

    const dispatch = useAppDispatch();

    const clickEntryButton = () => {
        if (activeBurger) {
            dispatch(changeBoolean("activeBurger"));
        }
    };

    const exitButton = () => {
        dispatch(removeToken())
        console.log('object');
    };
    if (!resultLogIn.accessToken ) {
        return (
            <LogInContainer>
                <RegistrationButton>Зарегистрироваться</RegistrationButton>
                <Line></Line>
                <Link to="/auth">
                    <ButtonCustom
                        style={{ color: "#000", fontSize: "14px", bordeRadius: "5px", background: "#7ce3e1", padding: " 5px 12px" }}
                        onClick={clickEntryButton}
                    >
                        Войти
                    </ButtonCustom>
                </Link>
            </LogInContainer>
        );
    } else {
        return (
            <LogInContainer>
                <Container>
                    <NameText>Алексей А.</NameText>
                    <ButtonExit onClick={exitButton}>Выйти</ButtonExit>
                </Container>
                <AvaImage src={"images/ava.png"} alt="Ava" />
            </LogInContainer>
        );
    }
};

export default LogIn;
