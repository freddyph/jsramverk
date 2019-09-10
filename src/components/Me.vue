<template>
<main>
    <Nav />
    <h1>Me-sida</h1>
    <img :src="picture"/>
    <h2>Bakgrund</h2>
    <p>{{ text1 }}</p>
    <p>{{ text2 }}</p>
    <p>{{ text3 }}</p>
    <p>{{ text4 }}</p>
    <p>{{ text5 }}</p>
</main>
</template>

<script>
import Nav from './Nav.vue'
export default {
  name: 'Me',
  props: { },
  components: {
      Nav,
  },
  data() {
    return {
        text1: `
        Vem är jag? En glad värmlänning, precis fyllda 35 år. Arbetar till vardags som
        lärare i mediaämnen och webbutveckling. Har sedan
        jag lämnade Arvika för studier, flyttat runt en del i Sverige. Anledning till
        detta är min passion för basket.
        `,
        text2: `
        Under åren 2010-2013 hade jag förmånen att få
        jobba heltid med detta, vilket var en dröm som gick i uppfyllelse. Idag hinns det
        tyvärr inte med något engagemang mer än att följa de duktiga svenskar vi har runt
        om i världen i olika ligor.
        `,
        text3: `
        Anledningen till att jag hamnade i Karlstad var att jag ville flytta närmare
        familjen i värmland. Det här läsåret kommer jag dock vara stationerad i Stockholm.
        `,
        text4: `
        Intresset för datorer och programmering har igentligen följt mig under hela uppväxten.
        Farsan hade tidigt med sig en dator som jag kunde sitta och skriva på, där jag
        också kom i kontakt med MS-dos för första gången. Har genom åren provat på lite
        olika verksamheter på nätet i form av webbshoppar. Har provat på både hälsokost
        och import av italienskt kaffe. Fokus låg främst på SEO, då det var där jag hade
        bäst koll just då. Då vi jobbade i Magento, kände jag att min nivå inte var
        tillräcklig för att göra det vi ville med sidan, och ett litet frö till att
        inleda en ny inriktning på min karriär.
        `,
        text5: `
        Har nu läst 1 år på BTH, så det är min samlade erfarenhet
        av studier inom programmering och räknar med att det ska öka under året.
        `,
        picture: require('../assets/me.jpg')
    }
  }
 }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
img {
    margin: auto;
    max-width: 60%;
}
p {
    margin-bottom: 1em;
    text-font: small;
}
</style>
