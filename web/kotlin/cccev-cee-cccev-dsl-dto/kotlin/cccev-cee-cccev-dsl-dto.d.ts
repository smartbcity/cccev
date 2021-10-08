type Nullable<T> = T | undefined
type Array<T> = T[]
export namespace kotlin.collections {
    type List<T> = T[]
}
export namespace ccev.dsl.core {
    interface Code {
    }
}
export namespace ccev.dsl.core {
    interface EvidenceDTO {
        readonly identifier: string;
        readonly isConformantTo: kotlin.collections.List<string>;
        readonly supportsValue: kotlin.collections.List<string>;
        readonly supportsConcept: kotlin.collections.List<string>;
        readonly supportsRequirement: kotlin.collections.List<string>;
        readonly validityPeriod: Nullable<ccev.dsl.core.PeriodOfTime>;
        readonly name: string;
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
    interface Error<PAYLOAD> {
        readonly severity: f2.dsl.cqrs.ErrorSeverity;
        readonly type: string;
        readonly description: string;
        readonly date: string;
        readonly payload: PAYLOAD;
    }
}
export namespace f2.dsl.cqrs {
    interface Event {
    }
}
export namespace f2.dsl.cqrs {
    interface Page<OBJECT> {
        readonly page: number;
        readonly size: number;
        readonly total: kotlin.Long;
        readonly list: kotlin.collections.List<OBJECT>;
    }
}
export namespace f2.dsl.cqrs {
    interface PageRequest {
        readonly page: Nullable<number>;
        readonly size: Nullable<number>;
    }
}
export namespace f2.dsl.cqrs {
    interface Query {
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
export namespace ssm.chaincode.dsl {
    interface ChaincodeDTO {
        readonly id: string;
        readonly channelId: string;
    }
}
export namespace ssm.chaincode.dsl {
    interface InvokeReturnDTO {
        readonly status: string;
        readonly info: string;
        readonly transactionId: string;
    }
}
export namespace ssm.chaincode.dsl {
    interface SsmAgentDTO {
        readonly name: string;
        readonly pub: Int8Array;
    }
}
export namespace ssm.chaincode.dsl {
    interface SsmChaincodePropertiesDTO {
        readonly baseUrl: string;
        readonly channelId: Nullable<string>;
        readonly chaincodeId: Nullable<string>;
    }
}
export namespace ssm.chaincode.dsl {
    interface SsmCommandDTO extends f2.dsl.cqrs.Command {
        readonly chaincode: ssm.chaincode.dsl.SsmChaincodePropertiesDTO;
        readonly bearerToken: Nullable<string>;
    }
}
export namespace ssm.chaincode.dsl {
    interface SsmContextDTO extends ssm.chaincode.dsl.WithPrivate {
        readonly session: string;
        readonly public: string;
        readonly iteration: number;
        readonly private: Nullable<kotlin.collections.Map<string, string>>;
    }
}
export namespace ssm.chaincode.dsl {
    interface SsmDTO {
        readonly name: string;
        readonly transitions: kotlin.collections.List<ssm.chaincode.dsl.SsmTransitionDTO>;
    }
}
export namespace ssm.chaincode.dsl {
    interface SsmGrantDTO {
        readonly user: string;
        readonly iteration: number;
        readonly credits: kotlin.collections.Map<string, ssm.chaincode.dsl.CreditDTO>;
    }
    interface CreditDTO {
        readonly amount: number;
    }
}
export namespace ssm.chaincode.dsl {
    interface SsmSessionDTO extends ssm.chaincode.dsl.WithPrivate {
        readonly ssm: Nullable<string>;
        readonly session: string;
        readonly roles: Nullable<kotlin.collections.Map<string, string>>;
        readonly public: Nullable<any>;
        readonly private: Nullable<kotlin.collections.Map<string, string>>;
    }
}
export namespace ssm.chaincode.dsl {
    interface SsmSessionStateDTO extends ssm.chaincode.dsl.SsmSessionDTO, ssm.chaincode.dsl.WithPrivate {
        readonly ssm: Nullable<string>;
        readonly session: string;
        readonly roles: Nullable<kotlin.collections.Map<string, string>>;
        readonly public: Nullable<any>;
        readonly private: Nullable<kotlin.collections.Map<string, string>>;
        readonly origin: Nullable<ssm.chaincode.dsl.SsmTransitionDTO>;
        readonly current: number;
        readonly iteration: number;
    }
}
export namespace ssm.chaincode.dsl {
    interface SsmSessionStateLogDTO {
        readonly txId: string;
        readonly state: ssm.chaincode.dsl.SsmSessionStateDTO;
    }
}
export namespace ssm.chaincode.dsl {
    interface SsmTransitionDTO {
        readonly from: number;
        readonly to: number;
        readonly role: string;
        readonly action: string;
    }
}
export namespace ssm.chaincode.dsl {
    interface WithPrivate {
        readonly private: Nullable<kotlin.collections.Map<string, string>>;
    }
}
export namespace ssm.chaincode.dsl.blockchain {
    interface BlockDTO {
        readonly blockId: kotlin.Long;
        readonly previousHash: Int8Array;
        readonly dataHash: Int8Array;
        readonly transactions: kotlin.collections.List<ssm.chaincode.dsl.blockchain.TransactionDTO>;
    }
}
export namespace ssm.chaincode.dsl.blockchain {
    interface IdentitiesInfoDTO {
        readonly id: string;
        readonly mspid: string;
    }
}
export namespace ssm.chaincode.dsl.blockchain {
    interface TransactionDTO {
        readonly transactionId: string;
        readonly blockId: kotlin.Long;
        readonly timestamp: kotlin.Long;
        readonly isValid: boolean;
        readonly channelId: string;
        readonly creator: ssm.chaincode.dsl.blockchain.IdentitiesInfoDTO;
        readonly nonce: Int8Array;
        readonly type: any /*Class ssm.chaincode.dsl.blockchain.EnvelopeType with kind: ENUM_CLASS*/;
        readonly validationCode: number;
    }
}
export namespace s2.dsl.automate {
    interface S2Error {
        readonly severity: f2.dsl.cqrs.ErrorSeverity;
        readonly type: string;
        readonly description: string;
        readonly date: string;
        readonly payload: kotlin.collections.Map<string, string>;
    }
}
export namespace s2.dsl.automate {
    interface S2Event<STATE, ID> extends f2.dsl.cqrs.Event {
        readonly id: ID;
        readonly type: STATE;
    }
}
export namespace s2.dsl.automate {
    interface S2InitCommand extends f2.dsl.cqrs.Command {
    }
    interface S2Command<ID> extends f2.dsl.cqrs.Command {
        readonly id: ID;
    }
}
export namespace s2.dsl.automate {
    interface S2Role {
    }
}
export namespace s2.dsl.automate {
    interface S2State {
        readonly position: number;
    }
}
export namespace cccev.s2.request.domain {
    interface RequestEvent extends s2.dsl.automate.S2Event<cccev.s2.request.domain.RequestState, string> {
    }
    interface RequestCommand extends s2.dsl.automate.S2Command<string> {
    }
}
export namespace cccev.s2.request.domain.features.command {
    interface RequestAuditCommandDTO extends cccev.s2.request.domain.RequestCommand {
        readonly id: string;
    }
    interface RequestAuditedEventDTO extends cccev.s2.request.domain.RequestEvent {
        readonly id: string;
        readonly type: typeof cccev.s2.request.domain.RequestState.Audited;
    }
}
export namespace cccev.s2.request.domain.features.command {
    interface RequestEvidenceAddCommandDTO extends cccev.s2.request.domain.RequestCommand {
        readonly id: string;
        readonly evidence: ccev.dsl.core.EvidenceDTO;
    }
    interface RequestEvidenceAddedEventDTO extends cccev.s2.request.domain.RequestEvent {
        readonly id: string;
        readonly type: typeof cccev.s2.request.domain.RequestState.Created;
        readonly evidenceId: string;
    }
}
export namespace cccev.s2.request.domain.features.command {
    interface RequestEvidenceRemoveCommandDTO extends cccev.s2.request.domain.RequestCommand {
        readonly id: string;
        readonly evidenceTypeId: string;
    }
    interface RequestEvidenceRemovedEventDTO extends cccev.s2.request.domain.RequestEvent {
        readonly id: string;
        readonly type: typeof cccev.s2.request.domain.RequestState.Created;
        readonly evidenceTypeId: string;
    }
}
export namespace cccev.s2.request.domain.features.command {
    interface RequestInitCommandDTO extends s2.dsl.automate.S2InitCommand {
        readonly id: string;
        readonly frameworkId: string;
    }
    interface RequestInitializedEventDTO {
        readonly id: string;
    }
}
export namespace cccev.s2.request.domain.features.command {
    interface RequestRefuseCommandDTO extends cccev.s2.request.domain.RequestCommand {
        readonly id: string;
    }
    interface RequestRefusedEventDto extends cccev.s2.request.domain.RequestEvent {
        readonly id: string;
        readonly type: typeof cccev.s2.request.domain.RequestState.Created;
    }
}
export namespace cccev.s2.request.domain.features.command {
    interface RequestSendCommandDTO extends cccev.s2.request.domain.RequestCommand {
        readonly id: string;
    }
    interface RequestSentEventDto extends cccev.s2.request.domain.RequestEvent {
        readonly id: string;
        readonly type: typeof cccev.s2.request.domain.RequestState.Sent;
    }
}
export namespace cccev.s2.request.domain.features.command {
    interface RequestSignCommandDTO extends cccev.s2.request.domain.RequestCommand {
        readonly id: string;
    }
    interface RequestSignedEventDto extends cccev.s2.request.domain.RequestEvent {
        readonly id: string;
        readonly type: typeof cccev.s2.request.domain.RequestState.Signed;
    }
}
export namespace cccev.s2.request.domain.features.command {
    interface RequestSupportedValueAddCommandDTO extends cccev.s2.request.domain.RequestCommand {
        readonly id: string;
        readonly supportedValue: ccev.dsl.core.SupportedValueDTO;
    }
    interface RequestSupportedValueAddedEventDto extends cccev.s2.request.domain.RequestEvent {
        readonly id: string;
        readonly type: typeof cccev.s2.request.domain.RequestState.Created;
        readonly providesValueFor: string;
    }
}
export namespace cccev.dsl.dto.model {
    interface EvidenceTypeDTO extends ccev.dsl.core.EvidenceType {
        readonly evidence: Nullable<ccev.dsl.core.EvidenceDTO>;
    }
}
export namespace cccev.dsl.dto.model {
    interface EvidenceTypeListDTO extends ccev.dsl.core.EvidenceTypeList {
        readonly specifiesEvidenceType: kotlin.collections.List<cccev.dsl.dto.model.EvidenceTypeDTO>;
    }
}
export namespace cccev.dsl.dto.model {
    interface InformationConceptDTO extends ccev.dsl.core.InformationConcept {
        readonly evidenceTypes: Array<Array<string>>;
        readonly supportedValue: ccev.dsl.core.SupportedValueDTO;
    }
}
export namespace cccev.dsl.dto.query {
    interface GetEvidenceTypeListsQueryDTO {
        readonly requirement: string;
        readonly id: string;
    }
    interface GetEvidenceTypeListsQueryResultDTO {
        readonly evidenceTypeLists: kotlin.collections.List<kotlin.collections.List<cccev.dsl.dto.model.EvidenceTypeListDTO>>;
    }
}
export namespace cccev.dsl.dto.query {
    interface GetInformationConceptsQueryDTO {
        readonly requirement: string;
        readonly id: string;
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
export namespace f2.dsl.cqrs {
    class ErrorSeverity {
        constructor(severity: string);
        readonly severity: string;
    }
    class ErrorSeverityWarning extends f2.dsl.cqrs.ErrorSeverity {
        constructor();
    }
    class AlertSeverityError extends f2.dsl.cqrs.ErrorSeverity {
        constructor();
    }
}
export namespace f2.dsl.cqrs.base {
    class ErrorBase<PAYLOAD> implements f2.dsl.cqrs.Error<PAYLOAD> {
        constructor(type: string, description: string, date: string, payload: PAYLOAD, severity: f2.dsl.cqrs.ErrorSeverity);
        readonly type: string;
        readonly description: string;
        readonly date: string;
        readonly payload: PAYLOAD;
        readonly severity: f2.dsl.cqrs.ErrorSeverity;
    }
}
export namespace f2.dsl.cqrs.base {
    class PageBase<OBJECT> implements f2.dsl.cqrs.Page<OBJECT> {
        constructor(page: number, size: number, total: kotlin.Long, list: kotlin.collections.List<OBJECT>);
        readonly page: number;
        readonly size: number;
        readonly total: kotlin.Long;
        readonly list: kotlin.collections.List<OBJECT>;
    }
}
export namespace f2.dsl.cqrs.base {
    class PageRequestBase implements f2.dsl.cqrs.PageRequest {
        constructor(page: Nullable<number>, size: Nullable<number>);
        readonly page: Nullable<number>;
        readonly size: Nullable<number>;
    }
}
export namespace f2.dsl.cqrs.exception {
    class R2Exception extends kotlin.Exception {
        constructor(id: string, error: f2.dsl.cqrs.Error<any /*UnknownType **/>);
        readonly id: string;
        readonly error: f2.dsl.cqrs.Error<any /*UnknownType **/>;
    }
}
export namespace f2.dsl.cqrs.exception {
    class R2NotFoundException extends kotlin.Exception {
        constructor(message: string);
    }
}
export namespace ssm.chaincode.dsl {
    class Chaincode implements ssm.chaincode.dsl.ChaincodeDTO {
        constructor(id: string, channelId: string);
        readonly id: string;
        readonly channelId: string;
        component1(): string;
        component2(): string;
        copy(id: string, channelId: string): ssm.chaincode.dsl.Chaincode;
        toString(): string;
        hashCode(): number;
        equals(other: Nullable<any>): boolean;
    }
}
export namespace ssm.chaincode.dsl {
    class InvokeReturn {
        constructor(status: string, info: string, transactionId: string);
        readonly status: string;
        readonly info: string;
        readonly transactionId: string;
    }
}
export namespace ssm.chaincode.dsl {
    class Ssm implements ssm.chaincode.dsl.SsmDTO {
        constructor(name: string, transitions: kotlin.collections.List<ssm.chaincode.dsl.SsmTransition>);
        readonly name: string;
        readonly transitions: kotlin.collections.List<ssm.chaincode.dsl.SsmTransition>;
        component1(): string;
        component2(): kotlin.collections.List<ssm.chaincode.dsl.SsmTransition>;
        copy(name: string, transitions: kotlin.collections.List<ssm.chaincode.dsl.SsmTransition>): ssm.chaincode.dsl.Ssm;
        toString(): string;
        hashCode(): number;
        equals(other: Nullable<any>): boolean;
    }
}
export namespace ssm.chaincode.dsl {
    class SsmAgent implements ssm.chaincode.dsl.SsmAgentDTO {
        constructor(name: string, pub: Int8Array);
        readonly name: string;
        readonly pub: Int8Array;
        equals(other: Nullable<any>): boolean;
        hashCode(): number;
        component1(): string;
        component2(): Int8Array;
        copy(name: string, pub: Int8Array): ssm.chaincode.dsl.SsmAgent;
        toString(): string;
    }
}
export namespace ssm.chaincode.dsl {
    class SsmContext implements ssm.chaincode.dsl.SsmContextDTO {
        constructor(session: string, _public: string, iteration: number, _private: Nullable<kotlin.collections.Map<string, string>>);
        readonly session: string;
        readonly public: string;
        readonly iteration: number;
        readonly private: Nullable<kotlin.collections.Map<string, string>>;
        component1(): string;
        component2(): string;
        component3(): number;
        component4(): Nullable<kotlin.collections.Map<string, string>>;
        copy(session: string, _public: string, iteration: number, _private: Nullable<kotlin.collections.Map<string, string>>): ssm.chaincode.dsl.SsmContext;
        toString(): string;
        hashCode(): number;
        equals(other: Nullable<any>): boolean;
    }
}
export namespace ssm.chaincode.dsl {
    class SsmGrant {
        constructor(user: string, iteration: number, credits: kotlin.collections.Map<string, ssm.chaincode.dsl.Credit>);
        readonly user: string;
        readonly iteration: number;
        readonly credits: kotlin.collections.Map<string, ssm.chaincode.dsl.Credit>;
        component1(): string;
        component2(): number;
        component3(): kotlin.collections.Map<string, ssm.chaincode.dsl.Credit>;
        copy(user: string, iteration: number, credits: kotlin.collections.Map<string, ssm.chaincode.dsl.Credit>): ssm.chaincode.dsl.SsmGrant;
        toString(): string;
        hashCode(): number;
        equals(other: Nullable<any>): boolean;
    }
    class Credit implements ssm.chaincode.dsl.CreditDTO {
        constructor(amount: number);
        readonly amount: number;
        component1(): number;
        copy(amount: number): ssm.chaincode.dsl.Credit;
        toString(): string;
        hashCode(): number;
        equals(other: Nullable<any>): boolean;
    }
}
export namespace ssm.chaincode.dsl {
    class SsmSession implements ssm.chaincode.dsl.SsmSessionDTO {
        constructor(ssm: string, session: string, roles: kotlin.collections.Map<string, string>, _public: string, _private: Nullable<kotlin.collections.Map<string, string>>);
        readonly ssm: string;
        readonly session: string;
        readonly roles: kotlin.collections.Map<string, string>;
        readonly public: string;
        readonly private: Nullable<kotlin.collections.Map<string, string>>;
    }
}
export namespace ssm.chaincode.dsl {
    class SsmSessionState implements ssm.chaincode.dsl.SsmSessionStateDTO {
        constructor(ssm: Nullable<string>, session: string, roles: Nullable<kotlin.collections.Map<string, string>>, _public: Nullable<any>, _private: Nullable<kotlin.collections.Map<string, string>>, origin: Nullable<ssm.chaincode.dsl.SsmTransition>, current: number, iteration: number);
        readonly ssm: Nullable<string>;
        readonly session: string;
        readonly roles: Nullable<kotlin.collections.Map<string, string>>;
        readonly public: Nullable<any>;
        readonly private: Nullable<kotlin.collections.Map<string, string>>;
        readonly origin: Nullable<ssm.chaincode.dsl.SsmTransition>;
        readonly current: number;
        readonly iteration: number;
        component1(): Nullable<string>;
        component2(): string;
        component3(): Nullable<kotlin.collections.Map<string, string>>;
        component4(): Nullable<any>;
        component5(): Nullable<kotlin.collections.Map<string, string>>;
        component6(): Nullable<ssm.chaincode.dsl.SsmTransition>;
        component7(): number;
        component8(): number;
        copy(ssm: Nullable<string>, session: string, roles: Nullable<kotlin.collections.Map<string, string>>, _public: Nullable<any>, _private: Nullable<kotlin.collections.Map<string, string>>, origin: Nullable<ssm.chaincode.dsl.SsmTransition>, current: number, iteration: number): ssm.chaincode.dsl.SsmSessionState;
        toString(): string;
        hashCode(): number;
        equals(other: Nullable<any>): boolean;
    }
}
export namespace ssm.chaincode.dsl {
    class SsmSessionStateLog implements ssm.chaincode.dsl.SsmSessionStateLogDTO {
        constructor(txId: string, state: ssm.chaincode.dsl.SsmSessionState);
        readonly txId: string;
        readonly state: ssm.chaincode.dsl.SsmSessionState;
        component1(): string;
        component2(): ssm.chaincode.dsl.SsmSessionState;
        copy(txId: string, state: ssm.chaincode.dsl.SsmSessionState): ssm.chaincode.dsl.SsmSessionStateLog;
        toString(): string;
        hashCode(): number;
        equals(other: Nullable<any>): boolean;
    }
}
export namespace ssm.chaincode.dsl {
    class SsmTransition implements ssm.chaincode.dsl.SsmTransitionDTO {
        constructor(from: number, to: number, role: string, action: string);
        readonly from: number;
        readonly to: number;
        readonly role: string;
        readonly action: string;
        component1(): number;
        component2(): number;
        component3(): string;
        component4(): string;
        copy(from: number, to: number, role: string, action: string): ssm.chaincode.dsl.SsmTransition;
        toString(): string;
        hashCode(): number;
        equals(other: Nullable<any>): boolean;
    }
}
export namespace ssm.chaincode.dsl.blockchain {
    class Block implements ssm.chaincode.dsl.blockchain.BlockDTO {
        constructor(blockId: kotlin.Long, previousHash: Int8Array, dataHash: Int8Array, transactions: kotlin.collections.List<ssm.chaincode.dsl.blockchain.Transaction>);
        readonly blockId: kotlin.Long;
        readonly previousHash: Int8Array;
        readonly dataHash: Int8Array;
        readonly transactions: kotlin.collections.List<ssm.chaincode.dsl.blockchain.Transaction>;
    }
}
export namespace ssm.chaincode.dsl.blockchain {
    class IdentitiesInfo implements ssm.chaincode.dsl.blockchain.IdentitiesInfoDTO {
        constructor(id: string, mspid: string);
        readonly id: string;
        readonly mspid: string;
    }
}
export namespace ssm.chaincode.dsl.query {
    class SsmGetAdminQuery implements ssm.chaincode.dsl.SsmCommandDTO {
        constructor(chaincode: ssm.chaincode.dsl.SsmChaincodeProperties, bearerToken: Nullable<string>, name: string);
        readonly chaincode: ssm.chaincode.dsl.SsmChaincodeProperties;
        readonly bearerToken: Nullable<string>;
        readonly name: string;
    }
    class SsmGetAdminResult implements f2.dsl.cqrs.Event {
        constructor(admin: Nullable<ssm.chaincode.dsl.SsmAgent>);
        readonly admin: Nullable<ssm.chaincode.dsl.SsmAgent>;
    }
}
export namespace ssm.chaincode.dsl.query {
    class SsmGetQuery implements ssm.chaincode.dsl.SsmCommandDTO {
        constructor(chaincode: ssm.chaincode.dsl.SsmChaincodeProperties, bearerToken: Nullable<string>, name: string);
        readonly chaincode: ssm.chaincode.dsl.SsmChaincodeProperties;
        readonly bearerToken: Nullable<string>;
        readonly name: string;
    }
    class SsmGetResult implements f2.dsl.cqrs.Event {
        constructor(ssm: Nullable<ssm.chaincode.dsl.Ssm>);
        readonly ssm: Nullable<ssm.chaincode.dsl.Ssm>;
    }
}
export namespace ssm.chaincode.dsl.query {
    class SsmGetSessionLogsQuery implements ssm.chaincode.dsl.SsmCommandDTO {
        constructor(session: string, chaincode: ssm.chaincode.dsl.SsmChaincodeProperties, bearerToken: Nullable<string>);
        readonly session: string;
        readonly chaincode: ssm.chaincode.dsl.SsmChaincodeProperties;
        readonly bearerToken: Nullable<string>;
    }
    class SsmGetSessionLogsQueryResult {
        constructor(logs: kotlin.collections.List<ssm.chaincode.dsl.SsmSessionStateLog>);
        readonly logs: kotlin.collections.List<ssm.chaincode.dsl.SsmSessionStateLog>;
        component1(): kotlin.collections.List<ssm.chaincode.dsl.SsmSessionStateLog>;
        copy(logs: kotlin.collections.List<ssm.chaincode.dsl.SsmSessionStateLog>): ssm.chaincode.dsl.query.SsmGetSessionLogsQueryResult;
        toString(): string;
        hashCode(): number;
        equals(other: Nullable<any>): boolean;
    }
}
export namespace ssm.chaincode.dsl.query {
    class SsmGetSessionQuery implements ssm.chaincode.dsl.SsmCommandDTO {
        constructor(chaincode: ssm.chaincode.dsl.SsmChaincodeProperties, bearerToken: Nullable<string>, name: string);
        readonly chaincode: ssm.chaincode.dsl.SsmChaincodeProperties;
        readonly bearerToken: Nullable<string>;
        readonly name: string;
    }
    class SsmGetSessionResult implements f2.dsl.cqrs.Event {
        constructor(session: Nullable<ssm.chaincode.dsl.SsmSessionState>);
        readonly session: Nullable<ssm.chaincode.dsl.SsmSessionState>;
    }
}
export namespace ssm.chaincode.dsl.query {
    class SsmGetTransactionQuery implements ssm.chaincode.dsl.SsmCommandDTO {
        constructor(id: string, chaincode: ssm.chaincode.dsl.SsmChaincodeProperties, bearerToken: Nullable<string>);
        readonly id: string;
        readonly chaincode: ssm.chaincode.dsl.SsmChaincodeProperties;
        readonly bearerToken: Nullable<string>;
        component1(): string;
        component2(): ssm.chaincode.dsl.SsmChaincodeProperties;
        component3(): Nullable<string>;
        copy(id: string, chaincode: ssm.chaincode.dsl.SsmChaincodeProperties, bearerToken: Nullable<string>): ssm.chaincode.dsl.query.SsmGetTransactionQuery;
        toString(): string;
        hashCode(): number;
        equals(other: Nullable<any>): boolean;
    }
    class SsmGetTransactionQueryResult {
        constructor(transaction: Nullable<ssm.chaincode.dsl.blockchain.Transaction>);
        readonly transaction: Nullable<ssm.chaincode.dsl.blockchain.Transaction>;
    }
}
export namespace ssm.chaincode.dsl.query {
    class SsmGetUserQuery implements ssm.chaincode.dsl.SsmCommandDTO {
        constructor(chaincode: ssm.chaincode.dsl.SsmChaincodeProperties, bearerToken: Nullable<string>, name: string);
        readonly chaincode: ssm.chaincode.dsl.SsmChaincodeProperties;
        readonly bearerToken: Nullable<string>;
        readonly name: string;
    }
    class SsmGetUserResult implements f2.dsl.cqrs.Event {
        constructor(user: Nullable<ssm.chaincode.dsl.SsmAgent>);
        readonly user: Nullable<ssm.chaincode.dsl.SsmAgent>;
    }
}
export namespace ssm.chaincode.dsl.query {
    class SsmListAdminQuery implements ssm.chaincode.dsl.SsmCommandDTO {
        constructor(chaincode: ssm.chaincode.dsl.SsmChaincodeProperties, bearerToken: Nullable<string>);
        readonly chaincode: ssm.chaincode.dsl.SsmChaincodeProperties;
        readonly bearerToken: Nullable<string>;
    }
    class SsmListAdminResult implements f2.dsl.cqrs.Event {
        constructor(values: Array<string>);
        readonly values: Array<string>;
    }
}
export namespace ssm.chaincode.dsl.query {
    class SsmListSessionQuery implements ssm.chaincode.dsl.SsmCommandDTO {
        constructor(chaincode: ssm.chaincode.dsl.SsmChaincodeProperties, bearerToken: Nullable<string>);
        readonly chaincode: ssm.chaincode.dsl.SsmChaincodeProperties;
        readonly bearerToken: Nullable<string>;
    }
    class SsmListSessionResult implements f2.dsl.cqrs.Event {
        constructor(values: Array<string>);
        readonly values: Array<string>;
    }
}
export namespace ssm.chaincode.dsl.query {
    class SsmListSsmQuery implements ssm.chaincode.dsl.SsmCommandDTO {
        constructor(chaincode: ssm.chaincode.dsl.SsmChaincodeProperties, bearerToken: Nullable<string>);
        readonly chaincode: ssm.chaincode.dsl.SsmChaincodeProperties;
        readonly bearerToken: Nullable<string>;
    }
    class SsmListSsmResult implements f2.dsl.cqrs.Event {
        constructor(values: Array<string>);
        readonly values: Array<string>;
    }
}
export namespace ssm.chaincode.dsl.query {
    class SsmListUserQuery implements ssm.chaincode.dsl.SsmCommandDTO {
        constructor(chaincode: ssm.chaincode.dsl.SsmChaincodeProperties, bearerToken: Nullable<string>);
        readonly chaincode: ssm.chaincode.dsl.SsmChaincodeProperties;
        readonly bearerToken: Nullable<string>;
    }
    class SsmListUserResult implements f2.dsl.cqrs.Event {
        constructor(values: Array<string>);
        readonly values: Array<string>;
    }
}
export namespace s2.dsl.automate {
    class S2Automate {
        constructor(name: string, init: s2.dsl.automate.S2InitTransition, transitions: Array<s2.dsl.automate.S2Transition>);
        readonly name: string;
        readonly init: s2.dsl.automate.S2InitTransition;
        readonly transitions: Array<s2.dsl.automate.S2Transition>;
        getAvailableTransition(state: s2.dsl.automate.S2State): kotlin.collections.List<s2.dsl.automate.S2Transition>;
        isAvailableTransition(currentState: s2.dsl.automate.S2State, command: s2.dsl.automate.S2Command<any /*UnknownType **/>): boolean;
        isAvailableInitTransition(currentState: s2.dsl.automate.S2State, command: s2.dsl.automate.S2InitCommand): boolean;
        isFinalState(state: s2.dsl.automate.S2State): boolean;
        isSameState(from: s2.dsl.automate.S2State, to: s2.dsl.automate.S2State): boolean;
    }
}
export namespace s2.dsl.automate {
    class S2ErrorBase implements s2.dsl.automate.S2Error {
        constructor(severity: f2.dsl.cqrs.ErrorSeverity, type: string, description: string, date: string, payload: kotlin.collections.Map<string, string>);
        readonly severity: f2.dsl.cqrs.ErrorSeverity;
        readonly type: string;
        readonly description: string;
        readonly date: string;
        readonly payload: kotlin.collections.Map<string, string>;
        toString(): string;
    }
}
export namespace s2.dsl.automate {
    class S2EventSuccess<STATE, COMMAND, ID> implements f2.dsl.cqrs.Event {
        constructor(id: ID, type: COMMAND, from: STATE, to: STATE);
        readonly id: ID;
        readonly type: COMMAND;
        readonly from: STATE;
        readonly to: STATE;
    }
    class S2EventError<STATE, COMMAND, ID> implements f2.dsl.cqrs.Event {
        constructor(id: ID, type: COMMAND, from: STATE, to: STATE, error: s2.dsl.automate.S2Error);
        readonly id: ID;
        readonly type: COMMAND;
        readonly from: STATE;
        readonly to: STATE;
        readonly error: s2.dsl.automate.S2Error;
    }
}
export namespace s2.dsl.automate {
    class S2InitTransition {
        constructor(to: s2.dsl.automate.S2State, role: s2.dsl.automate.S2Role, command: kotlin.reflect.KClass<s2.dsl.automate.S2InitCommand>);
        readonly to: s2.dsl.automate.S2State;
        readonly role: s2.dsl.automate.S2Role;
        readonly command: kotlin.reflect.KClass<s2.dsl.automate.S2InitCommand>;
    }
    class S2Transition {
        constructor(from: s2.dsl.automate.S2State, to: s2.dsl.automate.S2State, role: s2.dsl.automate.S2Role, command: string);
        readonly from: s2.dsl.automate.S2State;
        readonly to: s2.dsl.automate.S2State;
        readonly role: s2.dsl.automate.S2Role;
        readonly command: string;
    }
    class S2TransitionCommand {
        constructor(name: string, attributes: Array<s2.dsl.automate.S2TransitionCommandAttribute>);
        readonly name: string;
        readonly attributes: Array<s2.dsl.automate.S2TransitionCommandAttribute>;
    }
    class S2TransitionCommandAttribute {
        constructor(name: string, type: string, optional: boolean);
        readonly name: string;
        readonly type: string;
        readonly optional: boolean;
    }
}
export namespace s2.dsl.automate.builder {
    function s2<ID, STATE>(exec: (p0: s2.dsl.automate.builder.S2AutomateBuilder<STATE, ID>) => void): s2.dsl.automate.S2Automate;
    class S2TransitionBuilder<ID, CMD> {
        constructor();
        from: s2.dsl.automate.S2State;
        to: s2.dsl.automate.S2State;
        role: s2.dsl.automate.S2Role;
        cmd: kotlin.reflect.KClass<CMD>;
    }
}
export namespace cccev.s2.request.domain.model {
    class RequestModel implements cccev.s2.request.domain.model.RequestModelDTO {
        constructor(id: string);
        readonly id: string;
    }
}
export as namespace cccev_cee_cccev_dsl_dto;