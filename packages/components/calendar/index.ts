import Calendar from "./src/calendar.vue";

export default {
  install(app) {
    app.component(Calendar.name, Calendar);
  },
};

export * from "./src/calendar";
