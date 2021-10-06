import {cccev} from "cccev-cee-cccev-dsl-dto"
import { certificatRequest } from "./certificatRequest"

interface GetEvidenceTypeListsQueryDTO extends cccev.dsl.dto.query.GetEvidenceTypeListsQueryDTO {}
interface GetEvidenceTypeListsQueryResultDTO extends cccev.dsl.dto.query.GetEvidenceTypeListsQueryResultDTO {}

const requirementId = "carbonCopy"

export const getEvidenceTypeLists = () => {
    return certificatRequest<GetEvidenceTypeListsQueryResultDTO>({
        url: "/getEvidenceTypeLists",
        body: JSON.stringify({
            requirement: requirementId
        } as GetEvidenceTypeListsQueryDTO)
    })
}

interface GetInformationConceptsQueryDTO extends cccev.dsl.dto.query.GetInformationConceptsQueryDTO {}
interface GetInformationConceptsQueryResultDTO extends cccev.dsl.dto.query.GetInformationConceptsQueryResultDTO {}


export const getInformationConcepts = () => {
    return certificatRequest<GetInformationConceptsQueryResultDTO>({
        url: "/getInformationConcepts",
        body: JSON.stringify({
            requirement: requirementId
        } as GetInformationConceptsQueryDTO)
    })
}
