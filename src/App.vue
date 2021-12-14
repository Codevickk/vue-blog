<template>
  <Header />
  <router-view />
</template>

<script>
import Header from "./components/Header.vue";
export default {
  components: {
    Header,
  },
};
</script>

<style>
/* Include SF Pro Display */
@font-face {
  font-family: "SF Pro Display";
  src: url("./assets/fonts/SF-Pro-Display-Black.otf");
  font-weight: 900;
  font-style: normal;
}

@font-face {
  font-family: "SF Pro Display";
  src: url("./assets/fonts/SF-Pro-Display-Bold.otf");
  font-weight: 600;
  font-style: normal;
}

@font-face {
  font-family: "SF Pro Display";
  src: url("./assets/fonts/SF-Pro-Display-Medium.otf");
  font-weight: 500;
  font-style: normal;
}

@font-face {
  font-family: "SF Pro Display";
  src: url("./assets/fonts/SF-Pro-Display-Regular.otf");
  font-weight: 400;
  font-style: normal;
}

/* Include SF Pro Text */
@font-face {
  font-family: "SF Pro Text";
  src: url("./assets/fonts/SF-Pro-Text-Bold.otf");
  font-weight: 500;
  font-style: normal;
}

@font-face {
  font-family: "SF Pro Medium";
  src: url("./assets/fonts/SF-Pro-Text-Medium.otf");
  font-weight: 400;
  font-style: normal;
}

@font-face {
  font-family: "SF Pro Text";
  src: url("./assets/fonts/SF-Pro-Text-Regular.otf");
  font-weight: 300;
  font-style: normal;
}
</style>
