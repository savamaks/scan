import styled from "styled-components";
import { DocumentType } from "../type";
import ButtonCustom from "./ButtonCustom";
import { useResize } from "../Hooks/useResize";

const Container = styled.div`
    border-radius: 10px;
    background: #fff;
    box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.2);
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 19px 14px 18px 24px;
    width: 100%;
    max-width: 640px;
    flex-basis: 100%;
    align-self: center;
    @media (min-width: 900px) {
        align-self: stretch;
    }
`;
const BoxLink = styled.div`
    align-items: flex-end;
    display: flex;
    gap: 15px;
`;
const Box = styled.div`
    align-items: flex-end;
    display: flex;
    gap: 15px;
    justify-content: space-between;
`;
const DateText = styled.p`
    color: #949494;
    font-family: Inter;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    letter-spacing: 0.14px;
`;

const LinkWebsait = styled.a`
    color: #949494;
    font-family: Inter;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    letter-spacing: 0.14px;
    text-decoration-line: underline;
`;
const Title = styled.h2`
    color: #000;
    font-family: Inter;
    font-size: 19px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    letter-spacing: 0.19px;
    margin: 21px 0;
`;
const Label = styled.p`
    align-self: flex-start;
    color: #000;
    font-family: Inter;
    font-size: 10px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    letter-spacing: 0.1px;
    border-radius: 5px;
    background: #ffb64f;
    padding: 4px 12px;
`;
const BoxImage = styled.div<{ background: string }>`
    margin: 18px 0;
    height: 250px;
    background-image: url(${(props) => props.background});
    background-position: center center;
    background-size: cover;
`;

const Text = styled.p`
    color: #000;
    font-family: Inter;
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    letter-spacing: 0.12px;
    margin: 0 0 25px 0;
`;

const TextCount = styled.p`
    color: #949494;
    font-family: Inter;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
`;

const Document = ({ dateText, website, title, label, image, text, textCount }: any) => {
    const { size } = useResize();
   
    return (
        <Container>
            <BoxLink>
                <DateText>{dateText}</DateText>
                {website && (
                    <LinkWebsait href={website} target="_blank">
                        {size ? website.slice(0, 40) : website.slice(0, 30)}...
                    </LinkWebsait>
                )}
            </BoxLink>
            <Title>{title}</Title>
            {label.isTechNews && <Label>Технические новости</Label>}
            {label.isDigest && <Label>сводки новостей</Label>}
            {label.isAnnouncement && <Label>анонсы и события</Label>}

            {image && <BoxImage background={image}></BoxImage>}
            <Text>{text}</Text>
            <Box>
                <a href={website} target="_blank">
                    <ButtonCustom
                        disabled={!website}
                        style={{
                            color: "#000",
                            fontSize: "16px",
                            borderRadius: "5px",
                            background: `${!website ? "#D2D2D2" : "#7ce3e1"}`,
                            padding: " 12px 29px",
                        }}
                    >
                        Читать в источнике
                    </ButtonCustom>
                </a>
                <TextCount>{textCount}</TextCount>
            </Box>
        </Container>
    );
};

export default Document;
