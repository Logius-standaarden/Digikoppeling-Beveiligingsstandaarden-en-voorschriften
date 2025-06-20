# TLS (Transport Layer Security)

Transport Layer Security (TLS) is een protocol dat een veilige versleutelde verbinding legt tussen systemen waardoor gegevens vertrouwelijk en compleet wordt uitgewisseld. Binnen de context van Digikoppeling verplicht TLS het gebruik van wederzijde authenticatie van de betrokken partijen, zodat alleen geautoriseerde systemen kunnen communiceren met elkaar.

## Standaarden

| Standaarden | Status | Bron |
| --- | --- | --- |
| TLS 1.2 [[rfc5246]]  | Verplicht  | [[NCSC 2025]]  |
| TLS 1.3 [[rfc8446]]  | Optioneel  | [[NCSC 2025]]  |
| HTTP over TLS Transport Layer Security<br>([[rfc2818]], [[rfc5785]], [[rfc7230]]) | Informational |  IETF [[rfc5322]]|

## Digikoppeling voorschriften

| Nr | Voorschrift | Toelichting |
| --- | --- | --- |
| TLS001 | Authenticatie is verplicht met TLS en PKIoverheid certificaten | |
| TLS002 | Tweezijdig TLS is verplicht | Digikoppeling schrijft het gebruik van twee-zijdig TLS voor en verplicht dit voor alle vormen van berichtuitwisseling via Digikoppeling. |
| TLS003 | De TLS implementatie mag niet op SSL v3 en eerdere versies terugvallen | Backward compatibility mode voor SSL v3 en eerdere versies dient te worden uitgezet. |
| TLS004 | Een Serviceaanbieder is <span class="underline">verplicht</span> TLS versie 1.2 te ondersteunen, daarnaast is het <span class="underline">aanbevolen</span> voor een Serviceaanbieder om TLS versie 1.3 te ondersteunen.  Als een Serviceaanbieder TLS versie 1.3 aanbiedt dan is het aanbevolen voor Serviceafnemers om TLS 1.3 te gebruiken | NCSC geeft aan: “Configureer het gebruik van TLS 1.2 ter ondersteuning van oudere clients, maar geef de voorkeur aan TLS 1.3 waar mogelijk [6]. Andere versies zijn niet veilig in het gebruik.” Zie [[NCSC 2025]]|
||TLS 1.0 en TLS 1.1 zijn niet meer toegestaan|Niet meer toegestaan binnen de Digikoppeling standaard vanaf 10-9-2016 |
| TLS005 | Het is verplicht voor communicatie over HTTPS port 443 te gebruiken | Port 443 is de standaard poort voor HTTPS verkeer |
| TLS006 | Het is verplicht te voldoen aan de NCSC ICT-beveiligingsrichtlijnen voor TLS | Zie [[NCSC 2025]]|

## Onderbouwing

Zowel de Digikoppeling-koppelvlakstandaard ebMS2 als de Digikoppeling-koppelvlakstandaard WUS en Digikopppeling-koppelvlakstandaard Grote Berichten schrijven het gebruik voor van (tweezijdig) TLS om de berichtenstroom te beveiligen. Het protocol TLS heeft betrekking op het communicatiekanaal. De Digikoppeling-koppelvlakstandaarden stellen deze eis dus aan de transportlaag en aan de authenticatie van organisaties.

In Digikoppeling is ervoor gekozen om PKIoverheid certificaten te gebruiken op het niveau van het communicatiekanaal (TLS) om de directe communicatiepartners te authenticeren. TLS kan niet toegepast worden om end-to-end authenticatie uit te voeren in een multi-hop (voor ebMS2) omgeving; zie daarvoor berichtniveau beveiliging in de [[[?DK-Architectuur]]] documentatie.

## Overwegingen 

Het NCSC adviseert om TLS altijd te configureren op basis van [[NCSC 2021]] voor Transport Layer Security.

