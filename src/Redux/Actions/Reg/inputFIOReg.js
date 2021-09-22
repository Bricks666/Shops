import { INPUT_FIO_REG } from "../../ActionsConstants";

export const inputFIOReg = (FIO) => {
  return {
    type: INPUT_FIO_REG,
    fio: FIO,
  };
};
