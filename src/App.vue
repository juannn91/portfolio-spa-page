<!-- eslint-disable max-len -->
<template>
  <div class="theme" :data-theme="theme">

<router-view />

    <nav class="nav-bar">
      <div>
        <Icon class="juan-logo" icon="mdi:alpha-j-circle-outline" />
      </div>

      <div class="nav-bar__right">
        <div>
          <a href="">Metorship</a>
        </div>
        <div>
          <a href="">Say hello</a>
        </div>
      </div>
    </nav>

    <footer class="u-bg-darker main-footer">
      <div class="main-footer__logo">
        <Icon class="juan-logo" icon="mdi:alpha-j-circle-outline" color="white" />
        <div></div>
      </div>

      <div class="main-footer__phrase">
        <p>
          "If you think good architecture is expensive, try bad architecture.""
        </p>
        <div class="main-footer__change-style__container">
        </div>
      </div>

      <div class="main-footer__social-media">
        <a href="#"><Icon icon="el:github-text" /> github</a>
        <a href="#"><Icon icon="eva:linkedin-fill" /> linkedin</a>
      </div>

        <JcSwich id="page-style" v-model="isDarkMode" label="Go to dark" labelOff="Go to light" />

      <div class="">
        <div>Handcrafted by me 2022</div>
      </div>
    </footer>
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue';
import { Icon } from '@iconify/vue';
import JcSwich from './components/atoms/JcSwich.vue';

const isDarkMode = ref(false);

const theme = computed(() => (isDarkMode.value ? 'dark' : ''));
</script>

<style lang="scss">
@import "@/assets/styles/main.scss";
.main-footer__phrase{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.main-footer__change-style__container{
  max-width: 200px;
}
</style>
