<template>
    <q-page>
      <section class="bg-primary text-white">

        <div class="max-width q-gutter-y-md q-py-xl q-px-sm">
          <h1>Doe mee</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptates quisquam consectetur praesentium dolore optio repudiandae debitis, expedita dolor quod quidem hic odio accusamus cupiditate voluptate unde quos. Eaque, quod quis.</p>
          <q-btn label="Doe mee" color="white" text-color="black"/>
        </div>
      </section>
      <section class="q-py-xl">
        <div class="max-width row q-col-gutter-sm items-stretch">
          <div class="col-4 flex items-stretch">
            <q-card class="full-width cursor-pointer">
              <q-img :ratio="16/9" class="bg-primary"/>
              <q-card-section class="q-pb-lg">
                <h2>Word veranderaar</h2>
              </q-card-section>
            </q-card>
          </div>
          <div class="col-4 flex items-stretch">
            <q-card class="full-width cursor-pointer">
              <q-img :ratio="16/9" class="bg-primary"/>
              <q-card-section class="q-pb-lg">
                <h2>Doe mee met online actie</h2>
              </q-card-section>
            </q-card>
          </div>

          <div class="col-4 flex items-stretch">
            <q-card class="full-width cursor-pointer">
              <q-img :ratio="16/9" class="bg-primary"/>
              <q-card-section class="q-pb-lg">
                <h2>Steun ons met een donatie</h2>
              </q-card-section>
            </q-card>
          </div>
        </div>


      </section>
  </q-page>


</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'IndexPage'
})
</script>
