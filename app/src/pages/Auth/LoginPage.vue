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
            v-model="form.email"
            label="EMAIL"
          />
          <input-password-component
            v-model="form.password"
            label="PASSWORD"
          />
          <button-component
            type="submit"
            label="SIGN_IN"
            primary
          />
          <button-component
            :to="{name: 'register'}"
            label="REGISTER"
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
import { useQuasar } from 'quasar';
import { useI18n } from 'vue-i18n';
import { useRouter } from 'vue-router';
import { useAuthStore } from '../../stores/AuthStore';

const router = useRouter();
const authStore = useAuthStore();
const $q = useQuasar();
const { t } = useI18n();

const formIsLoading = ref(false);

const form = reactive({
  email: 'carlosbarreto.eng@gmail.com',
  password: 'carlos',
});

const onSubmitForm = async () => {
  try {
    formIsLoading.value = true;
    await authStore.logIn(form.email, form.password);
    router.push({ name: 'dashboard' });
  } catch (error) {
    form.email = '';
    form.password = '';
    console.log(error);
    $q.notify({
      type: 'negative',
      message: t('ERROR.LOGIN_FAILURE'),
    });
  } finally {
    formIsLoading.value = false;
  }
};
</script>
