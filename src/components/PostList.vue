<template>
  <section class="posts">
    <div class="container">
      <div v-if="loading || !posts">
        <Loading />
      </div>
      <Notice v-else-if="error" status="error">
        {{ error }}
      </Notice>
      <div v-else class="posts__inner">
        <PostItem
          v-for="(post, index) in posts"
          :key="post.id"
          :post="post"
          :block="index === 0"
        />
      </div>

      <Pagination
        v-if="posts && posts.length > 0"
        :pagination="pagination"
        @prev="
          --postsParams.page;
          getPosts();
        "
        @next="
          postsParams.page++;
          getPosts();
        "
      />
    </div>
  </section>
</template>

<script>
import Loading from "./Loading.vue";
import Notice from "./Notice.vue";
import PostItem from "./Post.vue";
import Pagination from "./Pagination.vue";

import axios from "axios";
import { baseURL } from "../utils/API.js";

export default {
  components: {
    Loading,
    Notice,
    PostItem,
    Pagination,
  },

  data() {
    return {
      loading: false,
      error: "",
      posts: [],
      postsParams: {
        _embed: true,
        per_page: 10,
        page: 1,
      },
      pagination: {
        prevPage: "",
        nextPage: "",
        totalPages: "",
        from: "",
        to: "",
        total: "",
      },
    };
  },

  methods: {
    async getPosts() {
      this.loading = true;

      try {
        const response = await axios.get(`${baseURL}/posts`, {
          params: {
            ...this.postsParams,
          },
        });

        console.log(response.data);

        this.posts = response.data;
        this.configPagination(response.headers);
      } catch (error) {
        let message = "";
        message = error.response
          ? error.response.data.message
          : "Unable to fetch information from server.";

        this.error = `${message} Try refreshing the page.`;
      }

      this.loading = false;
    },

    configPagination(headers) {
      this.pagination.total = +headers["x-wp-total"];
      this.pagination.totalPages = +headers["x-wp-totalpages"];

      this.pagination.from = this.pagination.total
        ? (this.postsParams.page - 1) * this.postsParams.per_page + 1
        : " ";

      this.pagination.to =
        this.postsParams.page * this.postsParams.per_page >
        this.pagination.total
          ? this.pagination.total
          : this.postsParams.page * this.postsParams.per_page;

      this.pagination.prevPage =
        this.postsParams.page > 1 ? this.postsParams.page : "";

      this.pagination.nextPage =
        this.postsParams.page < this.pagination.totalPages
          ? this.postsParams.page + 1
          : "";
    },
  },

  mounted() {
    this.getPosts();
  },
};
</script>