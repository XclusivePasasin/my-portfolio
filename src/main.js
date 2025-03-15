import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import * as components from 'vuetify/components' 
import * as directives from 'vuetify/directives'
import 'vuetify/styles' 
import '@mdi/font/css/materialdesignicons.css'
import { createVuetify } from 'vuetify'
import 'vuetify/styles'

import App from './App.vue'
import router from './router'

const vuetify = createVuetify({
    components,
    directives,
    icons: {
        defaultSet: 'mdi', 
    },
    theme: {
      defaultTheme: 'dark', 
      themes: {
        light: {
          colors: {
            primary: '#4FC3F7',
            secondary: '#424242',
            accent: '#82B1FF',
            success: '#4CAF50',
            error: '#FF5252',
            warning: '#FFC107',
            info: '#4FC3F7',
            gray: '#B0B3B6',
            purple: '#787CB5',
            mixin: '#FFFFFF', 
          },
        },
        dark: {
          colors: {
            primary: '#424242',
            secondary: '#4FC3F7',
            accent: '#FF4081',
            success: '#4CAF50',
            error: '#CF6679',
            warning: '#FFC107',
            info: '#2196F3',
            gray: '#B0B3B6',
            purple: '#B0B3D6',
            mixin: '#424242',
          },
        },
      },
    },
  })
const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(vuetify) 

app.mount('#app')
