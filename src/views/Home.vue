<template>
  <main>
    <PostList />
  </main>

  <Join />
</template>

<script>
import PostList from "../components/PostList.vue";
import Join from '../components/Join.vue';

export default {
  name: "Home",
  components: {
    PostList,
    Join
  },
};
</script>
