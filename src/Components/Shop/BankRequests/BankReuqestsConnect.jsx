import { connect } from "react-redux";
import { SET_BANK_REQUESTS } from "../../../Redux/ComponentConstants";
import { mapStateToProps } from "../../../Redux/ToProps/mapStateToProps";
import { BankRequests } from "./BankRequests";

export const BankRequestsConnect = connect(mapStateToProps(SET_BANK_REQUESTS))(
  BankRequests
);
