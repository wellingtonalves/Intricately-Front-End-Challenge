<template>
    <section>
        <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
            when an unknown printer took a galley of type and scrambled it to make a type specimen book.
        </p>
        <FormComponent style="margin-top: 30px"/>
    </section>
</template>

<script>
    import FormComponent from '../components/company-data/FormComponent.vue'

    export default {
        name: "CompanyData",
        components: {
            FormComponent
        }
    }
</script>

<style scoped>

</style>