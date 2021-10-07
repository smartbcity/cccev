import {cccev} from "cccev-cee-cccev-dsl-dto"
import { certificatRequest } from "./certificatRequest"

const requirementId = "carbonCopy"

interface GetEvidenceTypeListsQueryDTO extends cccev.dsl.dto.query.GetEvidenceTypeListsQueryDTO {}
interface GetEvidenceTypeListsQueryResultDTO extends cccev.dsl.dto.query.GetEvidenceTypeListsQueryResultDTO {}

export const getEvidenceTypeLists = async () => {
    return (await certificatRequest<GetEvidenceTypeListsQueryResultDTO[]>({
        url: "/getEvidenceTypeLists",
        body: JSON.stringify({
            requirement: requirementId
        } as GetEvidenceTypeListsQueryDTO)
    }))[0]
}

interface GetInformationConceptsQueryDTO extends cccev.dsl.dto.query.GetInformationConceptsQueryDTO {}
interface GetInformationConceptsQueryResultDTO extends cccev.dsl.dto.query.GetInformationConceptsQueryResultDTO {}


export const getInformationConcepts = async () => {
    return (await certificatRequest<GetInformationConceptsQueryResultDTO[]>({
        url: "/getInformationConcepts",
        body: JSON.stringify({
            requirement: requirementId
        } as GetInformationConceptsQueryDTO)
    }))[0]
}
