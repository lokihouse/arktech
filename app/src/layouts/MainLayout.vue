<template>
  <q-layout view="hhh Lpr lFf">
    <q-header>
      <q-toolbar>
        <q-btn
          flat
          round
          dense
          icon="menu"
          @click="toggleDrawer"
        />
        <q-toolbar-title>
          <LogoHorizontalComponent />
        </q-toolbar-title>
        <button @click="logout">
          OUT
        </button>
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="drawer"
      show-if-above

      :mini="miniState"

      :width="calculateDrawerWidth"
      :breakpoint="500"
      bordered

      @mouseover="miniState = false"
      @mouseout="miniState = true"
    >
      <q-scroll-area class="fit">
        <q-list padding>
          <q-item
            v-ripple
            clickable
          >
            <q-item-section avatar>
              <q-icon name="inbox" />
            </q-item-section>

            <q-item-section>
              Inbox
            </q-item-section>
          </q-item>
        </q-list>
      </q-scroll-area>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script setup lang="ts">
import { useAuthStore } from 'src/stores/AuthStore';
import { computed, ref } from 'vue';
import { useRouter } from 'vue-router';
import { dom } from 'quasar';

import LogoHorizontalComponent from '../components/LogoHorizontalComponent.vue';

const authStore = useAuthStore();
const router = useRouter();

const drawer = ref(false);
const miniState = ref(true);

const setDrawer = (state: boolean) => {
  drawer.value = state;
};

const toggleDrawer = () => setDrawer(!drawer.value);

const calculateDrawerWidth = computed(() => {
  const DomElement = document.getElementById('bodyApp') as Element;
  console.log();
  return dom.width(DomElement) < 500 ? dom.width(DomElement) : 200;
});

const logout = () => {
  authStore.logOut().then((value: unknown) => {
    console.log('tudo certinho', value);
    router.push({ name: 'login' });
  });
};
</script>
