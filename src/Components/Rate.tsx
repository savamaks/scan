import styled from "styled-components";
import { RateType } from "../type";
import { useAppSelector } from "../Reducer/store";
import Button from "./ButtonCustom";
import ButtonCustom from "./ButtonCustom";

const Container = styled.div <{border_color:string}>`
    border-radius: 10px;
    box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.2);
    flex-basis: 27%;
    border: 2px solid ${props=>props.border_color};

`;
const Box = styled.div<{ background: string }>`
    position: relative;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    background: ${(props) => props.background};
    display: flex;
    flex-direction: column;

    gap: 10px;
    padding: 30px 0 34px 24px;
`;

const Title = styled.h2<{ color: string }>`
    font-family: Inter;
    font-size: 25px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    letter-spacing: 0.3px;
    color: ${(props) => props.color};
`;
const Text = styled.p<{ color: string }>`
    font-family: Inter;
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    letter-spacing: 0.18px;
    color: ${(props) => props.color};
`;

const Image = styled.img`
    position: absolute;
    top: 10%;
    right: 5%;
`;
const Block = styled.div`
    background: #fff;
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
    display: flex;
    flex-direction: column;
    padding: 33px 24px 30px 24px;
`;
const BoxPrice = styled.div`
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    gap: 19px;
`;
const Price = styled.p`
    color: #000;
    font-family: Inter;
    font-size: 30px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    letter-spacing: 0.3px;
`;
const Sale = styled.p`
    color: #000;
    font-family: Inter;
    font-size: 25px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    letter-spacing: 0.25px;
    text-decoration: line-through;
    opacity: 0.5;
`;
const TextPrice = styled.p`
    margin: 10px 0;
    color: #000;
    font-family: Inter;
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    letter-spacing: 0.36px;
`;
const NameList = styled.div`
    color: #000;
    font-family: Inter;
    font-size: 20px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    letter-spacing: 0.2px;
    margin-bottom: 10px;
`;
const List = styled.ul`
    list-style: url("images/galochka.svg");
    padding-left: 24px;
    display: flex;
    flex-direction: column;
    gap: 5px;
    margin-bottom: 55px;
`;
const Item = styled.li`
    color: #000;
    font-family: Inter;
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    letter-spacing: 0.18px;
`;

const Rate = ({ title, text, price, sale, textPrice, li, background, color, image }: RateType) => {
    const { activePlan } = useAppSelector((state) => state.appSlice);
    return (
        <Container border_color={title.toLowerCase() === activePlan ? background : "none"} >
            <Box background={background} >
                <Title color={color}>{title}</Title>
                <Text color={color}>{text}</Text>
                <Image src={image} alt="=img" />
            </Box>
            <Block>
                <BoxPrice>
                    <Price>{price}</Price>
                    <Sale>{sale}</Sale>
                </BoxPrice>
                <TextPrice>{textPrice}</TextPrice>
                <NameList>В тариф входит:</NameList>
                <List>
                    <Item>{li[0]}</Item>
                    <Item>{li[1]}</Item>
                    <Item>{li[2]}</Item>
                </List>
                <ButtonCustom style={{ background:`${title.toLowerCase() === activePlan ? "#D2D2D2" : "#5970ff"}`}}>
                    {title.toLowerCase() === activePlan ? "Перейти в личный кабинет" : "Подробнее"}
                </ButtonCustom>
            </Block>
        </Container>
        
    );
};

export default Rate;
