import { connect } from "react-redux";
import { State } from "store";
import { filters } from "store/filters";
import { evidence } from "store/evidence";

const mapStateToProps = (state: State) => ({
    filters: filters.selectors.filters(state),
    evidenceTypeAdded: evidence.selectors.evidenceTypeAdded(state)
});

const mapDispatchToProps = {
    changeFilters: filters.actions.changeFilters,
    changeEvidence: filters.actions.changeEvidence,
    addEvidenceType: evidence.actions.addEvidenceType,
    setEvidenceTypeAdded: evidence.actions.setEvidenceTypeAdded
};

export default connect(mapStateToProps, mapDispatchToProps);
