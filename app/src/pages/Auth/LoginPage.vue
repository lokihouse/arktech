<template>
  <div class="tw-h-screen tw-grid tw-grid-cols-4">
    <div class="tw-col-span-3">
      <q-img class="tw-h-screen" src="https://source.unsplash.com/random/?city,architecture" fit="cover"
        spinner-color="white" />
    </div>
    <div class="flex items-start justify-center">
      <div class="tw-mt-10">
        <q-img src="~assets/logo.png" fit="contain" spinner-color="white" style="height: 140px;"
          class="q-mb-md" />
        <form class="tw-w-[300px]" @submit.prevent="onSubmitForm">
          <input-text-component v-model="form.username" label="USERNAME_OR_EMAIL" />
          <input-password-component v-model="form.password" label="PASSWORD"/>
          <button-component type="submit" label="SIGN_IN" primary />
          <button-component label="REGISTER" flat primary />
        </form>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import ButtonComponent from 'src/components/ButtonComponent.vue';
import InputPasswordComponent from 'src/components/InputPasswordComponent.vue';
import InputTextComponent from 'src/components/InputTextComponent.vue';
import { reactive } from 'vue';

const form = reactive({
  username: '',
  password: '',
});

const onSubmitForm = () => {
  console.log(form);
};
</script>
