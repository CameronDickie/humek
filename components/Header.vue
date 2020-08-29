<template>
  <header class="shadow-sm fixed bg-opacity-100" style="width:100%; z-index:99">
    <!-- <div class="bg-blue-300 py-1"></div> -->
    <nav class="flex items-center justify-between flex-wrap bg-white py-4 mx-auto px-4">
      <div class="block lg:hidden pt-1" @click="hidden = !hidden">
        <button id="nav-toggle" class="outline-none">
          <!-- <div class="h-1 bg-gray-300 w-8 mb-1 block mx-auto rounded-sm"></div>
          <div class="h-1 bg-gray-300 w-8 mb-1 block mx-auto rounded-sm"></div>
          <div class="h-1 bg-gray-300 w-8 mb-1 block mx-auto rounded-sm"></div>-->
          <i class="material-icons md-64 text-gray-900" v-bind:class="{ hidden: !hidden }">dehaze</i>
          <i class="material-icons md-64 text-gray-900" v-bind:class="{ hidden: hidden }">clear</i>
        </button>
      </div>
      <div class="flex items-center flex-shrink-0 mr-6">
        <h3
          class="xl:text-3xl lg:text-3xl md:text-3xl sm:text-2xl font-semibold capitalize dark:text-gray-300 hover:text-gray-800"
        >
          <!-- Header -->
          <span class>Communication Technology</span>
          <button class="ml-2" @click="showSubtitle = !showSubtitle">
            <svg class="h-5 w-5 fill-current" viewBox="0 0 256 512">
              <path
                d="M224.3 273l-136 136c-9.4 9.4-24.6 9.4-33.9
								0l-22.6-22.6c-9.4-9.4-9.4-24.6
								0-33.9l96.4-96.4-96.4-96.4c-9.4-9.4-9.4-24.6
								0-33.9L54.3 103c9.4-9.4 24.6-9.4 33.9 0l136
								136c9.5 9.4 9.5 24.6.1 34z"
              />
            </svg>
          </button>
        </h3>
      </div>

      <div class="flex items-center flex-shrink-0 text-black mr-6 hidden md:block">
        <!-- <a class="text-black no-underline hover:text-grey hover:no-underline pl-2" href="#">
          <div class="h-8 bg-gray-500 w-16 block mx-auto rounded-sm"></div>
          <h1>Dunns Famous</h1>
        </a>-->
        <div class="text-xl uppercase text-gray-400 font-bold">@ Craig Kielburger Secondary School</div>
      </div>
      <transition
        enter-class="opacity-0"
        enter-active-class="ease-out transition-medium"
        enter-to-class="opacity-100"
        leave-class="opacity-100"
        leave-active-class="ease-out transition-medium"
        leave-to-class="opacity-0"
      >
        <div
          @keydown.esc="hidden = true"
          v-show="!hidden"
          class="z-10 fixed inset-0 transition-opacity"
        >
          <div @click="hidden = true" class="absolute inset-0 bg-black opacity-50" tabindex="0"></div>
        </div>
      </transition>
      <aside
        class="transform top-0 left-0 w-64 bg-white fixed h-full overflow-auto ease-in-out transition-all duration-300 z-30"
        :class="!hidden ? 'translate-x-0' : '-translate-x-full'"
      >
        <ul class="list-reset justify-center pl-4 divide-y">
          <li class="mr-3 pb-1 pt-4">
            <button
              class="bg-transparent border-transparent text-lg text-gray-700 font-semibold py-1 px-1 rounded-lg outline-none uppercase transition durection-300 ease-in-out transform hover:-translate-y-1 hover:scale-101 cursor-pointer"
              @click="hidden = true"
            >
              <i class="material-icons md-64 text-gray-900">clear</i>
            </button>
          </li>
          <div class="divide-y">
            <li class="mr-3 pb-3 pt-3">
              <nuxt-link to="/test" class="border-none">
                <button
                  class="bg-transparent border-transparent text-lg text-gray-700 font-semibold py-1 px-1 rounded-lg outline-none uppercase transition durection-300 ease-in-out transform hover:-translate-y-1 hover:scale-101 cursor-pointer"
                  v-bind:class="{'border-gray-900 text-gray-900 double-line text-xl': $route.path == '/test'}"
                  @click="delayChange"
                >Safety Unit - All Courses</button>
              </nuxt-link>
            </li>
            <li class="mr-3 pb-3 pt-3">
              <nuxt-link to="/test" class="border-none">
                <button
                  class="bg-transparent border-transparent text-lg text-gray-700 font-semibold py-1 px-1 rounded-lg outline-none uppercase transition durection-300 ease-in-out transform hover:-translate-y-1 hover:scale-101 cursor-pointer"
                  v-bind:class="{'border-gray-900 text-gray-900 double-line text-xl': $route.path == '/test'}"
                  @click="delayChange"
                >TIJ101 - Grade 9 Comm-Tech</button>
              </nuxt-link>
            </li>
            <li class="mr-3 pb-3 pt-3">
              <nuxt-link to="/test" class="border-none">
                <button
                  class="bg-transparent border-transparent text-lg text-gray-700 font-semibold py-1 px-1 rounded-lg outline-none uppercase transition durection-300 ease-in-out transform hover:-translate-y-1 hover:scale-101 cursor-pointer"
                  v-bind:class="{'border-gray-900 text-gray-900 double-line text-xl': $route.path == '/test'}"
                  @click="delayChange"
                >TGJ201 - Grade 10 Comm-Tech</button>
              </nuxt-link>
            </li>
            <li class="mr-3 pb-3 pt-3">
              <nuxt-link to="/test" class="border-none">
                <button
                  class="bg-transparent border-transparent text-lg text-gray-700 font-semibold py-1 px-1 rounded-lg outline-none uppercase transition durection-300 ease-in-out transform hover:-translate-y-1 hover:scale-101 cursor-pointer"
                  v-bind:class="{'border-gray-900 text-gray-900 double-line text-xl': $route.path == '/test'}"
                  @click="delayChange"
                >TGJ301 - Grade 11 Comm-Tech</button>
              </nuxt-link>
            </li>
            <li class="mr-3 pb-3 pt-3">
              <nuxt-link to="/test" class="border-none">
                <button
                  class="bg-transparent border-transparent text-lg text-gray-700 font-semibold py-1 px-1 rounded-lg outline-none uppercase transition durection-300 ease-in-out transform hover:-translate-y-1 hover:scale-101 cursor-pointer"
                  v-bind:class="{'border-gray-900 text-gray-900 double-line text-xl': $route.path == '/test'}"
                  @click="delayChange"
                >TGJ401 - Grade 12 Comm-Tech</button>
              </nuxt-link>
            </li>
            <li class="mr-3 pb-3 pt-3">
              <nuxt-link to="/test" class="border-none">
                <button
                  class="bg-transparent border-transparent text-lg text-gray-700 font-semibold py-1 px-1 rounded-lg outline-none uppercase transition durection-300 ease-in-out transform hover:-translate-y-1 hover:scale-101 cursor-pointer"
                  v-bind:class="{'border-gray-900 text-gray-900 double-line text-xl': $route.path == '/test'}"
                  @click="delayChange"
                >ADV3M/4M - TGV3M/4M - Performance and Production</button>
              </nuxt-link>
            </li>
          </div>
        </ul>
      </aside>

      <!-- <div class="w-1/6 flex block pt-6" 
        v-bind:class="{hidden: hidden}">
        <ul class="list-reset justify-center flex-1">
            <li class="mr-3 pb-1 pt-1">
                <nuxt-link to="/test" class="border-none">
                    <button class="bg-transparent border-transparent text-lg text-gray-700 font-semibold py-1 px-1 rounded-lg outline-none uppercase transition durection-300 ease-in-out transform hover:-translate-y-1 hover:scale-101 cursor-pointer"
                    v-bind:class="{'border-gray-900 text-gray-900 double-line text-xl': $route.path == '/test'}">
                    @click="delayChange"
                    </button>
                </nuxt-link>
            </li>
        </ul>
      </div>-->
      <!-- <div
        class="w-full flex-grow lg:flex lg:items-center lg:w-auto lg:block pt-6 lg:pt-0"
        id="nav-content"
        v-bind:class="{ hidden: hidden }"
      >
        <ul class="list-reset lg:flex justify-end flex-1 items-center">
          <li class="mr-3 pb-1 pt-1">
            <nuxt-link to="/" class="border-none">
              <button
                class="bg-transparent border-transparent text-lg text-gray-700 font-semibold py-1 px-4 rounded-lg outline-none uppercase transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-101 cursor-pointer"
                v-bind:class="{ 'border-gray-900 text-gray-900 double-line text-xl': $route.path == '/' }"
                @click="delayChange;"
              >Home</button>
            </nuxt-link>
          </li>
          <li class="mr-3 pb-1 pt-1">
            <nuxt-link to="/about">
              <button
                class="bg-transparent border-transparent text-lg text-gray-700 font-semibold py-1 px-4 rounded-lg outline-none uppercase transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-101 cursor-pointer"
                v-bind:class="{ 'border-gray-900 text-gray-900 double-line text-xl': $route.path == '/about' }"
                @click="delayChange;"
              >About</button>
            </nuxt-link>
          </li>
          <li class="mr-3 pb-1 pt-1">
            <nuxt-link to="/contact">
              <button
                class="bg-transparent border-transparent text-lg text-gray-700 font-semibold py-1 px-4 rounded-lg outline-none uppercase transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-101 cursor-pointer"
                v-bind:class="{ 'border-gray-900 text-gray-900 double-line text-xl': $route.path == '/contact' }"
                @click="delayChange;"
              >Contact</button>
            </nuxt-link>
          </li>
        </ul>
      </div>-->
    </nav>
  </header>
</template>

<script>
export default {
  data() {
    return {
      hidden: true,
    }
  },
  methods: {
    delayChange: function () {
      // `this` inside methods point to the Vue instance
      setTimeout(() => (this.hidden = true), 200)
    },
  },
}
</script>

<style scoped>
</style>