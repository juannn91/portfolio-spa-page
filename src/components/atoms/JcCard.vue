<template>
    <div class="jc-card">
        <h4 v-if="props.title">{{props.title}}</h4>
        <slot></slot>
    </div>
</template>

<script setup lang="ts">
import { defineProps } from 'vue';

const props = defineProps({
  title: {
    type: String,
    default: null,
  },
});
</script>

<style lang="scss">
@use '@/assets/styles/utils.scss';

.jc-card{
    box-shadow: var(--shadow-sm);
    background: var(--color-bg-lighter);
    color: var(--color-contrast-high);
    border-radius: var(--radius-sm) ;
    padding: var(--space-lg);
    border: utils.$border ;
    border-color: var(--color-contrast-low);
}
</style>
