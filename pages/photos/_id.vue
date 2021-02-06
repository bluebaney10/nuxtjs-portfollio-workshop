<template>
   <div class="container">
       <h1>Photo Detail</h1>
       <img :src="photo.download_url" alt="Photo Image" class="image">
       <p>Autho : {{photo.author}}</p>
   </div>
</template>

<script>

export default {
    middleware:'auth',
    async asyncData({$axios,params}){
      const photo = await $axios.$get(`https://picsum.photos/id/${params.id}/info`)

      return {photo}
    }
}
</script>

<style scoped>
.image{
  width:480px;
}

</style>