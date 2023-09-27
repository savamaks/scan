import styled from "styled-components";
import { useResize } from "../../Hooks/useResize";
import Loader from "../Loaders/Loader";
import ButtonCustom from "../ButtonCustom";
import { ChangeEvent, useEffect, useState } from "react";
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
    removeToken,
} from "../../Reducer/appSlice";
import { handlerRequestHistogram } from "../../helper/handlerRequestHistogram";
import { requestHistogram } from "../../api/requestHistogram";
import { requestObjectSearch } from "../../api/requestObjectSearch";
import { requestDocument } from "../../api/requestDocument";
import { handlerRequestDocument } from "../../helper/handlerRequestDocument";
import { Navigate } from "react-router-dom";
import { validateDate } from "../../helper/validateDate";
import { validateInn } from "../../helper/validateInn";
import { sessionCheck } from "../../helper/sessionCheck";
import { removeLoadingInfo } from "../../Reducer/eventSlice";

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
    /* display: none; */
`;
const Input = styled.input<{ border: string; shadow: string }>`
    color: #000;
    font-family: Inter;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    letter-spacing: 0.42px;
    height: 43px;
    border-radius: 5px;
    border: 1px solid ${(props) => props.border};
    background: #fff;
    box-shadow: 0px 0px 20px 0px ${(props) => props.shadow};
    margin-top: 20px;
    text-align: center;
    appearance: none; //убрал стрелку
    white-space: nowrap;

    &:focus {
        outline: none;
    }
    &::placeholder {
        opacity: 0.4;
    }
`;
const Box = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: stretch;
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
const Option = styled.option``;

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
    const loadingLogIn = useAppSelector((state) => state.appSlice.loadingLogIn);
    const buttonLoadMoreActive = useAppSelector((state) => state.appSlice.buttonLoadMoreActive);
    const button = useAppSelector((state) => state.appSlice.button);
    const checkedArr = useAppSelector((state) => state.appSlice.checkedArr);
    const resultLogIn = useAppSelector((state) => state.appSlice.resultLogIn);
    const limitLoadingDocument = useAppSelector((state) => state.appSlice.limitLoadingDocument);


    const dispatch = useAppDispatch();

    const [inn, setInn] = useState<number>(0);
    const [limit, setLimit] = useState<number>(0);
    const [inputFromDate, setFrom] = useState<string>("");
    const [inputToDate, setInputToDate] = useState<string>("");
    const [flag, setFlag] = useState<boolean>(false);
    const [errorDate, setErrorDate] = useState<boolean>(false);
    const [errorInn, setErrorInn] = useState<boolean>(false);
    const [errorCount, setErrorCount] = useState<boolean>(false);
    const [tonality, setTonality] = useState<string>("any");

    const checkedRadio = (e: ChangeEvent<HTMLInputElement>) => {
        const value: string | null | undefined = e.target.parentNode?.children[1].textContent;
        if (e.target.checked && value !== null && value !== undefined) {
            dispatch(addChecked(value));
        } else if (value !== null && value !== undefined) {
            dispatch(removeChecked(value));
        }
    };
    //ИНН компании
    const changeINN = (e: ChangeEvent<HTMLInputElement>) => {
        setInn(+e.target.value);
        setErrorInn(!validateInn(e.target.value.toString()));
    };

    //количество документов
    const changeCountDocument = (e: ChangeEvent<HTMLInputElement>) => {
        if (/^\d*$/.test(e.target.value)) {
            const value = +e.target.value;
            setErrorCount(false);
            setLimit(value);
            if (value > 1000 || value <= 0) {
                setErrorCount(true);
            }
        } else {
            setErrorCount(true);
        }
    };
    // дата от
    const changeDateFrom = (e: ChangeEvent<HTMLInputElement>) => {
        setErrorDate(false);
        setFrom(e.target.value);
        if (inputToDate !== "") {
            setErrorDate(validateDate(e.target.value, inputToDate));
        }
    };
    //дата до
    const changeDateTo = (e: ChangeEvent<HTMLInputElement>) => {
        setErrorDate(false);
        setInputToDate(e.target.value);
        if (inputFromDate !== "") {
            setErrorDate(validateDate(inputFromDate, e.target.value));
        }
    };

    const changeSelect = (e: ChangeEvent<HTMLSelectElement>) => {
        setTonality(e.target.value);
    };
    const searchButton = async (e:ChangeEvent<HTMLButtonElement> ) => {
        e.preventDefault();
        setFlag(true);

        dispatch(clearArr()); //удалить все данные для нового запроса
        if (buttonLoadMoreActive) {
            dispatch(changeBoolean("buttonLoadMoreActive"));
        }

        //создание первого запроса, отправка и сохраниние
        const requestBody = handlerRequestHistogram({ inn, limit, inputFromDate, inputToDate, tonality });
        await dispatch(requestHistogram({ body: requestBody, accessToken: resultLogIn.accessToken }));
        //создание второго запроса, отправка и сохраниние

        const result = await requestObjectSearch({ body: requestBody, accessToken: resultLogIn.accessToken });

        if (result.items.length <= 10) {
            dispatch(changeBoolean("buttonLoadMoreActive"));
        }

        // создание третьего запроса, отправка и сохраниние
        const requestDocumentBody = await handlerRequestDocument(result, 0, limitLoadingDocument);
        await dispatch(requestDocument({ body: requestDocumentBody, accessToken: resultLogIn.accessToken }));
        dispatch(changeCount(10));
        dispatch(addArrObjectSearch(result));
    };

    useEffect(() => {
        if (inn !== 0 && limit !== 0 && inputFromDate !== "" && inputToDate !== "" && !errorDate && !errorCount && !errorInn) {
            dispatch(changeBooleanName({ name: "button", value: false }));
        } else {
            dispatch(changeBooleanName({ name: "button", value: true }));
        }
    }, [inn, limit, inputFromDate, inputToDate, errorDate, errorCount, errorInn]);

    // очистит все галочки checked при изменении размера на мобильную верстку так как блок с галочками скрывается
    useEffect(() => {
        if (!size) {
            dispatch(cleanArrChecked());
        }
    }, [size]);
    useEffect(() => {
        if (loadingLogIn === "true") {
            const check = sessionCheck(resultLogIn.expire);
            if (check) {
                dispatch(removeToken());
                dispatch(removeLoadingInfo())

            }
        }
    }, []);
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
                        <Input
                            shadow={errorInn ? "rgba(255, 89, 89, 0.2)" : "rgba(0, 0, 0, 0.05)"}
                            border={errorInn ? "#ff5959" : "#c7c7c7"}
                            onChange={changeINN}
                            placeholder="10 цифр"
                            minLength={10}
                            maxLength={10}
                        />
                        {errorInn && <TextError>Введите корректные данные</TextError>}
                        <TextLabel>Тональность</TextLabel>
                        <Select onChange={changeSelect}>
                            <Option value="any">Любая</Option>
                            <Option value="negative">Негативная</Option>
                            <Option value="positive">Позитивная</Option>
                        </Select>
                        <TextLabel>Количество документов в выдаче*</TextLabel>
                        <Input
                            shadow={errorCount ? "rgba(255, 89, 89, 0.2)" : "rgba(0, 0, 0, 0.05)"}
                            border={errorCount ? "#ff5959" : "#c7c7c7"}
                            onChange={changeCountDocument}
                            placeholder="От 1 до 1000"
                            type="text"
                        />
                        {errorCount && <TextError>Превышен диапазон</TextError>}
                        <TextLabel>Диапазон поиска *</TextLabel>
                        <Box>
                            <Input
                                shadow={errorDate ? "rgba(255, 89, 89, 0.2)" : "rgba(0, 0, 0, 0.05)"}
                                border={errorDate ? "#ff5959" : "#c7c7c7"}
                                onChange={changeDateFrom}
                                placeholder="Дата начала"
                                type="date"
                            />
                            <Input
                                shadow={errorDate ? "rgba(255, 89, 89, 0.2)" : "rgba(0, 0, 0, 0.05)"}
                                border={errorDate ? "#ff5959" : "#c7c7c7"}
                                onChange={changeDateTo}
                                placeholder="Дата конца"
                                type="date"
                            />
                        </Box>
                        {errorDate && <TextError>Введите корректные данные</TextError>}
                    </BoxChecked>

                    <BoxChecked>
                        {size && (
                            <div>
                                <div>
                                    <InputCheked
                                        onChange={checkedRadio}
                                        checked={checkedArr.includes("Признак максимальной полноты")}
                                        id="oneChecked"
                                        type="checkbox"
                                    />
                                    <ChekedLabel htmlFor="oneChecked">Признак максимальной полноты</ChekedLabel>
                                </div>
                                <div>
                                    <InputCheked
                                        onChange={checkedRadio}
                                        checked={checkedArr.includes("Упоминания в бизнес-контексте")}
                                        type="checkbox"
                                        id="twoChecked"
                                    />
                                    <ChekedLabel htmlFor="twoChecked">Упоминания в бизнес-контексте</ChekedLabel>
                                </div>
                                <div>
                                    <InputCheked
                                        onChange={checkedRadio}
                                        checked={checkedArr.includes("Главная роль в публикации")}
                                        type="checkbox"
                                        id="threeChecked"
                                    />
                                    <ChekedLabel htmlFor="threeChecked">Главная роль в публикации</ChekedLabel>
                                </div>
                                <div>
                                    <InputCheked
                                        onChange={checkedRadio}
                                        checked={checkedArr.includes("Публикации только с риск-факторами")}
                                        type="checkbox"
                                        id="fourChecked"
                                    />
                                    <ChekedLabel htmlFor="fourChecked">Публикации только с риск-факторами</ChekedLabel>
                                </div>
                                <div>
                                    <InputCheked
                                        onChange={checkedRadio}
                                        checked={checkedArr.includes("Включать технические новости рынков")}
                                        type="checkbox"
                                        id="fiveChecked"
                                    />
                                    <ChekedLabel htmlFor="fiveChecked">Включать технические новости рынков</ChekedLabel>
                                </div>
                                <div>
                                    <InputCheked
                                        onChange={checkedRadio}
                                        checked={checkedArr.includes("Включать анонсы и календари")}
                                        type="checkbox"
                                        id="sixChecked"
                                    />
                                    <ChekedLabel htmlFor="sixChecked">Включать анонсы и календари</ChekedLabel>
                                </div>
                                <div>
                                    <InputCheked
                                        onChange={checkedRadio}
                                        checked={checkedArr.includes("Включать сводки новостей")}
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
