<template>
    <section id="finance" name="finance" class="panel sand">
        <div class="container">
            <div class="row">
                <div class="col-md-12">
                    <h1 class="section-header" style="margin-bottom: 25px;">Finance</h1>
            
                    <div class="flex-container">
                        <transition v-for="(app, index) in appArr" name="slide-fade" :key="index">
                            <app-card v-show="showCard" :icon="app.icon" :title="app.title" :subtitle="app.subtitle" :requirement="app.requirement" :detail="app.detail" :link="app.link"/>
                        </transition>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<style scoped>
#finance {
    margin-top: 50px;
}
</style>

<script>

import AppCard from './AppCard';

export default {
    components: {
        AppCard
    },
    data() {
        return {
            scrollY: false,
            focusMinY: false,
            showCard: false,

            appArr: [
                {
                    icon: 'money-check-alt',
                    title: 'DOM COMPENSATION',
                    subtitle: 'Faculty bonus calculation and compensation reporting tool',
                    detail: 'This tool standardizes and automates clinical bonus calculation, generates total compensation reports for managers’ reviewing and editing, provides workflow to produce OTP forms for payroll system, and presents dashboards for faculty to view reports conveniently and securely.',
                    requirement: ['Restricted to campus access with SUNet ID authentication', 'VPN required if accessing off campus'],
                    link: 'https://domcomp.stanford.edu/',
                },
                {
                    icon: 'file-invoice',
                    title: 'RAMP',
                    subtitle: 'Resource Allocation Management and Planning tool',
                    detail: 'This tool provides a platform for managing the department resources supporting research, education and clinical activities. It provides a workflow for   managers and faculty to submit funding requests to the department for review and approval. It tracks the life cycles and account balances of all approved funding commitments, and generates customizable visual presentations of trend lines and patterns.',
                    requirement: ['Restricted to campus access with SUNet ID authentication', 'VPN required if accessing off campus'],
                    link: 'https://domcommitments.stanford.edu/',
                }
            ],

        }
    },

    methods: {
        handleScroll () {
            this.scrollY = window.scrollY;
        }
    },

    watch: {
        scrollY: function(value) {
            if (value >= this.focusMinY) {
                this.showCard = true;
            } else {

            }
        },
    },

    beforeMount () {
        window.addEventListener('scroll', this.handleScroll);
    },

    beforeDestroy () {
        window.removeEventListener('scroll', this.handleScroll);
    },

    mounted: function() {
        // element's scroll height
        const elePositionY = $('#finance').offset().top;

        this.focusMinY = elePositionY + 600;
    }
}

</script>
