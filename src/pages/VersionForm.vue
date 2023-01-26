<template>
    <q-page>
      <section class="">

        <div class="max-width">
          <div class="q-gutter-y-md q-my-md">
            <q-img :ratio="21/9" class="bg-grey " src="~assets/video.jpg" no-transition no-spinner>
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

          <div class="text-center cursor-pointer q-gutter-y-lg q-py-xl no-link-styling">
            <h2>Wat is Operatie Klimaat? <q-icon name="arrow_forward"/></h2>
            <h2><router-link to="1"> Op welke manieren kan ik bijdragen? <q-icon name="arrow_forward"/></router-link></h2>
          </div>
        </div>


      </section>
      <StappenVeranderaar/>
      <MeerManieren/>
      <NogMeer/>

      <q-page-sticky position="bottom-right" :offset="[18, 18]">
          <q-btn icon="info" rounded color="secondary"  label="Over dit concept" @click="prompt = true" size="24px"/>
      </q-page-sticky>

      <q-dialog v-model="prompt">
      <q-card>
        <q-card-section>
          <div class="text-h6">Over dit concept</div>
        </q-card-section>

        <q-card-section class="q-pt-none">
          <p><strong>Wat maakt deze pagina anders?</strong></p>
          <ul>
            <li>Laagdrempelig formulier voor Operatie Klimaat: commitment om actief te worden is optioneel. </li>
            <li><i>Tip: vul je email adres in om te zien wat er dan gebeurt!</i> De andere velden worden eerst verborgen, om het formulier laagdrempeliger er uit te laten zien en meer ruimte op de pagina te geven aan andere handelingsperspectieven.</li>
            <li>Meer informatie over wat Operatie Klimaat is, op wat voor manieren je kan bijdragen en hoe je actief kunnen worden. En gebruik maken van emotie: video in plaats van afbeelding.</li>
            <li>Duidelijke primaire, secundaire en tertiraire acties, in plaats van gelijkwaardige aandacht voor alle handlingsperspectieven. Er ligt een focus op hoogwaardige conversies (kwaliteit van contactgegevens in plaats van kwantiteit).</li>
            <li>Geschreven vanuit perspectief van de lezer. Bijv. 'Fair Future Generators' zegt de gemiddelde bezoeker niks, 'traineeship voor jongeren' is duidelijk.</li>
          </ul>
          <p><strong>Welke impact verwachten we van dit voorstel?</strong></p>
          <ul>
            <li>Mensen begrijpen beter wat Operatie Klimaat is, hoe ze kunnen bijdragen en actief worden.</li>
            <li>Veel meer mensen melden zich aan voor Operatie Klimaat. Deze zullen wel gemiddeld iets minder committed zijn om echt actief te worden. Maar met een goed email straatje en laagdrempelige handelingsperspectieven kunnen we deze mensen geleidelijk toch actief krijgen.</li>
            <li>Minder mensen gaan naar campagne en donatie pagina's.</li>
            <li>Het totaal aantal verzamelde contactgevens blijft gelijk of gaat iets omlaag.</li>
            <li>De gemiddelde verandermacht score per aanmelding gaat significant omhoog.</li>
          </ul>
        </q-card-section>

        <q-card-actions align="right">
          <q-btn flat label="OK" color="primary" v-close-popup />
        </q-card-actions>
      </q-card>
    </q-dialog>

  </q-page>




</template>

<script>
import { defineComponent } from 'vue'
import StappenVeranderaar from "components/StappenVeranderaar.vue"
import MeerManieren from "components/MeerManieren.vue"
import NogMeer from "components/NogMeer.vue"

export default defineComponent({
  name: 'IndexPage',
  components: {StappenVeranderaar, MeerManieren, NogMeer},
  data: function(){
    return{
      prompt: null,
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
.no-link-styling a{
  color: black;
  text-decoration: none;
}
</style>
