<template>
  <div class="card" :class="{ card__block: block }">
    <div class="card__image">
      <img :src="postImage" />
    </div>

    <div class="card__content">
      <div class="card__top">
        <p>Front-end</p>
        <div class="seperator"></div>
        <p class="time">1 Month Ago</p>
      </div>
      <div class="card__body">
        <h5 class="card__title">CSS Grids</h5>
        <p class="card__paragraph">
          Not long ago I decided to improve the loading times of my website. It
          already loads pretty fast, but I knew there was still room for
          improvement and one of them was CSS loading. I will walk you through
          the process and show you how you can improve your load times as well.
          To see how CSS affects the load time of a webpage we first have to
          know how the browser converts an HTML document into a functional
          webpage...
        </p>
      </div>

      <div class="card__bottom">
        <div class="card__bottomLeft">12 Min Read</div>

        <div class="card__bottomRight">
          <a class="link">
            <p class="link__text">Read Full</p>
            <div class="link__icon">
              <arrow-right-icon></arrow-right-icon>
            </div>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import postImage from "../assets/images/large.jpg";
import { ArrowRightIcon } from "@zhuowenli/vue-feather-icons";

export default {
  data() {
    return {
      postImage,
    };
  },

  components: {
    ArrowRightIcon,
  },

  props: ["block"],
};
</script>