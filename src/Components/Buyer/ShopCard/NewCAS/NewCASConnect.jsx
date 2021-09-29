import { connect } from "react-redux";
import { NEW_CAS } from "../../../../Redux/ComponentConstants";
import { mapDispatchToProps } from "../../../../Redux/ToProps/mapDispatchToProps";
import { mapStateToProps } from "../../../../Redux/ToProps/mapStateToProps";
import { NewCAS } from "./NewCAS";

export const NewCASConnect = connect(
  mapStateToProps(NEW_CAS),
  mapDispatchToProps(NEW_CAS)
)(NewCAS);
