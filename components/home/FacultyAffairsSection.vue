<template>
    <section id="faculty" name="faculty" class="fa-container">
        <h1 class="section-header">faculty affairs</h1>

        <div class="fa-subsection" :class="subsectionOneClass" style="background-color: #f4f2f2">
            <div class="subsection-inner">
                <div class="subsection-title">
                    <div>
                        <h4><strong>01</strong> / 03</h4>
                        <h2 style="color: #cacaca;">REVIEW</h2>
                    </div>
                </div>

                <div class="app-box">
                    <h4 class="app-title">domfacultyreview</h4>
                    <p>Annual faculty evaluation and counseling process improvement. Tracking and monitoring of process status. 
                        Automated triggers and reminders to allow managers stay on top to achieve improved completion rate. 
                        Automated filling of faculty information to alleviate data entry burden on faculty.</p>
                </div>

                <div class="app-img-container box-shadow">
                    <img src="~assets/images/domfacultyreview.png"/>
                </div>

                <div class="next-button box-shadow" v-on:click="selectSection = 2"></div>
            </div>
        </div>

        <div class="fa-subsection" :class="subsectionTwoClass" style="background-color: #414141;">
            <div class="subsection-inner">
                <div class="subsection-title">
                    <div>
                        <h4><strong>02</strong> / 03</h4>
                        <h2 style="color: #777777;">apply</h2>
                    </div>
                </div>

                <div class="app-box" style="border-color: #fff;">
                    <h4 class="app-title" style="color:#fff;">facultyapplication</h4>
                    <p style="color: #fff;">Allow candidates from around the world to apply for faculty positions through a portal.</p>
                </div>

                <div class="app-img-container box-shadow">
                    <img src="~assets/images/facultyapplication.png"/>
                </div>

                <div class="next-button box-shadow" v-on:click="selectSection = 3"></div>
            </div>
        </div>

        <div class="fa-subsection" :class="subsectionThreeClass" style="background-color: #eb674a;">
            <div class="subsection-inner">
                <div class="subsection-title">
                    <div>
                        <h4><strong>03</strong> / 03</h4>
                        <h2 style="color: #777777;">interview</h2>
                    </div>
                </div>

                <div class="app-box" style="border-color: #fff;">
                    <h4 class="app-title" style="color:#fff;">facultyinterview</h4>
                    <p style="color: #fff;">Allow faculty affairs office to manage and monitor faculty candicate interview process. 
                        Workflow to generate interview notifications to faculty, to send out surveys to collect interview feedback, to summerize candidacy ranking.</p>
                </div>

                <div class="app-img-container box-shadow">
                    <img src="~assets/images/facultyinterview.png"/>
                </div>

                <div class="next-button box-shadow" v-on:click="selectSection = 1"></div>
            </div>
        </div>

    </section>
</template>

<style scoped>

.section-header {
    color: orange;
    position: absolute;
    top: 90px;
    left: 30px;
    z-index: 2000;
}

.fa-container {
    position: relative;
    width: 100%;
    height: 70vh;
    left: 0px;
    transition: all 0.5s linear;
}

.fa-subsection {
    height: 100%;
    width: 75%;
    position: absolute;
    padding: 20px;
    transition: all 0.5s linear;
}

.subsection-inner {
    height: 100%;
}

.subsection-title {
    height: 100%;
    display: flex;
    align-items: center;
    color: #ebebeb;
}

.subsection-title h4 {
    margin: 0;
    transform: translateY(40px);
    font-size: 18px;
    color: #cecece;
}

.subsection-title h2 {
    font-size: 200px;
    text-transform: uppercase;
}

.app-box {
    position: absolute;
    top: 100px;
    right: 10%;
    width: 250px;
    padding-left: 30px;
    border-left: 2px solid #8c1515;
}

.app-img-container {
    width: 40%;
    bottom: 60px;
    position: absolute;
    right: 30%;
    border-radius: 10px;
    background: transparent;
}

.app-img-container img {
    border-radius: 10px;
}

.next-button {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background-color: #fff;
    position: absolute;
    right: -20px;
    top: 50%;
    z-index: 2000;
    background-image: url('~assets/images/slider-arrow.svg');
    background-repeat: repeat-x;
    background-position: left center;
    transition: background-position 0.3s ease;
}

.next-button:hover {
    background-position: 40px;
}

.left-transform-0 {
    left: calc(-100% * 7.5/10);
}

.left-transform-1 {
    left: 0;
}

.left-transform-2 {
    left: calc(100% * 7.5/10);
}

.left-transform-3 {
    left: calc(100% * 15/10);
}

.left-transform-4 {
    left: calc(100% * 22.5/10);
}


</style>

<script>
export default {
    data () {
        return {
            selectSection: 1,
            subsectionOneClass: 'left-transform-1',
            subsectionTwoClass: 'left-transform-2',
            subsectionThreeClass: 'left-transform-3',
        }
    },
    watch: {
        selectSection: function(value) {
            if (value === 1) {
                this.subsectionOneClass = 'left-transform-1';
                this.subsectionTwoClass = 'left-transform-2';
                this.subsectionThreeClass = 'left-transform-0';

                setTimeout(() => {
                    this.subsectionThreeClass = 'left-transform-3 no-display';
                }, 600);

                setTimeout(() => {
                    this.subsectionThreeClass = 'left-transform-3';
                }, 700);
            } else if (value === 2) {
                this.subsectionOneClass = 'left-transform-0';
                this.subsectionTwoClass = 'left-transform-1';
                this.subsectionThreeClass = 'left-transform-2';

                setTimeout(() => {
                    this.subsectionOneClass = 'left-transform-3 no-display';
                }, 600);
                
                setTimeout(() => {
                    this.subsectionOneClass = 'left-transform-3';
                }, 700);
            } else {
                this.subsectionOneClass = 'left-transform-2';
                this.subsectionTwoClass = 'left-transform-0';
                this.subsectionThreeClass = 'left-transform-1';

                setTimeout(() => {
                    this.subsectionTwoClass = 'left-transform-3 no-display';
                }, 600);
                
                setTimeout(() => {
                    this.subsectionTwoClass = 'left-transform-3';
                }, 700);
            }
        }
    }
}
</script>
