import { connect } from "react-redux";
import { Registration } from "./Registration";
import { mapStateToProps } from "../../Redux/ToProps/mapStateToProps";
import { mapDispatchToProps } from "../../Redux/ToProps/mapDispatchToProps";
import { REGISTRATION } from "../../Redux/ComponentConstants";

export const RegistrationConnect = connect(
  mapStateToProps(REGISTRATION),
  mapDispatchToProps(REGISTRATION)
)(Registration);
