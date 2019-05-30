import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        company: {
            company_name: '',
            company_spend: '',
            company_spend_ability: '',
            notes: ''
        },
        table: [
            {
                'Company': 'Facebook',
                'Location': 'info@facebook.com',
                'Category': {
                    image: '/src/images/dns.png',
                    value: 'DNS'
                },
                'Spend': 3,
            },
            {
                'Company': 'General Motors',
                'Location': 'jsmith@gm.com',
                'Category': {
                    image: '/src/images/content-delivery.png',
                    value: 'Content Delivery'
                },
                'Spend': 5,
            },
            {
                'Company': 'Walmart',
                'Location': 'hi@walmart.com',
                'Category': {
                    image: '/src/images/sas.png',
                    value: 'SaaS'
                },
                'Spend': 2,
            },
            {
                'Company': 'Exxon Mobil',
                'Location': 'mail@exxonmobil.com',
                'Category': {
                    image: '/src/images/youtube.png',
                    value: 'Video PlatformS'
                },
                'Spend': 6,
            },
            {
                'Company': 'Apple',
                'Location': 'welcome@apple.com',
                'Category': {
                    image: '/src/images/cloud.png',
                    value: 'Cloud HostingS'
                },
                'Spend': 4,
            },
            {
                'Company': 'Markel Corporation',
                'Location': 'john@marklcorp.com',
                'Category': {
                    image: '/src/images/hosting.png',
                    value: 'Hosting'
                },
                'Spend': 5,
            },
            {
                'Company': 'Humana',
                'Location': 'hey@humana.com',
                'Category': {
                    image: '/src/images/content-delivery.png',
                    value: 'Content Delivery'
                },
                'Spend': 2,
            },
        ]
    },
    mutations: {
        SET_DATA(state, data) {
            state.company = data;
        }
    },
    actions: {
        setData({commit}, data) {
            commit('SET_DATA', data);
        }
    },
    getters: {}
});


