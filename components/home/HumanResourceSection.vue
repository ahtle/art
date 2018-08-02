<template>
    <section id="hr" name="hr" class="panel">
        <h1 class="section-header text-center" style="margin-bottom: 60px;">Human Resources</h1>

        <div class="flex-container">
            <transition v-for="(app, index) in appArr" name="slide-fade" :key="index">
                <app-card v-show="showCard" :icon="app.icon" :title="app.title" :subtitle="app.subtitle" :requirement="app.requirement" :detail="app.detail" :link="app.link"/>
            </transition>
        </div>
    </section>
</template>

<style scoped>

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
                    icon: 'male',
                    title: 'DOM LEANHR',
                    subtitle: 'Staff position posting, managing, and automation tool',
                    detail: 'This tool provides a workflow for hiring managers, division managers, and HR managers to collaborate in collecting and preparing information needed for staff position posting that leads to automatic generation of JIFs. It operates as a central depository of all staff positions that enables near instantaneous reposting of position refill.',
                    requirement: ['Restricted to campus access with SUNet ID authentication', 'VPN required if accessing off campus'],
                    link: 'http://domleanhr.stanford.edu/',
                },
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
        const elePositionY = $('#hr').offset().top;

        this.focusMinY = elePositionY - 600;
    }
}
</script>
