# Inleiding

## Doel en Doelgroep

Dit document beschrijft de eisen die Digikoppeling stelt aan de beveiliging van de berichtuitwisseling.

Dit document is bestemd voor architecten en ontwikkelaars van applicaties die gebruik maken van Digikoppeling om berichten tussen systemen veilig uit te wisselen.

Alle Digikoppeling webservices die op WUS of ebMS2 gebaseerd zijn, moeten conformeren aan deze Digikoppeling beveiligingsstandaarden en voorschriften. Deze wordt in dit document gespecificeerd.

Doel van dit document is ontwikkelaars te informeren wat deze beveiligingsvoorschriften precies inhouden, welke standaarden en welke versies toegestaan zijn en partijen zich aan moeten conformeren.

## Digikoppeling 

Deze paragraaf bevat zeer beknopt een aantal hoofdpunten uit de overige documentatie.

Digikoppeling biedt de mogelijkheid om op een sterk gestandaardiseerde wijze berichten uit te wisselen tussen serviceaanbieders (service providers) en serviceafnemers (service requesters of consumers).

De uitwisseling tussen service providers en requesters wordt in drie lagen opgedeeld:

- Inhoud: op deze laag worden de afspraken gemaakt over de inhoud van het uit te wisselen bericht, dus de structuur, semantiek, waardebereiken etc.   
    Digikoppeling houdt zich niet met de inhoud bezig, ‘heeft geen boodschap aan de boodschap’.

- Logistiek: op deze laag bevinden zich de afspraken betreffende transportprotocollen (HTTP & TLS), messaging (SOAP), beveiliging (authenticatie en encryptie) en betrouwbaarheid. Dit is de laag van Digikoppeling.

- Transport: deze laag verzorgt het daadwerkelijke transport van het bericht (TCP/IP).

Digikoppeling richt zich dus uitsluitend op de logistieke laag. Deze afspraken komen in de koppelvlakstandaarden en andere voorzieningen.

De koppelvlakstandaarden dienen te leiden tot een maximum aan interoperabiliteit met een minimum aan benodigde ontwikkelinspanning.

Daarom is gekozen voor bewezen interoperabele internationale standaarden.

Digikoppeling maakt berichtenuitwisseling mogelijk op basis van de ebXML/ebMS2 en WS\* families van standaarden inclusief de daarbij behorende verwante standaarden.

## Digikoppeling standaarden 

De Digikoppeling standaarden bestaan uit de volgende documenten (groene blokken zijn onderdeel van de Digikoppeling standaard):

*Specificatie van de koppelvlakstandaarden*

De koppelvlakspecificatie beschrijft de eisen die gesteld worden aan de adapters om interoperabel met elkaar te kunnen communiceren. Digikoppeling gaat over logistiek, dus over de envelop en niet over de inhoud. De hele set informatie die tezamen nodig is voor een complete generieke Digikoppeling koppelvlakdefinitie bestaat uit:

- Interfacedefinitie WUS of ebMS2 met SOAP headers en informatie over velden en hun specifieke inhoud.

- Beveiligingsvoorschriften en standaarden voor de transport laag, signing en encryptie (cipher suites).

# Identificatie

## Wat is identificatie?

Een goede beveiliging van het berichtenverkeer begint met de identificatie van de partijen en de systemen waarmee zij berichten met elkaar uitwisselen. Identificatie houdt in dat de identiteit van de niet-natuurlijke persoon (organisatie) met grote zekerheid wordt vastgesteld.

De Digikoppeling standaarden schrijven voor hoe de berichtuitwisseling tussen systemen van verschillende organisaties plaats moet vinden. Deze organisaties en systemen worden geauthenticeerd aan de hand van een PKIoverheid certificaat met daarin een uniek identificerend nummer, het OIN.

## Identificerend nummer

Het organisatie identificatienummer (OIN) is het identificerende nummer voor organisaties die gebruik maken van Digikoppeling. De partijen identificeren elkaar op basis van dit nummer.

De bron voor identificatie van organisaties is een erkend register dat is opgenomen in het OIN beleid. In de meeste gevallen is dit het Handelsregister. Het OIN kan worden opgezocht in het OIN Register.

Zie [[?Digikoppeling Identificatie-Authenticatie]]] voor meer informatie.

Het OIN register is bereikbaar op [*https://portaal.digikoppeling.nl/registers/*](https://portaal.digikoppeling.nl/registers/) .

# PKIoverheid certificaten

## Standaarden

| Standaarden | Status | Genoemd in |
| --- | --- | --- |
| PKIoverheid certificaten & CRL Profile  | Verplicht | PKIoverheid Programma van Eisen [[PKI Policy]], [[rfc3447]]|

## Wat is PKIoverheid? 

### PKIoverheid

PKIoverheid is de public key infrastructure in Nederland waarmee PKIoverheid certificaten worden uitgegeven en toegepast conform afspraken die zijn vastgelegd in het PKIoverheid Programma van Eisen.

Zie ook het document [[?Digikoppeling-Cert]] en [www.logius.nl/pkioverheid](http://www.logius.nl/pkioverheid)

### PKIoverheid certificaat 

Digitale certificaten zijn een onmisbare schakel in beveiligd internetverkeer. Een certificaat is een legitimatiebewijs van een website of ICT-systeem. Daarnaast bevat het gegevens die nodig zijn voor beveiligd internetverkeer.<sup>1</sup>

<sup>1</sup>: Bron: [https://www.logius.nl/diensten/pkioverheid/](https://www.logius.nl/diensten/pkioverheid/)

Digikoppeling vereist dat de communicatiepartners PKIoverheid public root certificaten of PKIoverheid private root certificaten gebruiken met een OIN om op een vertrouwelijke wijze gegevens uit te wisselen.

## Voorschriften

### Digikoppeling voorschriften  


| Nr | Voorschrift | Toelichting |
| --- | --- | --- |
| PKI001 | Gebruik OIN in subject serial number veld is verplicht | Dit is afgesproken met de TSPs in de Digikoppeling Overeenkomsten. Zij verstrekken PKIoverheid certificaten met het OIN in het subject.serialnumber field conform de OIN systematiek als het een certificaat betreft dat voor Digikoppeling wordt gebruikt. [[PKI CA]] |
| PKI002 | PKIoverheid certificaat moet geldig zijn (het mag niet zijn verlopen of ingetrokken). | |
| PKI003<br>(WT004)  | De geldigheid van het certificaat wordt getoetst met betrekking tot de geldigheidsdatum en de Certificate Revocation List(CRL) die voldoet aan de eisen van PKI-overheid. | |
| PKI004<br>(WT005) | De betreffende CRL dient zowel voor de versturende als ontvangende partij te benaderen zijn. | |
| PKI005 | Het certificaat moet zijn van het type PKIoverheid public root (PKI Staat der Nederlanden Root) of PKIoverheid private root (PKI Staat der Nederlanden Private Root).   *Voor Serviceaanbieders geldt dat zij uiterlijk per 1-1-2021 gebruik van private root certificaten moeten ondersteunen * | |

### PKIoverheid programma van eisen

1. Een PKIoverheid certificaat dient conform de eisen van het PKIoverheid PvE te worden uitgegeven door de Trust Service Providers (TSP).

1. De te gebruiken certificaten in de productie omgeving voldoen aan de eisen van PKIoverheid (PvE) en de inhoud van de identificerende velden in het certificaat dienen te voldoen aan de afspraken zoals gesteld in de functionele eisen in het document [[?Digikoppeling Identificatie-Authenticatie]]. Met het toepassen van PKIoverheid-certificaten die Digikoppeling compliant zijn, wordt hieraan voldaan.

1. Certificaten voor productie wijken af van certificaten voor test doordat zij op verschillende ‘roots’ zijn gebaseerd, respectievelijk ‘PKI Staat der Nederlanden Root’ (of Staat der Nederlanden Private Root) en ‘PKI TRIAL root’.

### Geldigheid

De geldigheid van het certificaat wordt getoetst met betrekking tot de geldigheidsdatum en de Certificate Revocation List(CRL) die voldoet aan de eisen van PKI-overheid. Zie eis PKI002 en PKI003

De betreffende CRL dient zowel voor de versturende als ontvangende partij te benaderen zijn. Zie eis PKI004 (WT005)

Een certificaat dient te worden ingetrokken als de organisatie niet meer bestaat of als de private sleutel gecompromitteerd is.

## Best practices 

De best practices voor inrichting en gebruik zijn beschreven in *Gebruik en achtergronden Digikoppeling certificaten*.

# TLS 

## Standaarden

| Standaarden | Status | Bron |
| --- | --- | --- |
| TLS 1.2 [[rfc5246]]  | Verplicht  | [[NCSC 2019]]  |
| TLS 1.3 [[rfc8446]]  | Optioneel  | [[NCSC 2019]]  |
| HTTP over TLS Transport Layer Security<br>([[rfc2818]], [[rfc5785]], [[rfc7230]]) | Informational |  IETF [[rfc5322]]|

## Digikoppeling voorschriften

| Nr | Voorschrift | Toelichting |
| --- | --- | --- |
| TLS001 | Authenticatie is verplicht met TLS en PKIoverheid certificaten | |
| TLS002 | Tweezijdig TLS is verplicht | Digikoppeling schrijft het gebruik van twee-zijdig TLS voor en verplicht dit voor alle vormen van berichtuitwisseling via Digikoppeling. |
| TLS003 | De TLS implementatie mag niet op SSL v3 en eerdere versies terugvallen | Backward compatibility mode voor SSL v3 en eerdere versies dient te worden uitgezet. |
| TLS004 | Een Serviceaanbieder is verplicht TLS versie 1.2 te ondersteunen, daarnaast is het aanbevolen voor een Serviceaanbieder om TLS versie 1.3 te ondersteunen.  Als een Serviceaanbieder TLS versie 1.3 aanbiedt dan is het aanbevolen voor Serviceafnemers om TLS 1.3 te gebruiken       TLS 1.0 en TLS 1.1 zijn niet meer toegestaan | NCSC geeft aan: “De beste bescherming wordt momenteel geboden door de meest recente TLS versie: TLS 1.3” Zie [[NCSC 2019]]          Niet meer toegestaan binnen de Digikoppeling standaard vanaf 10-9-2016  |
| TLS005 | Het is verplicht voor communicatie over HTTPS port 443 te gebruiken | Port 443 is de standaard poort voor HTTPS verkeer |
| TLS006 | Het is verplicht te voldoen aan de NCSC ICT-beveiligingsrichtlijnen voor TLS | Zie H3 van [[NCSC 2019]] |

## Onderbouwing

Zowel de Digikoppeling-koppelvlakstandaard ebMS2 als de Digikoppeling-koppelvlakstandaard WUS en Digikopppeling-koppelvlakstandaard Grote Berichten schrijven het gebruik voor van (tweezijdig) TLS om de berichtenstroom te beveiligen. Het protocol TLS heeft betrekking op het communicatiekanaal. De Digikoppeling-koppelvlakstandaarden stellen deze eis dus aan de transportlaag en aan de authenticatie van organisaties.

In Digikoppeling is ervoor gekozen om PKIoverheid certificaten te gebruiken op het niveau van het communicatiekanaal (TLS) om de directe communicatiepartners te authenticeren. TLS kan niet toegepast worden om end-to-end authenticatie uit te voeren in een multi-hop (voor ebMS2) omgeving; zie daarvoor berichtniveau beveiliging in de [[?Digikoppeling Architectuur]] documentatie.

## Overwegingen 

Het NCSC adviseert om TLS altijd te configureren op basis van [[NCSC 2019]] voor Transport Layer Security].

# Cipher suites voor TLS, signing en encryptie 

## TLS Ciphersuites

| Nr | Voorschrift | Toelichting |
| --- | --- | --- |
| TLSCIPH001 |  De gebruikte TLS cryptografische algoritmen moeten de NCSC classificatie ‘voldoende’ of ‘goed’ hebben.  TLS cryptografische algoritmen met de NCSC classificatie ‘uit te faseren’ dienen zo spoedig mogelijk maar uiterlijk 01-01-2021 te worden uitgefaseerd. |   Zie  [[NCSC 2019]]  |

## XML Signing

### Digikoppeling voorschriften voor XML signing

| Nr | Voorschrift | Toelichting |
| --- | --- | --- |
| SIGN001 | Signing met SHA-2 is verplicht. | Minimaal SHA-224 of SHA-256. |
| SIGN002 | Signing conform XMLDSIG is verplicht | Zie de koppelvlakstandaarden signed profielen |
| SIGN003 | Het DigestMethod Algorithm moet gebruik maken van een van de volgende algoritmen: SHA-224, SHA-256, SHA-384, SHA-512 [[xmlenc-core]], [[[FIPS-180-4]]]| Zie ook [https://www.w3.org/TR/xmldsig-core1/\#sec-DigestMethod](https://www.w3.org/TR/xmldsig-core1/#sec-DigestMethod) [[xmldsig-core1]] |
| SIGN004 | Het SignatureMethod Algorithm kan gebruik maken van een van de volgende algoritmen: [SHA-224]  [SHA-256] [SHA-384] [SHA-512]  |  Zie ook [https://www.w3.org/TR/xmldsig-core1/\#sec-DigestMethod](https://www.w3.org/TR/xmldsig-core1/#sec-DigestMethod) voor voorbeelden|

### Reden voor vervanging SHA-1 door SHA-2

*Certificaten met SHA-1 als hashfunctie worden vervangen door certificaten met hashfuncties uit de SHA-2-familie: SHA-256, SHA-384 en SHA-512. Certificaten met MD5 als hashfunctie zijn enkele jaren geleden al vervangen. MD5 is de voorloper van SHA-1. [[HTTPS-factsheet NCSC]]*

PKIoverheid stelt SHA-2 als eis. Alle certificaten die onder de root Staat der Nederlanden worden uitgegeven moeten voldoen aan SHA-2. In [[NCSC 2019]] wordt SHA-1 nog wel als ‘voldoende’ bestempeld voor hashing binnen een applicatie, maar voor signing is het onvoldoende.

In plaats daarvan is het dus wenselijk om gebruik te maken van een algoritme dat als ‘goed’ is aangemerkt, dus:

- SHA-512,

- SHA-384 of

- SHA-256

## XML Encryptie

### Digikoppeling voorschriften voor payload encryptie

| Nr | Voorschrift | Toelichting |
| --- | --- | --- |
| ENC001 | Indien er gebruik wordt gemaakt van XML encryption op payload niveau dient de FIPS 197 standaard (AES) te worden gebruikt.  | [[AES]] |
| ENC002 | Encryptie conform XML versleuteling [[xmlenc-core]] is verplicht |  [[xmlenc-core]] |
| ENC003 | De ondersteunde data encryption (data versleuteling) algoritmen zijn: 3DES AES128 AES256 | [[xmlenc-core]]  (Gebruik GCM mode indien beschikbaar anders CBC mode in combinatie met een signature)  |
| ENC004 | Het Key transport algorithm maakt gebruik van de RSA-OAEP algoritmen. | [[rfc5756]], [xmlenc-core], [[rfc5756]]|