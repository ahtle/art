<template>
    <section id="faculty" name="faculty" class="panel">

        <div class="imageContainer">
            <div class="bg-img" :class="blurClass"></div>
        </div>

        <div class="container">
            <div class="row">
                <div class="col-md-12">
                    <h1 class="section-header" :class="focusedClass" style="color: #fff;">Faculty Affairs</h1>

                    <div class="img-section-flex-container">
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
#faculty {
    position: relative;
    padding: 0;
}

.imageContainer {
    overflow: hidden;
}

.bg-img {
    background-image: url('~assets/images/lake.jpg');
    background-position: center;
    background-size: cover;
    height: 600px;
    transform: scale(1.1);
}

.section-header {
    top: 90px;
    width: 100%;
    opacity: 0;
    transition: opacity 0.5s ease;
    position: absolute;
    text-shadow: 2px 2px #000;
}

.opacity {
    opacity: 1;
}

.blur {
    filter: blur(8px);
    transform: scale(1.1);
}

.container {
    position: absolute;
    height: 100%;
    top: 0;
    left: 0;
    right: 0;
}

.row {
    height: 100%;
}

@media only screen and (max-width: 1000px) {
    #faculty {
        background-color: #eaeaea;
        padding-top: 90px;
        padding-bottom: 45px;
    }

    .imageContainer {
        display: none;
    }

    .section-header {
        position: initial;
        margin-bottom: 60px;
    }
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
            focusedClass: '',
            blurClass: '',
            showCard: false,

            appArr: [
                {
                    icon: 'user-circle',
                    title: 'DOM FACULTY REVIEW',
                    subtitle: 'Faculty counseling and evaluation management and reporting tool',
                    detail: 'This tool provides a platform to source, generate, curate information to build faculty profiles by the division managers and faculty in preparation of evaluations by the chiefs. It tracks and manages the evaluation process, and generates full evaluation reports.',
                    requirement: ['Restricted to campus access with SUNet ID authentication', 'VPN required if accessing off campus'],
                    link: 'https://domfacultyreview.stanford.edu/',
                },
                {
                    icon: 'briefcase',
                    title: 'FACULTY APPLICATION',
                    subtitle: 'Faculty position application tool',
                    detail: 'This tool allows candidates from around the world to apply directly online for open faculty positions in the department. It tracks the applications, manages applicants, and generates reports.',
                    requirement: ['Open to public'],
                    link: 'http://facultyapplication.stanford.edu/dashboard/',
                },
                {
                    icon: 'chalkboard-teacher',
                    title: 'FACULTY INTERVIEW',
                    subtitle: 'Faculty interview management tool',
                    detail: 'This tools provides a platform to track and manage faculty candidate interviews. It allows the faculty affairs office to easily create surveys and distribute to interviewers to collect their evaluations of the candidates, it tallies the responses and generates report.',
                    requirement: ['Restricted to campus access'],
                    link: 'http://medicinetools.stanford.edu/faculty/',
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
                this.focusedClass = 'opacity';
                this.blurClass = 'blur';
            } else {
                // this.showCard = false;
                // this.focusedClass = ''
                // this.blurClass = '';
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
        const elePositionY = $('#faculty').offset().top;

        this.focusMinY = elePositionY + 300;
    }
}
</script>
