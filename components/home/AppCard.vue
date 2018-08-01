<template>
    <div class="app-card box-shadow" style="width: 25%; height: 350px;" v-on:mouseover="showData = true;" v-on:mouseleave="showData = false;">
        <div class="fa-container" :class="{'full-width': showData}">
            <font-awesome-icon :icon="icon" v-if="!showData"/>

            <transition name="fade">
                <div class="app-detail-hover" v-if="showData">
                    <p>{{ detail }}</p>

                    <a class="btn btn-info go-to-app-link" href="#">Go to app</a>
                </div>
            </transition>
        </div>

        <div class="app-detail" :class="{'no-width' : showData}">
            <h2 class="app-title">{{ title }}</h2>
            <h4 class="app-subtitle">{{ subtitle }}</h4>

            <hr>

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
    props: ['icon', 'title', 'subtitle', 'requirement', 'detail']
}

</script>

<style>
.app-card {
    display: flex;
    border-radius: 10px;
    overflow: hidden;
    position: relative;
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
</style>