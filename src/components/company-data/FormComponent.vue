<template>
    <div>
        <form @submit.prevent="save">
            <label class="form" for="company_name">Company Name
            </label>
            <input required type="text" v-required v-model="company_name" id="company_name" class="form-input"
                   placeholder="e.g. Your Company Name"/>
            <span class="error" v-if="errors.company_name">
                Company Name is {{errors.company_name}}
            </span>

            <div class="spacing"></div>

            <label class="form" for="company_spend">Company Spend
            </label>
            <input required type="text" v-required v-positive-number @change="setSpend(company_spend, $event)"
                   id="company_spend"
                   v-model="company_spend" class="form-input"
                   placeholder="e.g. $150,000"/>
            <span class="error" v-if="errors.company_spend">
                Company Spend is {{errors.company_spend}}
            </span>
            <div class="spacing"></div>

            <label class="form" for="company_spend_ability">Company Spend Ability
            </label>
            <input required type="text" v-required v-positive-number id="company_spend_ability"
                   v-model="company_spend_ability"
                   class="form-input"
                   placeholder="e.g. $150,000 - $300,000" @change="setSpendAbility(company_spend_ability, $event)"/>
            <span class="error" v-if="errors.company_spend_ability">
                Company Spend Ability is {{errors.company_spend_ability}}
            </span>

            <div class="spacing"></div>

            <label class="form" for="notes">Notes</label>
            <textarea v-model="notes" readonly class="form-input" id="notes" rows="10"
                      placeholder="e.g. Good Tech Company"></textarea>
            <button type="button" class="btn btn-secondary light" @click="openNotes">Add note</button>
            <div class="spacing"></div>
            <button type="submit" class="btn btn-primary light">Save</button>
        </form>

        <baseModal v-if="modalNotes" title="Additional Notes" :value="notes" @save="addNotes"
                   @close="modalNotes = false"/>
    </div>
</template>

<script>
    import BaseModal from '../BaseModal.vue';
    import {mapActions, mapState} from 'vuex';

    export default {
        name: "FormComponent",
        components: {
            BaseModal
        },
        data() {
            return {
                company_name: '',
                company_spend_ability: '',
                company_spend: '',
                notes: '',
                errors: '',
                modalNotes: false
            }
        },
        mounted() {
            this.company_name = this.company.company_name;
            this.company_spend_ability = this.company.company_spend_ability;
            this.company_spend = this.company.company_spend;
            this.notes = this.company.notes;
        },
        computed: {
            ...mapState(['company'])
        },
        watch: {
            company: function (values) {

            }
        },
        methods: {
            ...mapActions(['setData']),
            formatCurrency(value) {
                const formatter = new Intl.NumberFormat('en-US', {
                    style: 'currency',
                    currency: 'USD',
                    minimumFractionDigits: 2
                });

                return formatter.format(Number(value));
            },
            setSpend(value, $event) {
                this.company_spend = this.formatCurrency(value);
            },
            addNotes(data) {
                this.notes = data;
                this.modalNotes = false;
            },
            openNotes() {
                this.modalNotes = true;
            },
            setSpendAbility(value, $event) {
                if (!this.validateSpendAbility(value, $event)) {
                    return false;
                }
                let data = value.replace(/\$/g, '');
                data = data.split('-');

                let minimum = this.formatCurrency(data[0]);
                let maximum = this.formatCurrency(data[1]);
                this.company_spend_ability = minimum + ' - ' + maximum
            },
            validateSpendAbility(value, $event) {
                let regexInput = /-/g;
                let validInput = regexInput.test(value);

                let data = value.replace(/\$/g, '');
                data = data.split('-');

                if (!validInput || (data[0] === '' || data[1] === '')) {
                    this.company_spend_ability = '';
                    $event.target.focus();
                    alert('Error. e.g.: $150,000 - $300,000');
                    return false;
                }

                if (data[0] > data[1]) {
                    this.company_spend_ability = '';
                    $event.target.focus();
                    alert('Minimum spend shouldn’t be larger than maximum spend.');
                    return false;
                }

                return true;
            },
            save() {
                if (!this.validateFields()) {
                    return false;
                }

                let data = {
                    company_name: this.company_name,
                    company_spend: this.company_spend,
                    company_spend_ability: this.company_spend_ability,
                    notes: this.notes
                };

                this.setData(data)
                    .then((resp) => alert('Success!'))
                    .catch((error) => alert('Error!'));
            },
            validateFields() {
                if (this.company_name === '' ||
                    this.company_spend_ability === '' ||
                    this.company_spend === '' ||
                    this.notes === '') {

                    alert('All fields are required!');

                    return false;
                }

                return true;
            }
        }
    }
</script>

<style scoped>
    label {
        color: #9ea2b0;
        padding: 0 0 5px 0;
        text-transform: uppercase;
        font-size: 12px;
    }

    input, textarea {
        width: 50%;
        padding: 20px;
        box-sizing: border-box;
    }

    input::placeholder, textarea::placeholder {
        color: #cbcbcb;
    }

    textarea {
        height: auto;
        width: 100%;
    }

    .spacing {
        margin-top: 30px;
    }

    .error {
        font-size: 12px;
        color: rgba(255, 0, 0, 0.68);
    }
</style>