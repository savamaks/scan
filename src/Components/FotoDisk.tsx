import React, { FC, useEffect, useState } from "react";

const token = "y0_AgAAAAATrPSlAAqJ_AAAAADtVenLDojAyIyhQM6iWIGM3adrhUs5d0w";

const requestDisk = async (url: string) => {
    try {
        const res = await fetch(`https://cloud-api.yandex.net/v1/disk/public/resources?public_key=${url}`, {
            headers: {
                "Content-Type": "application/json",
                Authorization: `OAuth ${token}`,
            },
        });
        const data = await res.json();
        console.log(data);
        return data;
    } catch (error) {
        console.log(error);
    }
};
const FotoDsik: FC<any> = ({ arr }) => {
    const [data, setData] = useState<any>({});
    console.log(arr);
    const request = async () => {
        const result = await requestDisk(arr.url);
        setData(result);
    };
    useEffect(() => {
        request();
    }, []);

    return (
        <div>
            {data._embedded &&
                data._embedded.items.map((el: any, index: number) => {
                    return <img key={index} src={el.sizes[8].url} alt="" />;
                })}
        </div>
    );
};

export default FotoDsik;
