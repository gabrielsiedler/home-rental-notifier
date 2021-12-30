export default {
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
}
