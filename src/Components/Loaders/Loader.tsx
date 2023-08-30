import React from "react";
import styled from "styled-components";
import { useAppSelector } from "../../Reducer/store";

const Container = styled.div`
    width: 40px;
    height: 40px;
    border: 5px solid #f0bbbb;
    border-bottom-color: transparent;
    border-radius: 50%;
    display: inline-block;
    box-sizing: border-box;
    animation: rotation 1s linear infinite;
    align-self: center;

    @keyframes rotation {
        0% {
            transform: rotate(0deg);
        }
        100% {
            transform: rotate(360deg);
        }
    }
`;

const Loader = () => {
    return <Container></Container>;
};

export default Loader;
