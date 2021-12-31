export default {
  listItem: '.property-item',
  grabber: ($, ctx) => {
    const id = $(ctx).find('.code').text().replace('\n', '').replace('Cód ', '')
    const href = `https://www.daltonandrade.com.br${$(ctx).find('a').first().attr('href')}`
    const title = $(ctx).find('h2.click').text().replace('\n', ' ')

    return {
      id,
      title,
      href,
    }
  },
}
