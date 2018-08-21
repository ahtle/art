<template>
    <section id="communications" name="faculty" class="panel">

        <div class="imageContainer">
            <div class="bg-img" :class="blurClass"></div>
        </div>

        <div class="container">
            <div class="row">
                <div class="col-md-12">
                    <h1 class="section-header" :class="focusedClass" style="color: #fff;">Communications</h1>

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
#communications {
    position: relative;
    padding: 0;
}

.imageContainer {
    overflow: hidden;
}

.bg-img {
    background-image: url('~assets/images/campus-big-01.jpg');
    background-position: center;
    background-size: cover;
    height: 600px;
    transform: scale(1.1);
}

.section-header {
    opacity: 0;
    transition: opacity 0.5s ease;
    position: absolute;
    text-shadow: 2px 2px #000;
}

.opacity {
    opacity: 1;
}

.section-header {
    top: 90px;
    width: 100%;
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
    #communications {
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
                    icon: 'calendar-alt',
                    title: 'MEDICINE CALENDARS',
                    subtitle: 'Publication of events and dissemination through syndication',
                    detail: 'This tools provides a central depository of events in the department to allow user submission of events for general public consumption. It generates automated feed to any website configured to syndicate to display the events of their specific categories or keywords.',
                    requirement: ['Open to public'],
                    link: 'http://medicinecalendars.stanford.edu/',
                },
                {
                    icon: 'newspaper',
                    title: 'WEEKLY UPDATES',
                    subtitle: 'Department primary communication channel',
                    detail: 'This weekly newsletter is the primary outlet of department communications. This site provides a collection of the archives.',
                    requirement: ['Restricted to SUNet ID access'],
                    link: 'http://medicine.stanford.edu/news/newsLetterArchive.html',
                },
                {
                    icon: 'book-open',
                    title: 'ANNUAL REPORTS',
                    subtitle: 'Showcases of department activities and achievements',
                    detail: 'These are the annual showcases of activities and achievements by faculty and staff across the department.',
                    requirement: ['Open to public'],
                    link: 'http://medicine.stanford.edu/annual-report-2018.html',
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
        const elePositionY = $('#communications').offset().top;

        this.focusMinY = elePositionY + 300;
    }
}
</script>
