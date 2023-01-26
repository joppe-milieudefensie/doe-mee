<template>
    <q-page>
      <section class="">

        <div class="max-width q-gutter-y-sm q-pt-xl q-px-md">
          <div class=" q-gutter-y-md">
            <q-img :ratio="21/9" class="bg-grey " src="~assets/video.jpg">
              <div>
                <span>Video</span>
              </div>

            </q-img>
            <h1>Doe mee met Operatie Klimaat</h1>
            <div class="text-bold text-body1">Wil jij in actie komen voor een leefbare planeet? Sluit je aan bij Operatie Klimaat. Samen brengen we 29 grote vervuilende bedrijven in beweging. Doe mee met acties bij jou in de buurt.</div>
          </div>
          <div class="row q-col-gutter-md">

            <div class="col-12" :class="{'col-sm-6': formActief}">
              <q-input label="Email" v-model="email" >
                <template #prepend>
                  <q-icon name="email"/>
                </template>
              </q-input>
            </div>
            <div class="col-12 col-sm-6" v-if="formActief">
              <q-input label="Telefoonnummer" v-model="tel">
                <template #prepend>
                  <q-icon name="phone"/>
                </template>
              </q-input>
            </div>
            <div class="col-12 col-sm-6" v-if="formActief">
              <q-input label="Voornaam" v-model="naam" >
                <template #prepend>
                  <q-icon name="waving_hand"/>
                </template>
              </q-input>
            </div>
            <div class="col-12 col-sm-6" v-if="formActief">
              <q-input label="Postcode" v-model="locatie">
                <template #prepend>
                  <q-icon name="location_on"/>
                </template>
              </q-input>
            </div>
          </div>
          <div class="q-mt-md" v-if="formActief">
            <q-checkbox label="Ik wil lokaal actief worden - vertel me meer!" v-model="a"/><br/>
            <q-checkbox label="Ik wil updates krijgen van Operatie Klimaat en Milieudefensie." v-model="b"/>
          </div>


          <q-btn label="Houd mij op de hoogte" color="secondary" class="full-width q-mt-md" size="20px" no-caps unelevated/>
        </div>

        <div class="max-width text-center cursor-pointer q-gutter-y-lg q-py-md">
          <h2>Wat is Operatie Klimaat? <q-icon name="arrow_forward"/></h2>
          <h2><router-link to="1"> Op welke manieren kan ik bijdragen? <q-icon name="arrow_forward"/></router-link></h2>
        </div>
      </section>
      <StappenVeranderaar/>
      <MeerManieren/>

  </q-page>


</template>

<script>
import { defineComponent } from 'vue'
import StappenVeranderaar from "components/StappenVeranderaar.vue"
import MeerManieren from "components/MeerManieren.vue"

export default defineComponent({
  name: 'IndexPage',
  components: {StappenVeranderaar, MeerManieren},
  data: function(){
    return{
      naam: null,
      email: null,
      tel: null,
      locatie: null,
      formActief: false,
      a: false,
      b: false,
    }
  },
  watch: {
    email: function(email){
      if(email.length > 5){
        this.formActief = true
      }
    }
  }
})
</script>
<style lang="scss">
a{
  color: black;
  text-decoration: none;
}
</style>
