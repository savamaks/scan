import {  useState } from "react";
import styled from "styled-components";
import { useResize } from "../Hooks/useResize";
import CarouselItem from "./CarouselItem";

const SliderBox = styled.div<{ width: string }>`
    display: flex;
    align-items: center;
    width: ${(porps) => porps.width};
    margin: 0 auto;
`;
interface IComent {
    left?: string;
    opacity?: number;
    zindex?: number;
    display?: string;
    gap?: string;
}
const Box = styled.div<{ width: string; padding: string }>`
    position: relative;
    padding: 50px 0 50px;
    width: ${(porps) => porps.width};
    padding-left: ${(props) => props.padding};
    padding-right: ${(props) => props.padding};
    overflow: hidden;
`;
const Con = styled.div<IComent>`
    display: flex;
    align-items: stretch;
    gap: ${(props) => props.gap};
    width: max-content;
    left: ${(props) => props.left};
    position: relative;
    transition: all 0.5s ease-in-out;
    height: 100%;
`;

const Button = styled.button``;

const Slider = ({ arr }: any) => {
    const { width, size } = useResize();
    const [left, setLeft] = useState(0);
    const [countSlide, setCountSlide] = useState(0);
    const widthSlider = width * 0.95;
    const widthBox = widthSlider * 0.9;
    const padding = 30;
    const gap = padding * 2;
    let count = 3;
    if (!size) {
        count = 1;
    }
    const widthSliderItem = widthBox / count - padding * 2;
    const widthTotalAll = (widthSliderItem + padding * 2) * arr.length;

    
    const leftArrow = () => {
        if (countSlide === 0) {
            setCountSlide(arr.length - count);
            setLeft(-(widthTotalAll - widthBox));
        } else {
            setCountSlide((prev) => prev - 1);
            setLeft((prev) => prev + (widthSliderItem + padding * 2));
        }
    };

    const rightArrow = () => {

        if (Math.abs(countSlide) === arr.length - count) {
            setLeft(0);
            setCountSlide(0);
        } else {
            setCountSlide((prev) => prev + 1);
            setLeft((prev) => prev - (widthSliderItem + padding * 2));
        }
    };
    return (
        <SliderBox width={widthSlider.toString() + "px"}>
            <Button onClick={leftArrow}>
                <img src={"images/leftArrow.svg"} alt="arrow-left" />
            </Button>
            <div>
                <Box padding={padding.toString() + "px"} width={widthBox.toString() + "px"}>
                    <Con gap={gap.toString() + "px"} left={left.toString() + "px"}>
                        {arr.map((el: any, index: number) => {
                            return <CarouselItem width={widthSliderItem.toString() + "px"} key={index} text={el.text} image={el.image} />;
                        })}
                    </Con>
                </Box>
            </div>

            <Button onClick={rightArrow}>
                <img src={"images/rightArrow.svg"} alt="arrow-left" />
            </Button>
        </SliderBox>
    );
};

export default Slider;
