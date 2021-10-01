import { connect } from "react-redux";
import { State } from "store";
import { filters } from "store/filters";

const mapStateToProps = (state: State) => ({
    filters: filters.selectors.filters(state)
});

const mapDispatchToProps = {
    changeFilters: filters.actions.changeFilters,
    changeEvidence: filters.actions.changeEvidence
};

export default connect(mapStateToProps, mapDispatchToProps);
