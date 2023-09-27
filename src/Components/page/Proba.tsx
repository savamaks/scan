import { useState } from "react";
const token = "y0_AgAAAAATrPSlAAqJ_AAAAADtVenLDojAyIyhQM6iWIGM3adrhUs5d0w";
const publicKey = "https://disk.yandex.ru/d/4Y6zxoNUiyMPPA";
const r = "https://disk.yandex.ru/d/fre2n4o3f0-F1A";

const requestDisk = async () => {
    try {
        const res = await fetch(`https://cloud-api.yandex.net/v1/disk/public/resources?public_key=${publicKey}`, {
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
const requestLinkDownloadAll = async () => {
    try {
        const res = await fetch(`https://cloud-api.yandex.net/v1/disk/public/resources/download?public_key=${publicKey}`, {
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

const Proba = () => {
    const [data, setData] = useState<any>({});
    const [linkDownloadAll, setLinkDownloadAll] = useState<any>({});

    const clickBtn = async () => {
        const result = await requestDisk();
        setData(result);
        const link = await requestLinkDownloadAll();
        setLinkDownloadAll(link);
    };
    return (
        <div>
            <button onClick={clickBtn}>click</button>
            <br />
            <br />
            {linkDownloadAll.href && <a href={linkDownloadAll.href}>download</a>}

            {data._embedded &&
                data._embedded.items.map((el: any, index: number) => {
                    return <img key={index} src={el.sizes[8].url} alt="" />;
                })}
        </div>
    );
};



export default Proba;
