import Vue from "vue";
import Router from "vue-router";
import Index from "../views/Index.vue";
import CompanyData from "../views/CompanyData.vue";
import CompanyPage from "../views/CompanyPage.vue";
import CompanyTable from "../views/CompanyTable.vue";

Vue.use(Router);

export default new Router({
    routes: [
        {
            path: "/",
            name: "Home",
            components: {default: Index},
        },
        {
            path: "/company-data",
            name: "Company Data",
            components: {default: CompanyData}
        },
        {
            path: "/company-table",
            name: "Company Table",
            components: {default: CompanyTable}
        },
        {
            path: "/company-page",
            name: "Company Page",
            components: {default: CompanyPage}
        }
    ]
});
