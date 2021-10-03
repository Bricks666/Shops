import { connect } from "react-redux";
import { CONTENT_REDIRECT } from "../../../Redux/ComponentConstants";
import { mapStateToProps } from "../../../Redux/ToProps/mapStateToProps";
import { ContentRedirect } from "./ContentRedirect";

export const ContentRedirectConnect = connect(
  mapStateToProps(CONTENT_REDIRECT)
)(ContentRedirect);
