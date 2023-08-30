import { useContext } from "react";
import { Context } from "./Context";

const ArrowRight = ({ children }: any) => {
    const { arrowRight } = useContext(Context);

    return <button onClick={arrowRight}>{children}</button>;
};

export default ArrowRight;
