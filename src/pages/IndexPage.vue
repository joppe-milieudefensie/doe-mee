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
      <p>Vooral op mobiel (50% van onze bezoekers) is het een chaos, omdat ook uitgelichte items daar hetzelfde worden gepresenteerd als de rest van de items.</p>

      <h3>3. Onduidelijke handelingsperspectieven</h3>
      <p>Hoe hoogdrempeliger/hoogwaardiger het handelingsperspectief, hoe meer informatie bezoekers willen krijgen voordat ze converteren. <strong>De huidige doe mee sectie is heel erg ingericht op navigatie, niet informatie.</strong> We geven weinig uitleg over wat deze handelingsperspectieven precies inhouden.</p>
      <p><strong>Voorbeeld:</strong> 'Operatie Klimaat' wordt pas laat geintroduceerd als term: eerst naar doe mee > sluit je aan > wordt veranderaar. De overgrote meerderheid van de website bezoekers heeft geen idee wat dat inhoudt. Iemand is óf al bereid om tijd te geven, en moet vervolgens heel erg zoeken om te vinden hoe dat dan kan. Óf de bezoeker weet nog niet precies wat die wil doen, en krijgt pas een uitleg te zien waarom ze tijd zouden moeten geven op het moment dat die persoon helemaal naar de OK pagina is genavigeerd. We haken niet in op de intrinsieke motivatie van de bezoeker. In plaats daarvan gokken we erop dat de bezoeker sterk nieuwschierig is en gewoon alle pagina's bezoekt om er achter te komen wat die handelingsperspectieven nou eigenlijk inhouden. </p>
      <p>Daarnaast optimaliseren we de titels van navigatieitems op kliks, en daarbij verliezen we soms het grote plaatje: is alles nog wel logisch georganiseerd?</p>
      <p><strong>Voorbeeld:</strong> Wat betekent 'Ondersteun een actie'? Klik ik daarop als ik naar een protestactie wil en vind ik op deze pagina de agenda? Of teken ik een petitie?</p>

      <h2>Voorstel</h2>

      <h3>1. Aantal x Waarde = Verandermacht score</h3>
      <p>We kunnen zowel kwantiteit als kwaliteit meenemen in onze besluiten. Dat doen we door een waarde toe te kennen aan iedere soort conversie. https://docs.google.com/spreadsheets/d/1vII0sFeqDeDsL9bH1eIiedkCo8GWBuEfH9LLFyh_1fg/edit#gid=0</p>
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
