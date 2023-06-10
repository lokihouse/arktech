<template>
  <q-btn :type="type" :flat="flat" class="full-width q-mb-sm" color="primary" :label="$t(label)" />
</template>
<script setup lang="ts">
const props = defineProps({
  flat: Boolean,
  label: String,
  type: {
    type: String,
    default: 'button',
  },
});
</script>
