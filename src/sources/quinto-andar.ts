export const quintoAndar = {
  source: 'Quinto Andar',
  filters: [
    { label: 'Itacorubi', value: 'itacorubi' },
    { label: 'Campeche', value: 'campeche' },
    { label: 'Trindade', value: 'trindade' },
    { label: 'Córrego Grande', value: 'corrego-grande' },
    { label: 'Lagoa da Conceição', value: 'lagoa-da-conceicao' },
  ],
  url: (filter) =>
    `https://www.quintoandar.com.br/alugar/imovel/${filter.value}-florianopolis-sc-brasil/casa/casacondominio/de-2000-a-20000-aluguel/3-4-quartos/2-3-4-banheiros/1-2-3-vagas`,
  selectors: {
    loadCondition: '.MuiBox-root.jss681, [data-testid="house-card-container"]',
    listItem: '[data-testid="house-card-container"]',
    grabber: ($, ctx) => {
      const title =
        $(ctx).find('[data-testid="house-card-address"]').text() +
        $(ctx).find('[data-testid="house-card-region"]').text()
      const href = `https://quintoandar.com.br${$(ctx).find('> a').attr('href')}`
      const id = href!.match(/\/imovel\/(\d+)?.*/)![1]

      return {
        id,
        title,
        href,
      }
    },
  },
}
