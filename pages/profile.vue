<template>
    <div class="container has-text-centered">
        <h2 class="title">My profile</h2>
        <img class="avatar" :src="user.avatar_url" alt="User Avatar" />
        <p>Bio : {{user.bio}}</p>
        <p>Location : {{user.location}}</p>
        <br>
        <div  class="columns is-multiline">
            <div v-for="repo in repos" :key="repo.id" class="column is-3">
                <div class="card">
                    <div class="card-content">
                        <a :href="repo.html_url" target="_blank" rel="noopener noreferrer">{{repo.name}}</a>
                        <p>Star : {{repo.stargazers_count}}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    middleware:'auth' ,
    head(){
        return{
            title:this.title
        }
    },
    async asyncData({$axios}){
        const baseURL='https://api.github.com'
        $axios.setHeader('Authorization',null)

        const [user, repos] = await Promise.all([
            $axios.$get(`${baseURL}/users/bluebaney10`),
            $axios.$get(`${baseURL}/users/bluebaney10/repos`)])
        const name = user.name
        return {user, repos, title:name}
    }
}
</script>

<style scoped>
.avatar{
    width: 128px;
    height: 128px;
}
</style>