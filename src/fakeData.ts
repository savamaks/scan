import { CarouselItemType, RateType } from "./type";

export const arrCarousel: Array<CarouselItemType> = [
    { image: "images/2.svg", text: "Высокая и оперативная скорость обработки заявки" },
    { image: "images/1.svg", text: "Огромная комплексная база данных, обеспечивающая объективный ответ на запрос" },
    { image: "images/3.svg", text: "Защита конфеденциальных сведений, не подлежащих разглашению по федеральному законодательству" },
    { image: "images/2.svg", text: "Высокая и оперативная скорость обработки заявки" },
    { image: "images/1.svg", text: "Огромная комплексная база данных, обеспечивающая объективный ответ на запрос" },
    { image: "images/3.svg", text: "Защита конфеденциальных сведений, не подлежащих разглашению по федеральному законодательству" },
];

export const arrRate: Array<RateType> = [
    {
        title: "Beginner",
        text: "Для небольшого исследования",
        price: "7 999 ₽",
        sale: "2 600 ₽",
        textPrice: "или 150 ₽/мес. при рассрочке на 24 мес.",
        li: ["Безлимитная история запросов", "Безопасная сделка", "Поддержка 24/7"],
        background: "#FFB64F",
        color: "#000",
        image: "images/beginner.svg",
    },
    {
        title: "Pro",
        text: "Для HR и фрилансеров",
        price: "1 299 ₽",
        sale: "2 600 ₽",
        textPrice: "или 279 ₽/мес. при рассрочке на 24 мес.",
        li: ["Все пункты тарифа Beginner", "Экспорт истории", "Рекомендации по приоритетам"],
        background: "#7CE3E1",
        color: "#000",
        image: "images/pro.svg",
    },
    {
        title: "Business",
        text: "Для корпоративных клиентов",
        price: "2 379 ₽",
        sale: "3 700 ₽",
        textPrice: "или 279 ₽/мес. при рассрочке на 24 мес.",
        li: ["Все пункты тарифа Pro", "Безлимитное количество запросов", "Приоритетная поддержка"],
        background: "#000",
        color: "#FFF",
        image: "images/bussines.svg",
    },
];