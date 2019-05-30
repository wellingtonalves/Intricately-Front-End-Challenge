<template>
    <header id="header">
        <div class="container-fluid">
            <div class="block">
                <div class="logo">
                    <img title="Logo" alt="Logo" src="../images/logo.png"/>
                </div>
            </div>

            <div class="block">
                <input class="search" type="text" placeholder="Search Companies"/>
            </div>

            <div class="block" style="">
                <div style="margin: 12px 10px;color:#fff;">
                    OR
                </div>
            </div>

            <div class="block">
                <button class="btn btn-secondary light">NEW SMARTLIST</button>
            </div>

            <div class="block">
                <div class="menu">
                    <ul class="nav">
                        <li class="down-arrow"> PROSPECT
                            <ul class="dropdown">
                                <li>Item 1</li>
                                <li>Item 2</li>
                                <li>Item 3</li>
                            </ul>
                        </li>
                        <li class="down-arrow"> ALERT
                            <ul class="dropdown">
                                <li>Item 1</li>
                                <li>Item 2</li>
                                <li>Item 3</li>
                            </ul>
                        </li>
                        <li class="down-arrow"> LEARN
                            <ul class="dropdown">
                                <li>Item 1</li>
                                <li>Item 2</li>
                                <li>Item 3</li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>

            <div class="block pull-right">
                <div class="">
                    <ul class="profile nav">
                        <li><img title="Chrome" alt="Chrome" src="../images/chrome.png"/></li>
                        <li>
                            <img title="Profile" alt="Profile" src="../images/profile.png"/>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </header>
</template>

<script>
    export default {
        name: "MainHeader"
    }
</script>

<style scoped>
    .logo img {
        height: 40px;
    }

    .block {
        display: inline-block;
        vertical-align: top;
    }

    input.search {
        margin: 0 0 0 27px;
        background-color: #1f2b5a;
        width: 250px;
        color: #fff;
        padding: 0 10px;
        height: 40px;
        border-radius: 3px;
        border: 1px solid transparent;
    }

    input.search::placeholder {
        color: #fff;
        padding: 0 20px;
        background: transparent url("../images/icon-search.png") no-repeat;
        background-size: 13px;
    }

    .nav > li {
        display: inline-block;
        cursor: pointer;
        padding: 0 10px;
        font-size: 12px;
    }

    .menu {
        padding-left: 20px;
        height: 40px;
        display: table-cell;
        vertical-align: middle;
    }

    .menu li {
        color: #FFF;
    }

    .nav > li.down-arrow:after {
        content: url("../images/down-arrow.png");
        position: relative;
        top: 3px;
    }

    .profile {
        margin-top: 5px;
    }

    .profile img {
        height: 30px;
    }
</style>