<script>
    import {Bar, Line} from 'vue-chartjs'

    export default {
        name: "Chart",
        extends: Line,
        mounted() {
            this.renderChart({
                labels: [0, 2, 4, 6, 8, 10, 12],
                datasets: [
                    {
                        label: '',
                        backgroundColor: '#f87979',
                        data: [26, 45, 35, 55, 30, 50, 70]
                    }
                ]
            })
        }
    }
</script>

<style scoped>

</style>