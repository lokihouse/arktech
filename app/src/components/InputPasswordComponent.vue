<template>
  <q-input
    v-model="parsedPassword"
    outlined
    bg-color="white"
    class="q-mb-sm"
    :type="isPwd ? 'password' : 'text'"
    :label="$t(label)"
  >
    <template #append>
      <q-icon
        :name="isPwd ? 'visibility_off' : 'visibility'"
        class="cursor-pointer"
        @click="isPwd = !isPwd"
      />
    </template>
  </q-input>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const props = defineProps({
  label: {
    type: String,
    default: 'password',
  },
  password: {
    type: String,
    default: '',
  },
});

const parsedPassword = props.password ?? '';

const isPwd = ref(true);
</script>
