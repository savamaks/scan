import styled from "styled-components";

const FooterContainer = styled.footer`
    grid-area: footer;
    background: #029491;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 25px 18px;
    width: 100%;
    
`;
const FooterImage = styled.img``;
const Container = styled.div``;
const Text = styled.p<{ margin: string }>`
    color: #fff;
    text-align: right;
    font-family: Inter;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    margin-top: ${(props) => props.margin};
`;
const Footer = () => {
    return (
        <FooterContainer>
            <FooterImage src={"images/logowhite.svg"} alt="footerImage" />
            <Container>
                <Text margin="0">г. Москва, Цветной б-р, 40</Text>
                <Text margin="0">+7 495 771 21 11</Text>
                <Text margin="0">info@skan.ru</Text>
                <Text margin="21px">Copyright. 2022</Text>
            </Container>
        </FooterContainer>
    );
};

export default Footer;
