<template>
    <section id="hr" name="hr" class="panel choco">
        <h1 class="section-header text-center" style="margin-bottom: 60px; color: #fff;">Human Resources</h1>

        <div class="row">
            <div class="offset-md-1 col-md-4">
    
                <transition name="slide-fade">
                    <div v-if="showCard" class="app-card">
                        <div class="app-detail">
                        <h2 class="app-title">domleanhr</h2>
                        <p>Staff position posting process improvement. Automated position retrieval for position refill. 
                            Workflow from hiring managers to HR managers to cut back and forth emails, to shorten time gap between 
                            information gathering and position posting. To automate JIF generation.</p>
                        </div>
                        
                        <img src="~assets/images/domleanhr.png"/>
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
export default {
    data() {
        return {
            scrollY: false,
            focusMinY: false,
            showCard: false,
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
