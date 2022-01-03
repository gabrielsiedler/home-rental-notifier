export const daltonAndrade = {
  source: 'Dalton Andrade',
  filters: [
    { label: 'Lagoa da Conceição', value: 'Lagoa%20da%20Conceicao' },
    { label: 'Itacorubi', value: 'Itacorubi' },
    { label: 'Córrego Grande', value: 'Corrego%20Grande' },
    { label: 'Santa Mônica', value: 'Santa%20Monica' },
    { label: 'Agronômica', value: 'Agronomica' },
    { label: 'Campeche', value: 'Campeche' },
    { label: 'Trindade', value: 'Trindade' },
  ],
  url: (filter) =>
    `https://www.daltonandrade.com.br/aluguel?imovel={%22casa%22:true,%22category%22:%22residencial%22,%22city%22:%22Florianopolis%22,%22neighborhood%22:%22${filter.value}%22,%22value_min%22:%222.500%22}`,
  selectors: {
    listItem: '.property-item',
    grabber: ($, ctx) => {
      const id = $(ctx).find('.code').text().replace('\n', '').replace('Cód ', '')
      const href = `https://www.daltonandrade.com.br${$(ctx).find('a').first().attr('href')}`
      const title = $(ctx).find('h2.click').text().replace('\n', ' ')

      return {
        id,
        title,
        href,
      }
    },
  },
}
