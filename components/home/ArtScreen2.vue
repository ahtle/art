<template>
    <section id="art-screen">
            <div class="overlay">
                <nav class="navbar">
                    <div class="logo-container">
                        <h1 class="orange">Art & Research Tools</h1>
                        <h3>In the Department of Medicine</h3>
                    </div>

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
                        <li class="nav-item">
                            <a class="nav-link" v-on:click="emitNavigateTo('clinical')">Clinical</a>
                        </li>
                    </ul>
                </nav>

                <h1 class="tagline">Cook to order</h1>
            </div>

            <iframe src="https://www.youtube.com/embed/YlVTTenzM8w?rel=0&amp;rel=0&showinfo=0&mute=1&autoplay=1" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>

    </section>
</template>

<style scoped>
   #art-screen {
        z-index: 1000;
        width: 100%;
        position: relative;
        background-color: black;
        color: #fff;
    }

    .overlay {
        position: absolute;
        width: 100%;
        height: 100%;
        /* background-color: rgba(0,0,0,0.1); */
    }

    .logo-container {
        margin-top: 20px;
        text-shadow: 2px 2px #000;
    }

    .logo-container h1 {
        font-size: 2em;
    }

    .navbar {
        justify-content: space-around;
        padding: 5px;
    }

    .navbar-nav {
        flex-direction: row;
    }

    .navbar ul li {
        text-align: center;
        margin: 0 20px;
        color: #fff;
    }

    .navbar ul li a {
        font-size: 1.2em;
        color: #fff;
        font-weight: bold;
        cursor: pointer;
    }

    .tagline {
        position: absolute;
        top: 45%;
        right: 10%;
        font-size: 5em;
        text-shadow: 2px 2px #000;
    }

    iframe {
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
        methods: {
            emitNavigateTo(value) {
                this.$emit('navigate', value);
            },
        }
    }
</script>