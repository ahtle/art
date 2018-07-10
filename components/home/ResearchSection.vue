<template>
    <section id="research" name="research" class="panel" style="padding: 0;">

        <div class="imageContainer">
            <div class="bg-img" :class="blurClass"></div>
        </div>

        <h1 class="section-header text-center" :class="focusedClass" style="margin-bottom: 60px; color: #fff;">Research</h1>

        <div class="row center">
            <div class="app-card box-shadow" :class="focusedClass">
                <div class="app-detail">
                <h2 class="app-title">t32 grant</h2>
                <p>Data collection and warehousing of insitutional databases to extract and parse T32 relevant information. 
                    Automated feeding to web interface for curation and accuracy checking. Automated generation of Word tables that directy feed to final T32 grant submission.</p>
                </div>
                
                <img src="~assets/images/t32grant.png"/>
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

.bg-img {
    background-image: url('~assets/images/campus-big-01.jpg');
    background-position: center;
    height: 750px;
    transform: scale(1.1);
}

.center {
    display: flex;
    justify-content: center;
}

.app-card {
    width: 35%;
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

        this.focusMinY = elePositionY + 350;
        this.focusMaxY = elePositionY + 1400;
    }
}


</script>
