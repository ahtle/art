<template>
    <section id="hr" name="hr" class="panel choco">
        <h1 class="section-header text-center" style="margin-bottom: 60px; color: #fff;">Human Resources</h1>

        <div class="row">
            <div class="offset-md-1 col-md-4">
    
                <transition name="slide-fade">
                    <div v-if="showCard">
                        <app-card :icon="appIconOne" :title="appTitleOne" :subtitle="appSubtitleOne" :requirement="appRequirementOne" :detail="appDetailOne" />
                    </div>
                </transition>
    
            </div>
        </div>
    </section>
</template>

<style scoped>
#hr {
    background-image: url('~assets/images/hr.png');
    background-repeat: no-repeat;
    background-position-x: right;
    background-position-y: bottom;
    background-size: 30%;
    height: 744px;
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
            appIconOne: 'money-check-alt',
            appTitleOne: 'DOM LEANHR',
            appSubtitleOne: 'Staff position posting, managing, and automation tool',
            appDetailOne: 'This tool provides a workflow for hiring managers, division managers, and HR managers to collaborate in collecting and preparing information needed for staff position posting that leads to automatic generation of JIFs. It operates as a central depository of all staff positions that enables near instantaneous reposting of position refill.',
            appRequirementOne: ['Restricted to campus access with SUNet ID authentication', 'VPN required if accessing off campus'],
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

        this.focusMinY = elePositionY + 500;
    }
}
</script>
