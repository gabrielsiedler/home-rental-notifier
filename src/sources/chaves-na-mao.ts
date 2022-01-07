export const chavesNaMao = {
  source: 'Chaves na mão',
  filters: [{ label: 'all', value: null }],
  url: () =>
    `https://www.chavesnamao.com.br/casas-para-alugar/sc-florianopolis/itacorubi/3-quartos/?&filtro={%22bai%22:[13931,13963,13939,13966,13922,13950],%22tim%22:[25],%22ban%22:2,%22gar%22:1,%22pmin%22:2500}`,
  selectors: {
    listItem: '.imoveis__Card-obm8pe-0',
    grabber: ($, ctx) => {
      const id = $(ctx).attr('id')
      const href = `https://www.chavesnamao.com.br${$(ctx).find('a').first().attr('href')}`
      const title = $(ctx).find('a').first().attr('title')

      return {
        id,
        title,
        href,
      }
    },
  },
}
