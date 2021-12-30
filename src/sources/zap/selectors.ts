export default {
  listItem: '.sc-1fcmfeb-2',
  grabber: ($, ctx) => {
    const id = $(this).attr('data-id')
    const href = `https://www.zapimoveis.com.br/imovel/${id}`
    const title = $(this).find('.simple-card__address').text().replace('\n', '').trim()

    return {
      id,
      title,
      href,
    }
  },
}
