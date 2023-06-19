import Dialog from "./dialog/src/dialog.vue";
import Calendar from "./calendar/src/calendar.vue";

import "@do-ui/style/index.scss";

const components = [Dialog, Calendar];

export default {
  install(app) {
    components.forEach((com) => {
      app.component(com.name, com);
    });
  },
};
