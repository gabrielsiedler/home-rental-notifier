export default {
  listItem: '.results-list div[data-type="property"]',
  grabber: ($, ctx) => {
    const id = $(ctx).attr('id')
    const href = `https://www.vivareal.com.br${$(ctx).find('a').first().attr('href')}`
    const title = $(ctx).find('.property-card__title').first().text()

    return {
      id,
      title,
      href,
    }
  },
}
