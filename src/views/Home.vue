<template>
  <main>
    <PostList />
  </main>

  <section class="join">
    <div class="container">
      <h2 class="join__heading">Join our Team of Writers</h2>
      <p class="join__paragraph">
        On dasdas, writers earn a living doing what they love. Getting started
        is easy. Just pay a one time <span>$25 fee</span> and everything is
        ready to go.
      </p>

      <button class="join__btn">Join us</button>
    </div>
  </section>
</template>

<script>
import PostList from "../components/PostList.vue";
export default {
  name: "Home",
  components: {
    PostList,
  },
};
</script>
