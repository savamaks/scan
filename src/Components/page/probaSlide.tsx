// import { useEffect, useState } from "react";
// import { arrCarousel } from "../../fakeData";
// import { validateText } from "../../helper/validateText";
// import styled from "styled-components";

// const Slider = styled.div`
//     display: flex;
//     align-items: center;
// `;
// interface IComent {
//     left: string;
//     opacity: number;
//     zindex: number;
//     display: string;
// }
// const Con = styled.div`
//     position: relative;
//     display: flex;
//     align-items: center;
//     margin: 0 auto;
//     height: 500px;
//     width: 500px;
//     gap: 20px;
//     overflow: hidden;
//     border: 1px red solid;
// `;
// const Coment = styled.div<IComent>`
//     position: absolute;
//     width: 100%;
//     height: 100%;
//     border: 1px solid black;
//     transition: left 0.3s ease;
//     display: ${(props) => props.display};
//     opacity: ${(props) => props.opacity};
//     left: ${(props) => props.left};
//     z-index: ${(props) => props.zindex};
// `;
// const Button = styled.button`
//     padding: 20px;
//     background: #656597;
//     border-radius: 10px;
//     color: white;
//     font-size: 20px;
//     z-index: 333;
// `;
// const ProbaSlider = () => {
//     // const string ='"<?xml version=\"1.0\" encoding=\"utf-8\"?><scandoc><sentence>РКН провел проверку после утечки данных сотрудников сети <entity type=\"company\" local-id=\"0\">магазинов электроники DNS</entity>&lt;/h1&gt;&lt;br&gt;&lt;img media-type=\"ar16x9a\" data-crop-ratio=\"0.5625\" data-crop-width=\"600\" data-crop-height=\"338\" data-source-sid=\"rian_photo\" alt=\"Продажа бытовой техники в магазинах Москвы - РИА Новости, 1920, 06.12.2022\" title=\"Продажа бытовой техники в магазинах Москвы\" width=\"1920\" height=\"1080\" decoding=\"async\" sizes=\"(min-width: 600px) 600px, 100vw\" src=\"imgurl=riarulenta_719344816_6931394a-8251-4473-9d9e-85cd5527a761\" srcset=\"https://cdnn21.img.ria.ru/images/07e6/01/1c/1770035077_0:0:3108:1749_640x0_80_0_0_b71cfe0d91df18ad1f1c5c66bce9643d.jpg 640w,https://cdnn21.img.ria.ru/images/07e6/01/1c/1770035077_0:0:3108:1749_1280x0_80_0_0_696ebcc8c8f387b3ac8ea02024b6a4b7.jpg 1280w,https://cdnn21.img.ria.ru/images/07e6/01/1c/1770035077_0:0:3108:1749_1920x0_80_0_0_64c090fb6d699936652bee17c438943d.jpg 1920w\"&gt;&lt;br&gt;&lt;div&gt;&lt;div data-type=\"text\"&gt;&lt;div&gt;&lt;strong&gt;</sentence><sentence>МОСКВА, 6 дек - <entity type=\"company\" local-id=\"2\">РИА Новости</entity>.&lt;/strong&gt; </sentence><sentence><entity type=\"theme\" local-id=\"5\"><entity type=\"theme\" local-id=\"8\"><entity type=\"theme\" local-id=\"9\"><speech author-local-id=\"0\">Крупная <entity type=\"location\" local-id=\"12\">российская </entity>сеть электроники <entity type=\"company\" local-id=\"0\">DNS </entity>подтвердила утечку данных сотрудников, <entity type=\"company\" local-id=\"3\">Роскомнадзор РФ </entity>провел проверку по факту утечки, компания привлечена к ответственности, сообщили <entity type=\"company\" local-id=\"2\">РИА Новости </entity>в <entity type=\"company\" local-id=\"0\"><entity type=\"company\" local-id=\"4\">пресс-службе DNS</entity></entity></speech>.&lt;/div&gt;&lt;/div&gt;&lt;div data-type=\"text\"&gt;&lt;div&gt;</entity></entity></entity></sentence><sentence>В октябре <entity type=\"company\" local-id=\"0\">DNS </entity>сообщила, что в <speech author-local-id=\"2\">открытый доступ была выложена база данных клиентов компании</speech>. </sentence><sentence><entity type=\"theme\" local-id=\"11\">Спустя два месяца в СМИ появилась информация о том, что в открытый доступ были также выложены данные о сотрудниках розничной сети.&lt;/div&gt;&lt;/div&gt;&lt;div data-type=\"article\" data-nosnippet=\"true\" data-article=\"main-photo\"&gt;&lt;/div&gt;&lt;div data-type=\"text\"&gt;&lt;div&gt;</entity></sentence><sentence>\"Да, действительно в сеть попали данные сотрудников компании. </sentence><sentence>В украденной информации содержались данные сотрудников. </sentence><sentence>Наиболее чувствительная информация - ФИО, рабочий e-mail и телефон\", - говорится в сообщении. </sentence><sentence><entity type=\"theme\" local-id=\"10\">Уточняется, что \"слив этой информации является следствием атаки хакерской группировки в октябре 2022 года\".&lt;/div&gt;&lt;/div&gt;&lt;div data-type=\"text\"&gt;&lt;div&gt;</entity></sentence><sentence><entity type=\"theme\" local-id=\"6\">Добавляется, что <entity type=\"company\" local-id=\"3\">Роскомнадзор </entity>по факту утечки провел проверку, \"компания привлечена к ответственности\".&lt;/div&gt;&lt;/div&gt;&lt;div data-type=\"text\"&gt;&lt;div&gt;</entity></sentence><sentence>Кроме того, компания, по факту несанкционированного получения информации неизвестными лицами, обратилась с заявлением в <entity type=\"company\" local-id=\"1\">МВД России</entity>. </sentence><sentence><entity type=\"theme\" local-id=\"7\">\"В настоящее время по данному факту возбуждено уголовное дело и проводятся следственные мероприятия\", - отмечается в сообщении.&lt;/div&gt;&lt;/div&gt;&lt;div data-type=\"text\"&gt;&lt;div&gt;</entity></sentence><sentence>В сообщении подчеркивается, что компания уже приняла меры по недопущению подобных случаев в будущем и продолжает проводить работы в данном сегменте.&lt;/div&gt;&lt;/div&gt;&lt;div data-type=\"article\" data-nosnippet=\"true\" data-article=\"main-photo\"&gt;&lt;/div&gt;&lt;/div&gt;&lt;/body&gt;\r\n&lt;/data&gt;\r\n\r\n</sentence>&lt;br&gt;&lt;img src=\"https://storage.scan-interfax.ru/images/1%3AEiXQtQbQp2XigJjigqxZ4oCT0Z7RhXctWgpDftCL0YVy0JbQmNCTOdCoWm5X0ZZzFtGJwrfRn9C%2BPOKAnE9J0LzQitGf0YbCttGKMuKAptCO0YLigKbRmDHRlzhqH0JiUiYx0KDigJrQotCD0ItHFMKp4oSWGkDQvTpv0IPCsF3igJM%3D\"&gt;</scandoc>"'
//     // const str = validateText(string)
//     const [currentIndex, setcurrentIndex] = useState(0);
//     useEffect(() => {
//         if (currentIndex === arrCarousel.length) {
//             setcurrentIndex(0);
//         } else if (currentIndex === 0) {
//             // setcurrentIndex(6);
//         }
//     }, [currentIndex]);
//     console.log(currentIndex);
//     return (
//         <Slider>
//             <Button
//                 onClick={() => {
//                     if (currentIndex === 0) {
//                         setcurrentIndex(5);
//                     } else {
//                         setcurrentIndex((prev) => prev - 1);
//                     }
//                 }}
//             >
//                 left
//             </Button>
//             <Con>
//                 {arrCarousel.map((el: any, index: number) => {
//                     let position = `1000px`;
//                     let opacity = 0;
//                     let display = "none";
//                     let zindex = 0;
//                     if (index === currentIndex + 1 || (currentIndex === 0 && index === arrCarousel.length - 1)) {
//                         position = `500px`;
//                         opacity = 1;
//                         display = "block";
//                         zindex = 0;
//                     }

//                     if (index === currentIndex) {
//                         position = "0px";
//                         opacity = 1;
//                         display = "block";
//                         zindex = 12;
//                     }
//                     if (index === currentIndex - 1 || (currentIndex === 0 && index === arrCarousel.length - 1)) {
//                         position = `-500px`;
//                         opacity = 1;
//                         display = "block";
//                         zindex = 0;
//                     }
                   
//                     if (index === 0 && currentIndex === arrCarousel.length - 1) {
//                         position = `500px`;
//                         opacity = 1;
//                         display = "block";
//                         zindex = 0;
//                     }
//                     if (index === arrCarousel.length - 1 && currentIndex === 0) {
//                         position = `-500px`;
//                         opacity = 1;
//                         display = "block";
//                         zindex = 0;
//                     }
//                     return (
//                         <Coment display={display} zindex={zindex} left={position} opacity={opacity} key={index}>
//                             <img src={el.image} alt="" />
//                             <p>{el.text}</p>
//                         </Coment>
//                     );
//                 })}
//             </Con>
//             <Button
//                 onClick={() => {
//                     if (currentIndex === arrCarousel.length - 1) {
//                         setcurrentIndex(0);
//                     } else {
//                         setcurrentIndex((prev) => prev + 1);
//                     }
//                 }}
//             >
//                 right
//             </Button>
//         </Slider>
//     );
// };

// export default ProbaSlider;
