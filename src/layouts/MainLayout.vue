<template>
  <q-layout view="lHh Lpr lFf">
    <q-header class="bg-accent text-black">
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="toggleLeftDrawer"
        />

        <q-toolbar-title> Milieudefensie </q-toolbar-title>
      </q-toolbar>
    </q-header>

    <q-drawer v-model="leftDrawerOpen" show-if-above bordered>
      <q-list>
        <q-item-label header> Uitleg </q-item-label>
        <q-item
          href="https://pitch.com/public/143c8428-5478-47af-83a5-6ec73d1a0906"
          target="_blank"
        >
          <q-item-section avatar>
            <q-avatar icon="info" />
          </q-item-section>
          <q-item-section>PRESENTATIE</q-item-section>
        </q-item>

        <q-item-label header> Concept versies: </q-item-label>

        <EssentialLink
          v-for="link in essentialLinks"
          :key="link.title"
          v-bind="link"
        />
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { defineComponent, ref } from "vue";
import EssentialLink from "components/EssentialLink.vue";

const linksList = [
  {
    title: "Versie 1",
    caption: "Formulier voor Operatie Klimaat op Doe Mee pagina zelf.",
    link: "/",
    icon: "email",
  },
  {
    title: "Versie 2",
    caption: "Operatie Klimaat krijgt iets meer aandacht.",
    link: "/2",
    icon: "star",
  },
  {
    title: "Versie 3",
    caption: "Alle handelingsperspectieven krijgen evenveel aandacht.",
    link: "/3",
    icon: "view_column",
  },
];

export default defineComponent({
  name: "MainLayout",

  components: {
    EssentialLink,
  },

  setup() {
    const leftDrawerOpen = ref(false);

    return {
      essentialLinks: linksList,
      leftDrawerOpen,
      toggleLeftDrawer() {
        leftDrawerOpen.value = !leftDrawerOpen.value;
      },
    };
  },
});
</script>
