import styled from "styled-components";
import { arrCarousel } from "../../fakeData";
import { useResize } from "../../Hooks/useResize";
import Rate from "../Rate";
import { Link } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../Reducer/store";
import ButtonCustom from "../ButtonCustom";
import { useEffect } from "react";
import { sessionCheck } from "../../helper/sessionCheck";
import { removeToken } from "../../Reducer/appSlice";
import Slider from "../Slider";
import { removeLoadingInfo } from "../../Reducer/eventSlice";

const ContainerMain = styled.div`
    padding: 0 14px;
    display: flex;
    flex-direction: column;
    @media (min-width: 900px) {
    }
`;
const TitleText = styled.h2`
    margin: 56px 0 0 24px;
    color: #000;
    font-family: Ferry;
    font-size: 28px;
    font-style: normal;
    font-weight: 900;
    line-height: normal;
    letter-spacing: 0.28px;
    text-transform: uppercase;
    flex-basis: 100%;
    @media (min-width: 900px) {
        font-size: 45px;
        margin: 56px 0 0 0;
    }
`;
const Text = styled.p`
    margin: 19px 0 32px 0;
    color: #000;
    font-family: Inter;
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    letter-spacing: 0.18px;
    @media (min-width: 900px) {
        font-size: 20px;
        max-width: 534px;
    }
`;

const Image = styled.img`
    width: 100%;
`;
const BoxCarousel = styled.div`
    display: flex;
    gap: 10px;
    margin: 32px auto 80px;
`;

const Block = styled.div`
    display: flex;
    @media (max-width: 900px) {
        justify-content: space-between;
        height: max-content;
        flex-direction: column;
    }
`;
const Box = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    max-width: 50%;
    @media (max-width: 900px) {
        align-items: normal;
        max-width: 100%;
    }
`;
const ImageOne = styled.img`
    width: 50%;
    @media (max-width: 900px) {
        width: 100%;
    }
`;
const MainPage = () => {
    const { size } = useResize();
    const  loadingLogIn = useAppSelector((state) => state.appSlice.loadingLogIn);
    const  resultLogIn  = useAppSelector((state) => state.appSlice.resultLogIn);

    const dispatch = useAppDispatch();
    useEffect(() => {
        if (loadingLogIn === "true") {
            const check = sessionCheck(resultLogIn.expire);
            if (check) {
                dispatch(removeToken());
                dispatch(removeLoadingInfo())

            }
        }
    }, []);
    return (
        <ContainerMain>
            <Block>
                <Box>
                    <TitleText>сервис по поиску публикаций о компании по его ИНН</TitleText>
                    <Text>Комплексный анализ публикаций, получение данных в формате PDF на электронную почту.</Text>
                    {resultLogIn.accessToken && (
                        <Link to="/search">
                            <ButtonCustom style={{ padding: "18px 64px", background: "#5970FF" }}>Запросить данные</ButtonCustom>
                        </Link>
                    )}
                </Box>
                <ImageOne src={"images/group-13.svg"} alt="img" />
            </Block>

            <TitleText>Почему именно мы</TitleText>
            <BoxCarousel>
                <Slider arr={arrCarousel}/>
            </BoxCarousel>
            <Image src={size ? "images/group-14.svg" : "images/group-14small.svg"} alt="img" />

            <TitleText>наши тарифы</TitleText>
            <Rate />
        </ContainerMain>
    );
};

export default MainPage;
