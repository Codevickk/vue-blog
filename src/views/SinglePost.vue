<template>
    <section class="post">
        <div class="post__inner">
            <div class="post__details">
                <p class="post__author">By ryan jackson</p>
                <p class="post__date">2 months ago</p>
            </div>

            <h1 class="post__title">This is the title of the post</h1>
            <div class="post__content">This is the content of the post</div>
        </div>
    </section>

    <section class="more">
        <div class="container">
            <h3 class="more__title">More Articles</h3>
            <div class="more__inner">
                <PostItem title/>
                <PostItem title/>
                <PostItem title/>
            </div>
        </div>
    </section>
</template>

<script>
import PostItem from '../components/Post.vue';
export default {
    components: {
        PostItem
    }
}
</script>