<template>
    <div>
        <BaseTable :data="data"/>
    </div>
</template>

<script>
    import BaseTable from "../components/BaseTable.vue";
    import {mapState} from 'vuex';

    export default {
        name: "CompanyTable",
        components: {
            BaseTable
        },
        data() {
            return {
                data: {}
            }
        },
        mounted() {
            this.data = {
                columns: [
                    'Company',
                    'Location',
                    'Category',
                    'Spend',
                ],
                values: this.table
            }
        },
        computed: {
            ...mapState(['table'])
        }
    }
</script>

<style scoped>

</style>