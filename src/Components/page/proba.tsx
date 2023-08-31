import React from "react";
import styled from "styled-components";
import CarouselItem from "../CarouselItem";
import { arrCarousel } from "../../fakeData";
import Slider from "../CarouselFolder/Slider";
import ArrowLeft from "../CarouselFolder/ArrowLeft";
import ArrowRight from "../CarouselFolder/ArrowRight";
import SliderItem from "../CarouselFolder/SliderItem";
import { useAppSelector } from "../../Reducer/store";

const Cont = styled.div`
    margin: 0 auto;
    display: flex;
    padding: 30px;
    gap: 10px;
    border: 1px solid red;
    max-width: 500px;
    overflow: hidden;
`;
const Box = styled.div`
    width: 180px;
    border: 1px solid black;
    animation: opa 1s ease;
    @keyframes opa {
        0% {
            transform: translate(-400px, 0);
        }
        100% {
            transform: translate(0, 0);
        }
    }
`;
const Proba = () => {
    const { arrDocument } = useAppSelector((state) => state.appSlice);
    const str =
        '<?xml version="1.0" encoding="utf-8"?><scandoc><sentence><entity type="theme" local-id="1"><entity type="theme" local-id="5">Медведь напал на жителя. <entity type="location" local-id="6">Приморья</entity>, пострадавший госпитализирован, - сообщает "Вести: Приморье" со ссылкой на <entity type="company" local-id="0">"Интерфакс-Дальний Восток"</entity>. </entity></entity></sentence><sentence>Сотрудники полиции проводят проверку по факту инцидента, связанного с нападением медведя на жителя <entity type="location" local-id="7">Уссурийска </entity>в лесу, в окрестностях <entity type="location" local-id="8">села Яконовка</entity>. </sentence><sentence><entity type="theme" local-id="2">Пострадавшего госпитализировали в реанимационное отделение городской больницы.</p>\r\n\r\n<p></entity></sentence><sentence>По данным медиков, он прооперирован, сейчас его жизни ничто не угрожает. </sentence><sentence><entity type="theme" local-id="4">Полицейские установили, что у мужчины есть разрешение на охоту, оружие должным образом зарегистрировано. </entity></sentence><sentence>Обстоятельства случившегося выясняются.</p>\r\n\r\n<p></sentence><sentence><entity type="theme" local-id="3">Напомним, ранее сообщалось, что в минувшие выходные в окрестностях <entity type="location" local-id="7">Уссурийска</entity>, в районе <entity type="location" local-id="9">села Кроуновка </entity>на охотника напал тигр, пострадавший госпитализирован.</p>\r\n</div>\r\n                                                    <div></entity></sentence><sentence>Текст:\r\n                                            ГТРК "Владивосток"\r\n                                        </div>\r\n                \r\n                \r\n                <div>\r\n\r\n                    \r\n                    \r\n                    \r\n                </div>\r\n            </div>\r\n</data>\r\n\r\n</sentence><br><img src="https://storage.scan-interfax.ru/images/1%3A0JPQqdGM0JNWCdCzf2Jt0LHQotGV0ZUh0ZbRlBXCt0Je0JHQruKAnDcUXkZQ0YvQscKn0KjQlsKu0K%2FSkdGXfOKAsF3QkjrRnCRmGCFFBybQoNGL0ZMhEFkC4oCYaNC9a9GO0KFYwqwOeNGO0JdUDGzihKJXTNC%2B0ZzRinE%3D"></scandoc>';
    const r = arrDocument[0].ok.content.markup;
    const e = ";/p;";
    const w =
        '<?xml version="1.0" encoding="utf-8"?><scandoc><sentence>"<entity type="company" local-id="2">Ростелеком </entity>Контакт-центр" организовал горячую линию <entity type="person" local-id="0">Деда Мороза </entity>и <entity type="person" local-id="0">его </entity>цифровых помощников. </sentence><sentence>По телефону дети смогут рассказать цифровой Снегурочке о подарках, которые бы хотели получить, оставить пожелания <entity type="person" local-id="0">Деду Морозу </entity>на новый год. </sentence><sentence><entity type="theme" local-id="6"><entity type="theme" local-id="7">Проект реализован при поддержке <entity type="company" local-id="3">"Почты России" </entity>и Резиденции <entity type="person" local-id="0">Деда Мороза </entity>в <entity type="location" local-id="10">Великом Устюге</entity>.&lt;/b&gt;&lt;/p&gt;&lt;p&gt;</entity></entity></sentence><sentence>Как сообщает "Вести: Приморье" со ссылкой на <entity type="company" local-id="2"><entity type="company" local-id="4">пресс-службу ПАО "Ростелеком"</entity></entity>, бесплатный круглосуточный номер 8 800 101-10-42 будет работать с 20 по 29 декабря и станет дополнением к традиционным бумажным письмам. </sentence><sentence>Все новогодние сообщения будут автоматически переформатированы в электронный формат и переданы в резиденцию новогодних волшебников в канун нового года.&lt;/p&gt;&lt;p&gt;</sentence><sentence>"<speech author-local-id="0">Дорогие друзья, малыши и взрослые, не за горами главный зимний праздник – Новый 2023 год! </speech><sentence>Самое время загадывать желания и говорить друг другу добрые пожелания. </sentence><sentence>Традиционно тысячи писем и открыток, звонков и сообщений приходят ко мне в <entity type="location" local-id="10">Великий Устюг</entity>. </sentence><sentence>С моими помощниками-волшебниками Снегурочкой и Снеговичками мы обязательно их прочитаем, прослушаем и ответим каждому. </sentence><sentence>Пусть в канун нового года наши самые искренние мечты сделают этот мир прекрасней</sentence>!", – сказал <entity type="person" local-id="0">Дед Мороз</entity>.&lt;/p&gt;&lt;p&gt;</sentence><sentence><entity type="theme" local-id="8">"<speech author-local-id="1"><speech author-local-id="2">Для организации новогодней горячей линии мы проделали, казалось бы, обычную работу – выделили номер 8 800, обеспечили работу голосового робота, настроили речевую аналитику звонков, но настроение нашей команды, задействованной в проекте, сделало <entity type="person" local-id="0">его </entity>по-настоящему волшебным. </speech></speech><sentence>Пусть все пожелания, поступившие <entity type="person" local-id="0">Деду Морозу</entity>, обязательно сбудутся</sentence></entity>!", – подчеркнул генеральный директор "<entity type="company" local-id="2">Ростелеком </entity>Контакт-центра" <entity type="person" local-id="1">Сергей Шишмарев</entity>.&lt;/p&gt;&lt;p&gt;</sentence><sentence>Напомним, что в отделениях почты по всей стране появилось более 100 почтовых ящиков для писем <entity type="person" local-id="0">Деду Морозу</entity>. </sentence><sentence>Опустить в них свои послания можно до 31 декабря.&lt;/p&gt;&lt;p&gt;&lt;i&gt;</sentence><sentence>О <entity type="company" local-id="2">компании</entity>:&lt;/i&gt;&lt;/p&gt;&lt;p&gt;&lt;i&gt;</sentence><sentence><entity type="theme" local-id="5"><entity type="theme" local-id="9">"<speech author-local-id="2"><entity type="company" local-id="2">Ростелеком </entity>Контакт-центр</speech>" предоставляет услуги аутсорсингового контактного центра для коммерческих компаний, государственных структур, участвует в реализации крупных федеральных проектов: Единый государственный экзамен, единый день голосования, перепись населения и других. </entity></entity></sentence><sentence>Действующие операторские площадки "<entity type="company" local-id="2">Ростелеком </entity>Контакт-центра" расположены в 19 городах <entity type="location" local-id="11">России</entity>, штат операторов насчитывает свыше 7 000 человек.&lt;/i&gt;&lt;/p&gt&lt;/div&gt;&lt;/body&gt;&lt;/data&gt;</sentence>&lt;br&gt;&lt;img src="https://storage.scan-interfax.ru/images/1%3A0L3QhNCc0JgE0KI6NSHQqTTQsNGf0LZg0ILRitC3eGnQu%2BKAmDsS0Jc2WNCrHtC%2BPdC%2FfMK24oCdH9CPVkwf0J9rTSrQlMKg0ZHQldGZcNCZ0YrQtB90fVvCt1TRgyRk4oKs4oSWQDnCsNCuEtClHmktMNCqM0hg0KzQqw%3D%3D"&gt;</scandoc>';

    // const arrOne: any = [];
    // const arrTwo: any = [];

    // w.split("").map((el: any, index: number) => {
    //     if (el === "<") {
    //         arrOne.push(index);
    //     } else if (el === ">") {
    //         arrTwo.push(index);
    //     }
    // });
    // // console.log(arrOne,arrTwo);
    // const count = 0;
    // let t = "";
    // const arrText: any = [];

    // arrTwo.map((el: any, index: number) => {
    //     arrText.push(w.slice(arrTwo[index] + 1, arrOne[index + 1]));
    //     // console.log(str.slice(arrTwo[index]+1,arrOne[index+1]))
    //     count + 2;
    // });
    // // console.log(w.slice(arrTwo[0]-count+1,arrOne[1]-count-2));

    // console.log(arrText.join(""));
    // const eq = arrText.join("").slice(0, arrText.join("").search(/img/gi)).replace(/\&lt\;|\/|i\&gt|p\&gt|div\&gt|body\&gt|data\&gt|b\&gt|\;|br\&gt/gi,'')

    // const resy =r.replace(/'.../gs,'').replace(/\&\w*/gi,'').replace(/\<\w*\s\w*\-\w*\-\w*\=\"\d*\">/gi,'').replace(/\<\/\w*\>|\<\w*\>/gi,'').replace(/<\?\w*\s\w*\=\"\d\.\d\"\s\w*\=\"\w*\-\d\"\?>/gi,'').replace(/<\w*\s\w*\=\"\w*\"\s\w*\-\w*\=\"\w*\">/gi, "")
    
    const rer = w.match(/\>.*\</gi)
console.log(rer);
    return <div>{rer}</div>;
};

export default Proba;

{
    /* <Cont>
    <Box>{arrCarousel[0].text}</Box>
    <Box>{arrCarousel[1].text}</Box>
    <Box>{arrCarousel[2].text}</Box>
    <Box>{arrCarousel[0].text}</Box>
    <Box>{arrCarousel[1].text}</Box>
    <Box>{arrCarousel[2].text}</Box>
    
</Cont>; */
}
