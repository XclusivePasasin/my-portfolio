<script setup>
import { RouterView } from 'vue-router'
import { useTheme } from 'vuetify'
import { ref, watch } from 'vue'

const theme = useTheme()
const isDark = ref(theme.global.name.value === 'dark') 

const toggleTheme = () => {
  theme.global.name.value = isDark.value ? 'dark' : 'light'
}

// Observa cambios en el tema global para actualizar el estado del switch
watch(
  () => theme.global.name.value,
  (newTheme) => {
    isDark.value = newTheme === 'dark'
  }
)
</script>

<template>
  <v-app id="app">
    <v-toolbar flat class="transparent">
      <v-toolbar-title class="ml-6 toolbar-title">Portfolio</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-switch
        v-model="isDark"
        @change="toggleTheme"
        inset
        hide-details
        :color="isDark ? 'grey' : 'light-blue'" 
        class="theme-switch mr-12"
      >
        <template v-slot:prepend>
          <v-icon size="12" :color="isDark ? 'grey' : 'light-blue'" class="icon-transition">
          </v-icon>
        </template>
        <template v-slot:append>
          <v-icon size="12" :color="isDark ? 'grey' : 'light-blue'" class="icon-transition">
          </v-icon>
        </template>
      </v-switch>
    </v-toolbar>
    <RouterView />
  </v-app>
</template>

<style scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  height: 100vh;
}

.toolbar-title {
  font-size: 26px;
  font-weight: medium;
}

.transparent {
  background-color: transparent !important;
  box-shadow: none !important;
}
</style>