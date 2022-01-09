export const regente = {
  source: 'Regente',
  filters: [{ label: 'all', value: null }],
  url: () =>
    `https://regenteimoveis.com.br/?imovel=pesquisa&s=&code=&business%5B%5D=aluguel&tipo=casa&city=florianopolis&bairro%5B%5D=Agron%C3%B4mica&bairro%5B%5D=Campeche&bairro%5B%5D=C%C3%B3rrego+Grande&bairro%5B%5D=Itacorubi&bairro%5B%5D=Lagoa+Da+Concei%C3%A7%C3%A3o&bairro%5B%5D=Parque+S%C3%A3o+Jorge&bairro%5B%5D=Santa+M%C3%B4nica&bairro%5B%5D=Trindade&valor_min=&valor_max=&banheiro=&garagem=`,
  selectors: {
    loadCondition: '.text_result',
    listItem: '.main_imov_item',
    grabber: ($, ctx) => {
      const href = $(ctx).find('a').first().attr('href')
      const title = $(ctx).find('a').first().attr('title')
      const id = href.replace('https://regenteimoveis.com.br/', '')

      return {
        id,
        title,
        href,
      }
    },
  },
}
