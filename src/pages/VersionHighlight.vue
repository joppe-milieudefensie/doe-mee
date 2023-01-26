<template>
  <div class="bg-accent q-py-lg">
    <div class="max-width">
      <div class="q-gutter-y-md q-pt-sm">

        <q-img :ratio="21/9" class="bg-grey " src="~assets/video.jpg" no-transition no-spinner>
            <div>
              <span>Video</span>
            </div>

          </q-img>
        <h1>Doe mee met Operatie Klimaat</h1>
        <div class="text-bold text-body1">Wil jij in actie komen voor een leefbare planeet? Sluit je aan bij Operatie Klimaat. Samen brengen we 29 grote vervuilende bedrijven in beweging. Doe mee met acties bij jou in de buurt.</div>
        <q-btn label="Kom in actie voor het klimaat" icon-right="arrow_forward" no-caps color="secondary" size="18px" unelevated/>
      </div>
    </div>
  </div>

  <MeerManieren/>
  <NogMeer/>
</template>
<script>
import MeerManieren from "components/MeerManieren.vue"
import NogMeer from "components/NogMeer.vue"
export default {
  components: {
    MeerManieren,
    NogMeer
  }
}
</script>
