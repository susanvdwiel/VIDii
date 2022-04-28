## Jij

### Ontwerper:
Susan van de Wiel

#### Je startniveau:
Mijn startniveau is: rood



# Je plan

<details open>
  <summary>De eerste versie/schets van je ontwerp & je persoonlijke uitdaging</summary>

  ### De eerste versie/schets:
  <img src="readme-images/Ideeen_genereren" width="375px" alt="eerste versie/schets">


  ### Je ambitie: 
  Aan deze technieken/punten wil ik werken:
  - Alles proberen zelf uit te werken met CSS, dus zo min mogelijk IMG's gebruiken.
  - Beter worden met Javascript. Buttons werkend maken en begrijpen wat ik heb geschreven.
  - Gebruik maken van custom-properties
  - Het gevoel geven dat je echt naar iets van Toy Story kijkt.
  - Bij een hover een andere actie verwerken
</details>



## Voortgang/Feedback 1

<details>
  <summary>Mijn bevindingen + wijzigingen</summary>

  ### Verandering in karakter:
  Eerst had ik het idee om voor Mario te kiezen, maar wanneer meer dan de halve klas hiervoor had gekozen dacht ik aan Yoshi. Een ander karakter van Mario, maar ook deze was al door een ander gekozen. Dat vond ik jammer. Daarom ben ik gaan brainstormen over een ander karakter.
  
  <img src="readme-images/xxxxxxxxxxxx" width="375px" alt="eerste versie/schets">
  
  #### oplossing:
  Uiteindelijk, tijdens de eerste feedbackronde, ben ik samen met Noa gaan brainstormen. Zo kwam ik uit tot <strong>Toy Story</strong>. De verschillen in (onder andere) Woody zijn niet heel groot, maar er zijn wel verschillende versies van Toy Story. Zo is er een Family Guy versie en zijn er verschillende mini story's "Toy Story Toons" waar veel niet van weten. Deze wil ik gaan verwerken in de tijdlijn.
  
  

  ### Verandering in concept:
  Het concept waar ik mee begon was dat Woody aan een touw hangt achter een vrachtwagen. Dit is een bekend stukje in Toy Story. Het leek mij daarbij leuk dat de touw fungeerde als een tijdlijn. Tijdens het uitwerken vond ik het niet mooi worden. Ik zou dan veel gebruik moeten maken van IMG's en dat vond ik jammer, want mijn uitdaging lag juist bij het (meeste van de karakters) maken met CSS. 
  
  <img src="readme-images/Eerste_idee" width="375px" alt="eerste versie/schets">
  <img src="readme-images/IdeeVrachtwagen_uitwerking" width="375px" alt="eerste versie/schets">
  
  #### oplossing:
  Daarom ben ik verder gaan brainstormen. Ik keek naar inspiratie op Pinterest en kwam erachter dat in veel posters gebruik werd gemaakt van een grote grijper. Een soort grijpmachine. Dit idee vond ik erg leuk en ben ik op door gaan genereren. Zo leek het mij leuk dat de Woody's van de verschillende jaartallen naar boven werden gehaald met de grijper en op die manier de tijdlijn erin verwerken.
  
  <img src="readme-images/Idee_Woody" width="375px" alt="eerste versie/schets">



  ### De gordijntjes met tekst:
  Uit de feedback kreeg ik te horen dat het leuk zou zijn als ik eerst iets van gordijntjes deed maken. De gordijntjes gaan open en dan pas zie je de grijper, een progressive disclosure. 

  #### oplossing:
  Toen ik de gordijntjes had gemaakt, vond ik het nog erg kaal staan. Daarom heb ik tekst toegevoegd met een quote uit de film "you've got a friend in me" om de witruimte wat meer op te vullen.
  
  
  
  ### Too much:
  Bovenop de gordijntjes én de tekst had ik eerst ook nog de CSS gemaakte Woody. Dit werd allemaal too much. Daarom kwam uit de feedback om de Woody ergens anders voor te gebruiken. 

  #### oplossing:
  De Woody heb ik nu met een animatie achter de gordijnen gezet. Hij komt samen tevoorschijn met de buttons en de grijper.
  
  
  
  ### Buttons niet meer klikbaar:
  Aangezien ik eerst de gordijntjes boven de grijper/ wolkenachtergrond/ buttons had gezet, waren de buttons niet meer klikbaar. De gordijntjes hadden namelijk een hogere z-index dan de buttons waardoor ik niet op een button zat te klikken, maar op een gordijn.

  #### oplossing:
  Daarom heb ik ervoor gekozen om een tweede HTML pagina aan te maken. Als je op het logo klikt, kun je door naar de volgende pagina waarbij de grijper, Woody en de buttons te zien zijn.

</details>



## Voortgang/Feedback 2

<details>
  <summary>Mijn bevindingen + wijzigingen</summary>
  
  ### De feedback:
  De feedback die ik in ronde twee heb gekregen was van Tessa. Samen gingen we de checklist af of alles in orde was. Zo kwamen we achter…
  
  …dat ik bij veel stukjes tekst nog geen commentaar had toegevoegd. Bij sommige stukken code had ik al wel een kopje, maar om verschillende regels “uit te leggen” had ik nog niet toegevoegd.
  
  …dat er nog geen font is toegevoegd. Dit komt omdat ik nog geen tekst heb. Dit ben ik wel van plan om nog toe te voegen. Dit zou ik invoegen door middel van een XXXX
  
  …dat sommige onderdelen CSS nog niet gelijk liepen met de HTML. De CSS is op dit moment nog een klein zooitje, dus hier moet ik wat meer structuur inbrengen door de CSS in de zelfde volgorde te laten lopen als de HTML.
  
  …dat nog niet alle buttons van de jaartallen het deden. Hier liep ik ook tegenaan omdat dit werkend gemaakt moest worden met Javascript. De eerste button was me gelukt om werkend te maken, maar de andere buttons was even iets teveel :-)
  
  
  
  ### Hover over wolkjes:
  Het leek mij leuk dat wanneer je over een wolkje gaat, er als een easteregg een poppetje van toystory tevoorschijn komt. De poppetjes had ik afgelopen zondag gemaakt. Toen ik zelf wilde proberen om de hover op de wolk te zetten liep ik tegen het probleem aan dat ik een onderdeel van de wolk wel iets kon laten doen, maar een andere actie aan de wolk lukte niet. Uiteindelijk is het met hulp van Sanne gelukt. 

  #### oplossing:
  We hebben een container om de wolk gezet, zodat ik op de container een hover kan zetten en niet op een onderdeel van de wolk zelf. Door het karakter aan te roepen met “~ :hover”, kan je de wolk het karakter hover meegeven. 



  ### Uitdaging van de buttons:
  Ook kwam er een uitdaging bij de buttons. Wanneer je op een button klikt, bijvoorbeeld 1995, komt er een Woody uit het jaartal 1995 omhoog. De grijper gaat namelijk naar beneden en haalt daar de juiste Woody op. Wanneer er dan wordt geklikt op de button 1996 wil ik dat de Woody van 1995 verdwijnt/ontploft en dat de grijper weer opnieuw naar beneden gaat en er een Woody ophaalt van 1996. Hierbij moest ik werken met Javascript. Er moest een if - else state worden aangemaakt. 

  #### oplossing:
  Eerst heb ik zelf gekeken hoe ik dit kon doen. Sanne had een voorbeeld gegeven en hiermee ben ik aan de slag gegaan. Toen ik probeerde of het werkte, gebeurde er niks met de grijper. 
  
  Aan een vriend vroeg ik hulp en hij had mij uiteindelijk geholpen om de button werkend te krijgen, maar om een tweede button ook te laten werken ging niet. Daarom heb ik eerst op internet gekeken, maar ik kwam er niet uit.
  Dit heb ik afgelopen dinsdag met Sanne opgelost. De geschreven Javascript om de buttons werkend te laten maken ziet er op deze manier logisch uit, maar om het zelf te schrijven is nog lastig.



  ### Tweede animatie toevoegen:
  Mij leek het leuk om een tweede animatie op de hover karakters te zetten. Alleen werkte dit niet zoals ik wilde. Ik schreef, zoals in de les werd voorgedaan, de tweede animatie met een komma achter de eerste animatie. Dit werkte alleen niet.

  #### oplossing:
  Na eerst de belangrijkste onderdelen te hebben gedaan, ben ik hiernaar gaan kijken. Ik heb het opnieuw geprobeerd en het lukte! Maar niet op de manier hoe ik het graag wilde. Ik had graag gewild dat als je over een wolk hovert, het karakter naar beneden zou komen en in die tussentijd bijvoorbeeld zou draaien. Dit lukt niet met timen.
  
  
  
  ### Waar moet ik klikken?:
  Aangezien ik ervoor gekozen had dat je op het logo moet klikken om naar de volgende pagina te gaan, was het onduidelijk voor de ander die mijn concept deed testen. Je ziet alleen maar wolkjes en een logo, wat moet ik doen?

  #### oplossing:
  Daarom heb ik ervoor gekozen om een pijltje te maken met "klik op mij!" om duidelijk te maken waar je op moet klikken om naar de grijper en buttons te gaan.
  
</details>



## Voortgang/Feedback 3

<details>
  <summary>Mijn bevindingen + wijzigingen</summary>
    
  
  ### De feedback:
  De feedback die ik in de derde ronde heb gekregen was van Noa en Chantal. Samen gingen we nog eens de checklist af en keken we samen naar de tijdlijn of alles in orde was. Zo kwamen we nog achter…
  
  …dat alle Woody’s onder de buttons nog dezelfde grootte moesten hebben. De Woody’s hebben verschillende groottes waardoor de grijper de Woody’s niet altijd even goed oppakt.
  
  …dat het misschien leuk zou zijn als ik ook teksten zou toevoegen over de verschillende Woody’s.
  
  …dat er nog best wat dubbele code, of code in comments staan. Dus dat de code opgeschoont moest worden.
  
  …dat het leuk zou zijn als er een favicon gemaakt zou worden.
  
  
  ### Tekst toevoegen:
  Als feedback van Noa en Chantal kreeg ik mee dat het misschien leuk is om nog wat informatie te laten zien over de Woody’s. Dit leek me een leuk idee, maar de plaatsing van de tekst vond ik lastig. Het is al best druk als je naar de tijdlijn kijkt. En alles is netjes uitgelijnd. 

  #### oplossing:
  Daarom had ik gekeken of het mooi zou zijn om alle buttons aan de linkerkant te zetten en de grijper ook wat meer naar links te zetten, zodat ik aan de rechterkant plek heb om de tekst te plaatsen. Alleen vond ik dit echt niet mooi. Daarom heb ik het zo gelaten en had ik het idee om het rechtsonder te plaatsen.



  ### Font invoegen:
  Aangezien het me leuk leek om nog een stukje tekst toe te voegen (van onder andere de verschillende Woody’s) heb ik het font van Toy Story gedownload via Font Squirrel. In de les werd dit voorgedaan en het zag er redelijk simpel uit. Totdat ik het zelf ging proberen. Het aanroepen van het lettertype in de CSS ging niet goed, waardoor ik de tekst niet het lettertype mee kon geven.

  #### oplossing:
  Door nog eens goed te hebben gekeken naar hoe het in de les werd gedaan, is het me toch gelukt. Meestal is het gewoon nog eens rustig nakijken/nalezen en dan lukt het wel. Ik denk dat het een typfout was waardoor hij in het begin niet deed koppelen aan de tekst.
  
  Toch heb ik uiteindelijk de teksten weg moeten halen omdat het mij niet lukte om het onder een klik/hover te zetten. 
  
</details>



## Reflectie

<details>
  <summary>Mijn eindresultaat & persoonlijke ontwikkeling</summary>

  ### Je uitkomst - karakteristiek screenshot(s):
  <img src="readme-images/dummy-plaatje.jpg" width="375px" alt="final ontwerp">


  ### Dit ging goed/Heb ik geleerd: 
  Tijdens interface en interactie heb ik geleerd hoe je je ideeën kunt realiseren met CSS. In het eerste en tweede leerjaar hebben we veel lessen gehad met HTML en CSS, dus ik heb al kunnen oefenen met HTML en CSS. Voornamelijk in de CSS week heb ik geleerd hoe je karakters kunt maken en animaties kunt toevoegen. Deze twee weken was het weer even opfrissen, maar ik merkte dat het bezig gaan met animaties erg goed ging. 
  
  Het was even zoeken naar een leuk idee, maar toen ik het eenmaal in m’n hoofd had heb ik het ook zo kunnen realiseren. Dat vond ik erg goed gegaan. Ook het maken van de andere karakters (aliën, aardappelhoofd en de hond) ging best snel. De tip om eerst te kijken welke vormen erin zitten heeft hierbij erg geholpen.
  
  Ik vond het ook leuk dat we elke dag een stukje theorie kregen. Dit was opfrissing, maar ook daar heb ik veel van geleerd. Zo weet ik nu hoe ik een font kan inladen, custom propperties kan gebruiken zoals var(—) en hoe kleuren eigenlijk in elkaar zitten. Dit vond ik erg leerzaam.

  ### Dit was lastig/is niet gelukt:
  Ik merkte dat mijn HTML-structuur soms niet helemaal optimaal was waardoor ik snel dubbele CSS ging schrijven. Zoals de achtergrond, de wolkjes, hiervoor heb ik aardig wat regels moeten schrijven wat denk ik niet per sé nodig hoeft te zijn. De rondjes van de wolken zijn namelijk allemaal hetzelfde, alleen de positie is per wolkje anders. 
  
  Ook vond ik het soms best lastig om andere klasgenoten te helpen. Ondertussen weet ik hoe ik karakters kan maken, maar echt technische dingen begrijp ik nog niet. Zo maakte ik bijvoorbeeld eerst met de wolken een fout door de wolk geen grootte te geven. Er waren zo best wat schoonheidsfoutjes.
  
  ### Wat als ik meer tijd had?:
  Als ik meer tijd zou hebben gehad, had ik teksten bij de Woody’s uit de verschillende jaren willen zetten. Dit was een drempel voor mij omdat ik niet wist hoe ik dit moest doen. De Woody’s komen pas tevoorschijn wanneer je op de button hebt geklikt. Er zou dan weer Javascript geschreven moeten worden wanneer je bijvoorbeeld om de Woody zou klikken voor de tekst. Ik zat nog te stoeien met een hover op een Woody waarbij de tekst rechtsonder in beeld zou komen. Dus net als je over een wolk hovert er een karakter komt. Dit lukte mij alleen niet.
  
  Het is mij niet meer gelukt om het karakter Buzz te maken. Had had mij leuk geleken dat als hij op de binnenkomst pagina, wanneer de gordijnen open zijn gegaan, langs kwam vliegen. Hier had ik helaas geen tijd meer voor.
  
  Daarnaast had ik met meer tijd de afbeeldingen van de Woody’s beter uitgeknipt en van betere kwaliteit opgezocht. Het was best een zoektocht om verschillende (met kwaliteit) afbeeldingen te zoeken. Ook had ik de Woody’s op sommige plekken beter tussen de grijper kunnen plaatsen, maar het gaat uiteindelijk om het idee.
  
  En als laatste had ik met meer tijd ook graag twee animaties willen zetten op karakters. Dus wanneer je oveer een wolk hovert, het karakter eerst opspringt en dan nog zou draaien bijvoorbeeld.
</details>



## Bronnenlijst
<details open>
<summary>continu bijhouden terwijl je werkt</summary>

Nb. Wees specifiek ('css-tricks' als bron is bijv. niet specifiek genoeg).

1. https://docs.google.com/document/d/1fykeP6x9FXZpMS-gJWUH_iWMemnRDyI-NrctrQU_cxg/edit
2. https://css-tricks.com/the-shapes-of-css/
3. https://www.w3schools.com/tags/tag_section.asp
4. https://www.modernways.be/myap/it/page/programming/html/element/section.html
5. https://learntutorials.net/nl/html/topic/311/sectie-elementen
6. https://developer.mozilla.org/en-US/docs/Web/CSS/repeat
7. https://www.codegrepper.com/code-examples/css/css+mirror+element
8. https://www.w3schools.com/tags/tag_ol.asp
9. https://www.w3schools.com/howto/howto_css_flip_image.asp
10. https://stackoverflow.com/questions/9916354/is-it-valid-to-have-a-section-tag-inside-another-section-tag#:~:text=Yes!,section%3E's%20are%20allowed
11. https://blog.hubspot.com/website/css-hover-animation
</details>