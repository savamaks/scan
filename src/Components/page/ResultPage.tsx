import styled from "styled-components";
import { DocumentType, TypeItemsArrDocument } from "../../type";
import Document from "../Document";
// import { arrDocument, arrResult } from "../../fakeData";
import BoxResultSmall from "../BoxResultSmall";
import BoxResult from "../BoxResult";
import { useResize } from "../../Hooks/useResize";
import ButtonCustom from "../ButtonCustom";
import { useAppDispatch, useAppSelector } from "../../Reducer/store";
import { changeBoolean, changeCount, changeLoading } from "../../Reducer/appSlice";
import { requestDocument } from "../../api/requestDocument";
import { handlerRequestDocument } from "../../helper/handlerRequestDocument";
import { useEffect, useState } from "react";
import { Link, Navigate } from "react-router-dom";
import Loader from "../Loaders/Loader";
import { validateText } from "../../helper/validateText";

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
const BoxDocumentResult = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 34px;
    margin: 34px 0 20px;
    width: 100%;
    @media (min-width: 900px) {
        flex-direction: row;
        flex-wrap: wrap;
    }
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
    const { size } = useResize();
    const {
        arrSearchHistogram,
        buttonLoadMoreActive,
        arrDocument,
        resultLogIn,
        arrObjectSearch,
        countLoadingDocument,
        loadingObjectSearch,
        limitLoadingDocument,
        loadingDocument,
        loadingHistogram,
    } = useAppSelector((state) => state.appSlice);
    const dispatch = useAppDispatch();

    const loadMore = async (e: any) => {
        e.preventDefault();
        const requestBody = handlerRequestDocument(arrObjectSearch.items, countLoadingDocument, limitLoadingDocument);

        if (requestBody !== null) {
            dispatch(changeCount(10));
            dispatch(requestDocument({ body: requestBody, accessToken: resultLogIn.accessToken }));

            if (countLoadingDocument + limitLoadingDocument >= arrObjectSearch.items.length) {
                dispatch(changeBoolean("buttonLoadMoreActive"));
            }
        }
    };


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
                <TextResult>Найдено 4 221 вариантов</TextResult>
                <Box>{size ? <BoxResult /> : <BoxResultSmall />}</Box>
                <TitleText>Список документов</TitleText>

                <BoxDocumentResult>
                    {arrDocument.map((el: TypeItemsArrDocument, index: number) => {
                        if (!el.ok) return;
                        let imgSrc: string = "";
                        const regex = `img src="`;
                        const indexStart = el.ok.content.markup.toString().search(regex);
                        const textResult = validateText(el.ok.content.markup)

                        if (indexStart !== -1) {
                            const str = el.ok.content.markup.toString().slice(indexStart, -1);
                            const indexEnd = str.slice(9, -1).search('"');
                            imgSrc = str.slice(9, indexEnd + 9);
                        }
                        // console.log(textResult);
                        const date = el.ok.issueDate.slice(0, 10);
                        // const result = el.ok.content.markup.match(/[А-Яа-я]*[\,\.\-\'\"]*\s*<*/g);
                        // // const text = el.ok.content.markup.replace(imgSrc,'').replace(/\&\w*/gi,'').replace(/\<\w*\s\w*\-\w*\-\w*\=\"\d*\">/gi,'').replace(/\<\/\w*\>|\<\w*\>/gi,'').replace(/<\?\w*\s\w*\=\"\d\.\d\"\s\w*\=\"\w*\-\d\"\?>/gi,'').replace(/<\w*\s\w*\=\"\w*\"\s\w*\-\w*\=\"\w*\">/gi, "")
                        
                        // const text = el.ok.content.markup.match(/[а-я\s.]/gi)
                        // const text = result?.join("").replace(/</g, "").replace(/""/g, "").replace(/\s*-/g, " ").replace(/"\.*"/g, "").slice(0,900)+'...'
                        return (
                            <Document
                                key={index}
                                dateText={date}
                                website={el.ok.url}
                                title={el.ok.source.name}
                                label={el.ok.attributes}
                                image={imgSrc}
                                text={el.ok.content.markup}
                                textCount={el.ok.attributes.wordCount}
                            />
                        );
                    })}
                </BoxDocumentResult>

                {loadingDocument === "true" && !buttonLoadMoreActive && (
                    <ButtonCustom onClick={loadMore} style={{ padding: "18px 40px ", alignSelf: "center", background: "#5970ff" }}>
                        Показать больше
                    </ButtonCustom>
                )}

                {loadingDocument === "loading" && <Loader />}
            </Container>
        );
    }
};

export default ResultPage;
