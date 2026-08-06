<template>
  <input :value="modelValue" />
</template>

<script setup lang="ts">
defineProps<{ modelValue: string; checked?: boolean }>();
</script>
