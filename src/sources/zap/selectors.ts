export default {
  listItem: '.card-container.js-listing-card',
  grabber: ($, ctx) => {
    const id = $(ctx).attr('data-id')
    const href = `https://www.zapimoveis.com.br/imovel/${id}`
    const title = $(ctx).find('.simple-card__address').text().replace('\n', '').trim()

    return {
      id,
      title,
      href,
    }
  },
}
