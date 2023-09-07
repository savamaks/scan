import styled from "styled-components";

const Container = styled.div<{width:string}>`
    border-radius: 10px;
    background: #fff;
    box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.2);
    display: flex;
    flex-direction: column;
    width:${props=>props.width};
    gap: 12px;
    padding: 18px 18px;
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

const CarouselItem = ({ width,image, text }: any) => {
    return (
        <Container width={width}>
            <Image src={image} alt="img" />
            <Text>{text}</Text>
        </Container>
    );
};

export default CarouselItem;
