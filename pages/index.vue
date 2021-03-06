<template>
  <section>
      <mast-head/>

      <transition name="fade">
        <div v-if="showNavigation">
          <navigation @navigate="scrollToSection"/>
        </div>
      </transition>

      <art-screen @navigate="scrollToSection"/>

      <main :class="mainClass">
        <finance-section />
        <human-resource-section />
        <faculty-affairs-section />
        <operations-section />
        <communications-section />
        <research-section />
        <clinical-section />
      </main>

      <div id="main-spacer" v-if="mainSpacerClass"></div>

      <global-footer />

  </section>
</template>

<script>

import MastHead from '~/components/MastHead.vue';
import ArtScreen from '~/components/home/ArtScreen.vue';
import Navigation from '~/components/home/Navigation.vue';
import FinanceSection from '~/components/home/FinanceSection.vue';
import HumanResourceSection from '~/components/home/HumanResourceSection.vue';
import FacultyAffairsSection from '~/components/home/FacultyAffairsSection.vue';
import OperationsSection from '~/components/home/OperationsSection.vue';
import CommunicationsSection from '~/components/home/CommunicationsSection.vue';
import ResearchSection from '~/components/home/ResearchSection.vue';
import ClinicalSection from '~/components/home/ClinicalSection.vue';
import GlobalFooter from '~/components/GlobalFooter.vue';


export default {
  components: {
    MastHead,
    Navigation,
    ArtScreen,
    FinanceSection,
    HumanResourceSection,
    FacultyAffairsSection,
    OperationsSection,
    CommunicationsSection,
    ResearchSection,
    ClinicalSection,
    GlobalFooter
  },

  data() {
    return {
      title: 'ART - Launchpad',
      metaDescription: "Stanford Department of Medicine's launchpad for web applications",
      mainClass: 'affix',
      showNavigation: false,
      mainSpacerClass: true,
    }
  },

  head() {
    return {
      title: this.title,
      meta: [
        { hid: 'description', name: 'description', content: this.metaDescription }
      ]
    }
  },

  methods: {
    scrollToSection(value) {
      this.mainClass = '';

      const element = document.getElementById(value);
      const offset = 40;

      setTimeout(() => {
        const bodyRect = document.body.getBoundingClientRect().top;
        const elementRect = element.getBoundingClientRect().top;
        const elementPosition = elementRect - bodyRect;
        const offsetPosition = elementPosition - offset;

        window.scrollTo({ top: offsetPosition,behavior: "smooth" });
      }, 200);
    },

    handleScroll() {
      if (window.scrollY > 1020) {
        this.mainClass = ''
        this.showNavigation = true;
        this.mainSpacerClass = false;
      } else {
        this.mainClass = 'affix'
        this.showNavigation = false;
        this.mainSpacerClass = true;
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
