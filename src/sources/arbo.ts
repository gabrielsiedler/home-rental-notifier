export const arbo = {
  source: 'Arbo',
  filters: [{ label: 'all', value: null }],
  url: () =>
    `https://www.arboimoveis.com.br/imoveis/para-alugar/casa+casa-condominio+sobrado/florianopolis-sc?precolocacao=2500--15000&dormitorios=2--3--4&vagas=1--2--3&suites=1--2--3--4&banheiros=2--3--4&mobilia=talvez&order=mais_relevantes`,
  selectors: {
    listItem: '.Imoveis_cardDisplay__1h0PV',
    grabber: ($, ctx) => {
      const href = `https://www.arboimoveis.com.br${$(ctx).find('a').first().attr('href')}`
      const title = $(ctx).find('img').first().attr('alt')

      const hrefParts = href.split('/')
      const id = hrefParts[hrefParts.length - 1]

      return {
        id,
        title,
        href,
      }
    },
  },
}
