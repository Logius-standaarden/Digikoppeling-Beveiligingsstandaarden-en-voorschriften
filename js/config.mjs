import { loadRespecWithConfiguration } from "https://logius-standaarden.github.io/publicatie/respec/organisation-config.mjs";

loadRespecWithConfiguration({
  authors: [ { 
        "name" : "Pieter Hering",
        "company" : "Logius",
        "url" : "https://www.logius.nl"
      } ],
  editors: [ 
      { 
        "name" : "Peter Haasnoot",
        "company" : "Logius",
        "url" : "https://www.logius.nl"
      },
      { 
        "name" : "Nil Barua",
        "company" : "Logius",
        "url" : "https://www.logius.nl"
      }
    ],
  github: "https://github.com/Logius-standaarden/Digikoppeling-Beveiligingsstandaarden-en-voorschriften",
  previousPublishVersion: "2.0.1",
  pubDomain: "dk",
  publishDate: "2026-04-21",
  publishVersion: "3.0.0",
  shortName: "beveilig",
  specStatus: "DEF",
  specType: "ST"
});
