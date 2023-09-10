import { IBodyRequstHistogram } from "../type";

export const handlerRequestHistogram = ({ inn, limit, inputFromDate, inputToDate, tonality }: IBodyRequstHistogram) => {
    // console.log(inn, limit, from, to, checkedArr);
    const requestBody = {
        issueDateInterval: {
            startDate: `${inputFromDate}T00:00:00+03:00`, //"2019-01-01T00:00:00+03:00",
            endDate: `${inputToDate}T23:59:59+03:00`, //"2022-08-31T23:59:59+03:00",
        },
        searchContext: {
            targetSearchEntitiesContext: {
                targetSearchEntities: [
                    {
                        type: "company",

                        inn: `${inn}`, //7710137066
                        maxFullness: true,
                    },
                ],
                onlyMainRole: true,
                tonality: `${tonality}`,
                onlyWithRiskFactors: false,
            },
        },

        attributeFilters: {
            excludeTechNews: true,
            excludeAnnouncements: true,
            excludeDigests: true,
        },
        similarMode: "duplicates",
        limit: `${limit}`,
        sortType: "sourceInfluence",
        sortDirectionType: "desc",
        intervalType: "month",
        histogramTypes: ["totalDocuments", "riskFactors"],
    };
    return requestBody;
};
