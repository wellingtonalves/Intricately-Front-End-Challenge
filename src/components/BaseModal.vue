<template>
    <div>
        <div class="over" ref="modal" @click="close">
        </div>
        <div class="modal">
            <div class="close" @click="close">x</div>
            <div class="modal-title">
                {{title}}
            </div>
            <div class="modal-body">
                <textarea class="form-input" v-model="data" :placeholder="'e.g. ' + title"></textarea>
            </div>
            <div class="modal-footer">
                <button class="btn btn-secondary light" @click="save">save</button>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "BaseModal",
        props: ['title', 'value'],
        data() {
            return {
                data: this.value,
            }
        },
        methods: {
            save() {
                this.$emit('save', this.data)
            },
            close() {
                this.$emit('close');
            }
        }
    }
</script>

<style scoped>
    .over {
        background-color: rgba(133, 133, 133, 0.5);
        width: 100%;
        height: 100%;
        min-height: 100vh;
        position: fixed;
        top: 0;
        left: 0;
    }

    .modal {
        position: absolute;
        width: 50%;
        display: block;
        top: 10%;
        background-color: #FFF;
        padding: 40px;
        box-sizing: border-box;
        border: 1px solid #ccc;
        border-radius: 7px;
        margin: 0 auto;
        transition: all .3s ease-out;
    }

    textarea {
        width: 100%;
        height: 200px;
    }

    .modal-title {
        font-size: 12px;
        color: #a0a0a0;
        text-transform: uppercase;
        padding: 10px 0;
    }

    .close{
        position: absolute;
        top:10px;
        right: 10px;
        cursor: pointer;
        color:#ccc;
    }
</style>