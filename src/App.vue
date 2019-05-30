<template>
    <div>
        <div>
            <MainHeader/>
            <div class="container">
                <div class="breadcrumbs" style="margin-bottom: 20px">
                    <ul>
                        <router-link tag="li" to="/">
                            <a style="font-weight: bold">HOME</a>
                        </router-link>
                        <li v-if="menuActive">{{menuActive}}</li>
                    </ul>
                </div>

                <div class="block" id="left">
                    <MainMenu/>
                </div>
                <div class="block" id="right">
                    <router-view/>
                </div>
            </div>
<!--            <MainFooter/>-->
        </div>
    </div>
</template>

<script>
    import MainMenu from "./layout/MainMenu.vue";
    import MainHeader from "./layout/MainHeader.vue";
    import MainFooter from "./layout/MainFooter.vue";


    export default {
        name: "App.vue",
        components: {
            MainMenu,
            MainHeader,
            MainFooter
        },
        data() {
            return {
                menuActive: !(this.$route.name === 'Home') ? this.$route.name : ''
            }
        },
        watch:{
            $route: function (value) {
                this.menuActive = !(this.$route.name === 'Home') ? this.$route.name : ''
            }
        }
    }
</script>

<style scoped>
    .block {
        display: inline-block;
        vertical-align: top;
        float: left;
    }
    #left{
        width: 20%;
    }
    #right{
        border: 1px solid #f4f6f8;
        width: 75%;
        padding: 20px;
        border-radius: 4px;
        margin: 0  0 50px 20px;
        box-sizing: border-box;
    }
</style>