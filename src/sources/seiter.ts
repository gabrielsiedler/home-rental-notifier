export const seiter = {
  source: 'Seiter',
  filters: [{ label: 'all', value: null }],
  url: () =>
    `https://www.seiterimobiliaria.com/alugar/sc/florianopolis/itacorubi_santa-monica_trindade_agronomica_corrego-grande_lagoa-da-conceicao_campeche/casa/dormitorios-2/suites-1/vagas-1/ordem-valor/resultado-crescente/quantidade-12/`,
  selectors: {
    loadCondition: '.todos_imoveis',
    listItem: '.resultado.resultado_lista',
    grabber: ($, ctx) => {
      const id = $(ctx).find('.alinha_valores .referencia span').text()
      const href = `https://www.seiterimobiliaria.com${$(ctx).find('a').first().attr('href')}`
      const title = $(ctx).find('h3.tipo').text()

      return {
        id,
        title,
        href,
      }
    },
  },
}
