//import './assets/main.css'

import "primevue/resources/primevue.min.css";
import "primevue/resources/themes/soho-light/theme.css";
import { createApp } from 'vue';
import App from './App.vue';
import PrimeVue from "primevue/config";
import Toolbar from "primevue/toolbar";
import Button from "primevue/button";
import Card from "primevue/card";
import DataTable from 'primevue/datatable';
import Column from 'primevue/column';
import ColumnGroup from 'primevue/columngroup'; 
import Row from 'primevue/row'; 
import my_router from "./router";

const app = createApp(App);

app.use(PrimeVue);
app.use(my_router);

app.component('pv-toolbar', Toolbar);
app.component('pv-button', Button);
app.component('pv-card', Card);
app.component('pv-datatable',DataTable);
app.component('pv-column', Column);
app.component('pv-columngroup', ColumnGroup);
app.component('pv-row', Row);


app.mount("#app");
