<template>
  <div class="flex flex-col min-h-screen">
    <Header class="relative z-10 w-full bg-white" />
    <!-- <transition name="fade" appear mode="out-in"> -->
    <main class="flex-1">
      <slot />
    </main>
    <!-- </transition> -->
    <Footer />
  </div>
</template>

<static-query>
query {
  generalSettings {
    title
  }
}
</static-query>

<script>
import Header from "../components/Header";
import Footer from "../components/Footer";
export default {
  components: {
    Footer,
    Header,
  },
};
</script>

<style lang="postcss">
@font-face {
  font-family: "Work Sans";
  font-style: normal;
  font-display: swap;
  font-weight: 400;
  src: url("/fonts/WorkSans.ttf") format("truetype");
}
@font-face {
  font-family: "Work Sans";
  font-style: normal;
  font-display: swap;
  font-weight: 700;
  src: url("/fonts/WorkSans.ttf") format("truetype");
}

* {
  scroll-behavior: smooth;
}
html,
body {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-rendering: optimizeLegibility;
  overflow-x: hidden;
  width: 100%;
}

a,
button {
  cursor: pointer;
  outline: none !important;
}

/* Better image rendering */
@media (min-width: 768px) {
  img {
    image-rendering: -webkit-optimize-contrast;
  }
}

.button {
  @apply inline-block px-6 py-3 font-semibold leading-none text-white bg-primary hover:bg-primary-dark capitalize;
  color: #fff !important;
}

.fade-enter-active {
  transition: opacity 300ms ease-out;
  will-change: opacity;
}

.fade-enter {
  opacity: 0;
}
</style>
