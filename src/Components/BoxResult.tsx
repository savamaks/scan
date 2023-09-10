import styled from "styled-components";
import { TypeData } from "../type";
import { useResize } from "../Hooks/useResize";
import SliderItem from "./CarouselFolder/SliderItem";
import Slider from "./CarouselFolder/Slider";
import ArrowLeft from "./CarouselFolder/ArrowLeft";
import ArrowRight from "./CarouselFolder/ArrowRight";
import { useAppSelector } from "../Reducer/store";
import Loader from "./Loaders/Loader";

const Container = styled.div`
    border-radius: 10px;
    border: 2px solid #029491;
    background: #fff;
    display: flex;
    align-items: center;
    margin: 0 10px 0 10px;
    @media (max-width: 900px) {
        flex-direction: column;
    }
`;
const MainBox = styled.div`
    background: #029491;
    display: flex;
    flex-direction: column;
    gap: 26px;
    padding: 17px 28px;
    @media (max-width: 900px) {
        flex-direction: row;
        padding: 23px 23px;

    }
`;
const Title = styled.p`
    color: #fff;
    font-family: Inter;
    font-size: 20px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    letter-spacing: 0.4px;
   
`;
const Box = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 26px;
    padding: 18px;
    @media (max-width: 900px) {
        width: 100%;
        flex-direction: row;
        padding: 18px 0 28px;
        gap: 55px;
    }
    /* border-right: 1px solid #949494; */
`;
const Text = styled.div`
    color: #000;
    font-family: Inter;
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    letter-spacing: 0.36px;
    white-space: nowrap;
    
`;
const Line = styled.div`
    background: #949494;
    width: 2px;
    height: 124px;
    opacity: 0.4;
`;

const Block = styled.div`
    display: flex;
    align-items: center;
`;

const BoxResult = () => {
    const { width, size } = useResize(); //ширина окна
    const  loadingHistogram  = useAppSelector((state) => state.appSlice.loadingHistogram);
    const  arrSearchHistogram  = useAppSelector((state) => state.appSlice.arrSearchHistogram);

    if (width > 1440) {
    }
    const countCell = Math.round(width / 127) - 4; //колличество ячеек

    return (
        <Slider count={size ? countCell : 1} lengthArr={arrSearchHistogram.data.length === 0 ? 10 : arrSearchHistogram.data[0].data.length}>
            <ArrowLeft>
                <img src={"images/leftArrow.svg"} alt="arrow-left" />
            </ArrowLeft>

            <Container>
                <MainBox>
                    <Title>Период</Title>
                    <Title>Всего</Title>
                    <Title>Риски</Title>
                </MainBox>
                {loadingHistogram == "true" ? (
                    <SliderItem>
                        {arrSearchHistogram.data[0].data.map((el: TypeData, index: number) => {
                            const date = el.date.slice(0, 10);
                            return (
                                <Block key={index}>
                                    <Box>
                                        <Text>{date}</Text>
                                        <Text>{el.value}</Text>
                                        <Text>{arrSearchHistogram.data[1].data[index].value}</Text>
                                    </Box>
                                    {size && index !== arrSearchHistogram.data[0].data.length - 1 && <Line></Line>}
                                </Block>
                            );
                        })}
                    </SliderItem>
                ) : (
                    <div style={{display:'flex', width:`${!size?'280px':'500px'}` , height:'100px',alignItems:'center',justifyContent:'center' }}>
                        <Loader />
                    </div>
                )}
            </Container>

            <ArrowRight>
                <img src={"images/rightArrow.svg"} alt="arrow-right" />
            </ArrowRight>
        </Slider>
    );
};

export default BoxResult;

// {/* <Slider lengthArr={arrCarousel.length} count={3}>
//             <ArrowLeft>
//                 <img src={LeftArrow} alt="arrow-left" />
//             </ArrowLeft>
//             <SliderItem>
//                 {arrCarousel.map((el: any, index: number) => {
//                     return <CarouselItem key={index} image={el.image} text={el.text} />;
//                 })}
//             </SliderItem>
//             <ArrowRight>
//                 <img src={RightArrow} alt="arrow-left" />
//             </ArrowRight>
//         </Slider> */}

//  <Arrow onClick={clickArrowLeft}>
//     <img src={LeftArrow} alt="arrow-left" />
// </Arrow>
// <Container>
//     <MainBox>
//         <Title>Период</Title>
//         <Title>Всего</Title>
//         <Title>Риски</Title>
//     </MainBox>
//     {arr.map((el: ResultType, index: number) => {
//         if (countSlider < index) return;
//         if (index >= countSlider - countCell && index <= countSlider && countSlider !== 0) {
//             return (
//                 <Block key={index}>
//                     <Box>
//                         <Text>{el.date}</Text>
//                         <Text>{el.total}</Text>
//                         <Text>{el.risks}</Text>
//                     </Box>
//                     {countSlider > index && <Line></Line>}
//                 </Block>
//             );
//         }
//     })}
// </Container>
// <Arrow onClick={clickArrowRight}>
//     <img src={RightArrow} alt="arrow-right" />
// </Arrow>
