<template>
  <Notice v-if="message">
    <p>{{ message }}</p>
  </Notice>

  <main>
    <PostList />
  </main>

  <Join />
</template>

<script>
import PostList from "../components/PostList.vue";
import Join from "../components/Join.vue";
import Notice from "../components/Notice.vue";

export default {
  name: "Home",
  components: {
    PostList,
    Join,
    Notice,
  },
  data() {
    return {
      message: "",
    };
  },
  mounted() {
    if (this.$route.query && this.$route.query.status === "successful") {
      this.message = "Your payment was successful, thank you for joining dasdas.";
    }

    // Remove the message after 2 seconds.

    setTimeout(() => this.message = '', 2000);
  },
};
</script>
