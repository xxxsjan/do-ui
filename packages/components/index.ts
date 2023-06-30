import Dialog from "./dialog/src/dialog.vue";
import Calendar from "./calendar/src/calendar.vue";
import Link from "./link/src/link.vue";
import type { App } from "vue";
import "@do-ui/style/index.scss";

const components = [Dialog, Calendar, Link];

export default {
  install(app: App) {
    components.forEach((com) => {
      app.component(com.name, com);
    });
  },
};
