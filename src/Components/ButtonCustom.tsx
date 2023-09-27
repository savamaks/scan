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
    transition: all 0.1s ease-in;
    &:disabled {
        cursor: no-drop;
    }
    @media (min-width: 900px) {
        font-size: 20px;
    }
    &:enabled&:hover {
        transform: scale(1.03);
    }
    &:enabled&:active {
        transform: scale(0.98);
        filter: brightness(50%);
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
