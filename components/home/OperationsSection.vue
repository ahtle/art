<template>
    <section id="operations" name="operations" class="panel sand">
        <h1 class="section-header text-center" style="margin-bottom: 25px;">Operations</h1>
  
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
                    icon: 'book',
                    title: 'DOM RESOURCES',
                    subtitle: 'Central hosting of internal resources',
                    detail: 'This tools provides a central depository of static information that’s manually collected and uploaded by the administrative offices in the department to serve administrative users for their commonly requested and needed resources.',
                    requirement: ['Open on the internet with SUNet ID authentication'],
                    link: 'https://domresources.stanford.edu/',
                },
                {
                    icon: 'id-card-alt',
                    title: 'DOM SHC REQUEST',
                    subtitle: 'Request system for SHC access',
                    detail: 'This tool provides a simple portal as a proxy to SHC official request system. It allows staff in the department without a SHC ID to make requests to gain appropriate and approvable system accesses.',
                    requirement: ['Restricted to campus access'],
                    link: '#',
                },
            ]
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
        const elePositionY = $('#operations').offset().top;

        this.focusMinY = elePositionY + 300;
    }
}

</script>