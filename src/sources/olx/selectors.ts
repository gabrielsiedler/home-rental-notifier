export default {
  listItem: '.sc-1fcmfeb-2',
  grabber: ($, ctx) => {
    const _link = $(ctx).find('a')
    const id = _link.attr('data-lurker_list_id')
    const href = _link.attr('href')
    const title = _link.attr('title')

    return {
      id,
      title,
      href,
    }
  },
}
