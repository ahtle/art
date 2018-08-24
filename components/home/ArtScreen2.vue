<template>
    <section id="art-screen-2">
        <div class="brandbar">
            <div class="screenContainer">
                <h3>Stanford University</h3>
            </div>
        </div>

        <div class="overlay">
            <div class="screenContainer">
                <nav class="navbar">

                    <ul class="nav navbar-nav">
                        <li class="nav-item">
                            <a class="nav-link" v-on:click="emitNavigateTo('finance')">Finance</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" v-on:click="emitNavigateTo('hr')">Human Resources</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" v-on:click="emitNavigateTo('faculty')">Faculty Affairs</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" v-on:click="emitNavigateTo('operations')">Operations</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" v-on:click="emitNavigateTo('communications')">Communications</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" v-on:click="emitNavigateTo('research')">Research</a>
                        </li>
                    </ul>
                </nav>

                <div class="logo-container">
                    <h1 class="orange">Administrative & Research Tools</h1>
                    <h3>In the Department of Medicine</h3>
                </div>
                
                <h1 class="tagline">Application tools, crafted to order</h1>
            </div>
        </div>

        <!-- <iframe src="https://www.youtube.com/embed/YlVTTenzM8w?rel=0&amp;rel=0&showinfo=0&mute=1&autoplay=1" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe> -->
        <video :src="require('~/assets/videos/coffee.mp4')" autoplay muted loop></video>

    </section>
</template>

<style scoped>

   #art-screen-2 {
        z-index: 1000;
        width: 100%;
        position: relative;
        background-color: black;
        color: #fff;
    }

    .brandbar {
        background-color: #81040e;
        height: 35px;
        padding: 3px;
        color: #fff;
    }

    .screenContainer {
        position: relative;
        width: 1380px;
        height: 100%;
        margin: 0 auto;
    }

    .brandbar h3 {
        font-family: Stanford, Source Serif Pro, Georgia, Times, Times New Roman, serif;
        font-size: 1.3em;
    }

    .overlay {
        position: absolute;
        width: 100%;
        height: 100%;
        z-index: 2000;
        /* background-color: rgba(0,0,0,0.1); */
    }

    .logo-container {
        position: absolute;
        top: 35%;
        margin-top: 20px;
        text-shadow: 2px 2px #000;
    }

    .logo-container h1 {
        font-size: 4em;
    }

    .logo-container h3 {
        font-size: 2em;
    }

    .navbar {
        margin-top: 20px;
        justify-content: flex-end;
        padding: 5px;
    }

    .navbar-nav {
        flex-direction: row;
    }

    .navbar ul li {
        text-align: center;
        margin: 0 20px;
        border-bottom: 0px solid orange;
        transition: all 0.3s linear;
    }

    .navbar ul li:hover {
        border-bottom: 4px solid orange;
    }

    .navbar ul li a {
        font-size: 1.5em;
        cursor: pointer;
    }

    .tagline {
        position: absolute;
        bottom: 15%;
        right: 0%;
        font-size: 3.5em;
        text-shadow: 2px 2px #000;
    }

    video {
        width: 100%;
        height: 100vh;

    }

    /* utility */
    .orange {
        color: orange;
    }

</style>


<script>
    export default {
        data () {
            return {
            }
        },
        components: {
            
        },
        methods: {
            emitNavigateTo(value) {
                this.$emit('navigate', value);
            },
        }
    }
</script>