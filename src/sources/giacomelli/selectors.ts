export default {
  listItem: '.PropertyCard-core-eQlWF',
  grabber: ($, ctx) => {
    const splitUrl = $(ctx).find('a').first().attr('href').split('-')

    const id = splitUrl[splitUrl.length - 1]
    const href = `https://www.giacomelli.com.br${$(ctx).find('a').first().attr('href')}`
    const title = $(ctx).find('.PropertyCard-cardContent-2r-gw').text()

    return {
      id,
      title,
      href,
    }
  },
}
