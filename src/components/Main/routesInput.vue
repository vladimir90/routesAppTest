<template>
  <div class="hero">
    <div class="hero-body">
      <div class="columns">
        <div class="column has-text-left">
              <div class="field">
                <label class="label">From</label>
                <div class="control">
                  <input class="input"
                         type="text"
                         placeholder="Enter the city"
                         v-model="newRoute.start"
                         :value="this.newRoute.start"
                         >
                </div>
                <p class="help is-danger" v-if="error.start">{{error.start}}</p>
              </div>
              <div class="field">
                <label class="label">To</label>
                <div class="control">
                  <input class="input"
                         type="text"
                         placeholder="Enter the city"
                         v-model="newRoute.end"
                        >
                </div>
                <p class="help is-danger" v-if="error.end">{{error.end}}</p>
              </div>
              <div class="field">
                <transition name="fade">
                  <button class="button" @click="goToDetails(newRoute.start,newRoute.end)" v-show="toggle()">Go</button>
                </transition>
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
        error:{
          start:null,
          end:null
        },
        newRoute:{
          start:null,
          end:null
        },
        routeData:[
        ]
      }
    },
    created(){
       this.loadList();
    },
    methods:{
      goToDetails(start,end){
        if(!this.error.start && !this.error.end)
        router.push('details/' + start + "-" + end);
      },
      toggle(){
        if(this.newRoute.start && this.newRoute.end){
          return true;
        }else{
          return false;
        }
      },
      loadList(){
        let newRoutes = [
          {id:1,start:'Belgrade',end:'Budapest',distance:'235 mi',duration:''},
          {id:2,start:'Vienna',end:'Berlin',distance:'397 mi',duration:''}
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
  .fade-enter-active, .fade-leave-active {
    transition: opacity .5s
  }
  .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
    opacity: 0
  }
</style>
