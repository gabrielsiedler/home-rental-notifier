export const ibagy = {
  source: 'Ibagy',
  filters: [
    { label: 'Agronômica', value: 'agronomica' },
    { label: 'Trindade', value: 'trindade' },
    { label: 'Itacorubi', value: 'itacorubi' },
    { label: 'Córrego Grande', value: 'corrego-grande' },
    { label: 'Santa Mônica', value: 'santa-monica' },
    { label: 'Lagoa da Conceição', value: 'lagoa-da-conceicao' },
    { label: 'Campeche', value: 'campeche' },
  ],
  url: (filter) => `https://ibagy.com.br/aluguel/casa/florianopolis/${filter.value}/2-dormitorios/com-suite/com-vaga/`,
  selectors: {
    loadCondition: '.result-totals-phrase',
    listItem: '.imovel-box-single',
    grabber: ($, ctx) => {
      const id = $(ctx).find('button[data-codigo]').first().attr('data-codigo')
      const href = $(ctx).find('.titulo-grid a').first().attr('href')
      const title = $(ctx).find('.titulo-grid a').first().text()

      return {
        id,
        title,
        href,
      }
    },
  },
}
