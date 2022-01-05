# Cipher suites voor TLS, signing en encryptie 

## TLS Ciphersuites

| Nr | Voorschrift | Toelichting |
| --- | --- | --- |
| TLSCIPH001 |  De gebruikte TLS cryptografische algoritmen moeten de NCSC classificatie ‘voldoende’ of ‘goed’ hebben.  TLS cryptografische algoritmen met de NCSC classificatie ‘uit te faseren’ dienen zo spoedig mogelijk maar uiterlijk 01-01-2021 te worden uitgefaseerd. |   Zie  [[NCSC 2021]]  |

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

PKIoverheid stelt SHA-2 als eis. Alle certificaten die onder de root Staat der Nederlanden worden uitgegeven moeten voldoen aan SHA-2. In [[NCSC 2021]] wordt SHA-1 nog wel als ‘voldoende’ bestempeld voor hashing binnen een applicatie, maar voor signing is het onvoldoende.

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