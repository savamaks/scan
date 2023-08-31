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
export type TypeData = {
    date: string;
    value: number;
};
type TypeDataHistogram = {
    data: Array<TypeData>;
    histogramType: string;
};
type TypeArrSearchHistogram = {
    data: Array<TypeDataHistogram>;
};
type TypeItemsObjectSearch = {
    encodedId: string;
    influence: number;
    similarCount: number;
};
type TypeMappingArrObject = {
    inn: string;
    entityIds: Array<string>;
};
type TypeArrObjectSearch = {
    items: Array<TypeItemsObjectSearch>;
    mappings?: Array<TypeMappingArrObject>;
};
type TypeAttributes = {
    isTechNews: boolean;
    isAnnouncement: boolean;
    isDigest: boolean;
    isSpeechRecognition: boolean;
    influence: number;
    wordCount: number;
};
type TypeOkItems = {
    id: string;
    url: string;
    issueDate: string;
    source: {
        name: string;
    };
    title: {
        text: string;
    };
    content: {
        markup: string;
    };
    attributes: TypeAttributes;
};
export type TypeResultLogIn = {
    accessToken: string;
    expire: string;
    errorCode: string;
    message: string;
};
export type TypeItemsArrDocument = {
    ok: TypeOkItems;
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
    arrSearchHistogram: TypeArrSearchHistogram;
    arrObjectSearch: TypeArrObjectSearch;
    limitLoadingDocument: number;
    countLoadingDocument: number;
    arrDocument: Array<TypeItemsArrDocument>;
    loadingHistogram: string;
    statusError: string;
    loadingDocument: string;
    loadingObjectSearch: string;
    loadingLogIn: string;
    resultLogIn: TypeResultLogIn;
    loadingInfo: string;
};
export type TypeCheckedAction = {
    id: string;
    checkedValue: string;
};
