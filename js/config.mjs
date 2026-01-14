import { loadRespecWithConfiguration } from "https://logius-standaarden.github.io/publicatie/respec/organisation-config.mjs";

loadRespecWithConfiguration({
  authors: [ { 
        "name" : "Pieter Hering",
        "url" : "https://logius.nl/standaarden"
      } ],
  editors: [ 
      { 
        "name" : "Peter Haasnoot",
        "url" : "https://logius.nl/standaarden"
      },
      { 
        "name" : "Nil Barua",
        "url" : "https://logius.nl/standaarden"
      }
    ],
  github: "https://github.com/Logius-standaarden/Digikoppeling-Beveiligingsstandaarden-en-voorschriften",
  previousPublishDate: "2025-06-24",
  previousPublishVersion: "2.0.1",
  pubDomain: "dk",
  publishDate: "2026-01-16",
  publishVersion: "2.1.0",
  shortName: "beveilig",
  specStatus: "DEF",
  specType: "ST"
});
