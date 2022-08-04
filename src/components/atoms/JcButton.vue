<script setup lang="ts">
import { defineEmits } from 'vue';

const emit = defineEmits(['click']);

function onClick(event: InputEvent) {
  emit('click', event);
}
</script>

<template>
    <button class="jc-btn" @click="onClick('clcik')">
        <slot/>
    </button>
</template>

<style lang="scss">
@use '@/assets/styles/c-generic/css-vars';
@use '@/assets/styles/utils.scss';

.jc-btn{
    @include utils.reset();
    padding: var(--component-padding) var(--space-lg);
    border: utils.$border;
    border-radius: var(--component-border-redius);
    text-transform: capitalize;
    color: var(--color-primary);
    border-color: var(--color-primary) ;

    &:hover{
        cursor: pointer;
        background-color: var(--color-primary);
        color: var(--color-contrast-lower) ;
    }
}

</style>
