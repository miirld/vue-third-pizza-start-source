<template>
  <div class="default-layout">
    <default-header />
    <slot />
  </div>
</template>

<script setup>
import DefaultHeader from "./DefaultHeader.vue";
</script>
