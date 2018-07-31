<template>
    <section id="art-screen">
            <iframe src="https://www.youtube.com/embed/YlVTTenzM8w?rel=0&amp;rel=0&showinfo=0&mute=1&autoplay=1" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
    </section>
</template>

<style>
   #art-screen {
        z-index: 1000;
        margin-top: 60px;
        /* height: 95vh; */
        width: 100%;
        position: relative;
        background-color: black;
    }

    iframe {
        width: 100%;
        height: 90vh;
    }

</style>

<script>
    export default {
        data () {
            return {

            }
        },
        methods: {
            emitNavigateTo(value) {
                this.$emit('navigate', value);
            },
        }
    }
</script>