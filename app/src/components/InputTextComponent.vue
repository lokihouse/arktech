<template>
  <q-input
    v-model="parsedText"
    outlined
    bg-color="white"
    :label="$t(label)"
    class="q-mb-sm"
  />
</template>
<script setup lang="ts">
const props = defineProps({
  label: {
    type: String,
    default: 'label',
  },
  text: {
    type: String,
    default: 'text',
  },
});

const parsedText = props.text ?? '';
</script>
