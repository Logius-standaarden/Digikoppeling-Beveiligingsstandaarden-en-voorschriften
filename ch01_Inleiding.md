# Inleiding

## Doel en Doelgroep

Dit document beschrijft de eisen die Digikoppeling stelt aan de beveiliging van de berichtuitwisseling.

Dit document is bestemd voor architecten en ontwikkelaars van applicaties die gebruik maken van Digikoppeling om berichten tussen systemen veilig uit te wisselen.

Alle Digikoppeling webservices moeten conformeren aan deze Digikoppeling beveiligingsstandaarden en voorschriften. Deze wordt in dit document gespecificeerd.

Doel van dit document is ontwikkelaars te informeren wat deze beveiligingsvoorschriften precies inhouden, welke standaarden en welke versies toegestaan zijn en partijen zich aan moeten conformeren.

## Digikoppeling 

Deze paragraaf bevat zeer beknopt een aantal hoofdpunten uit de overige documentatie.

Digikoppeling biedt de mogelijkheid om op een sterk gestandaardiseerde wijze berichten uit te wisselen tussen serviceaanbieders (service providers) en serviceafnemers (service requesters of consumers).

De uitwisseling tussen service providers en requesters wordt in drie lagen opgedeeld:

- Inhoud: op deze laag worden de afspraken gemaakt over de inhoud van het uit te wisselen bericht, dus de structuur, semantiek, waardebereiken etc.   
    Digikoppeling houdt zich niet met de inhoud bezig, ‘heeft geen boodschap aan de boodschap’.

- Logistiek: op deze laag bevinden zich de afspraken betreffende transportprotocollen (HTTP & TLS), messaging, beveiliging (authenticatie en encryptie) en betrouwbaarheid. Dit is de laag van Digikoppeling.

- Transport: deze laag verzorgt het daadwerkelijke transport van het bericht (TCP/IP).

Digikoppeling richt zich dus uitsluitend op de logistieke laag. Deze afspraken komen in de koppelvlakstandaarden en andere voorzieningen.

De koppelvlakstandaarden dienen te leiden tot een maximum aan interoperabiliteit met een minimum aan benodigde ontwikkelinspanning. Daarom is gekozen voor bewezen interoperabele internationale standaarden.

## Digikoppeling standaarden 

De documentatie is als volgt opgebouwd:

<figure>
  <object data="https://logius-standaarden.github.io/publicatie/dk/actueel/media/DK_Specificatie_structuur.svg" type="image/svg+xml" id="infographic">Overzicht van de onderdelen van de Digikoppeling Standaard, de standaard is onderverdeeld in normatieve en ondersteunende onderdelen</object>
  <figcaption>Opbouw documentatie Digikoppeling</figcaption>
</figure>

<b>Legenda</b>


<table class="legendum">
    <thead>
        <tr>
            <th><strong>Kleur</strong></th>
            <th><strong>Soort Document</strong></th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td class="green">Groen</td>
            <td>Standaard documentatie</td>
        </tr>
        <tr>
            <td class="grey">Grijs</td>
            <td>Ondersteunende documentatie</td>
        </tr>
    </tbody>
</table>


<b>Beheer</b>

- De standaarddocumenten (groen/vierkant aangegeven) vallen onder het beheer zoals geformaliseerd in het document [[[?DK-Beheermodel]]].

- De ondersteunende documentatie wordt onderhouden door Logius als de beheerder van de standaard (en afgestemd met stakeholders/ gebruikers).

- Alle goedgekeurde documenten zijn te vinden op de website van Logius, [www.logius.nl](https://www.logius.nl/onze-dienstverlening/domeinen/gegevensuitwisseling/digikoppeling).
