import { createApp } from "vue";
import App from "./App.vue";

import DoUI from "@do-ui/components";

import "./style.css";
import "@do-ui/style/index.scss";

const app = createApp(App);

app.use(DoUI);

app.mount("#app");
