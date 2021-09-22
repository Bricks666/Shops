import { connect } from "react-redux";
import { MAIN } from "../../Redux/ComponentConstants";
import { mapDispatchToProps } from "../../Redux/ToProps/mapDispatchToProps";
import { mapStateToProps } from "../../Redux/ToProps/mapStateToProps";
import { Main } from "./Main";

export const MainConnect = connect(
  mapStateToProps(MAIN),
  mapDispatchToProps(MAIN)
)(Main);
