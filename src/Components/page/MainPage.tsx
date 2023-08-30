import styled from "styled-components";
import { arrCarousel, arrRate } from "../../fakeData";
import { RateType } from "../../type";
import CarouselItem from "../CarouselItem";
import { useResize } from "../../Hooks/useResize";
import Rate from "../Rate";
import { Link, Navigate } from "react-router-dom";
import SliderItem from "../CarouselFolder/SliderItem";
import Slider from "../CarouselFolder/Slider";
import ArrowLeft from "../CarouselFolder/ArrowLeft";
import ArrowRight from "../CarouselFolder/ArrowRight";
import { useAppSelector } from "../../Reducer/store";
import ButtonCustom from "../ButtonCustom";

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
const BoxRate = styled.div`
    display: flex;
    flex-direction: column;
    gap: 43px;
    margin-bottom: 43px;

    @media (min-width: 900px) {
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: center;
        margin-bottom: 255px;
    }
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
    const { resultLogIn } = useAppSelector((state) => state.appSlice);

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
                <Slider lengthArr={arrCarousel.length} count={size ? 3 : 1}>
                    <ArrowLeft>
                        <img src={"images/leftArrow.svg"} alt="arrow-left" />
                    </ArrowLeft>
                    <SliderItem>
                        {arrCarousel.map((el: any, index: number) => {
                            return <CarouselItem key={index} image={el.image} text={el.text} />;
                        })}
                    </SliderItem>
                    <ArrowRight>
                        <img src={"images/rightArrow.svg"} alt="arrow-left" />
                    </ArrowRight>
                </Slider>
            </BoxCarousel>
            <Image src={size ? "images/group-14.svg" : "images/group-14small.svg"} alt="img" />

            <BoxRate>
                <TitleText>наши тарифы</TitleText>
                {arrRate.map((el: RateType, index: number) => {
                    return (
                        <Rate
                            key={index}
                            title={el.title}
                            text={el.text}
                            price={el.price}
                            sale={el.sale}
                            textPrice={el.textPrice}
                            li={el.li}
                            background={el.background}
                            color={el.color}
                            image={el.image}
                        />
                    );
                })}
            </BoxRate>
        </ContainerMain>
    );
};

export default MainPage;
