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

        <q-toolbar-title>
          Milieudefensie
        </q-toolbar-title>

      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      bordered
    >
      <q-list>
        <q-item-label
          header
        >
          Uitleg
        </q-item-label>
        <EssentialLink
          v-bind="{title: 'README!', icon: 'home', link: '/'}"
        />
        <q-item-label
          header
        >
          Concept versies:
        </q-item-label>

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
import { defineComponent, ref } from 'vue'
import EssentialLink from 'components/EssentialLink.vue'

const linksList = [
  {
    title: 'Laagdrempelig formulier OK',
    caption: 'Formulier voor Operatie Klimaat op Doe Mee pagina zelf.',
    link: '/1',
    icon: 'email',
  },
  {
    title: 'OK uitgelicht',
    caption: 'Operatie Klimaat krijgt iets meer aandacht.',
    link: '/2',
    icon: 'star'
  },
  {
    title: 'Geen focus',
    caption: 'Alle handelingsperspectieven krijgen evenveel aandacht.',
    link: '/3',
    icon: 'view_column'
  },
]

export default defineComponent({
  name: 'MainLayout',

  components: {
    EssentialLink
  },

  setup () {
    const leftDrawerOpen = ref(false)

    return {
      essentialLinks: linksList,
      leftDrawerOpen,
      toggleLeftDrawer () {
        leftDrawerOpen.value = !leftDrawerOpen.value
      }
    }
  }
})
</script>
