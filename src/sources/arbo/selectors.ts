export default {
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
}
