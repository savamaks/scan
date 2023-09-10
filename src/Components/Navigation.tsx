import { Link } from "react-router-dom";
import styled from "styled-components";
import { useAppDispatch, useAppSelector } from "../Reducer/store";
import { changeBoolean } from "../Reducer/appSlice";

const Container = styled.nav`
    display: flex;
    align-items: center;
    gap: 49px;
    @media (max-width: 900px) {
        flex-direction: column;
    }
`;
const LinkNav = styled.button`
    cursor: pointer;
    color: #000;
    font-family: Inter;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    @media (max-width: 900px) {
        font-size: 16px;
        color: #fff;
    }
`;
const Navigation = () => {
    const  activeBurger  = useAppSelector((state) => state.appSlice.activeBurger);
    const dispatch = useAppDispatch();
    const clickNavLink = () => {
        if (activeBurger) {
            dispatch(changeBoolean("activeBurger"));
        }
    };
    return (
        <Container>
            <Link to="/">
                <LinkNav onClick={clickNavLink}>Главная</LinkNav>
            </Link>

            <LinkNav onClick={clickNavLink}>Тарифы</LinkNav>
            <LinkNav onClick={clickNavLink}>FAQ</LinkNav>
        </Container>
    );
};

export default Navigation;
