<template>
  <section>
      <mast-head/>

      <transition name="fade">
        <div v-if="showNavigation">
          <navigation/>
        </div>
      </transition>

      <art-screen/>

      <main :class="mainClass">
        <finance-section />
        <human-resource-section />
      </main>

      <div id="main-spacer"></div>

  </section>
</template>

<script>

import MastHead from '~/components/MastHead.vue';
import ArtScreen from '~/components/home/ArtScreen.vue';
import Navigation from '~/components/home/Navigation.vue';
import FinanceSection from '~/components/home/FinanceSection.vue';
import HumanResourceSection from '~/components/home/HumanResourceSection.vue';


export default {
  components: {
    MastHead,
    Navigation,
    ArtScreen,
    FinanceSection,
    HumanResourceSection,
  },

  data() {
    return {
      mainClass: 'affix',
      showNavigation: false,
    }
  },

  methods: {
    handleScroll() {
      if (window.scrollY > 1080) {
        this.mainClass = ''
        this.showNavigation = true;
      } else {
        this.mainClass = 'affix'
        this.showNavigation = false;
      }
    }
  },

  mounted() { 
    let _this= this;

    $(window).scroll(function() {
      _this.handleScroll();
    });
  }
}

</script>

<style>
main.affix {
    position: fixed;
    width: 100%;
    margin-top: 60px;
    overflow: hidden;
    top: 0;
    z-index: 1;
}

#main-spacer {
    height: 2000px;
}
</style>
