<template>
  <section class="posts">
    <div class="container">
      <div class="posts__inner">
        <PostItem block="true" />
        <PostItem />
        <PostItem />
        <PostItem />
      </div>
    </div>
  </section>
</template>

<script>
import PostItem from "./Post.vue";

export default {
  components: {
    PostItem,
  },
};
</script>