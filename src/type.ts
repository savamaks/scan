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
    usedCompanyCount: string;
    companyLimit: string;
};
export type TypeData = {
    date: string;
    value: number;
};
export type TypeDataHistogram = {
    data: Array<TypeData>;
    histogramType: string;
};
type TypeArrSearchHistogram = {
    data: Array<TypeDataHistogram>;
};
export type TypeItemsObjectSearch = {
    encodedId: string;
    influence: number;
    similarCount: number;
};
type TypeMappingArrObject = {
    inn: string;
    entityIds: Array<string>;
};
export type TypeArrObjectSearch = {
    items: Array<TypeItemsObjectSearch>;
    mappings: Array<TypeMappingArrObject>;
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
        markup: string;
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
    checkedArr: Array<string>;
    arrSearchHistogram: TypeArrSearchHistogram;
    arrObjectSearch: TypeArrObjectSearch;
    limitLoadingDocument: number;
    countLoadingDocument: number;
    arrDocument: Array<TypeItemsArrDocument>;
    loadingHistogram: string;
    statusError: string;
    loadingDocument: string;
    loadingLogIn: string;
    resultLogIn: TypeResultLogIn;
};
export type TypeCheckedAction = {
    id: string;
    checkedValue: string;
};
export interface IBodyRequestDocument {
    ids: Array<string>;
}
interface IIssueDateInterval {
    startDate: string; 
    endDate: string; 
}
interface ISearchContext {
    targetSearchEntitiesContext: ITargetSearchEntitiesContext;
}
interface ITargetSearchEntitiesContext {
    targetSearchEntities: Array<ITargetSearchEntities>;
    onlyMainRole: boolean;
    tonality: string;
    onlyWithRiskFactors: boolean;
}
interface ITargetSearchEntities {
    type: string;
    inn: string;
    maxFullness: boolean;
}
interface IAttributeFilters {
    excludeTechNews: boolean;
    excludeAnnouncements: boolean;
    excludeDigests: boolean;
}

export interface IBodyRequesHistogram {
    issueDateInterval: IIssueDateInterval;
    searchContext: ISearchContext;
    attributeFilters: IAttributeFilters;
    similarMode: string;
    limit: string;
    sortType: string;
    sortDirectionType: string;
    intervalType: string;
    histogramTypes: Array<string>;
}

export interface IRequestHistogram {
    body: IBodyRequesHistogram;
    accessToken: string;
}
export interface IBodyRequstHistogram {
    inn: number;
    limit: number;
    inputFromDate: string;
    inputToDate: string;
    tonality: string;
}
export interface IRequestDocument {
    body: IBodyRequestDocument | null;
    accessToken: string;
}
export interface IRequestLogIn {
    login: string;
    password: string;
}
