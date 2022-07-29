<template>
  <div :class="getTheme()">
    <router-view />

    <nav class="nav-bar">
      <div><Icon class="juan-logo" icon="mdi:alpha-j-circle-outline" /></div>
      <div class="nav-bar__right">
        <div>
          <a href="">Metorship</a>
        </div>
        <div>
          <a href="">Say hello</a>
        </div>
      </div>
    </nav>

    <footer class="u-background-2 main-footer">
      <div class="main-footer__logo">
        <Icon class="juan-logo" icon="mdi:alpha-j-circle-outline" color="white" />
        <div>
          <label for="page-style" class="u-text--light">
            Set dark mode
            <input type="checkbox" id="page-style" v-model="isDarkMode"/>
          </label>
        </div>
      </div>

      <p class="u-text--light main-footer__phrase">
        If you think good architecture is expensive, try bad architecture.
      </p>

      <div class="main-footer__social-media">
        <a href="#"><Icon icon="el:github-text" /> github</a>
        <a href="#"><Icon icon="eva:linkedin-fill" /> linkedin</a>
      </div>
      <div class="u-text--light">Handcrafted by me 2022</div>
    </footer>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { Icon } from '@iconify/vue';

const isDarkMode = ref(false);

function getTheme() {
  return isDarkMode.value ? 'theme--dark' : 'theme--light';
}
</script>

<style lang="scss">
@import "@/assets/styles/main.scss";
</style>
