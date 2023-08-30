import styled from "styled-components";
import { CarouselItemType } from "../type";

const Container = styled.div`
    border-radius: 10px;
    background: #fff;
    box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.2);
    display: flex;
    flex-direction: column;
    gap: 12px;
    padding: 18px 18px;
    width: 100%;

    
`;
const Image = styled.img`
    width: 30px;
    height: 30px;
`;
const Text = styled.p`
    color: #000;
    font-family: Inter;
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    letter-spacing: 0.18px;
`;

const CarouselItem = ({ image, text }: CarouselItemType) => {
    return (
        <Container>
            <Image src={image} alt="img" />
            <Text>{text}</Text>
        </Container>
    );
};

export default CarouselItem;
