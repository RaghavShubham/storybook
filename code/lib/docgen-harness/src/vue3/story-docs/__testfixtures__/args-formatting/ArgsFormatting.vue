<template>
  <button>{{ label }}</button>
</template>

<script setup lang="ts">
defineProps<{
  label: string;
  count?: number;
  active?: boolean;
  disabled?: boolean;
  options?: { density: string; flags: string[] };
  formatter?: (value: number) => string;
}>();
</script>
