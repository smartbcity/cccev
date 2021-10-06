type Nullable<T> = T | null | undefined
export namespace ccev.dsl.core {
    interface EvidenceTypeList {
        readonly description: string;
        readonly identifier: string;
        readonly name: string;
        readonly specifiesEvidenceType: kotlin.collections.List<ccev.dsl.core.EvidenceType>;
    }
    interface EvidenceType {
        readonly identifier: string;
        readonly name: string;
        readonly evidenceTypeClassification: ccev.dsl.core.Code;
        readonly validityPeriodConstraint: Nullable<ccev.dsl.core.PeriodOfTime>;
        readonly issuingPlace: Nullable<ccev.dsl.core.CoreLocationLocation>;
    }
}
export namespace ccev.dsl.core {
    interface InformationConcept {
        readonly identifier: string;
        readonly name: string;
        readonly unit: ccev.dsl.core.CUnitDTO;
        readonly type: ccev.dsl.core.Code;
        readonly description: string;
        readonly expressionOfExpectedValue: Nullable<string>;
    }
}
export namespace ccev.dsl.core {
    interface UnitDTO {
        readonly identifier: string;
        readonly name: string;
        readonly description: string;
        readonly notation: Nullable<string>;
        readonly type: any /*Class ccev.dsl.core.CUnitType with kind: ENUM_CLASS*/;
    }
}
export namespace kotlinx.atomicfu {
    function atomic$ref$<T>(initial: T, trace: kotlinx.atomicfu.TraceBase): kotlinx.atomicfu.AtomicRef<T>;
    function atomic$boolean$(initial: boolean, trace: kotlinx.atomicfu.TraceBase): kotlinx.atomicfu.AtomicBoolean;
    function atomic$int$(initial: number, trace: kotlinx.atomicfu.TraceBase): kotlinx.atomicfu.AtomicInt;
    function atomic$long$(initial: kotlin.Long, trace: kotlinx.atomicfu.TraceBase): kotlinx.atomicfu.AtomicLong;
}
export as namespace cccev_cee_cccev_dsl_cc;