export const olx = {
  source: 'Olx',
  filters: [
    { label: 'Itacorubi', value: 'itacorubi' },
    { label: 'Córrego Grande', value: 'corrego+grande' },
    { label: 'Trindade', value: 'trindade' },
    { label: 'Santa Mônica', value: 'santa+monica' },
    { label: 'Agronômica', value: 'agronomica' },
    { label: 'Lagoa da Conceição', value: 'lagoa+da+conceicao' },
    { label: 'Campeche', value: 'campeche' },
  ],
  url: (filter) => `https://sc.olx.com.br/florianopolis-e-regiao/imoveis/aluguel/casas?ps=2000&q=${filter.value}&sf=1`,
  selectors: {
    listItem: '.sc-1fcmfeb-2',
    grabber: ($, ctx) => {
      const _link = $(ctx).find('a')
      const id = _link.attr('data-lurker_list_id')
      const href = _link.attr('href')
      const title = _link.attr('title')

      return {
        id,
        title,
        href,
      }
    },
  },
}
