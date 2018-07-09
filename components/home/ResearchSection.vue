<template>
    <section id="research" name="research" class="panel">
        <div class="background" :class="blurClass"></div>

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

.background {
    position: absolute;
    left: 0;
    top: 0;
    z-index: -1;
    width: 100%;
    height: 100%;
    background-image: url('~assets/images/campus-big-01.jpg');
    background-size: cover;
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
}

.opacity {
    opacity: 1;
}

.blur {
    filter: blur(8px);
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
