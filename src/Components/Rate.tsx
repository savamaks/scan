import styled from "styled-components";
import { RateType } from "../type";
import { useAppSelector } from "../Reducer/store";
import ButtonCustom from "./ButtonCustom";
import { arrRate } from "../fakeData";

interface ComponentProps {
    color?: string;
    background?: string
    border_color?: string 
}

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 43px;
    margin: 37px 0 68px;
    @media (min-width: 900px) {
        flex-direction: row;
        justify-content: center;
        margin: 70px 0 255px;
        flex-wrap: wrap;
    }
`;
const CardRate = styled.div<ComponentProps>`
    border-radius: 10px;
    box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.2);
    flex-basis: 27%;
    border: 2px solid ${(props) => props.border_color};
    display: flex;
    flex-direction: column;
    @media (min-width: 900px) {
        min-width: 400px;
    }
`;
const Box = styled.div<ComponentProps>`
    position: relative;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    background: ${(props) => props.background};
    display: flex;
    flex-direction: column;

    gap: 10px;
    padding: 30px 0 34px 24px;
`;

const Title = styled.h2<ComponentProps>`
    font-family: Inter;
    font-size: 25px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    letter-spacing: 0.3px;
    color: ${(props) => props.color};
`;
const Text = styled.p<ComponentProps>`
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
    position: relative;
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
const CurrentTariff = styled.p`
    position: absolute;
    color: #fff;
    font-family: Inter;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    letter-spacing: 0.14px;
    border-radius: 10px;
    background: #3ba5e0;
    padding: 3px 13px;
    right: 2%;
    top: 3%;
`;

const Rate = () => {
    const  activePlan  = useAppSelector((state) => state.appSlice.activePlan);
    const  loadingLogIn  = useAppSelector((state) => state.appSlice.loadingLogIn);

    return (
        <Container>
            {arrRate.map((el: RateType, index: number) => {
                return (
                    <CardRate
                        key={index}
                        border_color={el.title.toLowerCase() === activePlan.toLowerCase() && loadingLogIn == "true" ? el.background : "inherit"}
                    >
                        <Box background={el.background}>
                            <Title color={el.color}>{el.title}</Title>
                            <Text color={el.color}>{el.text}</Text>
                            <Image src={el.image} alt="=img" />
                        </Box>
                        <Block>
                            {el.title.toLowerCase() === activePlan.toLowerCase() && loadingLogIn == "true" && (
                                <CurrentTariff>Текущий тариф</CurrentTariff>
                            )}

                            <BoxPrice>
                                <Price>{el.price}</Price>
                                <Sale>{el.sale}</Sale>
                            </BoxPrice>
                            <TextPrice>{el.textPrice}</TextPrice>
                            <NameList>В тариф входит:</NameList>
                            <List>
                                {el.li.map((el: any, index) => {
                                    return <Item key={index}>{el}</Item>;
                                })}
                            </List>
                            <ButtonCustom
                                style={{
                                    background: `${
                                        el.title.toLowerCase() === activePlan.toLowerCase() && loadingLogIn == "true" ? "#D2D2D2" : "#5970ff"
                                    }`,
                                }}
                            >
                                {el.title.toLowerCase() === activePlan.toLowerCase() && loadingLogIn == "true"
                                    ? "Перейти в личный кабинет"
                                    : "Подробнее"}
                            </ButtonCustom>
                        </Block>
                    </CardRate>
                );
            })}
        </Container>
    );
};

export default Rate;
