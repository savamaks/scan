import styled, { keyframes } from "styled-components";
import { TypeItemsArrDocument } from "../type";
import ButtonCustom from "./ButtonCustom";
import { useResize } from "../Hooks/useResize";
import { useAppSelector } from "../Reducer/store";
import { validateText } from "../helper/validateText";

const FadeIn = keyframes`
    0%{
        opacity: 0;
    }
    100%{
        opacity: 1;
    }
`;
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
    animation: ${FadeIn} 1s ease;
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
    transition: all 0.1s ease-in;
    &:hover{
        color: black;
        transform: scale(1.01);
    }
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
const Image = styled.img`
    object-fit: cover;
    transition: all.4s ease-in;
`;
const BoxImage = styled.div`
    margin: 18px 0;
    height: 250px;
    width: 100%;
    overflow: hidden;
    & ${Image}:hover {
        transform: scale(1.05);
    }
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
const BoxDocumentResult = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 34px;
    margin: 34px 0 20px;
    width: 100%;
    @media (min-width: 900px) {
        flex-direction: row;
        flex-wrap: wrap;
    }
`;
const Document = () => {
    const { size } = useResize();
    const arrDocument = useAppSelector((state) => state.appSlice.arrDocument);
    return (
        <BoxDocumentResult>
            {arrDocument.map((el: TypeItemsArrDocument, index: number) => {
                if (!el.ok) return;
                let imgSrc: string = "";
                const regex = `img src="`;
                const indexStart = el.ok.content.markup.toString().search(regex);
                const textDocument = validateText(el.ok.content.markup);

                if (indexStart !== -1) {
                    const str = el.ok.content.markup.toString().slice(indexStart, -1);
                    const indexEnd = str.slice(9, -1).search('"');
                    imgSrc = str.slice(9, indexEnd + 9);
                }
                const date = el.ok.issueDate.slice(0, 10);
                console.log(imgSrc);
                return (
                    <Container key={index}>
                        <BoxLink>
                            <DateText>{date}</DateText>
                            {el.ok.url && (
                                <LinkWebsait href={el.ok.url} target="_blank">
                                    {size ? el.ok.url.slice(0, 40) : el.ok.url.slice(0, 30)}...
                                </LinkWebsait>
                            )}
                        </BoxLink>
                        <Title>{el.ok.title.text}</Title>
                        {el.ok.attributes.isTechNews && <Label>Технические новости</Label>}
                        {el.ok.attributes.isDigest && <Label>сводки новостей</Label>}
                        {el.ok.attributes.isAnnouncement && <Label>анонсы и события</Label>}

                        {imgSrc && (
                            <BoxImage>
                                <Image src={imgSrc} alt="img" />
                            </BoxImage>
                        )}
                        <Text>{textDocument.slice(0, 800) + "..."}</Text>
                        <Box>
                            <a href={el.ok.url} target="_blank">
                                <ButtonCustom
                                    disabled={!el.ok.url}
                                    style={{
                                        color: "#000",
                                        fontSize: "16px",
                                        borderRadius: "5px",
                                        background: `${!el.ok.url ? "#D2D2D2" : "#7ce3e1"}`,
                                        padding: " 12px 29px",
                                    }}
                                >
                                    Читать в источнике
                                </ButtonCustom>
                            </a>
                            <TextCount>{el.ok.attributes.wordCount}</TextCount>
                        </Box>
                    </Container>
                );
            })}
        </BoxDocumentResult>
    );
};

export default Document;

// <Document />;
// {
//     arrDocument.map((el: TypeItemsArrDocument, index: number) => {
//         if (!el.ok) return;
//         let imgSrc: string = "";
//         const regex = `img src="`;
//         const indexStart = el.ok.content.markup.toString().search(regex);
//         const textDocument = validateText(el.ok.content.markup);

//         if (indexStart !== -1) {
//             const str = el.ok.content.markup.toString().slice(indexStart, -1);
//             const indexEnd = str.slice(9, -1).search('"');
//             imgSrc = str.slice(9, indexEnd + 9);
//         }
//         const date = el.ok.issueDate.slice(0, 10);

//         return (
//             <Document
//                 key={index}
//                 dateText={date}
//                 website={el.ok.url}
//                 title={el.ok.source.name}
//                 label={el.ok.attributes}
//                 image={imgSrc}
//                 text={textDocument.slice(0, 800) + "..."}
//                 textCount={el.ok.attributes.wordCount}
//             />
//         );
//     });
// }
