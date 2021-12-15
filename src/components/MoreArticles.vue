<template>
  <section class="more">
    <div class="container">
      <h3 class="more__title">More Articles</h3>
      <div v-if="loading || !posts">
        <Loading />
      </div>
      <div v-else class="more__inner">
        <PostItem v-for="post in posts" :key="post.id" :post="post" />
      </div>
    </div>
  </section>
</template>

<script>
import Loading from "./Loading.vue";
import PostItem from "../components/Post.vue";

import axios from "axios";
import { baseURL } from "../utils/API.js";

export default {
  data() {
    return {
      loading: "",
      posts: [],
    };
  },
  components: {
    Loading,
    PostItem,
  },
  props: ['postID'],
  async mounted() {
    this.loading = true;

    const response = await axios.get(`${baseURL}/posts`, {
      params: {
        _embed: true,
        per_page: 3,
        exclude: [this.postID]
      },
    });

    const posts = response.data;
    console.log(posts);

    this.posts = posts;
    this.loading = false;
  },
};
</script>