import { useContext } from "react";
import { Context } from "./Context";


const SliderItem = ({ children }: any) => {
    const { count, start } = useContext(Context);

    const end = count + start;

    return (
        <div style={{ display: "flex", alignItems: "stretch", gap: "20px" }}>
            {children.map((el: any, index: number) => {
                if (index >= start && index < end) {
                    return el;
                }
            })}
        </div>
    );
};

export default SliderItem;
