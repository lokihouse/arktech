<template>
  <div class="tw-h-screen tw-sm:tw-grid tw-sm:tw-grid-cols-4">
    <div class="tw-hidden tw-top-0 tw-left-0 tw-sm:relative tw-sm:tw-col-span-3">
      <q-img
        class="tw-h-screen"
        src="~assets/background.jpg"
        fit="cover"
        spinner-color="white"
      />
    </div>
    <div class="flex items-start justify-center">
      <div class="tw-mt-10">
        <q-img
          src="~assets/logo.png"
          fit="contain"
          spinner-color="white"
          style="height: 140px;"
          class="q-mb-md"
        />
        <div
          v-if="formIsLoading"
          class="tw-w-[300px] tw-flex tw-justify-center"
        >
          <q-spinner
            color="primary"
            size="3em"
          />
        </div>
        <form
          v-else
          class="tw-w-[300px]"
          @submit.prevent="onSubmitForm"
        >
          <input-text-component
            v-model="form.fullname"
            label="FULL_NAME"
          />
          <input-text-component
            v-model="form.email"
            label="EMAIL"
          />
          <input-password-component
            v-model="form.password"
            label="PASSWORD"
          />
          <button-component
            type="submit"
            label="SIGN_UP"
            primary
          />
          <button-component
            :to="{name: 'login'}"
            label="GO_BACK"
            flat
            primary
          />
        </form>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import ButtonComponent from 'src/components/ButtonComponent.vue';
import InputPasswordComponent from 'src/components/InputPasswordComponent.vue';
import InputTextComponent from 'src/components/InputTextComponent.vue';
import { ref, reactive } from 'vue';
import { useRouter } from 'vue-router';
import { useAuthStore } from '../../stores/AuthStore';

const router = useRouter();
const AuthStore = useAuthStore();

const formIsLoading = ref(false);

const form = reactive({
  fullname: 'Carlos Barreto',
  email: 'carlosbarreto.eng@gmail.com',
  password: 'carlos',
});

const onSubmitForm = () => {
  try {
    formIsLoading.value = true;
    AuthStore.createUser(form.fullname, form.email, form.password)
      .then(() => {
        router.push({ name: 'verify_email' });
      });
  } catch (error) {
    console.log(error);
  } finally {
    formIsLoading.value = false;
  }
};
</script>
