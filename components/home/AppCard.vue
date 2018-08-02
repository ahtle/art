<template>
    <div class="app-card" v-on:mouseover="showData = true;" v-on:mouseleave="showData = false;">
        <div class="fa-container" :class="{'full-width': showData}">
            <font-awesome-icon :icon="icon" v-if="!showData"/>

            <transition name="fade">
                <div class="app-detail-hover" v-if="showData">
                    <h2 style="color: orange; font-size: 1.3em;">{{ title }}</h2>

                    <p>{{ detail }}</p>

                    <a class="btn btn-info go-to-app-link" :href="link">Go to app</a>
                </div>
            </transition>
        </div>

        <div class="app-detail" :class="{'no-width' : showData}">
            <div style="height: 33%;">
                <h2 class="app-title">{{ title }}</h2>
                <h4 class="app-subtitle">{{ subtitle }}</h4>
            </div>

            <hr>

            <p style="color: #8c1515;">ACCESS</p>
            <ul>
                <li v-for="(item, index) in requirement" :key="index">{{ item }}</li>
            </ul>
        </div>
    </div>
</template>

<script>

export default {
    data() {
        return {
            showData: false
        }
    },
    props: ['icon', 'title', 'subtitle', 'requirement', 'detail', 'link']
}

</script>

<style>
.app-card {
    display: flex;
    border-radius: 10px;
    overflow: hidden;
    position: relative;
    width: 500px;
    height: 350px;
    background-color: #fff;
    box-shadow: 0 0 10px rgba(0,0,0,.15), 2px 3px 3px rgba(0,0,0,.15);
    /* transition: box-shadow 0.3s linear; */
}

.app-card:hover {
    box-shadow: 0 0 15px rgba(0,0,0,.15), 6px 6px 6px rgba(0,0,0,.3);
}

.app-detail {
    padding: 20px;
    width: 500px;
    transition: width 0.3s linear;
}

.app-title {
    color: #820000;
    text-transform: uppercase;
    font-weight: 600;
    font-size: 1.3em;
    text-align: center;
}

.app-subtitle {
    text-align: center;
}

.app-detail-hover {
    font-size: 18px;
    padding: 5px;
}

.go-to-app-link {
    position: absolute;
    right: 10px;
    bottom: 10px;
}

hr {
    border-top: 2px solid rgba(0, 0, 0, .1);
}

/* font awesome */
.fa-container {
    position: relative;
    background-color: #8c1515;
    color: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 30px;
    padding: 5px;
    width: 50px;
    transition: width 0.3s linear;
}

.full-width {
    width: 100%;
}

.no-width {
    width: 0;
    padding: 0;
    overflow: hidden;
}

@media only screen and (max-width: 1400px) {
    .app-card {
        width: 350px;
    }
}

@media only screen and (max-width: 1000px) {
    .app-card {
        width: 500px;
        margin-bottom: 20px;
    }  
}
</style>