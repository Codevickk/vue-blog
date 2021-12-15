<template>
  <section class="post">
    <div v-if="loading || !post">
      <Loading />
    </div>
    <div v-else class="post__inner">
      <div class="post__details">
        <p class="post__author">{{ post._embedded.author[0].name }}</p>
        <p class="post__date">{{ getDateDiff(post.date) }}</p>
      </div>

      <h1 class="post__title" v-html="post.title.rendered"></h1>
      <div class="post__content" v-html="post.content.rendered"></div>
    </div>
  </section>
  <MoreArticles v-if="post" :postID="post.id" />
</template>

<script>
import Loading from "../components/Loading.vue";
import MoreArticles from "../components/MoreArticles.vue";
import axios from "axios";

import { baseURL } from "../utils/API.js";
import { getDateDiff } from "../utils/Date.js";

export default {
  components: {
    Loading,
    MoreArticles,
  },
  data() {
    return {
      loading: false,
      post: "",
    };
  },
  methods: {
    getDateDiff,
  },
  async mounted() {
    this.loading = true;
    const response = await axios.get(
      `${baseURL}/posts/${this.$route.params.id}`,
      {
        params: {
          _embed: true,
        },
      }
    );
    const post = response.data;
    // console.log(post);

    this.post = post;
    this.loading = false;
  },
};
</script>