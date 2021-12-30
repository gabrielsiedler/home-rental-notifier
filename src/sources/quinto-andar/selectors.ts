export default {
  listItem: '[data-testid="house-card-container"]',
  grabber: ($, ctx) => {
    const title =
      $(ctx).find('[data-testid="house-card-address"]').text() + $(ctx).find('[data-testid="house-card-region"]').text()
    const href = $(ctx).find('> a').attr('href')
    const id = href!.match(/\/imovel\/(\d+)?.*/)![1]

    return {
      id,
      title,
      href,
    }
  },
}
