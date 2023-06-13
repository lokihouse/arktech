<template>
  <q-btn
    :type="type"
    :flat="flat"
    class="full-width q-mb-sm"
    color="primary"
    :label="$t(label)"
  />
</template>
<script setup lang="ts">
defineProps({
  flat: Boolean,
  label: {
    type: String,
    default: 'Label',
  },
  primary: Boolean,
  secondary: Boolean,
  type: {
    type: String,
    default: 'button',
  },
});
</script>
