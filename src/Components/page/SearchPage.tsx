import styled from "styled-components";
import { useResize } from "../../Hooks/useResize";
import Loader from "../Loaders/Loader";
import ButtonCustom from "../ButtonCustom";
import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../Reducer/store";
import {
    changeBooleanName,
    addChecked,
    removeChecked,
    cleanArrChecked,
    changeCount,
    clearArr,
    changeBoolean,
    addArrObjectSearch,
} from "../../Reducer/appSlice";
import { handlerRequestHistogram } from "../../helper/handlerRequestHistogram";
import { requestHistogram } from "../../api/requestHistogram";
import { requestObjectSearch } from "../../api/requestObjectSearch";
import { handlerRequestObjectSearch } from "../../helper/handlerRequestObjectSearch";
import { requestDocument } from "../../api/requestDocument";
import { handlerRequestDocument } from "../../helper/handlerRequestDocument";
import { Link, Navigate } from "react-router-dom";

const SearchContainer = styled.div`
    display: flex;
    flex-direction: column;
    padding: 29px 0;
    @media (min-width: 900px) {
        flex-direction: row;
        flex-wrap: wrap;
        gap: 47px 80px;
        padding: 29px 50px;
    }
`;
const BoxTitle = styled.div`
    padding: 0 14px;
    display: flex;
    flex-direction: column;
    position: relative;
    flex: 100%;
`;

const Title = styled.h2`
    max-width: 70%;
    color: #000;
    font-family: Ferry;
    font-size: 28px;
    font-style: normal;
    font-weight: 900;
    line-height: normal;
    letter-spacing: 0.28px;
    @media (min-width: 900px) {
        font-size: 40px;
    }
`;
const Text = styled.p`
    margin-top: 20px;
    max-width: 70%;
    color: #000;
    font-family: Inter;
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    @media (min-width: 900px) {
        font-size: 20px;
    }
`;
const ImageBox = styled.img`
    position: absolute;
    top: 35%;
    right: 5%;
    @media (min-width: 900px) {
        right: 22%;
    }
`;
const ImageFoldersBox = styled.img`
    position: absolute;
    top: 35%;
    right: 2%;
`;
const Form = styled.form`
    display: flex;
    flex-direction: column;
    border-radius: 10px;
    background: #fff;
    box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.2);
    padding: 32px 26px 37px 14px;
    margin: 24px 0;
    @media (min-width: 900px) {
        flex-direction: row;
        justify-content: space-around;
        width: max-content;
        align-items: stretch;
        flex: 59%;
    }
`;
const TextLabel = styled.label`
    color: #000;
    font-family: Inter;
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    letter-spacing: 0.36px;
    margin: 30px 0 0;
    white-space: nowrap;
`;
const TextError = styled.p`
    text-align: center;
    color: #ff5959;
    font-family: Inter;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    letter-spacing: 0.14px;
    display: none;
`;
const Input = styled.input`
    color: #000;
    font-family: Inter;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    letter-spacing: 0.42px;
    height: 43px;
    border-radius: 5px;
    border: 1px solid #c7c7c7;
    background: #fff;
    box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.05);
    margin-top: 20px;
    text-align: center;
    appearance: none; //убрал стрелку
    white-space: nowrap;

    &:invalid {
        border: 1px solid #ff5959;
        box-shadow: 0px 0px 20px 0px rgba(255, 89, 89, 0.2);
    }
    &:focus {
        outline: none;
    }
    &::placeholder {
        opacity: 0.4;
    }
    &:invalid + ${TextError} {
        display: block;
    }
    &:valid + ${TextError} {
        display: none;
    }
`;
const Box = styled.div`
    display: flex;
    flex-direction: column;
    @media (min-width: 900px) {
        flex-direction: row;
        gap: 20px;
    }
`;
const Select = styled.select`
    height: 43px;
    margin-top: 20px;
    color: #000;
    font-family: Inter;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    letter-spacing: 0.42px;
    border-radius: 5px;
    border: 1px solid #c7c7c7;
    background: #fff;
    box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.05);
    text-align: center;
    position: relative;
    appearance: none; //убрал стрелку
    overflow: hidden;
    &::placeholder {
        opacity: 0.4;
    }
`;

const TextField = styled.p`
    color: #949494;
    font-family: Inter;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    letter-spacing: 0.28px;
`;
const Image = styled.img`
    flex: 25%;
`;
const BoxChecked = styled.div`
    display: flex;
    flex-direction: column;
    align-self: stretch;
    min-width: max-content;
`;
const ChekedLabel = styled.label`
    color: #000;
    font-family: Inter;
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    letter-spacing: 0.36px;
    margin: 30px 0 0;
    display: inline-flex;
    align-items: center;
    user-select: none;
    opacity: 0.4;
    white-space: nowrap;

    &::before {
        content: "";
        width: 20px;
        height: 20px;
        border: 1px solid #000000;
        margin-right: 17px;
        background-repeat: no-repeat;
        background-position: center center;
        background-size: 100% 100%;
    }
`;
const InputCheked = styled.input`
    margin: 15px 0 0 20px;
    z-index: -1;
    opacity: 0;

    &:checked + ${ChekedLabel} {
        opacity: 1;
    }
    &:checked + ${ChekedLabel}::before {
        background-image: url("images/gal.svg");
    }
`;

const SearchPage = (): JSX.Element => {
    const { size } = useResize();
    const {
        buttonLoadMoreActive,
        button,
        checkedArr,
        resultLogIn,
        
        limitLoadingDocument,
    } = useAppSelector((state) => state.appSlice);
    const dispatch = useAppDispatch();

    const [inn, setInn] = useState<number>(0);
    const [limit, setLimit] = useState<number | string>("");
    const [from, setFrom] = useState("");
    const [to, setTo] = useState("");
    const [flag, setFlag] = useState(false);
    const checkedRadio = (e: any) => {
        if (e.target.checked) {
            dispatch(addChecked(e.target.parentNode.children[1].textContent));
        } else {
            dispatch(removeChecked(e.target.parentNode.children[1].textContent));
        }
    };

    const changeINN = (e: any) => {
        setInn(+e.target.value);
    };
    const changeCountDocument = (e: any) => {
        setLimit(e.target.value);
    };

    const changeDateTo = (e: any) => {
        setTo(e.target.value);
    };
    const changeDateFrom = (e: any) => {
        setFrom(e.target.value);
    };
    const searchButton = async (e: any) => {
        e.preventDefault();
        setFlag(true);

        dispatch(clearArr()) //удалить все данные для нового запроса
        if (buttonLoadMoreActive) {
            dispatch(changeBoolean("buttonLoadMoreActive"));
        }

        //создание первого запроса, отправка и сохраниние
        const requestBody = handlerRequestHistogram({ inn, limit, from, to, checkedArr });
        await dispatch(requestHistogram({ body: requestBody, accessToken: resultLogIn.accessToken }));

        //создание второго запроса, отправка и сохраниние
        const result = await requestObjectSearch({ body: requestBody, accessToken: resultLogIn.accessToken });

        if (result.items.length <= 10) {
            dispatch(changeBoolean("buttonLoadMoreActive"));
        }
        // создание третьего запроса, отправка и сохраниние
        const requestDocumentBody = await handlerRequestDocument(result.items, 0, limitLoadingDocument);
        await dispatch(requestDocument({ body: requestDocumentBody, accessToken: resultLogIn.accessToken }));
        dispatch(addArrObjectSearch(result));
        dispatch(changeCount(10));
    };

    useEffect(() => {
        if (inn !== 0 && limit !== "" && from !== "" && to !== "") {
            dispatch(changeBooleanName({ name: "button", value: false }));
        } else {
            dispatch(changeBooleanName({ name: "button", value: true }));
        }
    }, [inn, limit, from, to]);

    // очистит все галочки checked при изменении размера на мобильную верстку так как блок с галочками скрывается
    useEffect(() => {
        if (!size) {
            dispatch(cleanArrChecked());
        }
    }, [size]);


    if (!flag && resultLogIn.accessToken) {
        return (
            <SearchContainer>
                <BoxTitle>
                    <Title>Найдите необходимые данные в пару кликов.</Title>
                    <Text>Задайте параметры поиска. Чем больше заполните, тем точнее поиск</Text>
                    <ImageBox src={"images/document.svg"} alt="img" />
                    {size && <ImageFoldersBox src={"images/folders.svg"} alt="img" />}
                </BoxTitle>
                <Form>
                    <BoxChecked>
                        <TextLabel>ИНН компании *</TextLabel>
                        <Input onChange={changeINN} placeholder="10 цифр" minLength={10} maxLength={10} />
                        <TextError>Введите корректные данные</TextError>
                        <TextLabel>Тональность</TextLabel>
                        <Select>
                            <option value="any">Любая</option>
                            <option value="negative">Негативная</option>
                            <option value="positive">Позитивная</option>
                        </Select>
                        <TextLabel>Количество документов в выдаче*</TextLabel>
                        <Input onChange={changeCountDocument} placeholder="От 1 до 1000" type="number" />
                        <TextError>Обязательное поле</TextError>
                        <TextLabel>Диапазон поиска *</TextLabel>
                        <Box>
                            <Input onChange={changeDateFrom} defaultValue="2018-01-01" placeholder="Дата начала" type="date" />
                            <Input onChange={changeDateTo} defaultValue="2023-01-01" placeholder="Дата конца" type="date" />
                        </Box>
                        <TextError>Введите корректные данные</TextError>
                    </BoxChecked>

                    <BoxChecked>
                        {size && (
                            <div>
                                <div>
                                    <InputCheked
                                        onChange={checkedRadio}
                                        checked={checkedArr.includes("Признак максимальной полноты") ? true : false}
                                        id="oneChecked"
                                        type="checkbox"
                                    />
                                    <ChekedLabel htmlFor="oneChecked">Признак максимальной полноты</ChekedLabel>
                                </div>
                                <div>
                                    <InputCheked
                                        onChange={checkedRadio}
                                        checked={checkedArr.includes("Упоминания в бизнес-контексте") ? true : false}
                                        type="checkbox"
                                        id="twoChecked"
                                    />
                                    <ChekedLabel htmlFor="twoChecked">Упоминания в бизнес-контексте</ChekedLabel>
                                </div>
                                <div>
                                    <InputCheked
                                        onChange={checkedRadio}
                                        checked={checkedArr.includes("Главная роль в публикации") ? true : false}
                                        type="checkbox"
                                        id="threeChecked"
                                    />
                                    <ChekedLabel htmlFor="threeChecked">Главная роль в публикации</ChekedLabel>
                                </div>
                                <div>
                                    <InputCheked
                                        onChange={checkedRadio}
                                        checked={checkedArr.includes("Публикации только с риск-факторами") ? true : false}
                                        type="checkbox"
                                        id="fourChecked"
                                    />
                                    <ChekedLabel htmlFor="fourChecked">Публикации только с риск-факторами</ChekedLabel>
                                </div>
                                <div>
                                    <InputCheked
                                        onChange={checkedRadio}
                                        checked={checkedArr.includes("Включать технические новости рынков") ? true : false}
                                        type="checkbox"
                                        id="fiveChecked"
                                    />
                                    <ChekedLabel htmlFor="fiveChecked">Включать технические новости рынков</ChekedLabel>
                                </div>
                                <div>
                                    <InputCheked
                                        onChange={checkedRadio}
                                        checked={checkedArr.includes("Включать анонсы и календари") ? true : false}
                                        type="checkbox"
                                        id="sixChecked"
                                    />
                                    <ChekedLabel htmlFor="sixChecked">Включать анонсы и календари</ChekedLabel>
                                </div>
                                <div>
                                    <InputCheked
                                        onChange={checkedRadio}
                                        checked={checkedArr.includes("Включать сводки новостей") ? true : false}
                                        type="checkbox"
                                        id="sevenChecked"
                                    />
                                    <ChekedLabel htmlFor="sevenChecked">Включать сводки новостей</ChekedLabel>
                                </div>
                            </div>
                        )}
                        <ButtonCustom
                            disabled={button}
                            onClick={searchButton}
                            style={{ justifySelf: "end", margin: "40px 0 10px", background: `${button ? "#a4aff3" : "#5970FF"}` }}
                        >
                            {flag ? <Loader /> : "Поиск"}
                        </ButtonCustom>

                        <TextField>* Обязательные к заполнению поля</TextField>
                    </BoxChecked>
                </Form>

                <Image src={"images/search_big_image.svg"} alt="img" />
            </SearchContainer>
        );
    } else {
        return <Navigate to="/result" />;
    }
};

export default SearchPage;
