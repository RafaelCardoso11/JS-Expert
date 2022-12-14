




class LoteRps {
  static get(NumeroLote, Cnpj, InscricaoMunicipal, Rps) {
    return {
      EnviarLoteRpsEnvio: {
        $: {
          xmlns: "http://www.ginfes.com.br/servico_enviar_lote_rps_envio",
          "xmlns:tip": "http://www.ginfes.com.br/tipos",
        },
        NumeroLote,
        Cnpj,
        InscricaoMunicipal,
        QuantidadeRps: Rps.length,
        ListaRps: {
          Rps
        },
      },
    };
  }
}
module.exports = LoteRps;