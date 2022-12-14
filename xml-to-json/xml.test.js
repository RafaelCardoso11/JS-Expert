const fs = require("fs");
const LoteRps = require("../aula01-mocks/src/LoteRps");
const Xml = require("./src/xml");

(() => {
  const lote = LoteRps.get(1809, 20903238000134, 114111, [
    {
        "tip:IdentificacaoRps": {
          "tip:Numero": ["259408"],
          "tip:Serie": ["NFSe"],
          "tip:Tipo": ["1"],
        },
        "tip:DataEmissao": ["2022-09-28T00:00:00"],
        "tip:NaturezaOperacao": ["1"],
        // "tip:RegimeEspecialTributacao"
        // "tip:OptanteSimplesNacional"
        // "tip:IncentivadorCultural"
        // "tip:Status"
        // "tip:Servico"
        // "tip:Tomador"
    },
    {
        "tip:IdentificacaoRps": {
          "tip:Numero": ["259408"],
          "tip:Serie": ["NFSe"],
          "tip:Tipo": ["1"],
        },
        "tip:DataEmissao": ["2022-09-28T00:00:00"],
        "tip:NaturezaOperacao": ["1"],
        // "tip:RegimeEspecialTributacao"
        // "tip:OptanteSimplesNacional"
        // "tip:IncentivadorCultural"
        // "tip:Status"
        // "tip:Servico"
        // "tip:Tomador"
    },
  ]);
  Xml.objectToXml(lote);
})();
