export default {
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
}
