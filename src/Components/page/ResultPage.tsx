import styled from "styled-components";
import Document from "../Document";
import BoxResult from "../BoxResult";
import ButtonCustom from "../ButtonCustom";
import { useAppDispatch, useAppSelector } from "../../Reducer/store";
import { changeBoolean, changeCount, removeToken } from "../../Reducer/appSlice";
import { requestDocument } from "../../api/requestDocument";
import { handlerRequestDocument } from "../../helper/handlerRequestDocument";
import { Navigate } from "react-router-dom";
import Loader from "../Loaders/Loader";
import { ChangeEvent, useEffect } from "react";
import { sessionCheck } from "../../helper/sessionCheck";
import { removeLoadingInfo } from "../../Reducer/eventSlice";

const Container = styled.div`
    display: flex;
    flex-direction: column;
    padding: 20px 26px 57px 14px;
`;
const TitleText = styled.h2`
    color: #000;
    font-family: Ferry;
    font-size: 28px;
    font-style: normal;
    font-weight: 900;
    line-height: normal;
    letter-spacing: 0.28px;
    @media (min-width: 900px) {
        font-size: 40px;
        letter-spacing: 1.6px;
    }
`;
const Text = styled.p`
    color: #000;
    font-family: Inter;
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    padding: 21px 0 26px;
    @media (min-width: 900px) {
        font-size: 20px;
        letter-spacing: 1.6px;
    }
`;
const Image = styled.img`
    padding: 0 0 0 60px;
`;
const TextResult = styled.p`
    color: #949494;
    font-family: Inter;
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    letter-spacing: 0.18px;
    padding: 10px 0 34px;

    @media (max-width: 900px) {
        letter-spacing: 0.36px;
    }
`;
const Box = styled.div`
    display: flex;
    justify-content: center;
    margin: 0 0 57px 0;
`;

const Block = styled.div`
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    max-height: 250px;
    @media (max-width: 900px) {
        max-height: 700px;
    }
`;

const ResultPage = () => {
    const buttonLoadMoreActive = useAppSelector((state) => state.appSlice.buttonLoadMoreActive);
    const resultLogIn = useAppSelector((state) => state.appSlice.resultLogIn);
    const arrObjectSearch = useAppSelector((state) => state.appSlice.arrObjectSearch);
    const countLoadingDocument = useAppSelector((state) => state.appSlice.countLoadingDocument);
    const limitLoadingDocument = useAppSelector((state) => state.appSlice.limitLoadingDocument);
    const loadingDocument = useAppSelector((state) => state.appSlice.loadingDocument);
    const loadingLogIn = useAppSelector((state) => state.appSlice.loadingLogIn);

    const dispatch = useAppDispatch();

    const loadMore = async (e: ChangeEvent<HTMLButtonElement>) => {
        e.preventDefault();
        const requestBody = handlerRequestDocument(arrObjectSearch, countLoadingDocument, limitLoadingDocument);

        if (requestBody !== null) {
            dispatch(changeCount(10));
            dispatch(requestDocument({ body: requestBody, accessToken: resultLogIn.accessToken }));

            if (countLoadingDocument + limitLoadingDocument >= arrObjectSearch.items.length) {
                dispatch(changeBoolean("buttonLoadMoreActive"));
            }
        }
    };
    useEffect(() => {
        if (loadingLogIn === "true") {
            const check = sessionCheck(resultLogIn.expire);
            if (check) {
                dispatch(removeToken());
                dispatch(removeLoadingInfo())
            }
        }
    }, []);
    if (!resultLogIn.accessToken) {
        return <Navigate to="/" />;
    } else {
        return (
            <Container>
                <Block>
                    <TitleText>Ищем. Скоро будут результаты</TitleText>
                    <Text>Поиск может занять некоторое время, просим сохранять терпение.</Text>
                    <Image src={"images/result_image.svg"} alt="img" />
                </Block>

                <TitleText>Общая сводка</TitleText>
                <TextResult>Найдено {arrObjectSearch.items.length} вариантов</TextResult>
                <Box>
                    <BoxResult />
                </Box>
                <TitleText>Список документов</TitleText>
                <Document />
                {loadingDocument === "true" && !buttonLoadMoreActive && (
                    <ButtonCustom onClick={loadMore} style={{ padding: "18px 40px ", alignSelf: "center", background: "#5970ff" }}>
                        Показать больше
                    </ButtonCustom>
                )}

                {loadingDocument !== "true" && <Loader />}
            </Container>
        );
    }
};

export default ResultPage;
