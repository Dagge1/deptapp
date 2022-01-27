<!-- Main view page -->
<template>
  <div class="row">
    <div class="col-xl-6 col-lg-8 col-md-10 col-sm-12 col-12">

      <!-- cards listed vertically -->
      <ul class="ps-0" style="list-style-type: none;">
        <li v-for="(item, index) in final" :key="index">
          <div class="card mt-3">
            <div class="row no-gutters">
              
              <!-- Image part -->
              <div class="col-auto">
                <img @click="goRoute(item)" :src="item.picture.large" style="cursor: pointer;" class="img-fluid" alt="image">
              </div>
              
              <!-- Text part -->
              <div class="col">
                <div class="card-block px-2 mt-3">
                  <h3 class="card-title mb-0">{{ item.name.title }}</h3>
                      <h3 class="card-title">{{ item.name.first }} {{ item.name.last }}</h3>
                  </div>
              </div>
            </div>
          </div> <!-- end of card -->
        </li>
      </ul>

    </div> 
  </div> <!-- end of row -->
</template>

<script>
import axios from 'axios';

export default {
  name: 'home',
  data() {
    return {
      raw: [], // raw data obtained from the server
      final: [], // final filtered data
    }
  },
  methods: {
    loadData(){  // fetch unfiltered data from the server (since there is no known query params for filtering by age and timezones, we will do it separately)
      axios.get('https://randomuser.me/api/?results=250').then(({data}) => {
        this.raw.push(...data.results);
        this.filterUsers();  // filter received users by age and timezone
      }).catch(e => console.log(e));
    },
    filterUsers() { // filter received data for final displaying the first 15 items that pass criteria (timezone between -1 and +1 & at least 18 y.o.)
      let filtered = [];
      filtered = this.raw.filter(item => { // filter results by age and timezone
        return item.dob.age >= 18 && parseInt(item.location.timezone.offset) >= -1 && parseInt(item.location.timezone.offset) <= +1; // convert string timezone into the number
      });

      for (let i of filtered) { // push first 15 items that pass criteria into the final array for displaying
        if (this.final.length >= 15) {
          break;
        }
        this.final.push(i);
      }
    },
    goRoute(data) {  // upon clicking user image send user to the detailed view page (Detailed.vue)
      this.$router.push({ name: 'detailed', params: {person: JSON.stringify(data)}}); // we have to stringify data first, router passes data only as a string or array of strings
    }
  },
  mounted() {  // load data on page mounted into the DOM
    this.loadData();
  }
}
</script>