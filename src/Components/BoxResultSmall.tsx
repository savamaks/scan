import styled from "styled-components";
import Slider from "./CarouselFolder/Slider";
import ArrowLeft from "./CarouselFolder/ArrowLeft";
import SliderItem from "./CarouselFolder/SliderItem";
import ArrowRight from "./CarouselFolder/ArrowRight";
import { ResultType } from "../type";
import { useAppSelector } from "../Reducer/store";

const Title = styled.h1<{ border: string; right: string }>`
    /* color: #fff; */
    font-family: Inter;
    font-size: 18px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    letter-spacing: 0.18px;
    background: #029491;
    padding: 23px;
    border-top-left-radius: ${(props) => props.border};
    border-top-right-radius: ${(props) => props.right};
`;
const Text = styled.p`
    flex-grow: 1;
    text-align: center;
    /* color: #000; */
    font-family: Inter;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    letter-spacing: 0.16px;
    text-align: center;
    padding: 23px 0;
    animation: opa 1s ease;
    @keyframes opa {
        0% {
            opacity: 0;
        }
        100% {
            opacity: 1;
        }
    }
`;
const Box = styled.div`
    display: flex;
    flex-direction: column;
`;
const Container = styled.div`
    box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.2);
    display: flex;
    border-radius: 10px;
`;

const BoxResultSmall = () => {
    const { loadingHistogram, arrSearchHistogram } = useAppSelector((state) => state.appSlice);

    return (
        <>
            <Slider count={1} lengthArr={arrSearchHistogram.data[0].data.length}>
                <ArrowLeft>
                    <img src={"images/leftArrow.svg"} alt="arrow" />
                </ArrowLeft>
                <SliderItem>
                    {arrSearchHistogram.data[0].data.map((el: ResultType, index: number) => {
                        const date = el.date.slice(0, 10);
                        return (
                            <Container key={index}>
                                <Box>
                                    <Title border="10px" right="0">
                                        Период
                                    </Title>
                                    <Text>{date}</Text>
                                </Box>
                                <Box>
                                    <Title border="0" right="0">
                                        Всего
                                    </Title>
                                    <Text>{el.value}</Text>
                                </Box>
                                <Box>
                                    <Title border="" right="10px">
                                        Риски
                                    </Title>
                                    <Text>{arrSearchHistogram.data[1].data[index].value}</Text>
                                </Box>
                            </Container>
                        );
                    })}
                </SliderItem>
                <ArrowRight>
                    <img src={"images/rightArrow.svg"} alt="arrow" />
                </ArrowRight>
            </Slider>

        </>

        // <Container>
        //     <Box>
        //         <Title border="10px" right="0">
        //             Период
        //         </Title>
        //         <Text>10.09.2021</Text>
        //     </Box>
        //     <Box>
        //         <Title border="0" right="0">
        //             Всего
        //         </Title>
        //         <Text>5</Text>
        //     </Box>
        //     <Box>
        //         <Title border="" right="10px">
        //             Риски
        //         </Title>
        //         <Text>0</Text>
        //     </Box>
        // </Container>
    );
};

export default BoxResultSmall;
