export default {
  listItem: '.resultado.resultado_lista',
  grabber: ($, ctx) => {
    const id = $(ctx).find('.alinha_valores .referencia span').text()
    const href = `https://www.seiterimobiliaria.com${$(ctx).find('a').first().attr('href')}`
    const title = $(ctx).find('h3.tipo').text()

    return {
      id,
      title,
      href,
    }
  },
}
