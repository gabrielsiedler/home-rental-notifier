export default {
  listItem: '.imovel-box-single',
  grabber: ($, ctx) => {
    const id = $(ctx).find('button[data-codigo]').first().attr('data-codigo')
    const href = $(ctx).find('.titulo-grid a').first().attr('href')
    const title = $(ctx).find('.titulo-grid a').first().text()

    return {
      id,
      title,
      href,
    }
  },
}
