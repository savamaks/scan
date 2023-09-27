import styled from "styled-components";
import {  useAppDispatch, useAppSelector } from "../../Reducer/store";
import { changeBoolean, removeToken } from "../../Reducer/appSlice";
import { ChangeEvent, useEffect, useState } from "react";
import { useResize } from "../../Hooks/useResize";
import ButtonCustom from "../ButtonCustom";
import { requestLogin } from "../../api/requestLogin";
import { Navigate } from "react-router-dom";
import Loader from "../Loaders/Loader";
import { removeLoadingInfo } from "../../Reducer/eventSlice";

const Container = styled.div`
    padding: 31px 14px 80px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    @media (min-width: 900px) {
        flex-direction: row;
        padding: 69px 141px 80px 60px;
    }
`;
const Box = styled.div`
    display: flex;
    flex-direction: column;
`;

const TextBox = styled.p`
    margin: 31px 0 126px 0;
    color: #000;
    font-family: Ferry;
    font-size: 22px;
    font-style: normal;
    font-weight: 900;
    line-height: normal;
    letter-spacing: 0.44px;
    @media (min-width: 900px) {
        font-size: 45px;
        flex-basis: 50%;
    }
`;
const ImageBox = styled.img`
    align-self: center;
`;

const ContainerAuth = styled.div`
    position: relative;
    border-radius: 10px;
    background: #fff;
    box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.15);
    display: flex;
    flex-direction: column;
    margin-bottom: 49px;
    @media (min-width: 900px) {
        align-self: flex-start;
        flex-basis: 50%;
        min-width: 360px;
    }
`;
const ImageForm = styled.img`
    position: absolute;
    left: 25%;
    top: -13%;
    @media (min-width: 900px) {
        left: -10%;
        top: -10%;
    }
`;
const Form = styled.form`
    display: flex;
    flex-direction: column;
    margin: 0 15px;
    gap: 15px;
`;
const BoxButton = styled.div`
    margin: 25px 15px;
    display: flex;
    align-items: center;
    align-self: center;
    gap: 20px;
    flex-wrap: wrap;
`;
const Block = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    gap: 10px;
`;
const Button = styled.button<{ color: string }>`
    color: ${(props) => props.color};
    font-family: Inter;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    letter-spacing: 0.28px;
`;
const Line = styled.div<{ background: string }>`
    width: 110%;
    height: 2px;
    background: ${(props) => props.background};
`;
const TextForm = styled.label`
    color: #949494;
    font-family: Inter;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    letter-spacing: 0.28px;
`;
const Input = styled.input<{ border: string }>`
    height: 43px;
    border-radius: 5px;
    border: 1px solid #c7c7c7;
    background: #fff;
    padding-left: 10px;
    box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.05);
    color: #000;
    font-family: Inter;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    letter-spacing: 0.16px;
    border: 1px solid ${(props) => props.border};
`;

const LinkPassword = styled.a`
    cursor: pointer;
    align-self: center;
    color: #5970ff;
    font-family: Inter;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    letter-spacing: 0.28px;
    text-decoration-line: underline;
`;
const Text = styled.p`
    flex-basis: 100%;
    color: #949494;
    font-family: Inter;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    letter-spacing: 0.32px;
`;
const ButtonLink = styled.button``;

const LabelError = styled.label`
    color: #ff5959;
    font-family: Inter;
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    letter-spacing: 0.12px;
    align-self: center;
`;

const Authorization = () => {
    const SizeWindow = useResize();
    const buttonEntry = useAppSelector((state) => state.appSlice.buttonEntry);
    const buttonReq = useAppSelector((state) => state.appSlice.buttonReq);
    const resultLogIn = useAppSelector((state) => state.appSlice.resultLogIn);
    const loadingLogIn = useAppSelector((state) => state.appSlice.loadingLogIn);

    const dispatch = useAppDispatch();
    const [valueLogin, setValueLogin] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(false);
    // const [result, setResult] = useState<TypeResult | null>({});

    const activeButton = () => {
        if (!buttonEntry) {
            dispatch(changeBoolean("buttonEntry"));
            dispatch(changeBoolean("buttonReq"));
        }
    };
    const activeButtonReq = () => {
        if (!buttonReq) {
            dispatch(changeBoolean("buttonEntry"));
            dispatch(changeBoolean("buttonReq"));
        }
    };

    const changeInput = (e: ChangeEvent<HTMLInputElement>) => {
        setValueLogin(e.target.value);
        setError(false);
    };
    const changePassword = (e: ChangeEvent<HTMLInputElement>) => {
        setPassword(e.target.value);
        setError(false);
    };

    const clickEntry = async (e: ChangeEvent<HTMLButtonElement>) => {
        e.preventDefault();

        if (valueLogin === "" || password === "") return;
        dispatch(removeToken());
        dispatch(removeLoadingInfo())
        dispatch(requestLogin({ login: valueLogin, password }));
        setValueLogin("");
        setPassword("");
    };

    useEffect(() => {
        if (resultLogIn.accessToken) {
        } else if (resultLogIn.errorCode) {
            setError(true);
        }
    }, [resultLogIn]);
    if (!resultLogIn.accessToken) {
        return (
            <Container>
                <Box>
                    <TextBox>Для оформления подписки на тариф, необходимо авторизоваться.</TextBox>
                    {SizeWindow.size && <ImageBox src={"images/Characters.png"} alt="key" />}
                </Box>
                <ContainerAuth>
                    <ImageForm src={"images/lock.svg"} alt="lock" />
                    <BoxButton>
                        <Block>
                            <Button onClick={activeButton} color={buttonEntry ? "#029491" : "#C7C7C7"}>
                                Войти
                            </Button>
                            <Line background={buttonEntry ? "#029491" : "#C7C7C7"}></Line>
                        </Block>
                        <Block>
                            <Button onClick={activeButtonReq} color={buttonReq ? "#029491" : "#C7C7C7"}>
                                Зарегистрироваться
                            </Button>
                            <Line background={buttonReq ? "#029491" : "#C7C7C7"}></Line>
                        </Block>
                    </BoxButton>
                    <Form>
                        <TextForm>Логин или номер телефона:</TextForm>
                        <Input border={error ? "#FF5959" : "none"} onChange={changeInput} type="text" value={valueLogin} />
                        <TextForm>Пароль:</TextForm>
                        <Input border={error ? "#FF5959" : "none"} onChange={changePassword} type="password" value={password} />
                        {error && <LabelError>{resultLogIn.message}</LabelError>}
                        {loadingLogIn === "loading" ? (
                            <Loader />
                        ) : (
                            <ButtonCustom
                                style={{
                                    margin: `${error ? "14px" : "34px"} 0 0`,
                                    background: `${valueLogin === "" || password === "" ? "#a4aff3" : "#5970FF"}`,
                                }}
                                onClick={clickEntry}
                            >
                                Войти
                            </ButtonCustom>
                        )}
                        <LinkPassword>Восстановить пароль</LinkPassword>
                    </Form>
                    <BoxButton>
                        <Text>Войти через:</Text>
                        <ButtonLink>
                            <img src={"images/google.svg"} alt="google" />
                        </ButtonLink>
                        <ButtonLink>
                            <img src={"images/facebook.svg"} alt="facebook" />
                        </ButtonLink>
                        <ButtonLink>
                            <img src={"images/yandex.svg"} alt="yandex" />
                        </ButtonLink>
                    </BoxButton>
                </ContainerAuth>
                {!SizeWindow.size && <ImageBox src={"images/Characters.png"} alt="key" />}
            </Container>
        );
    } else {
        return <Navigate to="/" />;
    }
};

export default Authorization;
