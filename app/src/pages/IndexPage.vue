<template>
  <q-page class="row items-center justify-evenly">
    <q-card class="my-card">
      <q-card-section>
        <form @submit.prevent="">
          <q-input outlined v-model="form.username" label="Outlined" />
          <q-btn color="primary" label="Acessar" />
        </form>
      </q-card-section>
    </q-card>
  </q-page>
</template>

<script lang="ts">
import { defineComponent, reactive } from 'vue';

const form = reactive({
  username: '',
});

export default defineComponent({
  name: 'IndexPage',

  setup() {
    return {
      form,
    };
  },
});
</script>
