import { cccev } from "cccev-cee-cccev-dsl-dto"
import { certificatRequest } from "./certificatRequest"


interface GetEvidenceTypeListsQueryDTO extends cccev.dsl.dto.query.GetEvidenceTypeListsQueryDTO { }
interface GetEvidenceTypeListsQueryResultDTO extends cccev.dsl.dto.query.GetEvidenceTypeListsQueryResultDTO { }

export const getEvidenceTypeLists = async () => {
    //@ts-ignore
    const request = window._env_.request
    //@ts-ignore
    const framework = window._env_.framework
    return (await certificatRequest<GetEvidenceTypeListsQueryResultDTO[]>({
        url: "/getEvidenceTypeLists",
        body: JSON.stringify({
            requirement: framework,
            id: request
        } as GetEvidenceTypeListsQueryDTO)
    }))[0]
}

interface GetInformationConceptsQueryDTO extends cccev.dsl.dto.query.GetInformationConceptsQueryDTO { }
interface GetInformationConceptsQueryResultDTO extends cccev.dsl.dto.query.GetInformationConceptsQueryResultDTO { }


export const getInformationConcepts = async () => {
    //@ts-ignore
    const request = window._env_.request
    //@ts-ignore
    const framework = window._env_.framework
    return (await certificatRequest<GetInformationConceptsQueryResultDTO[]>({
        url: "/getInformationConcepts",
        body: JSON.stringify({
            requirement: framework,
            id: request
        } as GetInformationConceptsQueryDTO)
    }))[0]
}
