export default {
  listItem: '.ListResult_Wrapper_Card',
  grabber: ($, ctx) => {
    const id = $(ctx).find('.Info_Title_Code').text().replace('Cód.: ', '')
    const href = `https://www.gralhaimoveis.com.br${$(ctx).find('a').first().attr('href')}`
    const title = $(ctx).find('.Info_Title_Full_Adress').text()

    return {
      id,
      title,
      href,
    }
  },
}
