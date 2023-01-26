<template>
  <q-page class="q-py-lg">
    <div class="max-width q-gutter-y-md">
      <h1>Voorstel nieuwe 'Doe mee' sectie</h1>
      <p><strong>In het kort:</strong> Op deze website vind je 3 concepten van hoe we onze  'Doe mee' sectie zouden kunnen herontwerpen. We onderzoeken: wat zijn verschillende soorten pagina's en conversies waard?</p>

      <h2>Probleemanalyse</h2>

      <h3>1. Kwantiteit vs kwaliteit van conversies</h3>
      <p>Nu meten we alleen <i>het aantal</i> conversies, niet <i>de waarde</i> van die conversies. Op basis daarvan richten we onze website in.</p>
      <p><strong>Voorbeeld:</strong> Stel, we hebben een petitiepagina met een conversie percentage van 30%. En er is een Operatie Klimaat aanmeldpagina waar slechts half zo veel bezoekers heen gaan, met een conversiepercentage van 15%. Dan concluderen wij: de petitiepagina doet het 4x beter. En dus geven we die petitiepagina veel meer aandacht. De gedachte is: als we dezelfde mensen de petitiepagina laten zien ipv de OK pagina, dan halen we 4x zo veel mensen binnen. Maar na die aanmelding op de OK pagina besteed iemand misschien wel iedere week 6 uur aan OK.  Dat wordt echter niet gemeten, en dus niet meegenomen in onze besluiten.</p>
      <p>We werken dus wel op basis van data, maar met incomplete data.</p>

      <h3>2. Geen focus</h3>
      <p>We geven al onze handelingsperspectieven evenveel aandacht. Dit komt voort uit onze grote organisatie met stakeholders die allemaal willen dat hun ding ook aandacht krijgt. Dat is van binnen naar buiten denken, in plaats van andersom.</p>
      <p>We kijken niet genoeg welk handelingsperspectief het beste past per bezoeker. In plaats daarvan bieden we alles tegelijkertijd aan.</p>
      <p>Het perspectief van onze websitebezoekers: Veel te veel keuzes, laat maar zitten. Minder keuzestress = meer conversies.</p>
      <p>Vooral op mobiel (50% van onze bezoekers) is het een chaos.</p>

      <h2>Voorstel</h2>

      <h3>1. Aantal x Waarde = Verandermacht score</h3>
      <p>We kunnen zowel kwantiteit als kwaliteit meenemen in onze besluiten. Dat doen we door een waarde toe te kennen aan iedere soort conversie.</p>
      <p> In Google Analytics kunnen we vervolgens per pagina precies zien hoeveel die waard is. In Google Analytics heten dat dollars of euros. Maar dat is veel te kapitalistisch, dus wij noemen het de 'verandermacht score'. Vervolgens kunnen we met <a href="https://www.optimizesmart.com/ga4-attribution-modelling-tutorial/" target="_blank">GA4 attribution models</a> beter bepalen uit welke markertingkanalen wij de meeste waarde halen.</p>

      <h2>Bekijk de concepten</h2>
      <p>Open het menu linksbovenaan. Zodra je een concept hebt geopend, verschijnt rechtsonderin een knop 'Over dit concept'. Daar wordt uitgelegd hoe het concept verschilt van wat we nu hebben, en wat voor impact we verwachten als we dat concept zouden implementeren.</p>
    </div>

  </q-page>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'IndexPage'
})
</script>
