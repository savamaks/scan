export type CarouselItemType = {
    image: any;
    text: string;
};
export type RateType = {
    title: string;
    text: string;
    price: string;
    sale: string;
    textPrice: string;
    li: Array<string>;
    background: string;
    color: string;
    image: string;
};

export type DocumentType = {
    dateText: string;
    website: string;
    title: string;
    label: string;
    image: string;
    text: string;
    textCount: string;
};

export type ResultType = {
    date: string;
    value: string;
};
export type TypeArg = {
    login: string;
    password: string;
};
export type TypeResult = {
    accessToken?: string;
    expire?: string;
    errorCode?: string;
    message?: string;
};
export type TypeEventFiltersInfo = {
    usedCompanyCount?: string;
    companyLimit?: string;
};

export type TypeInitialState = {
    button: boolean;
    activeBurger: boolean;
    loading: boolean;
    logIn: boolean;
    buttonEntry: boolean;
    buttonReq: boolean;
    buttonLoadMoreActive: boolean;
    activePlan: string;
    countSlider: number;
    eventFiltersInfo: TypeEventFiltersInfo;
    checkedArr: Array<string>;
    arrSearchHistogram: any;
    arrObjectSearch: any;
    limitLoadingDocument: number;
    countLoadingDocument: number;
    arrDocument: any;
    loadingHistogram: string;
    statusError: string;
    loadingDocument: string;
    loadingObjectSearch: string;
    loadingLogIn: string;
    resultLogIn: any;
    loadingInfo: string;
};
export type TypeCheckedAction = {
    id: string;
    checkedValue: string;
};
