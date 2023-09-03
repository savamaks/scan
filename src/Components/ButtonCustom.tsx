import styled from "styled-components";

const Container = styled.button`
    color: #fff;
    font-family: Inter;
    font-size: 18px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    letter-spacing: 0.2px;
    border-radius: 5px;
    padding: 18px 10px;
    white-space: nowrap;
    &:disabled {
        cursor: no-drop;
    }
    @media (min-width: 900px) {
        font-size: 20px;
    }
`;
const ButtonCustom = ({ disabled, style, onClick, children }: any) => {
    return (
        <Container disabled={disabled} style={style} onClick={onClick}>
            {children}
        </Container>
    );
};

export default ButtonCustom;
