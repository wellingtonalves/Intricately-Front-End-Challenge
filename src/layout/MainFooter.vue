<template>
    <footer id="footer">
        <div class="container">
            <div class="block">
                <ul class="nav">
                    <li><a title="Pricing" href="">Pricing</a></li>
                    <li><a title="Blogs" href="">Blog</a></li>
                    <li><a title="Webinars" href="">Webinars</a></li>
                    <li><a title="Pricing" href="">Pricing</a></li>
                    <li><a title="Events" href="">Events</a></li>
                    <li><a title="Help Center" href="">Help Center</a></li>
                </ul>

                <p class="copyright">&copy; 2019 - {{year}},
                    Intricately, Inc. All Rights Reserved.
                </p>
            </div>
            <div class="block">
                <div class="right">
                    <ul class="nav">
                        <li><a title="Terms and Conditions" href="">Terms and Conditions</a></li>
                        <li><a title="Privacy Policy" href="">Privacy Policy</a></li>
                    </ul>

                    <ul class="social">
                        <li><img title="Linkedin" alt="Linkedin" src="../images/linkedin.png"/></li>
                        <li><img title="Facebook" alt="Facebook" src="../images/facebook.png"/></li>
                        <li><img title="Twitter" alt="Twitter" src="../images/twitter.png"/></li>
                    </ul>
                </div>
            </div>
            <div class="clear"></div>
        </div>
    </footer>
</template>

<script>
    export default {
        name: "MainFooter",
        data() {
            return {
                year: new Date().getFullYear()
            }
        }
    }
</script>

<style scoped>
    .nav li {
        display: inline-block;
    }

    .nav li:not(:first-child):before {
        content: '| ';
        color: #8F96B7;
        height: 20px;
        font-size: 12px;
    }

    .copyright {
        margin-top: 30px;
        color: #a0a0a0;
        font-size: 12px;
    }

    .block {
        width: 49.98%;
        margin: -4px;
        display: inline-block;
        vertical-align: top;
    }

    .block > * {
        padding: 0 15px;
    }

    .right {
        text-align: right;
    }

    .social li {
        margin-top: 20px;
        display: inline-block;
    }

    ul.social li img {
        height: 30px;
        padding-left: 20px;
    }

</style>