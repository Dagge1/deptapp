<!-- Detailed view page -->
<template>
  <h1 @click="$router.go(-1)" style="cursor: pointer;">&lt;</h1> <!-- back button -->

  <div class="row mt-2">
    <div class="col-12">
      
        <!-- card -->   
        <div class="card" style="width: 20rem; margin-right: 5px; margin-bottom: 25px;"> 
            <div>
                <img class="mx-auto d-block d-card-img-top" :src="user.picture.large" alt="Card image">  <!-- user image -->
            </div>
        
            <div class="card-body pt-3">
                <div class="row">
                    <div class="col-12">  <!-- user name -->
                        <div class="card-text text-center d-bold">{{ user.name.title }} {{ user.name.first }} {{ user.name.last }}</div>
                    </div>
                </div>
                <div class="row" style="margin-top: 9px;"> <!-- date of birth -->
                    <div class="col-12">
                        <div class="card-text text-center d-card-grey">{{ dob }}</div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-12"> <!-- location -->
                        <div class="col-12 text-center d-card-grey">{{ user.location.city }}, {{ user.location.country }}</div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-12"> <!-- email -->
                        <div class="col-12 text-center d-card-grey">{{ user.email }}</div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-12"> <!-- email -->
                        <div class="col-12 text-center d-card-grey">{{ user.phone }}</div>
                    </div>
                </div>

            </div>
        </div>  <!-- end of class card -->
      </div>
  </div> 

</template>

<script>
import moment from 'moment';

export default {
  name: 'detailed',
  data() {
    return {
      user: JSON.parse(this.$route.params.person) || '',  // user data sent via route, here we convert data back to the object
      dob: ''  // date of birth converted to european date format
    }
  },
  mounted() {
    this.dob = moment(this.user.dob.date).format("DD.MM.YYYY");
  }
}
</script>
