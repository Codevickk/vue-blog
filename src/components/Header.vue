<template>
  <header>
    <nav class="navbar">
      <div class="container">
        <div class="navbar__inner">
          <div class="navbar__brand">
            <router-link to="/"><img :src="logo"/></router-link>
          </div>

          <div class="navbar__menu">
            <ul class="navbar__list">
              <li class="navbar__listItem">
                <a href="#" class="navbar__link">
                  <twitter-icon size="1.8x"></twitter-icon>
                </a>
              </li>

              <li class="navbar__listItem">
                <a href="#" class="navbar__link">
                  <dribbble-icon size="1.8x"></dribbble-icon>
                </a>
              </li>

              <li class="navbar__listItem">
                <a href="#" class="navbar__link">
                  <figma-icon size="1.8x"></figma-icon>
                </a>
              </li>

              <li class="navbar__listItem">
                <a href="#" class="navbar__link">
                  <github-icon size="1.8x"></github-icon>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  </header>
</template>

<script>
import logo from '../assets/images/logo.png'
import { TwitterIcon, DribbbleIcon, FigmaIcon, GithubIcon } from "@zhuowenli/vue-feather-icons"

export default {
  name: "Header",
  data() {
    return {
      logo: logo
    }
  },
  components: {
    TwitterIcon,
    DribbbleIcon,
    FigmaIcon,
    GithubIcon
  },
};
</script>