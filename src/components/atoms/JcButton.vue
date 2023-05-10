<template>
    <button class="jc-btn" >
        <slot/>
    </button>
</template>

<script setup lang="ts">

</script>

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
