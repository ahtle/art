<template>
    <section id="research" name="research" class="panel" style="padding: 0;">
        <!-- <div class="background-container">
            <div class="background" :class="blurClass"></div>
        </div> -->

        <div class="imageContainer">
            <img src="~assets/images/campus-big-01.jpg" :class="blurClass">
        </div>

        <h1 class="section-header text-center" :class="focusedClass" style="margin-bottom: 60px; color: #fff;">Research</h1>

        <div class="row center">
            <div class="app-card box-shadow" :class="focusedClass">
                <div class="app-detail">
                <h2 class="app-title">t32 grant</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
                    magna aliqua.</p>
                </div>
                
                <img src="~assets/images/domleanhr.png"/>
            </div>
        </div>
    </section>
</template>

<style scoped>
#research {
    position: relative;
}

.imageContainer {
    overflow: hidden;
}

.imageContainer img {
    height: 750px;
    transform: scale(1.1);
}

.center {
    display: flex;
    justify-content: center;
}

.app-card {
    width: 40%;
}

.section-header, .app-card {
    opacity: 0;
    transition: opacity 0.5s ease;
    position: absolute;
}

.section-header {
    top: 90px;
    width: 100%;
}

.app-card {
    bottom: 60px;
}

.opacity {
    opacity: 1;
}

.blur {
    filter: blur(8px);
    transform: scale(1.1);
}

</style>

<script>
export default {
    data() {
        return {
            scrollY: false,
            focusMinY: false,
            focusMaxY: false,
            focusedClass: '',
            blurClass: ''
        }
    },

    methods: {
        handleScroll () {
            this.scrollY = window.scrollY;
        }
    },

    watch: {
        scrollY: function(value) {
            if (value >= this.focusMinY && value <= this.focusMaxY) {
                this.focusedClass = 'opacity';
                this.blurClass = 'blur';
            } else {
                this.focusedClass = ''
                this.blurClass = '';
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
        console.log(elePositionY);

        this.focusMinY = elePositionY + 350;
        this.focusMaxY = elePositionY + 1400;
    }
}


</script>
