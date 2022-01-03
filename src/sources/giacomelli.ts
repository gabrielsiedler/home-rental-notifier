export const giacomelli = {
  source: 'Giacomelli',
  filters: [{ label: 'all', value: null }],
  url: () =>
    `https://www.giacomelli.com.br/imoveis/residencial/casas/florianopolis/centro/trindade/itacorubi/campeche/agronomica/santa-monica/corrego-grande/lagoa-da-conceicao/min-2500/max-20000`,
  selectors: {
    listItem: '.Imoveis_cardDisplay__1h0PV',
    grabber: ($, ctx) => {
      const splitUrl = $(ctx).find('a').first().attr('href').split('-')

      const id = splitUrl[splitUrl.length - 1]
      const href = `https://www.giacomelli.com.br${$(ctx).find('a').first().attr('href')}`
      const title = $(ctx).find('.PropertyCard-cardContent-2r-gw').text()

      return {
        id,
        title,
        href,
      }
    },
  },
}
