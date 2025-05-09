<template>
  <v-container class="container h-100">
    <v-row justify="center">
      <v-col cols="12" sm="12" md="10" lg="12">
        <!-- 📌 Carta Padre -->
        <v-card>
          <v-row no-gutters>
            <!-- 📌 Columna Izquierda (Perfil, fondo azul) -->
            <v-col cols="12" sm="12" md="4">
              <v-card class="pa-4 bg-primary text-white h-100 section-one" elevation="0">
                <v-avatar size="120" class="mb-4">
                  <img src="https://i.pinimg.com/236x/a8/78/00/a87800206799426f5a03785aea5141ad.jpg" width="105%" alt="Avatar" />
                </v-avatar>
                <h3 class="text-white">Antonio Pasasin</h3>
                <p class="text-white">Backend y Frontend Developer</p>

                <div class="d-flex justify-center mt-2 text-white icon-container">
                   <!-- LinkedIn -->
                  <v-btn icon href="https://www.linkedin.com/in/antonio-pasasin-66684a268/" variant="text" target="_blank" class="icon-btn-linkedin">
                    <v-icon>mdi-linkedin</v-icon>
                  </v-btn>

                  <!-- GitHub -->
                  <v-btn icon href="https://github.com/XclusivePasasin" variant="text" target="_blank" class="icon-btn-github">
                    <v-icon>mdi-github</v-icon>
                  </v-btn>

                  <!-- Instagram -->
                  <v-btn icon href="https://www.instagram.com/pasasin.py?igsh=OXIwaWszMHk3anh3" variant="text" target="_blank" class="icon-btn-instagram">
                    <v-icon>mdi-instagram</v-icon>
                  </v-btn>
                </div>

                <v-btn class="mt-4" rounded="xl" color="white" variant="outlined" @click="downloadCV">
                  Descargar CV
                </v-btn>
              </v-card>
            </v-col>

            <!-- 📌 Columna Derecha (Información con scroll) -->
            <v-col cols="12" sm="12" md="8">
              <v-card class="pa-4 h-100 scrollable-content" elevation="0">
                <!-- 📌 Sección: Sobre mí -->
                <v-card-title class="text-h6 text-content">
                  <strong>Sobre <span class="text-info">Mí</span></strong>
                </v-card-title>
                <v-card-text class="text-justify text-body-1">
                  <p>
                    Apasionado por la tecnología y la creación de soluciones innovadoras, con experiencia en el desarrollo de aplicaciones web modernas y escalables. Especializado en Python para la creación de microservicios y APIs robustas utilizando Flask, así como en la automatización de procesos mediante scripting en Python.
                    <br>
                  </p>
                </v-card-text>  

                  <!-- 📌 Sección: Habilidades -->
                  <v-card-title class="text-h6 mt-4 text-content">
                    <strong class="text-content">Habilidades</strong>
                  </v-card-title>
                  <div class="mt-2">
                  <div class="skills-carousel">
                    <div class="skills-track">
                        <v-chip small color="info" class="ma-1">MySQL</v-chip>
                      <v-chip small color="info" class="ma-1">Trabajo en equipo</v-chip>
                      <v-chip small color="info" class="ma-1">SQL</v-chip>
                        <v-chip small color="info" class="ma-1">Report Builder</v-chip>
                        <v-chip small color="info" class="ma-1">Análisis de datos</v-chip>
                        <v-chip small color="info" class="ma-1">Optimización de consultas</v-chip>
                        <v-chip small color="info" class="ma-1">Diseño de bases de datos</v-chip>
                        <v-chip small color="info" class="ma-1">Gestión de proyectos</v-chip>
                        <!-- Duplicar para efecto infinito -->
                        <v-chip small color="info" class="ma-1">MySQL</v-chip>
                      <v-chip small color="info" class="ma-1">Trabajo en equipo</v-chip>
                      <v-chip small color="info" class="ma-1">SQL</v-chip>
                        <v-chip small color="info" class="ma-1">Report Builder</v-chip>
                        <v-chip small color="info" class="ma-1">Análisis de datos</v-chip>
                        <v-chip small color="info" class="ma-1">Optimización de consultas</v-chip>
                        <v-chip small color="info" class="ma-1">Diseño de bases de datos</v-chip>
                        <v-chip small color="info" class="ma-1">Gestión de proyectos</v-chip>
                      </div>
                    </div>
                  </div>

                  <!-- 📌 Sección: Lenguajes de programación -->
                  <v-card-title class="text-h6 mt-4 text-content">
                    <strong>Lenguajes de Programación</strong>
                  </v-card-title>
                  <v-row>
                    <v-col>
                      <v-list>
                    <v-list-item>
                      <v-list-item-icon>
                        <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 1052 1052"><path fill="#f0db4f" d="M0 0h1052v1052H0z"/><path d="M965.9 801.1c-7.7-48-39-88.3-131.7-125.9-32.2-14.8-68.1-25.399-78.8-49.8-3.8-14.2-4.3-22.2-1.9-30.8 6.9-27.9 40.2-36.6 66.6-28.6 17 5.7 33.1 18.801 42.8 39.7 45.4-29.399 45.3-29.2 77-49.399-11.6-18-17.8-26.301-25.4-34-27.3-30.5-64.5-46.2-124-45-10.3 1.3-20.699 2.699-31 4-29.699 7.5-58 23.1-74.6 44-49.8 56.5-35.6 155.399 25 196.1 59.7 44.8 147.4 55 158.6 96.9 10.9 51.3-37.699 67.899-86 62-35.6-7.4-55.399-25.5-76.8-58.4-39.399 22.8-39.399 22.8-79.899 46.1 9.6 21 19.699 30.5 35.8 48.7 76.2 77.3 266.899 73.5 301.1-43.5 1.399-4.001 10.6-30.801 3.199-72.101zm-394-317.6h-98.4c0 85-.399 169.4-.399 254.4 0 54.1 2.8 103.7-6 118.9-14.4 29.899-51.7 26.2-68.7 20.399-17.3-8.5-26.1-20.6-36.3-37.699-2.8-4.9-4.9-8.7-5.601-9-26.699 16.3-53.3 32.699-80 49 13.301 27.3 32.9 51 58 66.399 37.5 22.5 87.9 29.4 140.601 17.3 34.3-10 63.899-30.699 79.399-62.199 22.4-41.3 17.6-91.3 17.4-146.6.5-90.2 0-180.4 0-270.9z" fill="#323330"/></svg>
                      </v-list-item-icon>
                      <v-list-item-content>
                        <v-progress-linear model-value="35" width="20" color="warning"></v-progress-linear>
                      </v-list-item-content>
                    </v-list-item>
                    <v-list-item>
                      <v-list-item-icon>
                        <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="none" viewBox="16 16 32 32"><path fill="url(#a)" d="M31.885 16c-8.124 0-7.617 3.523-7.617 3.523l.01 3.65h7.752v1.095H21.197S16 23.678 16 31.876c0 8.196 4.537 7.906 4.537 7.906h2.708v-3.804s-.146-4.537 4.465-4.537h7.688s4.32.07 4.32-4.175v-7.019S40.374 16 31.885 16zm-4.275 2.454a1.394 1.394 0 1 1 0 2.79 1.393 1.393 0 0 1-1.395-1.395c0-.771.624-1.395 1.395-1.395z"/><path fill="url(#b)" d="M32.115 47.833c8.124 0 7.617-3.523 7.617-3.523l-.01-3.65H31.97v-1.095h10.832S48 40.155 48 31.958c0-8.197-4.537-7.906-4.537-7.906h-2.708v3.803s.146 4.537-4.465 4.537h-7.688s-4.32-.07-4.32 4.175v7.019s-.656 4.247 7.833 4.247zm4.275-2.454a1.393 1.393 0 0 1-1.395-1.395 1.394 1.394 0 1 1 1.395 1.395z"/><defs><linearGradient id="a" x1="19.075" x2="34.898" y1="18.782" y2="34.658" gradientUnits="userSpaceOnUse"><stop stop-color="#387EB8"/><stop offset="1" stop-color="#366994"/></linearGradient><linearGradient id="b" x1="28.809" x2="45.803" y1="28.882" y2="45.163" gradientUnits="userSpaceOnUse"><stop stop-color="#FFE052"/><stop offset="1" stop-color="#FFC331"/></linearGradient></defs></svg>
                      </v-list-item-icon>
                      <v-list-item-content>
                        <v-progress-linear model-value="55" width="20" color="info"></v-progress-linear>
                      </v-list-item-content>
                    </v-list-item>
                    <v-list-item>
                      <v-list-item-icon>
                        <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 -1 100 50"><path fill="#787CB5" d="M7.579 10.123h14.204c4.169.035 7.19 1.237 9.063 3.604 1.873 2.367 2.491 5.6 1.855 9.699-.247 1.873-.795 3.71-1.643 5.512a16.385 16.385 0 01-3.392 4.876c-1.767 1.837-3.657 3.003-5.671 3.498a26.11 26.11 0 01-6.254.742h-6.36l-2.014 10.07H0l7.579-38.001m6.201 6.042l-3.18 15.9c.212.035.424.053.636.053h.742c3.392.035 6.219-.3 8.48-1.007 2.261-.742 3.781-3.321 4.558-7.738.636-3.71 0-5.848-1.908-6.413-1.873-.565-4.222-.83-7.049-.795-.424.035-.83.053-1.219.053h-1.113l.053-.053M41.093 0h7.314L46.34 10.123h6.572c3.604.071 6.289.813 8.056 2.226 1.802 1.413 2.332 4.099 1.59 8.056l-3.551 17.649h-7.42L54.979 21.2c.353-1.767.247-3.021-.318-3.763s-1.784-1.113-3.657-1.113l-5.883-.053-4.346 21.783h-7.314L41.093 0M70.412 10.123h14.204c4.169.035 7.19 1.237 9.063 3.604 1.873 2.367 2.491 5.6 1.855 9.699-.247 1.873-.795 3.71-1.643 5.512a16.385 16.385 0 01-3.392 4.876c-1.767 1.837-3.657 3.003-5.671 3.498a26.11 26.11 0 01-6.254.742h-6.36L70.2 48.124h-7.367l7.579-38.001m6.201 6.042l-3.18 15.9c.212.035.424.053.636.053h.742c3.392.035 6.219-.3 8.48-1.007 2.261-.742 3.781-3.321 4.558-7.738.636-3.71 0-5.848-1.908-6.413-1.873-.565-4.222-.83-7.049-.795-.424.035-.83.053-1.219.053H76.56l.053-.053"/></svg>
                      </v-list-item-icon>
                      <v-list-item-content>
                        <v-progress-linear model-value="40" width="20" color="purple"></v-progress-linear>
                      </v-list-item-content>
                    </v-list-item>
                    <v-list-item>
                      <v-list-item-icon>
                        <svg viewBox="0 0 48 48"  xmlns="http://www.w3.org/2000/svg" width="40" height="40"><path fill="#cfd8dc" d="M23.084 11.277c-1.633-2.449-1.986-5.722-2.063-7.067-4.148.897-8.269 2.506-8.031 3.691.03.149.218.328.53.502l-.488.873c-.596-.334-.931-.719-1.022-1.179-.269-1.341 1.25-2.554 4.642-3.709a42.152 42.152 0 0 1 4.751-1.279l.597-.12V3.6c0 .042.026 4.288 1.916 7.123l-.832.554zM24.751 43H24.5c-8.192 0-17.309-2.573-18.386-6.879-.657-2.63 1.492-5.536 6.214-8.401l.52.854c-4.249 2.579-6.296 5.172-5.763 7.305.935 3.738 9.575 6.068 17.153 6.12.901-1.347 5.742-9.26 2.979-19.873l.967-.252c3.149 12.092-3.218 20.837-3.282 20.924l-.151.202z"/><path fill="#cfd8dc" d="M9.931 39.306c-.539 0-.806-.059-.85-.07a.498.498 0 0 1-.233-.84c.072-.072 7.197-7.208 8.159-12.978l.986.164c-.827 4.964-5.715 10.623-7.656 12.707 1.939-.111 6.835-1.019 16.234-6.28-7.335-.804-8.495-6.676-8.507-6.739l.983-.181c.047.246 1.226 6.011 9.244 6.011h.008a.5.5 0 0 1 .251.933c-11.235 6.509-16.683 7.272-18.619 7.273z"/><path fill="#cfd8dc" d="M14.524 41.7a.499.499 0 0 1-.291-.907c.034-.025 1.813-1.338 3.706-4.228a19.896 19.896 0 0 1-2.196-1.137c-.888-.533-1.559-1.105-2.06-1.691-2.57.678-4.942.946-7.025.769l.084-.996c1.876.159 4.009-.063 6.321-.64-1.573-2.688-.129-5.356-.109-5.392l.874.487c-.067.122-1.265 2.37.249 4.633 2.201-.632 4.549-1.567 6.979-2.782a32.189 32.189 0 0 0 1.225-6.276.501.501 0 0 1 .706-.406c.032.015 3.264 1.491 5.604 2.454a.5.5 0 0 1 .091.876 62.494 62.494 0 0 1-6.778 4.042 27.19 27.19 0 0 1-2.459 5.591c3.702 1.383 6.915 1.404 6.956 1.404a.5.5 0 0 1 .243.938c-4.54 2.522-11.767 3.232-12.072 3.261h-.048zm4.385-4.733c-1.04 1.614-2.062 2.773-2.826 3.53 1.998-.294 5.501-.938 8.408-2.139a23.733 23.733 0 0 1-5.582-1.391zm-4.142-3.536c.393.392.883.775 1.49 1.14.736.442 1.483.817 2.22 1.135a26.116 26.116 0 0 0 2.142-4.568c-2.021.962-3.983 1.73-5.852 2.293zm8.435-9.102a33.95 33.95 0 0 1-.913 4.85 62.45 62.45 0 0 0 5.062-3.026 207.1 207.1 0 0 1-4.149-1.824zM17.924 10.6a.504.504 0 0 1-.325-.12c-1.61-1.378-3.505-4.182-3.585-4.301a.5.5 0 0 1 .654-.718c.011.003.938.385 7.217 1.431a.499.499 0 0 1 .29.828c-1.758 1.953-3.979 2.813-4.073 2.848a.527.527 0 0 1-.178.032zm-2.277-3.854c.631.849 1.54 1.996 2.372 2.769a11.186 11.186 0 0 0 2.744-1.798c-2.583-.441-4.159-.755-5.116-.971z"/><path fill="#b71c1c" d="M21.843 24.4a.5.5 0 0 1-.497-.552c.292-2.749-3.926-3.852-3.969-3.862a.5.5 0 0 1-.23-.838c.207-.207 5.139-5.098 11.327-7.784a.5.5 0 0 1 .689.559c-1.186 5.744-6.71 12.044-6.944 12.309a.51.51 0 0 1-.376.168zm-3.388-5.115c1.184.445 3.258 1.475 3.783 3.356 1.449-1.808 4.542-5.973 5.697-9.934-4.387 2.11-8.081 5.292-9.48 6.578z"/><path fill="#b71c1c" d="M18.05 18.5c0 4.38-3.65 7.86-6.28 10.4-.44.43-1.93.5-1.93.5.37-.38.79-.78 1.24-1.21 2.5-2.42 5.97-5.73 5.97-9.69 0-4.69-1.89-6.54-3.38-8.02-.66-.67-1.22-1.31-1.56-2.09l.31-.13c.34.15.73.32 1.03.45.24.35.56.69.93 1.06 1.53 1.53 3.67 3.63 3.67 8.73z"/><path fill="#b71c1c" d="M42.935 19.794s-.605.086-.775.106c-8.76.97-17.8 3.49-22.97 5.56-1.87.75-3.81 1.66-5.58 2.68-.01.01-.02.01-.04.02-1.04.6-3.57 1.84-5.62 2.93 3-3.19 8.62-5.65 10.86-6.55 5.07-2.03 13.78-4.48 22.35-5.53-1.01-1.18-3.48-3.68-8.34-5.54-2.84-1.1-7.16-1.72-10.97-2.27-6.06-.87-9.51-1.45-9.84-3.1-.07-.33-.02-.66.13-.98.33.54.8.92 1.11 1.14.15.1.26.16.3.18l.01.01c1.42.75 5.25 1.3 8.44 1.76 3.86.56 8.23 1.19 11.18 2.32 6.87 2.65 9.24 6.44 9.34 6.6.09.15.415.664.415.664z"/></svg>
                      </v-list-item-icon>
                      <v-list-item-content>
                        <v-progress-linear model-value="45" width="20" color="error"></v-progress-linear>
                      </v-list-item-content>
                    </v-list-item>
                    <v-list-item>
                      <v-list-item-icon>
                        <svg xmlns="http://www.w3.org/2000/svg" width="27.77" height="32" viewBox="0 0 256 295"><defs><linearGradient id="logosLinuxTux0" x1="48.548%" x2="51.047%" y1="115.276%" y2="41.364%"><stop offset="0%" stop-color="#FFEED7"/><stop offset="100%" stop-color="#BDBFC2"/></linearGradient><linearGradient id="logosLinuxTux1" x1="54.407%" x2="46.175%" y1="2.404%" y2="90.542%"><stop offset="0%" stop-color="#FFF" stop-opacity=".8"/><stop offset="100%" stop-color="#FFF" stop-opacity="0"/></linearGradient><linearGradient id="logosLinuxTux2" x1="51.86%" x2="47.947%" y1="88.248%" y2="9.748%"><stop offset="0%" stop-color="#FFEED7"/><stop offset="100%" stop-color="#BDBFC2"/></linearGradient><linearGradient id="logosLinuxTux3" x1="49.925%" x2="49.924%" y1="85.49%" y2="13.811%"><stop offset="0%" stop-color="#FFEED7"/><stop offset="100%" stop-color="#BDBFC2"/></linearGradient><linearGradient id="logosLinuxTux4" x1="53.901%" x2="45.956%" y1="3.102%" y2="93.895%"><stop offset="0%" stop-color="#FFF" stop-opacity=".65"/><stop offset="100%" stop-color="#FFF" stop-opacity="0"/></linearGradient><linearGradient id="logosLinuxTux5" x1="45.593%" x2="54.811%" y1="5.475%" y2="93.524%"><stop offset="0%" stop-color="#FFF" stop-opacity=".65"/><stop offset="100%" stop-color="#FFF" stop-opacity="0"/></linearGradient><linearGradient id="logosLinuxTux6" x1="49.984%" x2="49.984%" y1="89.845%" y2="40.632%"><stop offset="0%" stop-color="#FFEED7"/><stop offset="100%" stop-color="#BDBFC2"/></linearGradient><linearGradient id="logosLinuxTux7" x1="53.505%" x2="42.746%" y1="99.975%" y2="23.545%"><stop offset="0%" stop-color="#FFEED7"/><stop offset="100%" stop-color="#BDBFC2"/></linearGradient><linearGradient id="logosLinuxTux8" x1="49.841%" x2="50.241%" y1="13.229%" y2="94.673%"><stop offset="0%" stop-color="#FFF" stop-opacity=".8"/><stop offset="100%" stop-color="#FFF" stop-opacity="0"/></linearGradient><linearGradient id="logosLinuxTux9" x1="49.927%" x2="50.727%" y1="37.327%" y2="92.782%"><stop offset="0%" stop-color="#FFF" stop-opacity=".65"/><stop offset="100%" stop-color="#FFF" stop-opacity="0"/></linearGradient><linearGradient id="logosLinuxTuxa" x1="49.876%" x2="49.876%" y1="2.299%" y2="81.204%"><stop offset="0%" stop-color="#FFF" stop-opacity=".65"/><stop offset="100%" stop-color="#FFF" stop-opacity="0"/></linearGradient><linearGradient id="logosLinuxTuxb" x1="49.833%" x2="49.824%" y1="2.272%" y2="71.799%"><stop offset="0%" stop-color="#FFF" stop-opacity=".65"/><stop offset="100%" stop-color="#FFF" stop-opacity="0"/></linearGradient><linearGradient id="logosLinuxTuxc" x1="53.467%" x2="38.949%" y1="48.921%" y2="98.1%"><stop offset="0%" stop-color="#FFA63F"/><stop offset="100%" stop-color="#FF0"/></linearGradient><linearGradient id="logosLinuxTuxd" x1="52.373%" x2="47.579%" y1="143.009%" y2="-64.622%"><stop offset="0%" stop-color="#FFEED7"/><stop offset="100%" stop-color="#BDBFC2"/></linearGradient><linearGradient id="logosLinuxTuxe" x1="30.581%" x2="65.887%" y1="34.024%" y2="89.175%"><stop offset="0%" stop-color="#FFA63F"/><stop offset="100%" stop-color="#FF0"/></linearGradient><linearGradient id="logosLinuxTuxf" x1="59.572%" x2="48.361%" y1="-17.216%" y2="66.118%"><stop offset="0%" stop-color="#FFF" stop-opacity=".65"/><stop offset="100%" stop-color="#FFF" stop-opacity="0"/></linearGradient><linearGradient id="logosLinuxTuxg" x1="47.769%" x2="51.373%" y1="1.565%" y2="104.313%"><stop offset="0%" stop-color="#FFF" stop-opacity=".65"/><stop offset="100%" stop-color="#FFF" stop-opacity="0"/></linearGradient><linearGradient id="logosLinuxTuxh" x1="43.55%" x2="57.114%" y1="4.533%" y2="92.827%"><stop offset="0%" stop-color="#FFF" stop-opacity=".65"/><stop offset="100%" stop-color="#FFF" stop-opacity="0"/></linearGradient><linearGradient id="logosLinuxTuxi" x1="49.733%" x2="50.558%" y1="17.609%" y2="99.385%"><stop offset="0%" stop-color="#FFA63F"/><stop offset="100%" stop-color="#FF0"/></linearGradient><linearGradient id="logosLinuxTuxj" x1="50.17%" x2="49.68%" y1="2.89%" y2="94.17%"><stop offset="0%" stop-color="#FFF" stop-opacity=".65"/><stop offset="100%" stop-color="#FFF" stop-opacity="0"/></linearGradient><filter id="logosLinuxTuxk" width="200%" height="200%" x="-50%" y="-50%" filterUnits="objectBoundingBox"><feOffset in="SourceAlpha" result="shadowOffsetOuter1"/><feGaussianBlur in="shadowOffsetOuter1" result="shadowBlurOuter1" stdDeviation="6.5"/></filter></defs><g fill="none"><path fill="#000" fill-opacity=".2" d="M235.125 249.359c0 17.355-52.617 31.497-117.54 31.497S.044 266.806.044 249.359c0-17.356 52.618-31.498 117.54-31.498c64.924 0 117.45 14.142 117.541 31.498" filter="url(#logosLinuxTuxk)" transform="translate(10)"/><path fill="#000" d="M63.213 215.474c-11.387-16.346-13.591-69.606 12.947-102.39C89.292 97.383 92.69 86.455 93.7 71.67c.734-16.805-11.846-66.851 35.537-70.616c48.027-3.857 45.364 43.526 45.088 68.596c-.183 21.12 15.52 33.15 26.355 49.68c19.927 30.303 18.274 82.461-3.765 110.745c-27.916 35.354-51.791 20.018-67.678 21.304c-29.752 1.745-30.762 17.54-66.024-35.905"/><path fill="url(#logosLinuxTux0)" d="M169.1 122.451c8.265 7.622 29.661 41.69-4.224 62.995c-11.937 7.438 10.653 35.721 21.488 22.039c19.193-24.61 6.98-63.913-4.591-77.963c-7.714-9.917-19.651-13.774-12.672-7.07" transform="translate(10)"/><path fill="#000" stroke="#000" stroke-width=".977" d="M176.805 117.86c13.59 11.02 38.292 49.587 2.204 74.748c-11.846 7.806 10.468 32.508 23.049 19.927c43.618-43.894-1.102-94.308-16.53-111.664c-13.774-15.151-25.987 3.49-8.723 16.989z"/><path fill="url(#logosLinuxTux1)" d="M147.245 25.02c-.459 12.581-14.325 23.51-30.946 24.52c-16.621 1.01-29.66-8.54-29.202-21.121c.46-12.581 14.326-23.509 30.947-24.519c16.62-.918 29.66 8.54 29.201 21.12" transform="translate(10)"/><path fill="url(#logosLinuxTux2)" d="M107.483 54.957c.46 8.173-3.397 15.06-8.723 15.335c-5.326.276-10.01-6.06-10.469-14.233c-.459-8.173 3.398-15.06 8.724-15.335c5.326-.276 10.01 6.06 10.468 14.233" transform="translate(10)"/><path fill="url(#logosLinuxTux3)" d="M117.125 55.6c.184 9.458 6.337 16.988 13.683 16.805c7.346-.184 13.131-7.99 12.948-17.54c-.184-9.458-6.336-16.988-13.683-16.804c-7.346.183-13.223 8.08-12.948 17.539" transform="translate(10)"/><path fill="#000" d="M133.186 57.712c-.092 5.234 2.48 9.458 5.877 9.458c3.306 0 6.153-4.224 6.245-9.366c.091-5.234-2.48-9.459-5.878-9.459c-3.397 0-6.152 4.225-6.244 9.367m-21.212.092c.459 4.316-1.194 7.989-3.582 8.356c-2.387.276-4.683-2.938-5.142-7.254c-.46-4.316 1.194-7.99 3.581-8.357c2.388-.275 4.684 2.939 5.143 7.255"/><path fill="url(#logosLinuxTux4)" d="M124.564 54.773c-.276 2.939 1.102 5.326 3.03 5.51c1.928.184 3.765-2.112 4.04-4.959c.276-2.938-1.102-5.326-3.03-5.51c-1.928-.183-3.765 2.113-4.04 4.96" transform="translate(10)"/><path fill="url(#logosLinuxTux5)" d="M99.953 55.508c.276 2.388-.734 4.5-2.203 4.683c-1.47.184-2.847-1.653-3.123-4.132c-.275-2.388.735-4.5 2.204-4.683c1.47-.184 2.847 1.744 3.122 4.132" transform="translate(10)"/><path fill="url(#logosLinuxTux6)" d="M71.027 145.684c6.52-14.785 20.386-40.772 20.662-60.883c0-15.978 47.843-19.835 51.7-3.856c3.856 15.978 13.59 39.853 19.834 51.424c6.245 11.478 24.335 48.118 5.051 80.074c-17.356 28.284-69.973 50.69-98.073-3.856c-9.55-18.917-7.806-42.333.826-62.903" transform="translate(10)"/><path fill="url(#logosLinuxTux7)" d="M65.15 134.664c-5.601 10.56-17.172 38.293 11.112 53.445c30.395 16.162 30.303 49.312-6.245 33.517c-33.425-14.233-18.641-71.902-9.274-85.676c6.06-9.642 15.243-21.488 4.407-1.286" transform="translate(10)"/><path fill="#000" stroke="#000" stroke-width="1.25" d="M79.925 122.727c-8.907 14.509-30.211 48.669-1.652 66.484c38.384 23.6 27.548 47.108-7.53 25.895c-49.404-29.568-5.97-89.257 13.774-112.03c22.59-25.529 4.316 4.683-4.592 19.65z"/><path fill="url(#logosLinuxTux8)" d="M156.428 151.285c0 16.162-15.519 37.1-42.15 36.916c-27.456.183-39.118-20.754-39.118-36.916c0-16.161 18.182-29.293 40.588-29.293c22.498.092 40.68 13.132 40.68 29.293" transform="translate(10)"/><path fill="url(#logosLinuxTux9)" d="M141.92 100.504c-.276 16.713-11.204 20.662-24.978 20.662c-13.775 0-23.784-2.48-24.978-20.662c0-11.387 11.203-17.998 24.978-17.998c13.774-.092 24.977 6.52 24.977 17.998" transform="translate(10)"/><path fill="url(#logosLinuxTuxa)" d="M58.63 126.216c9-13.682 28.008-34.711 3.582 2.939c-19.835 31.038-7.346 50.965-.918 56.474c18.549 16.53 17.814 27.64 3.214 18.917c-31.314-18.641-24.794-50.047-5.878-78.33" transform="translate(10)"/><path fill="url(#logosLinuxTuxb)" d="M188.936 131.818c-7.806-16.07-32.6-56.842 1.193-9.459c30.763 42.884 9.183 72.729 5.326 75.667c-3.856 2.939-16.804 8.908-13.04-1.469c3.858-10.377 22.958-30.028 6.52-64.74" transform="translate(10)"/><path fill="url(#logosLinuxTuxc)" stroke="#E68C3F" stroke-width="6.25" d="M51.835 258.542c-20.57-10.928-50.414 2.112-39.578-27.457c2.204-6.704-3.214-16.805.275-23.325c4.133-7.989 13.04-6.244 18.366-11.57c5.234-5.51 8.54-15.06 18.366-13.59c9.734 1.468 16.254 13.406 23.049 28.099c5.05 10.468 22.865 25.253 21.672 37.007c-1.47 17.998-21.948 21.396-42.15 10.836z" transform="translate(10)"/><path fill="url(#logosLinuxTuxd)" d="M201.608 189.119c-3.122 5.877-16.162 15.335-24.886 12.856c-8.815-2.388-12.856-15.795-11.111-25.988c1.653-11.386 11.111-12.03 23.05-6.336c12.855 6.336 16.712 11.662 12.947 19.468" transform="translate(10)"/><path fill="url(#logosLinuxTuxe)" stroke="#E68C3F" stroke-width="6.251" d="M194.445 253.49c15.06-18.273 48.578-14.508 25.988-39.577c-4.775-5.418-3.306-16.989-9.183-21.947c-6.887-6.061-14.509-1.102-21.488-4.224c-6.979-3.398-14.325-9.918-22.865-5.327c-8.54 4.684-9.459 16.805-10.285 32.783c-.735 11.479-11.203 30.671-5.602 41.231c8.081 16.346 29.11 14.142 43.435-2.938z" transform="translate(10)"/><path fill="url(#logosLinuxTuxf)" d="M187.925 229.064c23.325-34.435 5.97-34.16.092-36.823c-5.877-2.755-12.03-8.173-18.916-4.408c-6.888 3.857-7.255 13.775-7.439 26.814c-.275 9.367-8.08 25.07-3.397 33.793c5.693 10.193 19.467-4.591 29.66-19.376" transform="translate(10)"/><path fill="url(#logosLinuxTuxg)" d="M47.06 234.023c-34.895-22.59-18.55-30.303-13.315-33.885c6.336-4.591 6.428-13.407 14.233-12.58c7.806.826 12.397 10.468 17.631 22.406c3.857 8.54 17.264 19.927 16.254 29.753c-1.285 11.57-19.743 3.948-34.803-5.694" transform="translate(10)"/><path fill="#000" d="M209.588 188.843c-2.755 4.776-13.958 12.306-21.396 10.285c-7.622-1.928-11.112-12.672-9.55-20.753c1.377-9.183 9.55-9.642 19.834-5.05c10.928 4.958 14.326 9.182 11.112 15.518"/><path fill="url(#logosLinuxTuxh)" d="M192.058 186.18c-1.745 3.306-9.091 8.54-14.234 7.163c-5.142-1.377-7.713-8.815-6.887-14.417c.735-6.336 6.244-6.704 13.223-3.581c7.53 3.49 9.918 6.428 7.898 10.835" transform="translate(10)"/><path fill="url(#logosLinuxTuxi)" stroke="#E68C3F" stroke-width="3.75" d="M97.107 66.344c3.673-3.398 12.58-13.774 29.477-2.939c3.122 2.02 5.693 2.204 11.662 4.775c12.03 4.96 6.336 16.897-6.52 20.937c-5.51 1.745-10.468 8.449-20.386 7.806c-8.54-.46-10.744-6.06-15.978-9.091c-9.275-5.234-10.652-12.305-5.602-16.07c5.051-3.765 6.98-5.143 7.347-5.418z" transform="translate(10)"/><path stroke="#E68C3F" stroke-width="2.5" d="M148.43 75.986c-5.05.275-15.979 11.203-27.457 11.203c-11.479 0-18.386-10.652-20.11-10.652"/><path fill="url(#logosLinuxTuxj)" d="M102.8 65.426c1.837-1.653 7.622-6.153 15.244-1.562c1.653.919 3.306 1.929 5.693 3.306c4.867 2.847 2.48 6.98-3.398 9.55c-2.663 1.102-7.07 3.49-10.376 3.306c-3.673-.367-6.153-2.755-8.54-4.316c-4.5-2.938-4.224-5.418-2.112-7.346c1.56-1.47 3.305-2.847 3.49-2.938" transform="translate(10)"/></g></svg>
                      </v-list-item-icon>
                      <v-list-item-content>
                        <v-progress-linear model-value="35" width="20" color="gray"></v-progress-linear>
                      </v-list-item-content>
                    </v-list-item>
                    <v-list-item>
                      <v-list-item-icon>
                        <svg xmlns="http://www.w3.org/2000/svg" width="27.77" height="32" preserveAspectRatio="xMidYMid" viewBox="0 0 256 264">
                          <path d="m255.9 59.6.1 1.1v56.6c0 1.4-.8 2.8-2 3.5l-47.6 27.4v54.2c0 1.4-.7 2.8-2 3.5l-99.1 57-.7.4-.3.1c-.7.2-1.4.2-2.1 0l-.4-.1-.6-.3L2 206c-1.3-.8-2.1-2.2-2.1-3.6V32.7l.1-1.1.2-.4.3-.6.2-.4.4-.5.4-.3c.2 0 .3-.2.5-.3L51.6.6c1.3-.8 2.9-.8 4.1 0L105.3 29c.2 0 .3.2.4.3l.5.3c0 .2.2.4.3.5l.3.4.3.6.1.4.2 1v106l41.2-23.7V60.7c0-.4 0-.7.2-1l.1-.4.3-.7.3-.3.3-.5.5-.3.4-.4 49.6-28.5c1.2-.7 2.8-.7 4 0L254 57l.5.4.4.3.4.5.2.3c.2.2.2.5.3.7l.2.3Zm-8.2 55.3v-47l-17.3 10-24 13.7v47l41.3-23.7Zm-49.5 85v-47l-23.6 13.5-67.2 38.4v47.5l90.8-52.3ZM8.2 39.9V200l90.9 52.3v-47.5l-47.5-26.9-.4-.4c-.2 0-.3-.1-.4-.3l-.4-.4-.3-.4-.2-.5-.2-.5v-.6l-.2-.5V63.6L25.6 49.8l-17.3-10Zm45.5-31L12.4 32.8l41.3 23.7 41.2-23.7L53.7 8.9ZM75 157.3l24-13.8V39.8l-17.3 10-24 13.8v103.6l17.3-10ZM202.3 36.9 161 60.7l41.3 23.8 41.3-23.8-41.3-23.8Zm-4.1 54.7-24-13.8-17.3-10v47l24 13.9 17.3 10v-47Zm-95 106 60.6-34.5 30.2-17.3-41.2-23.8-47.5 27.4L62 174.3l41.2 23.3Z" fill="#FF2D20"/>
                        </svg>
                      </v-list-item-icon>
                      <v-list-item-content>
                        <v-progress-linear model-value="55" width="20" color="error"></v-progress-linear>
                      </v-list-item-content>
                    </v-list-item>
                    <v-list-item>
                      <v-list-item-icon>
                        <svg viewBox="0 0 256 221" width="25" height="25" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid"><path d="M204.8 0H256L128 220.8 0 0h97.92L128 51.2 157.44 0h47.36Z" fill="#41B883"/><path d="m0 0 128 220.8L256 0h-51.2L128 132.48 50.56 0H0Z" fill="#41B883"/><path d="M50.56 0 128 133.12 204.8 0h-47.36L128 51.2 97.92 0H50.56Z" fill="#35495E"/></svg>
                      </v-list-item-icon>
                      <v-list-item-content>
                        <v-progress-linear model-value="55" width="20" color="success"></v-progress-linear>
                      </v-list-item-content>
                    </v-list-item>
                    <v-list-item>
                      <v-list-item-icon>
                        <svg xmlns="http://www.w3.org/2000/svg" width="27.77" height="32" fill="none" viewBox="0 0 54 33"><g clip-path="url(#a)"><path fill="#38bdf8" fill-rule="evenodd" d="M27 0c-7.2 0-11.7 3.6-13.5 10.8 2.7-3.6 5.85-4.95 9.45-4.05 2.054.513 3.522 2.004 5.147 3.653C30.744 13.09 33.808 16.2 40.5 16.2c7.2 0 11.7-3.6 13.5-10.8-2.7 3.6-5.85 4.95-9.45 4.05-2.054-.513-3.522-2.004-5.147-3.653C36.756 3.11 33.692 0 27 0zM13.5 16.2C6.3 16.2 1.8 19.8 0 27c2.7-3.6 5.85-4.95 9.45-4.05 2.054.514 3.522 2.004 5.147 3.653C17.244 29.29 20.308 32.4 27 32.4c7.2 0 11.7-3.6 13.5-10.8-2.7 3.6-5.85 4.95-9.45 4.05-2.054-.513-3.522-2.004-5.147-3.653C23.256 19.31 20.192 16.2 13.5 16.2z" clip-rule="evenodd"/></g><defs><clipPath id="a"><path fill="#fff" d="M0 0h54v32.4H0z"/></clipPath></defs></svg>
                      </v-list-item-icon>
                      <v-list-item-content>
                        <v-progress-linear model-value="45" width="20" color="info"></v-progress-linear>
                      </v-list-item-content>
                    </v-list-item>
                    <v-list-item>
                      <v-list-item-icon>
                        <svg width="28" height="28" viewBox="0 0 54 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <g clip-path="url(#clip0_912_3)">
                          <path d="M13.3333 80.0002C20.6933 80.0002 26.6667 74.0268 26.6667 66.6668V53.3335H13.3333C5.97333 53.3335 0 59.3068 0 66.6668C0 74.0268 5.97333 80.0002 13.3333 80.0002Z" fill="#0ACF83"/>
                          <path d="M0 39.9998C0 32.6398 5.97333 26.6665 13.3333 26.6665H26.6667V53.3332H13.3333C5.97333 53.3332 0 47.3598 0 39.9998Z" fill="#A259FF"/>
                          <path d="M0 13.3333C0 5.97333 5.97333 0 13.3333 0H26.6667V26.6667H13.3333C5.97333 26.6667 0 20.6933 0 13.3333Z" fill="#F24E1E"/>
                          <path d="M26.6667 0H40.0001C47.3601 0 53.3334 5.97333 53.3334 13.3333C53.3334 20.6933 47.3601 26.6667 40.0001 26.6667H26.6667V0Z" fill="#FF7262"/>
                          <path d="M53.3334 39.9998C53.3334 47.3598 47.3601 53.3332 40.0001 53.3332C32.6401 53.3332 26.6667 47.3598 26.6667 39.9998C26.6667 32.6398 32.6401 26.6665 40.0001 26.6665C47.3601 26.6665 53.3334 32.6398 53.3334 39.9998Z" fill="#1ABCFE"/>
                          </g>
                          <defs>
                          <clipPath id="clip0_912_3">
                          <rect width="53.3333" height="80" fill="white"/>
                          </clipPath>
                          </defs>
                        </svg>
                      </v-list-item-icon>
                      <v-list-item-content>
                        <v-progress-linear model-value="25" width="20" color="info"></v-progress-linear>
                      </v-list-item-content>
                    </v-list-item>
                  </v-list>
                    </v-col>
                  </v-row>

                  <!-- 📌 Sección: Educación -->
                  <v-card-title class="text-h6 mt-4 text-content">
                    <strong>Educación</strong>
                  </v-card-title>
                  <v-container class="pa-0">
                    <v-row>
                      <!-- Tarjeta 1 -->
                      <v-col cols="12" sm="6" md="4" class="pa-2">
                        <v-card class="education-card text-content pa-4 bg-mixin" hover style="height: 100%;">
                          <v-card-title class="text-subtitle-1 font-weight-bold primary--text text-content">
                            <v-icon class="mr-1" color="info ">mdi-school</v-icon>
                            INTI
                          </v-card-title>
                          <v-card-subtitle class="text-body-2 grey--text text--darken-1 text-content">
                            2020 - 2022
                          </v-card-subtitle>
                          <v-card-text class="text-body-2 grey--text text--darken-2 text-content">
                            Técnico en Desarrollo de Software
                          </v-card-text>
                        </v-card>
                      </v-col>

                      <!-- Tarjeta 2 -->
                      <v-col cols="12" sm="6" md="4" class="pa-2">
                        <v-card class="education-card text-content pa-4 bg-mixin" hover style="height: 100%;">
                          <v-card-title class="text-subtitle-1 font-weight-bold primary--text text-content">
                            <v-icon class="mr-1" color="info">mdi-school</v-icon>
                            ITCA - FEPADE
                          </v-card-title>
                          <v-card-subtitle class="text-body-2 grey--text text--darken-1 text-content">
                            2023 - 2024
                          </v-card-subtitle>
                          <v-card-text class="text-body-2 grey--text text--darken-2 text-content">
                            Técnico en Ingeniería de Desarrollo de Software
                          </v-card-text>
                        </v-card>
                      </v-col>
                      <!-- Tarjeta 2 -->
                      <v-col cols="12" sm="6" md="4" class="pa-2">
                        <v-card class="education-card text-content pa-4 bg-mixin" hover style="height: 100%;">
                          <v-card-title class="text-subtitle-1 font-weight-bold primary--text text-content">
                            <v-icon class="mr-1" color="info">mdi-school</v-icon>
                            EASY - WAY
                          </v-card-title>
                          <v-card-subtitle class="text-body-2 grey--text text--darken-1 text-content">
                            2025 - Actualidad
                          </v-card-subtitle>
                          <v-card-text class="text-body-2 grey--text text--darken-2 text-content">
                           Nivel de ingles (A2), en constante aprendizaje.
                          </v-card-text>
                        </v-card>
                      </v-col>
                    </v-row>
                  </v-container>

             <!-- 📌 Sección: Experiencia Laboral -->
              <v-card-title class="text-h6 mt-4 text-content">
                <strong>Experiencia Laboral</strong>
              </v-card-title>
              <v-container class="pa-0">
                <v-row>
                  <!-- Tarjeta 1 -->
                  <v-col cols="12" sm="6" md="6" class="pa-2"> 
                    <v-card class="experience-card text-content pa-4 bg-mixin" hover style="height: 100%;">
                      <v-card-title class="text-subtitle-1 font-weight-bold primary--text text-content d-flex align-center">
                        <v-avatar size="40" class="mr-3" color="info">
                          <v-icon class="text-white">mdi-briefcase</v-icon>
                        </v-avatar>
                        Backend y Frontend Developer
                      </v-card-title>
                      <v-card-subtitle class="text-body-2 grey--text text--darken-1 text-content mt-2">
                        <v-icon small class="mr-1">mdi-office-building</v-icon>
                        Clobi Technologies
                      </v-card-subtitle>
                      <v-card-subtitle class="text-body-2 grey--text text--darken-1 text-content">
                        <v-icon small class="mr-1">mdi-calendar</v-icon>
                        Junio 2024 - Actualidad
                      </v-card-subtitle>
                      <v-card-text class="text-body-2 grey--text text--darken-2 text-content mt-3">
                        <ul class="pl-3">
                          <li>Diseño e implementación de APIs RESTful con Flask y Laravel.</li>
                          <li>Creación de interfaces de usuario con Vue.js, React y Tailwind CSS.</li>
                          <li>Automatización de procesos con scripts en Python.</li>
                          <li>Despliegue de aplicaciones con Docker.</li>
                          <li>Uso de herramientas como Git, GitHub y Postman, para desarrollo de forma colaborativa y pruebas unitarias.</li>
                        </ul>
                      </v-card-text>
                      <v-slide-group
                        class="pa-2"
                        active-class="success"
                        show-arrows
                      >
                        <v-slide-item
                          v-for="(chip, i) in ['Vue.js', 'Flask', 'Docker', 'Laravel', 'Linux', 'Tailwind', 'MySQL', 'React']"
                          :key="i"
                        >
                          <v-chip small color="info">{{ chip }}</v-chip>
                        </v-slide-item>
                      </v-slide-group>
                    </v-card>
                  </v-col>

                  <!-- Tarjeta 2 -->
                  <v-col cols="12" sm="6" md="6" class="pa-2"> 
                    <v-card class="experience-card text-content pa-4 bg-mixin" hover style="height: 100%;">
                      <v-card-title class="text-subtitle-1 font-weight-bold primary--text text-content d-flex align-center">
                        <v-avatar size="40" class="mr-3" color="info">
                          <v-icon class="text-white">mdi-briefcase</v-icon>
                        </v-avatar>
                        Database Administrator
                      </v-card-title>
                      <v-card-subtitle class="text-body-2 grey--text text--darken-1 text-content mt-2">
                        <v-icon small class="mr-1">mdi-office-building</v-icon>
                        Citylab
                      </v-card-subtitle>
                      <v-card-subtitle class="text-body-2 grey--text text--darken-1 text-content">
                        <v-icon small class="mr-1">mdi-calendar</v-icon>
                         Agosto 2022 - Diciembre 2022
                      </v-card-subtitle>
                      <v-card-text class="text-body-2 grey--text text--darken-2 text-content mt-3">
                        <ul class="pl-3">
                          <li>Generación de reportes utilizando SQL Server y Report Builder</li>
                          <li>Desarrollo y optimización de consultas SQL complejas</li>
                          <li>Colaboración en equipo para diseñar soluciones óptimas de bases de datos</li>
                          <li>Extracción y análisis de datos de múltiples tablas relacionadas</li>
                          <li>Aprendizaje y aplicación de sintaxis avanzada de SQL Server</li>
                        </ul>
                      </v-card-text>
                      <v-slide-group
                        class="pa-2"
                        active-class="success"
                        show-arrows
                      >
                        <v-slide-item
                          v-for="(chip, i) in ['MySQL', 'Trabajo en equipo', 'SQL', 'Report Builder']"
                          :key="i"
                        >
                          <v-chip small color="info">{{ chip }}</v-chip>
                        </v-slide-item>
                      </v-slide-group>
                    </v-card>
                  </v-col>
                </v-row>
              </v-container>
                <footer class="text-center pt-8 pb-3 text-content">
                <P>© Development by Antonio Pasasin 2025 - All rights reserved</P>
                </footer>
                </v-card>
              </v-col>
            </v-row>
          </v-card>
        </v-col>  
      </v-row>
    </v-container>
  </template>

<style scoped>
.h-100 {
  height: 100%;
}

.container {
  max-width: 100%;
}

.section-one {
  justify-content: center;
  align-items: center;
  display: flex;
  flex-direction: column;
}


.scrollable-content {
  max-height: 540px; /* Altura máxima para el contenido */
  overflow-y: auto; /* Habilitar scroll vertical */
  overflow-x: auto; /* Habilitar scroll horizontal */
  max-width: auto; /* Ancho máximo para activar el scroll horizontal */
  padding-right: 20px; /* Espacio para evitar que el scroll tape el contenido */
}

/* Estilo para el scrollbar */
.scrollable-content::-webkit-scrollbar {
  width: 8px;
  height: 8px;
}

.scrollable-content::-webkit-scrollbar-thumb {
  background-color: #888;
  border-radius: 4px;
}

.scrollable-content::-webkit-scrollbar-track {
  background-color: #f1f1f1;
} 

.skills-carousel {
  overflow: hidden; /* Oculta el desbordamiento del contenido */
  white-space: nowrap; /* Evita que los elementos se envuelvan */
  width: 100%; /* Ancho completo del contenedor */
}

.skills-track {
  display: inline-block; /* Muestra los elementos en línea */
  animation: scroll 20s linear infinite; /* Animación de desplazamiento */
}

.skills-track:hover {
  animation-play-state: paused;
}

@keyframes scroll {
  0% {
    transform: translateX(0); /* Comienza desde la posición inicial */
  }
  100% {
    transform: translateX(-50%); /* Desplaza hacia la izquierda */
  }
}

.education-card {
  height: 220x;
  border-radius: 12px; /* Bordes redondeados */
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2); /* Sombra suave */
  transition: transform 0.3s ease, box-shadow 0.3s ease; /* Transición suave */
}

.education-card:hover {
  transform: translateY(-5px); /* Efecto de elevación al pasar el mouse */
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2); /* Sombra más pronunciada */
}

.border-top {
  border-top: 1px solid #eee; /* Línea divisoria */
}

.v-chip {
  margin: 0 8px; /* Espaciado entre chips */
}

.text-content {
  color: #666666;
}

.v-theme--dark .text-content {
  color: white !important;
}
</style>

<script>
export default {
  methods: {
    downloadCV() {
      const fileUrl = '/CV_Eliazar_Rebollo.pdf';

      const link = document.createElement('a');
      link.href = fileUrl;
      link.download = 'CV_Eliazar_Rebollo.pdf';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    },
  },
}
</script>