# PKIoverheid certificaten

## Standaarden

| Standaarden | Status | Genoemd in |
| --- | --- | --- |
| PKIoverheid certificaten & CRL Profile  | Verplicht | [[[PKIO-PvE]]], [[rfc3447]]|

## Wat is PKIoverheid? 

### PKIoverheid

PKIoverheid is de public key infrastructure in Nederland waarmee PKIoverheid certificaten worden uitgegeven en toegepast conform afspraken die zijn vastgelegd in het PKIoverheid Programme of Requirements.

Zie ook het document [[[?DK-gbachtcert]]] en [[[?PKIoverheid]]]

### PKIoverheid certificaat 

Het PKIoverheid-certificaat is een computerbestand dat werkt als een digitaal paspoort. Als iemand een website, e-mail of document van uw organisatie wil bekijken, controleert zijn webbrowser of e-mailprogramma het bijbehorende certificaat. Door elkaar te identificeren verkleint de kans dat oplichters zich voor kunnen doen als iemand anders. Digitale certificaten waarborgen dus betrouwbaarheid [[?PKIoverheid]].

Digikoppeling vereist dat de communicatiepartners PKIoverheid private root certificaten gebruiken met een OIN om op een vertrouwelijke wijze gegevens uit te wisselen.

## Voorschriften

### Digikoppeling voorschriften  

| Nr | Voorschrift | Toelichting |
| --- | --- | --- |
| PKI001 | Gebruik OIN in `subject:serialNumber` veld is verplicht | Dit is afgesproken met de TSP's in de Digikoppeling Overeenkomsten. Zij verstrekken PKIoverheid certificaten met het OIN in het `subject:serialNumber` field conform de OIN systematiek als het een certificaat betreft dat voor Digikoppeling wordt gebruikt. [[PKI-CA]] |
| PKI002 | PKIoverheid certificaat moet geldig zijn (het mag niet zijn verlopen of ingetrokken). | |
| PKI003<br>(WT004)  | De geldigheid van het certificaat wordt getoetst met betrekking tot de geldigheidsdatum en de Certificate Revocation List(CRL) die voldoet aan de eisen van PKIoverheid. | |
| PKI004<br>(WT005) | De betreffende CRL dient zowel voor de versturende als ontvangende partij te benaderen zijn. | |
| PKI005 | Het certificaat moet zijn van het type PKIoverheid private root (PKI Staat der Nederlanden Private Root) <br>Voor Serviceaanbieders  en Servicegebruikers geldt dat zij vanaf 1-1-2021 gebruik moeten maken van private root certificaten| PKIoverheid geeft aan dat voor machine-naar-machine (M2M) verkeer (zoals Digikoppeling) Private root certificaten gebruikt dienen te worden.|

### PKIoverheid Programme of Requirements

1. Een PKIoverheid certificaat dient conform de eisen van het PKIoverheid PvE te worden uitgegeven door de Trust Service Providers (TSP).

1. De te gebruiken certificaten in de productie omgeving voldoen aan de eisen van PKIoverheid (PvE) en de inhoud van de identificerende velden in het certificaat dienen te voldoen aan de afspraken zoals gesteld in de functionele eisen in het document [[[?DK-IDAuth]]]. Met het toepassen van PKIoverheid-certificaten die Digikoppeling compliant zijn, wordt hieraan voldaan.

1. Certificaten voor productie wijken af van certificaten voor test doordat zij onder een andere 'root' zijn uitgegeven, respectievelijk 'Staat der Nederlanden' (productie) en 'TRIAL PKIoverheid' (test). Deze zijn te vinden op <https://cert.pkioverheid.nl>. 

### Geldigheid

De geldigheid van het certificaat wordt getoetst met betrekking tot de geldigheidsdatum en de Certificate Revocation List (CRL) die voldoet aan de eisen van PKIoverheid. Zie eis PKI002 en PKI003. 

De betreffende CRL dient zowel voor de versturende als ontvangende partij te benaderen zijn. Zie eis PKI004 (WT005)

Een certificaat dient te worden ingetrokken als de organisatie niet meer bestaat of als de private sleutel gecompromitteerd is.

## Best practices 

De best practices voor inrichting en gebruik zijn beschreven in *Gebruik en achtergronden Digikoppeling certificaten*.

