<template>
    <div>
        <input type="text" class="search" v-model="search" placeholder="Search"/>
        <table v-if="dataIn">
            <thead>
            <tr>
                <th v-for="columns in dataIn.columns">
                    {{columns}} <span @click="orderBy(columns, $event)" class="order">
                    <img title="" alt="" src="../images/arrow.png" height="20px"/>
                </span>
                </th>
            </tr>
            </thead>
            <tbody>
            <tr v-for="values in dataIn.values">
                <td v-for="value in values">
                    <div v-if="typeof value === 'object'">
                        <img class="icons" :src="value.image">
                        <span class="text_img">{{value.value}}</span>
                    </div>
                    <span v-if="typeof value !== 'object' && !Number(value)">{{value}}</span>
                    <div class="number" v-if="typeof value !== 'object' && Number(value)">
                        <span class="dot" v-for="i in Number(value)"></span>
                        <span class="dot_gray" v-for="i in 6 - Number(value)"></span>
                    </div>
                </td>
            </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
    export default {
        name: "BaseTable",
        props: {
            data: {
                required: true,
            }
        },
        data() {
            return {
                order: 'asc',
                search: ''
            }
        },
        computed: {
            dataIn() {
                const filter = this.search;

                if (_.isEmpty(filter) || filter.length < 2) {
                    return this.data;
                }
                let response = [];
                response['columns'] = this.data.columns;

                response['values'] = _.filter(this.data.values, res => {
                    let value = res.Company.toLowerCase();
                    if (value.indexOf(filter.toLowerCase()) !== -1) {
                        return res;
                    }
                });

                return response
            }
        },
        methods: {
            orderBy(column, $event) {
                let order = this.order === 'asc' ? 'desc' : 'asc';
                let col = column === 'Category' ? column + '.value' : column;
                this.dataIn.values = _.orderBy(this.dataIn.values, [col], [order]);
                this.order = order;
            }
        }
    }
</script>

<style scoped>
    table {
        width: 100%;
        border: 1px solid #ccc;
    }

    table thead {
        border: 1px solid #ccc;
        background-color: #F1F2F6;
        text-transform: capitalize;
    }

    table thead th {
        display: table-cell;
        vertical-align: middle;
        height: 60px;
        text-align: left;
        padding: 10px;
        box-sizing: border-box;
        border: 1px solid #ccc;
    }

    table tbody tr:nth-child(odd) {
        background-color: #FFFFFF;
    }

    table tbody tr:nth-child(even) {
        background-color: #F6F7F9;
    }

    table tbody tr {
        border-bottom: 1px solid #ccc;
    }

    table tbody tr td {
        display: table-cell;
        vertical-align: middle;
        height: 60px;
        padding: 10px;
        box-sizing: border-box;
    }

    table tbody tr td:first-child {
        color: #939BBC;
        text-transform: capitalize;
    }

    img.icons {
        height: 30px;
        float: left;
    }

    .text_img {
        float: left;
        margin-top: 8px;
    }

    .dot {
        border: 1px solid #20C795;
        background-color: #20C795;
        height: 10px;
        width: 10px;
        display: block;
        border-radius: 100%;
        margin: 0 5px;
        box-sizing: border-box;
        float: left;
    }

    .dot_gray {
        border: 1px solid #ebebeb;
        background-color: #ebebeb;
        height: 10px;
        width: 10px;
        display: block;
        border-radius: 100%;
        margin: 0 5px;
        box-sizing: border-box;
        float: left;
    }

    .order {
        float: right;
        cursor: pointer;
    }

    input.search {
        width: 100%;
        height: 40px;
        border-radius: 4px;
        border: 1px solid #ebebeb;
        margin: 20px 0;
        box-sizing: border-box;
        padding: 10px;
    }

    input.search::placeholder {
        color: #a0a0a0;
        padding: 0 20px;
        background: transparent url("../images/icon-search.png") no-repeat;
        background-size: 13px;
    }

    .icons{
        padding-right: 10px;
    }
</style>