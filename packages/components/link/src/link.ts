import type { ExtractPropTypes } from "vue";
import { isBoolean } from "@do-ui/utils";

export const linkProps = {
  href: String,
  //    "primary" | "success" | "warning" | "danger" | "info" | "default"
  type: {
    type: String,
    default: "default",
  },
};

export const linkEmits = {};

export type DialogProps = ExtractPropTypes<typeof linkProps>;

export type DialogEmits = typeof linkEmits;
