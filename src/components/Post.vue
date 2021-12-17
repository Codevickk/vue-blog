<template>
  <div class="card" :class="{ card__block: block }">
    <div class="card__image">
      <img
        v-if="post._embedded['wp:featuredmedia']"
        :src="post._embedded['wp:featuredmedia'][0].source_url"
      />
    </div>

    <div class="card__content">
      <div class="card__top">
        <p>{{ post._embedded.author[0].name }}</p>
        <div class="seperator"></div>
        <p class="time">{{ getDateDiff(post.date) }}</p>
      </div>
      <div class="card__body">
        <h5 class="card__title" v-html="post.title.rendered"></h5>
        <div class="card__paragraph" v-html="post.excerpt.rendered"></div>
      </div>

      <div class="card__bottom">
        <div class="card__bottomLeft">4 Min Read</div>

        <div class="card__bottomRight">
          <router-link
            :to="{ name: 'SinglePost', params: { id: post.id } }"
            class="link"
          >
            <p class="link__text">Read Full</p>
            <div class="link__icon">
              <arrow-right-icon></arrow-right-icon>
            </div>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import postImage from "../assets/images/large.jpg";
import { getDateDiff } from "../utils/Date.js";
import { ArrowRightIcon } from "@zhuowenli/vue-feather-icons";

export default {
  data() {
    return {
      postImage,
    };
  },

  props: ["refresh"],

  methods: {
    getDateDiff,
  },
  components: {
    ArrowRightIcon,
  },

  props: ["block", "post"],
};
</script>