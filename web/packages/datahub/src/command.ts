import { cccev } from "cccev-cee-request-domain"
import { certificatRequest } from "./certificatRequest"

const requirementId = "carbonCopy"

interface RequestEvidenceAddCommandDTO extends cccev.s2.request.domain.features.command.RequestEvidenceAddCommandDTO { }
interface RequestEvidenceAddedEventDTO extends cccev.s2.request.domain.features.command.RequestEvidenceAddedEventDTO { }

export const requestEvidenceAddCommand = async (evidenceTypeId: string, file: string) => {
    return (await certificatRequest<RequestEvidenceAddedEventDTO[]>({
        url: "/getEvidenceTypeLists",
        body: JSON.stringify({
            id: requirementId,
            evidence: {
                isConformantTo:[evidenceTypeId],
                file: file
            }
        } as RequestEvidenceAddCommandDTO)
    }))[0]
}

interface RequestEvidenceRemoveCommandDTO extends cccev.s2.request.domain.features.command.RequestEvidenceRemoveCommandDTO { }
interface RequestEvidenceRemovedEventDTO extends cccev.s2.request.domain.features.command.RequestEvidenceRemovedEventDTO { }

export const requestEvidenceRemoveCommand = async (evidenceTypeId: string) => {
    return (await certificatRequest<RequestEvidenceRemovedEventDTO[]>({
        url: "/getEvidenceTypeLists",
        body: JSON.stringify({
            id: requirementId,
            evidenceId: evidenceTypeId
        } as RequestEvidenceRemoveCommandDTO)
    }))[0]
}

interface RequestSupportedValueAddCommandDTO extends cccev.s2.request.domain.features.command.RequestSupportedValueAddCommandDTO { }
interface RequestSupportedValueAddedEventDTO extends cccev.s2.request.domain.features.command.RequestSupportedValueAddedEventDto { }

export const requestSupportedValueAddCommand = async () => {
    return certificatRequest<RequestSupportedValueAddedEventDTO[]>({
        url: "/getEvidenceTypeLists",
        body: JSON.stringify({
            id: requirementId,
            supportedValue: {

            }
        } as RequestSupportedValueAddCommandDTO)
    })
}

