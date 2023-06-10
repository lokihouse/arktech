<template>
  <q-input outlined v-model="parsedText" :label="$t(label)" class="q-mb-sm" />
</template>
<script setup lang="ts">
const props = defineProps({
  label: String,
  text: String,
});

const parsedText = props.text ?? '';
</script>
