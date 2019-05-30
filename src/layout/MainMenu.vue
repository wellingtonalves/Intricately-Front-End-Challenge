<template>
    <div>
        <ul class="main-menu">
            <router-link tag="li" to="/company-data">
                <a>COMPANY DATA</a>
            </router-link>
            <router-link tag="li" to="/company-table">
                <a>COMPANY TABLE</a>
            </router-link>
            <router-link tag="li" to="/company-page">
                <a>COMPANY PAGE</a>
            </router-link>

        </ul>
    </div>
</template>

<script>
    export default {
        name: "MainMenu"
    }
</script>

<style scoped>
    .main-menu {
        border-radius: 4px;
        border: 1px solid #f4f6f8;
    }

    .main-menu li {
        height: 50px;
        display: flex;
        align-items: center;
        font-size: 12px;
        width: auto;
        padding: 0 0 0 15px;
    }

    .main-menu li:not(:last-child) {
        border-bottom: 1px solid #f4f6f8;
    }
</style>