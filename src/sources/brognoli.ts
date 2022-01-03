export const brognoli = {
  source: 'Brognoli',
  filters: [{ label: 'all', value: null }],
  url: () =>
    `https://www.brognoli.com.br/imoveis/?sort=newest&search_type=3&search_city=FLORIAN%C3%93POLIS&search_neighborhood%5B%5D=CAMPECHE&search_neighborhood%5B%5D=C%C3%93RREGO+GRANDE&search_neighborhood%5B%5D=ITACORUBI&search_neighborhood%5B%5D=LAGOA+DA+CONCEI%C3%87%C3%83O&search_neighborhood%5B%5D=SANTA+M%C3%94NICA&search_neighborhood%5B%5D=TRINDADE&search_category=445&search_min_price=2+000&search_max_price=&search_bedrooms=0&search_garages=0`,
  selectors: {
    listItem: '.property-gamd-box.alugar',
    grabber: ($, ctx) => {
      const id = $(ctx).find('div[id^=card-]').first().attr('id').replace('card-', '')
      const href = $(ctx).find('a').first().attr('href')
      const title = $(ctx).find('.label-search-address').first().text()

      return {
        id,
        title,
        href,
      }
    },
  },
}
