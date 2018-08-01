<template>
    <section id="finance" name="finance" class="panel sand">
        <h1 class="section-header text-center" style="margin-bottom: 25px;">Finance</h1>
        <h3 class="section-subheader text-center" style="margin-bottom: 50px;">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
            magna aliqua.</h3>
  
        <div class="flex-container">
            <app-card :icon="appIconOne" :title="appTitleOne" :subtitle="appSubtitleOne" :requirement="appRequirementOne" :detail="appDetailOne" />

            <app-card :icon="appIconTwo" :title="appTitleTwo" :subtitle="appSubtitleTwo" :requirement="appRequirementTwo" :detail="appDetailTwo" />
        </div>
    </section>
</template>

<style scoped>
#finance {
    padding-left: 30px; 
    padding-right: 30px;
}

.flex-container {
    display: flex;
    justify-content: space-around;
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
            appIconOne: 'money-check-alt',
            appTitleOne: 'DOM COMPENSATION',
            appSubtitleOne: 'Faculty bonus calculation and compensation reporting tool',
            appDetailOne: 'This tool standardizes and automates clinical bonus calculation, generates total compensation reports for managers’ reviewing and editing, provides workflow to produce OTP forms for payroll system, and presents dashboards for faculty to view reports conveniently and securely.',
            appRequirementOne: ['Restricted to campus access with SUNet ID authentication', 'VPN required if accessing off campus'],

            appIconTwo: 'money-check-alt',
            appTitleTwo: 'RAMP',
            appSubtitleTwo: 'Resource Allocation Management and Planning tool',
            appDetailTwo: 'This tool provides a platform for managing the department resources supporting research, education and clinical activities. It provides a workflow for   managers and faculty to submit funding requests to the department for review and approval. It tracks the life cycles and account balances of all approved funding commitments, and generates customizable visual presentations of trend lines and patterns.',
            appRequirementTwo: ['Restricted to campus access with SUNet ID authentication', 'VPN required if accessing off campus'],
        }
    },
    methods: {

    }
}

</script>
