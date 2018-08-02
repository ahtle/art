<template>
    <section id="research" name="research" class="panel sand">
        <h1 class="section-header text-center" style="margin-bottom: 25px;">Research</h1>
  
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
                    icon: 'table',
                    title: 'T32GRANT',
                    subtitle: 'Accurate data compilation and automated generation of T32 tables',
                    detail: 'This tool provides a platform to extract data from multiple enterprise data sources, standardize them, curate and organize them, to automate generation of tables that are ready for T32 grant submission.',
                    requirement: ['Restricted to campus access with SUNet ID authentication', 'VPN required if accessing off campus'],
                    link: 'https://t32grant.stanford.edu/',
                },
                {
                    icon: 'archive',
                    title: 'CDH INVENTORY',
                    subtitle: 'Collection and presentation of digital health projects on campus',
                    detail: 'This tool allows users to directly submit their digital health projects online for review, and after approval by the authority, the projects are displayed to audience with granted access. The projects are organized by subject, organization unit, clinical area, etc. for easy and quick browsing, in addition to organic search function.',
                    requirement: ['Restricted to campus access with SUNet ID authentication', 'VPN required if accessing off campus'],
                    link: 'https://cdhdatabase.stanford.edu/',
                },
                {
                    icon: 'check-double',
                    title: 'DOM QUALITY',
                    subtitle: 'Request system for SHC access',
                    detail: 'This tool provides a simple portal as a proxy to SHC official request system. It allows staff in the department without a SHC ID to make requests to gain appropriate and approvable system accesses.',
                    requirement: ['Restricted to campus access'],
                    link: '#',
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
        const elePositionY = $('#research').offset().top;

        this.focusMinY = elePositionY + 200;
    }
}

</script>