import { createActionCreator } from "deox";
import { Dispatch } from "redux";

const setEvidenceTypeAdded = createActionCreator(
  "SET_EVIDENCETYPE_ADDED",
  (resolve) => (evidenceTypeId?: string) => resolve({ evidenceTypeId: evidenceTypeId })
);

const addEvidenceType = (
  evidenceTypeId?: string
) => {
  return async (dispatch: Dispatch) => {
    dispatch(setEvidenceTypeAdded(evidenceTypeId));
    const input = document.getElementById("evidenceBar-dropzoneInput") as HTMLInputElement
    if (input) {
      input.click()
    }
  };
}

export const actions = {
  setEvidenceTypeAdded: setEvidenceTypeAdded,
  addEvidenceType: addEvidenceType
};
