import React from "react";
import styled from "styled-components";
import CarouselItem from "../CarouselItem";
import { arrCarousel } from "../../fakeData";
import Slider from "../CarouselFolder/Slider";
import ArrowLeft from "../CarouselFolder/ArrowLeft";
import ArrowRight from "../CarouselFolder/ArrowRight";
import SliderItem from "../CarouselFolder/SliderItem";

const Cont = styled.div`
    margin: 0 auto;
    display: flex;
    padding: 30px;
    gap: 10px;
    border: 1px solid red;
    max-width: 500px;
    overflow: hidden;
`;
const Box = styled.div`

    width: 180px;
    border: 1px solid black;
    animation: opa 1s ease;
    @keyframes opa {
        0% {
            transform: translate(-400px, 0);
        }
        100% {
            transform: translate(0, 0);
        }
    }
`;
const Proba = () => {
    arrCarousel;
    return (
        <>
            <Slider count={4} lengthArr={arrCarousel.length}>
                <ArrowLeft>left</ArrowLeft>
                <Cont>
                    <SliderItem>
                        {arrCarousel.map((el: any, index: number) => {
                            return <Box key={index}>{el.text}</Box>;
                        })}
                    </SliderItem>
                </Cont>

                <ArrowRight>right</ArrowRight>
            </Slider>
        </>
    );
};

export default Proba;

{
    /* <Cont>
    <Box>{arrCarousel[0].text}</Box>
    <Box>{arrCarousel[1].text}</Box>
    <Box>{arrCarousel[2].text}</Box>
    <Box>{arrCarousel[0].text}</Box>
    <Box>{arrCarousel[1].text}</Box>
    <Box>{arrCarousel[2].text}</Box>
    
</Cont>; */
}
