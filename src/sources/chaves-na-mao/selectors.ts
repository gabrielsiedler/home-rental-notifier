export default {
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
}
