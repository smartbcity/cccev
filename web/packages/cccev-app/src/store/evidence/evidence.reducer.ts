import { createReducer } from "deox";
import { actions } from "./evidence.actions";

export interface EvidenceState {
  evidenceTypeAdded?: string
}

export const initialState: EvidenceState = {
  evidenceTypeAdded: undefined
}

const setEvidenceTypeAdded = (state: EvidenceState, evidenceTypeId?: string): EvidenceState => ({...state, evidenceTypeAdded: evidenceTypeId})

export const evidenceReducer = createReducer(initialState, (handleAction) => [
  handleAction(actions.setEvidenceTypeAdded, (state: EvidenceState, action) =>
  setEvidenceTypeAdded( state, action.payload.evidenceTypeId)
  ),
]);
