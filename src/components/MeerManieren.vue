<template>
  <section class="q-py-lg">
    <div class="max-width">
      <div class="row q-col-gutter-md items-stretch">
        <div class="col-sm-6 col-12 flex items-stretch">
          <q-card class="full-width cursor-pointer">
            <q-img :ratio="16/9" class="bg-primary" src="~assets/actie.jpg"/>
            <q-card-section class="full-width">
              <h2>Ondersteun een actie</h2>
              <q-btn label="Maak het verschil in 2 min" icon-right="arrow_forward" no-caps flat dense color="primary" size="18px"/>
            </q-card-section>
          </q-card>
        </div>
        <div class="col-sm-6 col-12 flex items-stretch">
          <q-card class="full-width cursor-pointer">
            <q-img :ratio="16/9" class="bg-primary" src="~assets/doneer.jpg"/>
            <q-card-section class="full-width">
              <h2>Maak een donatie</h2>
              <q-btn label="Steun ons" icon-right="arrow_forward" no-caps flat dense color="primary" size="18px"/>
            </q-card-section>
          </q-card>
        </div>
      </div>
    </div>
  </section>
</template>
