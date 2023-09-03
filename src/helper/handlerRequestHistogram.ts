export const handlerRequestHistogram = ({ inn, limit, from, to,tonality }: any) => {
    // console.log(inn, limit, from, to, checkedArr);
    const requestBody = {
        issueDateInterval: {
            startDate: `${from}T00:00:00+03:00`, //"2019-01-01T00:00:00+03:00",
            endDate: `${to}T23:59:59+03:00`, //"2022-08-31T23:59:59+03:00",
        },
        searchContext: {
            targetSearchEntitiesContext: {
                targetSearchEntities: [
                    {
                        type: "company",
                        sparkId: null,
                        entityId: null,
                        inn: `${ inn }`, //7710137066
                        maxFullness: true,
                        inBusinessNews: null,
                    },
                ],
                onlyMainRole: true,
                tonality: `${tonality}`,
                onlyWithRiskFactors: false,
                riskFactors: {
                    and: [],
                    or: [],
                    not: [],
                },
                themes: {
                    and: [],
                    or: [],
                    not: [],
                },
            },
            themesFilter: {
                and: [],
                or: [],
                not: [],
            },
        },
        searchArea: {
            includedSources: [],
            excludedSources: [],
            includedSourceGroups: [],
            excludedSourceGroups: [],
        },
        attributeFilters: {
            excludeTechNews: true,
            excludeAnnouncements: true,
            excludeDigests: true,
        },
        similarMode: "duplicates",
        limit: `${ limit }`,
        sortType: "sourceInfluence",
        sortDirectionType: "desc",
        intervalType: "month",
        histogramTypes: ["totalDocuments", "riskFactors"],
    };
    return requestBody;
};
