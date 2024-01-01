import { createApp } from "vue";
import App from "./App.vue";

import DoUI from "@do-ui/components";

import "./style.css";
import "@do-ui/style/index.scss";
import Print from "vue-print-nb"; //引入

const app = createApp(App);
app.use(Print);

app.use(DoUI);

app.mount("#app");
