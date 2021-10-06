type Nullable<T> = T | null | undefined
export namespace ccev.dsl.core {
    interface Code {
    }
}
export namespace ccev.dsl.core {
    interface EvidenceDTO {
        readonly isConformantTo: kotlin.collections.List<string>;
        readonly supportsValue: kotlin.collections.List<string>;
        readonly supportsConcept: kotlin.collections.List<string>;
        readonly supportsRequirement: kotlin.collections.List<string>;
        readonly validityPeriod: Nullable<ccev.dsl.core.PeriodOfTime>;
        readonly file: Nullable<string>;
    }
}
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
    interface SupportedValueDTO {
        readonly identifier: string;
        readonly value: Nullable<string>;
        readonly query: Nullable<string>;
        readonly providesValueFor: string;
    }
}
export namespace ccev.dsl.core {
    interface CUnitDTO {
        readonly identifier: string;
        readonly name: string;
        readonly description: string;
        readonly notation: Nullable<string>;
        readonly type: any /*Class ccev.dsl.core.CUnitType with kind: ENUM_CLASS*/;
    }
}
export namespace f2.dsl.cqrs {
    interface Command {
    }
}
export namespace f2.dsl.cqrs {
    interface Event {
    }
}
export namespace f2.dsl.cqrs {
    interface Query {
    }
}
export namespace f2.dsl.cqrs.error {
    interface ErrorDTO<PAYLOAD> {
        readonly severity: f2.dsl.cqrs.error.ErrorSeverity;
        readonly type: string;
        readonly description: string;
        readonly date: string;
        readonly payload: PAYLOAD;
    }
}
export namespace f2.dsl.cqrs.page {
    interface OffsetPaginationDTO {
        readonly offset: number;
        readonly limit: number;
    }
    interface PagePaginationDTO {
        readonly page: Nullable<number>;
        readonly size: Nullable<number>;
    }
}
export namespace f2.dsl.cqrs.page {
    interface PageDTO<OBJECT> {
        readonly total: number;
        readonly list: kotlin.collections.List<OBJECT>;
    }
}
export namespace f2.dsl.cqrs.page {
    interface PageQuery extends f2.dsl.cqrs.Query {
        readonly pagination: Nullable<f2.dsl.cqrs.page.OffsetPaginationDTO>;
    }
    interface PageQueryResult<OBJECT> extends f2.dsl.cqrs.Event {
        readonly pagination: Nullable<f2.dsl.cqrs.page.OffsetPaginationDTO>;
        readonly page: f2.dsl.cqrs.page.PageDTO<OBJECT>;
    }
}
export namespace f2.dsl.fnc {
    interface F2FunctionDeclaration<T, R> {
        invoke(cmd: T): kotlin.js.Promise<R>;
    }
    interface F2SupplierDeclaration<R> {
        invoke(): kotlin.js.Promise<string>;
    }
    interface F2ConsumerDeclaration<T> {
        invoke(value: T): void;
    }
}
export namespace cccev.dsl.dto.model {
    interface EvidenceTypeDTO extends ccev.dsl.core.EvidenceType {
        readonly evidence: Nullable<ccev.dsl.core.Evidence>;
    }
}
export namespace cccev.dsl.dto.model {
    interface EvidenceTypeListDTO extends ccev.dsl.core.EvidenceTypeList {
        readonly specifiesEvidenceType: kotlin.collections.List<cccev.dsl.dto.model.EvidenceTypeDTO>;
    }
}
export namespace cccev.dsl.dto.model {
    interface InformationConceptDTO extends ccev.dsl.core.InformationConcept {
        readonly evidenceTypeLists: Array<string>;
    }
}
export namespace cccev.dsl.dto.query {
    interface GetEvidenceTypeListsQueryDTO {
        readonly requirement: string;
    }
    interface GetEvidenceTypeListsQueryResultDTO {
        readonly evidenceTypeLists: kotlin.collections.List<kotlin.collections.List<cccev.dsl.dto.model.EvidenceTypeListDTO>>;
    }
}
export namespace cccev.dsl.dto.query {
    interface GetInformationConceptsQueryDTO {
        readonly requirement: string;
    }
    interface GetInformationConceptsQueryResultDTO {
        readonly informationConcepts: kotlin.collections.List<cccev.dsl.dto.model.InformationConceptDTO>;
    }
}
export namespace cccev.dsl.dto.query {
    interface GetRequirementQueryDTO {
        readonly requirementId: string;
    }
    interface GetRequirementQueryResultDTO {
        readonly requirement: Nullable<ccev.dsl.core.Requirement>;
    }
}
export namespace kotlinx.atomicfu {
    function atomic$ref$<T>(initial: T, trace: kotlinx.atomicfu.TraceBase): kotlinx.atomicfu.AtomicRef<T>;
    function atomic$boolean$(initial: boolean, trace: kotlinx.atomicfu.TraceBase): kotlinx.atomicfu.AtomicBoolean;
    function atomic$int$(initial: number, trace: kotlinx.atomicfu.TraceBase): kotlinx.atomicfu.AtomicInt;
    function atomic$long$(initial: kotlin.Long, trace: kotlinx.atomicfu.TraceBase): kotlinx.atomicfu.AtomicLong;
}
export namespace ccev.dsl.core {
    class CoreLocationLocation {
        constructor();
    }
    class PeriodOfTime {
        constructor(duration: Nullable<string>, endTime: Nullable<number>, startTime: Nullable<number>);
    }
}
export namespace f2.dsl.cqrs.error {
    class Error<PAYLOAD> implements f2.dsl.cqrs.error.ErrorDTO<PAYLOAD> {
        constructor(type: string, description: string, date: string, payload: PAYLOAD, severity: f2.dsl.cqrs.error.ErrorSeverity);
        readonly type: string;
        readonly description: string;
        readonly date: string;
        readonly payload: PAYLOAD;
        readonly severity: f2.dsl.cqrs.error.ErrorSeverity;
    }
    class ErrorSeverity {
        constructor(severity: string);
        readonly severity: string;
    }
    class ErrorSeverityWarning extends f2.dsl.cqrs.error.ErrorSeverity {
        constructor();
    }
    class AlertSeverityError extends f2.dsl.cqrs.error.ErrorSeverity {
        constructor();
    }
}
export namespace f2.dsl.cqrs.exception {
    class R2Exception extends kotlin.Exception {
        constructor(id: string, error: f2.dsl.cqrs.error.ErrorDTO<any /*UnknownType **/>);
        readonly id: string;
        readonly error: f2.dsl.cqrs.error.ErrorDTO<any /*UnknownType **/>;
    }
}
export namespace f2.dsl.cqrs.exception {
    class R2NotFoundException extends kotlin.Exception {
        constructor(message: string);
    }
}
export namespace f2.dsl.cqrs.page {
    class Page<OBJECT> implements f2.dsl.cqrs.page.PageDTO<OBJECT> {
        constructor(total: number, list: kotlin.collections.List<OBJECT>);
        readonly total: number;
        readonly list: kotlin.collections.List<OBJECT>;
    }
}
export namespace f2.dsl.cqrs.page {
    class OffsetRequest implements f2.dsl.cqrs.page.OffsetPaginationDTO, f2.dsl.cqrs.page.Pagination {
        constructor(offset: number, limit: number);
        readonly offset: number;
        readonly limit: number;
    }
    class PagePagination implements f2.dsl.cqrs.page.PagePaginationDTO, f2.dsl.cqrs.page.Pagination {
        constructor(page: Nullable<number>, size: Nullable<number>);
        readonly page: Nullable<number>;
        readonly size: Nullable<number>;
    }
}
export as namespace cccev_cee_cccev_dsl_dto;