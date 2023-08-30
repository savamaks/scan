import { useState } from "react";
import { Context } from "./Context";


const Slider = ({ children, count, lengthArr }: any) => {
    const [start, setStart] = useState<number>(0);

    const arrowRight = () => {
        if (start < lengthArr - count) {
            setStart((prev: number) => prev + 1);
        }
    };

    const arrowLeft = () => {
        if (start > 0) {
            setStart((prev: number) => prev - 1);
        }
    };

    return (
        <Context.Provider value={{ count, start, lengthArr, arrowRight, arrowLeft }}>
            <div style={{ display: "flex", alignItems: "center" }}>{children}</div>
        </Context.Provider>
    );
};

export default Slider;
