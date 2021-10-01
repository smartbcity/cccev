

interface EvidenceType {
    id: string
    label: string
    isAdded: boolean
}

export interface EvidenceTypeList {
    id: string
    name: string
    specifiesEvidenceType: EvidenceType[]
}

export type Evidences = (EvidenceTypeList[] | EvidenceTypeList)[]

export const EvidenceType = () => {
    return (
        <div>
            
        </div>
    )
}
