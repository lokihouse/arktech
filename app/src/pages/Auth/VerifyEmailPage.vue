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
          class="tw-w-[300px]"
        >
          You will receive a email with a link to validade your registration.
          <button-component
            :to="{name: 'login'}"
            label="GO_BACK"
            flat
            primary
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import ButtonComponent from 'src/components/ButtonComponent.vue';
</script>
