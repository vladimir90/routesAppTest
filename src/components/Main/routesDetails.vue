<template>
  <table class="table is-fullwidth">
    <thead>
       <th><abbr>ID</abbr></th>
      <th><abbr>Route Detail</abbr></th>
      <th><abbr>Date</abbr></th>
    </thead>
    <tbody v-for="route in storedRoutes">
      <tr>
        <td>{{route.id}}</td>
        <td>{{route.start}} - {{route.end}}</td>
        <td>{{route.date}}</td>
        <td>
          <a @click="details(route.start,route.end)" class="button is-small is-primary">Details</a>
          <a class="button is-small" @click="remove(route.id)">Delete</a>
        </td>

      </tr>
    </tbody>
    <a class="button is-small is-danger" @click="removeFromStorage()">ClearHistory</a>
  </table>
</template>

<script>
  import router from '../../router';
  export default {
    props:['routeData'],
    data () {
      return{
        storedRoutes:null
      }
    },
    mounted(){
          this.storedRoutes = this.routeData;
    },
    methods:{
      details(start,end){
        router.push('details/' + start + "-" + end);
      },
      remove(id){
        if(this.storedRoutes.length === 1){
          this.storedRoutes = null;
        }
        if(this.storedRoutes){
          this.storedRoutes.splice(id - 1,1);
        }
      },
      removeFromStorage(){
        this.storedRoutes = null;
        localStorage.removeItem('savedRoutes');
      }
    }

  }
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
