<template>
<div class="container mt-4">
    <h1 class="title">Blog</h1>
    <div class="columns is-multiple">
        <div v-for="post in posts" :key="post.slug" class="column is-4" >
            <div class="card">
                <div class="card-content">
                    <nuxt-link :to="`/blog/${post.slug}`">
                    {{post.title}}
                    </nuxt-link>
                    <p> {{post.description}}</p>
                    <p>Create At {{post.createdAt}}</p>
                </div>
            </div>
        </div>
    </div>
</div>
</template>

<script>
export default {
    async asyncData({ $content}){
        const posts = await $content('blog').sortBy('createAt','desc').fetch()

        return{ posts}
    }
}
</script>

<style>

</style>