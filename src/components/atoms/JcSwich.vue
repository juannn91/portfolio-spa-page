<template>
    <label :for="props.id" class="jc-swich">
        <span v-if="hasLabel()">{{getLabel(props.modelValue)}}</span>
        <div class="jc-swich-background" >
            <input
            class="jc-swich-input"
            type="checkbox"
            v-bind="$attrs"
            :id="props.id"
            :checked="props.modelValue"
            @change="onChange">
            <div class="jc-swich-slider"/>
        </div>
    </label>
</template>

<script setup lang="ts">
import {
  defineProps, defineEmits,
} from 'vue';

const emit = defineEmits(['update:modelValue']);
const props = defineProps({
  id: {
    type: String,
    required: true,
  },
  modelValue: {
    typeof: Boolean,
    default: false,
  },
  label: {
    typeof: String,
    default: '',
  },
  labelOff: {
    typeof: String,
    default: '',
  },
});

function onChange(event : Event) {
  if (!event.target) {
    return;
  }
  const { checked } = event.target as HTMLInputElement;

  emit('update:modelValue', checked);
}

function getLabel(isOn : boolean) {
  console.log(isOn);
  return isOn ? props.labelOff : props.label;
}

function hasLabel() {
  return props.label !== '' || props.labelOff !== '';
}

</script>

<style lang="scss">
@use '@/assets/styles/utils.scss';

$height : 34px;
$width : 60px;
$sphere-size: 26px;
$sphere-padding: 4px;

.jc-swich{
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: var(--space-md);
    cursor: pointer;

}

.jc-swich-background {
    position: relative;
    display: inline-block;
    width: $width;
    height: $height;
}

.jc-swich-input{
    opacity: 0;
    width: 0;
    height: 0;
}

.jc-swich-slider{
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: var(--color-bg-light);
    border-radius: $height;

    &::before{
        position: absolute;
        content: "";
        height: $sphere-size;
        width: $sphere-size;
        left: $sphere-padding;
        bottom: $sphere-padding;
        background: var(--color-primary);
        transition: var(--transition);
        transition-timing-function: var(--ease-out);
        border-radius: 50%;
    }
}

.jc-swich-input{
    &:checked + .jc-swich-slider::before{
        transform: translateX($sphere-size);
    }
}

</style>
