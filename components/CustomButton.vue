<template>
  <button
    type="button"
    :class="{
      'btn-primary': variant == 'primary',
      'btn-secondary': variant == 'secondary',
    }"
  >
    <slot>Esto es una prueba </slot>
  </button>
</template>

<script lang="ts" setup>
interface ICustomButton {
  variant?: "primary" | "secondary";
}

const props = withDefaults(defineProps<ICustomButton>(), {
  variant: "primary",
});
</script>
