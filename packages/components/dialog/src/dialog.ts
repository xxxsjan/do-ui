import type { ExtractPropTypes } from "vue";
import { isBoolean } from "@do-ui/utils";

export const dialogProps = {
  visible: Boolean,
};
const UPDATE_MODEL_EVENT = "update:visible";

export const dialogEmits = {
  //   open: () => true,
  //   opened: () => true,
  close: () => true,
  //   closed: () => true,
  [UPDATE_MODEL_EVENT]: (value: boolean) => isBoolean(value),
  //   openAutoFocus: () => true,
  //   closeAutoFocus: () => true,
};

export type DialogProps = ExtractPropTypes<typeof dialogProps>;

export type DialogEmits = typeof dialogEmits;
