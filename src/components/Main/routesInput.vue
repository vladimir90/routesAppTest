<template>
  <div class="hero">
    <div class="hero-body">
      <div class="columns">
        <div class="column has-text-left">
              <div class="field">
                <label class="label">From</label>
                <div class="control">
                  <input class="input" type="text" placeholder="Enter the city" v-model="newRoute.start">
                </div>
                <!--<p class="help">This is a help text</p>-->
              </div>
              <div class="field">
                <label class="label">To</label>
                <div class="control">
                  <input class="input" type="text" placeholder="Enter the city" v-model="newRoute.end">
                </div>
                <!--<p class="help">This is a help text</p>-->
              </div>
              <div class="field">
                <a class="button" @click="goToDetails(newRoute.start,newRoute.end)">Go</a>
              </div>
              <RoutesDetailsView :routeData="routeData" @clear="clear = true"></RoutesDetailsView>
        </div>

      </div>
    </div>
  </div>

</template>

<script>
  import RoutesDetailsView from './routesDetails';
  import router from '../../router';

  export default {
    components:{
      RoutesDetailsView
    },
    data () {
      return{
        clear:false,
        newRoute:{
          start:null,
          end:null
        },
        routeData:[
        ]
      }
    },
    created(){
      console.log(this.clear);
      if(!this.clear) this.loadList();
    },
    methods:{
      goToDetails(start,end){
        router.push('details/' + start + "-" + end);
      },
      loadList(){
        let newRoutes = [
          {id:1,start:'Belgrade',end:'Budapest'},
          {id:2,start:'Vienna',end:'Berlin'}
        ];
        if(!localStorage.getItem('savedRoutes')) {
          localStorage.setItem('savedRoutes', JSON.stringify(newRoutes));
        }
        let storageRoutes = JSON.parse(localStorage.getItem('savedRoutes'));
        storageRoutes.forEach((item)=>{
          this.routeData.push(item);
        });
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
