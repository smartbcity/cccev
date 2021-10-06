import { createSelector } from "reselect";
import { State } from "..";

const getEvidenceState = (state: State) => state.evidence;

export const getEvidenceTypeAdded = createSelector(
  [getEvidenceState],
  (state) => state.evidenceTypeAdded
);

export const selectors = {
  evidenceTypeAdded: getEvidenceTypeAdded
};
