export const jump = {
  source: 'Jump',
  filters: [{ label: 'all', value: null }],
  url: () =>
    `https://www.jumpimoveis.com.br/imoveis/para-alugar/casa/florianopolis/itacorubi+corrego-grande+lagoa-da-conceicao+santa-monica+trindade+agronomica+campeche+agronomica`,
  selectors: {
    listItem: '.card-with-buttons',
    grabber: ($, ctx) => {
      const href = `https://www.jumpimoveis.com.br${$(ctx).attr('href')}`
      const title = $(ctx).find('.card-with-buttons__footer h3').text()

      const hrefParts = href.split('/')
      const id = hrefParts[hrefParts.length - 1].replace('?from=rent', '')

      return {
        id,
        title,
        href,
      }
    },
  },
}
