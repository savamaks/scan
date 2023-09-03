import styled from "styled-components";
import { changeBoolean } from "../Reducer/appSlice";
import { useAppDispatch, useAppSelector } from "../Reducer/store";

const Button = styled.button`
    display: flex;
    align-items: center;
    gap: 0.2em;
    flex-direction: column;
    cursor: pointer;
`;
const LineTop = styled.div<{ background: string; rotate: string; translate: string }>`
    width: 2rem;
    height: 0.3rem;
    background:  ${(props) => props.background};
    transform: translate(0, ${(props) => props.translate}) rotate(${(props) => props.rotate});
    transition: all 0.5s ease-in-out;
`;
const LineCenter = styled.div<{ background: string; opacity: string }>`
    width: 2rem;
    height: 0.3rem;
    background:  ${(props) => props.background};
    opacity: ${(props) => props.opacity};
`;
const LineDown = styled.div<{ background: string; rotate: string; translate: string }>`
    width: 2rem;
    height: 0.3rem;
    background: ${(props) => props.background};
    transform: translate(0, ${(props) => props.translate}) rotate(${(props) => props.rotate});
    transition: all 0.5s ease-in-out;
`;

const Burdger = () => {
    const { activeBurger } = useAppSelector((state) => state.appSlice);
    const dispatch = useAppDispatch();

    const clickBurger = () => {
        dispatch(changeBoolean("activeBurger"));
    };

    return (
        <Button onClick={clickBurger}>
            <LineTop
                background={!activeBurger ? "#029491" : "#fff"}
                rotate={!activeBurger ? "0" : "-45deg"}
                translate={!activeBurger ? "0" : "7px"}
            ></LineTop>
            <LineCenter background={!activeBurger ? "#029491" : "#fff"} opacity={!activeBurger ? "1" : "0"}></LineCenter>
            <LineDown
                background={!activeBurger ? "#029491" : "#fff"}
                rotate={!activeBurger ? "0" : "45deg"}
                translate={!activeBurger ? "0" : "-7px"}
            ></LineDown>
        </Button>
    );
};

export default Burdger;
