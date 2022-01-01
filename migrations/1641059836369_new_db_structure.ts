import { Db } from 'mongodb'
import { MigrationInterface } from 'mongo-migrate-ts'

const mapper = {
  'arbo-arbo': { source: 'Arbo', filter: { label: 'All', value: null } },
  'brognoli-brognoli': { source: 'Brognoli', filter: { label: 'All', value: null } },
  'chavesNaMao-chavesNaMao': { source: 'Chaves na mão', filter: { label: 'All', value: null } },
  'dalton-andrade-Agronomica': { source: 'Dalton Andrade', filter: { label: 'Agronômica', value: 'Agronomica' } },
  'dalton-andrade-Lagoa%20da%20Conceicao': {
    source: 'Dalton Andrade',
    filter: { label: 'Lagoa da Conceição', value: 'Lagoa%20da%20Conceicao' },
  },
  'giacomelli-giacomelli': { source: 'Giacomelli', filter: { label: 'All', value: null } },
  'gralha-itacorubi?busca=JTdCJTIyZmluYWxpZGFkZSUyMiUzQSUyMmFsdWd1ZWwlMjIlMkMlMjJ0aXBvcyUyMiUzQSUyMmNhc2ElMjIlMkMlMjJzdWdnZXN0JTIyJTNBJTIyJTVCJTdCJTVDJTIydGlwb0lkJTVDJTIyJTNBNSUyQyU1QyUyMnRpcG8lNUMlMjIlM0ElNUMlMjJCYWlycm8lNUMlMjIlMkMlNUMlMjJ0aXR1bG8lNUMlMjIlM0ElNUMlMjJJdGFjb3J1YmklMkMlMjBGbG9yaWFuJUMzJUIzcG9saXMlMjAtJTIwU0MlNUMlMjIlMkMlNUMlMjJzbHVnJTVDJTIyJTNBJTVDJTIyYmFpJTJCc2MlMkJmbG9yaWFub3BvbGlzJTJCaXRhY29ydWJpJTVDJTIyJTJDJTVDJTIyYmFpcnJvSWQlNUMlMjIlM0E1MiUyQyU1QyUyMmJhaXJybyU1QyUyMiUzQSU1QyUyMkl0YWNvcnViaSU1QyUyMiUyQyU1QyUyMmNpZGFkZUlkJTVDJTIyJTNBMiUyQyU1QyUyMmNpZGFkZSU1QyUyMiUzQSU1QyUyMkZsb3JpYW4lQzMlQjNwb2xpcyU1QyUyMiUyQyU1QyUyMmVzdGFkb1NpZ2xhJTVDJTIyJTNBJTVDJTIyU0MlNUMlMjIlMkMlNUMlMjJlbXByZWVuZGltZW50byU1QyUyMiUzQW51bGwlMkMlNUMlMjJjb25kb21pbmlvJTVDJTIyJTNBbnVsbCUyQyU1QyUyMmFncnVwYW1lbnRvSWQlNUMlMjIlM0FudWxsJTJDJTVDJTIyYWdydXBhbWVudG8lNUMlMjIlM0FudWxsJTdEJTVEJTIyJTdE':
    {
      source: 'Gralha',
      filter: {
        label: 'Itacorubi',
        value:
          'gralha-itacorubi?busca=JTdCJTIyZmluYWxpZGFkZSUyMiUzQSUyMmFsdWd1ZWwlMjIlMkMlMjJ0aXBvcyUyMiUzQSUyMmNhc2ElMjIlMkMlMjJzdWdnZXN0JTIyJTNBJTIyJTVCJTdCJTVDJTIydGlwb0lkJTVDJTIyJTNBNSUyQyU1QyUyMnRpcG8lNUMlMjIlM0ElNUMlMjJCYWlycm8lNUMlMjIlMkMlNUMlMjJ0aXR1bG8lNUMlMjIlM0ElNUMlMjJJdGFjb3J1YmklMkMlMjBGbG9yaWFuJUMzJUIzcG9saXMlMjAtJTIwU0MlNUMlMjIlMkMlNUMlMjJzbHVnJTVDJTIyJTNBJTVDJTIyYmFpJTJCc2MlMkJmbG9yaWFub3BvbGlzJTJCaXRhY29ydWJpJTVDJTIyJTJDJTVDJTIyYmFpcnJvSWQlNUMlMjIlM0E1MiUyQyU1QyUyMmJhaXJybyU1QyUyMiUzQSU1QyUyMkl0YWNvcnViaSU1QyUyMiUyQyU1QyUyMmNpZGFkZUlkJTVDJTIyJTNBMiUyQyU1QyUyMmNpZGFkZSU1QyUyMiUzQSU1QyUyMkZsb3JpYW4lQzMlQjNwb2xpcyU1QyUyMiUyQyU1QyUyMmVzdGFkb1NpZ2xhJTVDJTIyJTNBJTVDJTIyU0MlNUMlMjIlMkMlNUMlMjJlbXByZWVuZGltZW50byU1QyUyMiUzQW51bGwlMkMlNUMlMjJjb25kb21pbmlvJTVDJTIyJTNBbnVsbCUyQyU1QyUyMmFncnVwYW1lbnRvSWQlNUMlMjIlM0FudWxsJTJDJTVDJTIyYWdydXBhbWVudG8lNUMlMjIlM0FudWxsJTdEJTVEJTIyJTdE',
      },
    },
  'guerreiro-guerreiro': { source: 'Guerreiro', filter: { label: 'All', value: null } },
  'ibagy-corrego-grande': { source: 'Ibagy', filter: { label: 'Córrego Grande', value: 'corrego-grande' } },
  'ibagy-santa-monica': { source: 'Ibagy', filter: { label: 'Santa Mônica', value: 'santa-monica' } },
  'ibagy-trindade': { source: 'Ibagy', filter: { label: 'Trindade', value: 'trindade' } },
  'jump-jump': { source: 'Jump', filter: { label: 'All', value: null } },
  'olx-agronomica': { source: 'Olx', filter: { label: 'Agronômica', value: 'agronomica' } },
  'olx-campeche': { source: 'Olx', filter: { label: 'Campeche', value: 'campeche' } },
  'olx-corrego+grande': { source: 'Olx', filter: { label: 'Córrego Grande', value: 'corrego+grande' } },
  'olx-itacorubi': { source: 'Olx', filter: { label: 'Itacorubi', value: 'itacorubi' } },
  'olx-lagoa+da+conceicao': { source: 'Olx', filter: { label: 'Lagoa da Conceição', value: 'lagoa+da+conceicao' } },
  'olx-santa+monica': { source: 'Olx', filter: { label: 'Santa Mônica', value: 'santa+monica' } },
  'olx-trindade': { source: 'Olx', filter: { label: 'Trindade', value: 'trindade' } },
  'quintoAndar-campeche': { source: 'Quinto Andar', filter: { label: 'Campeche', value: 'campeche' } },
  'quintoAndar-itacorubi': { source: 'Quinto Andar', filter: { label: 'Itacorubi', value: 'itacorubi' } },
  'quintoAndar-trindade': { source: 'Quinto Andar', filter: { label: 'Trindade', value: 'trindade' } },
  'regente-regente': { source: 'Regente', filter: { label: 'All', value: null } },
  'seiter-seiter': { source: 'Seiter', filter: { label: 'All', value: null } },
  'vivaReal-agronomica': { source: 'Viva Real', filter: { label: 'Agronômica', value: 'agronomica' } },
  'vivaReal-campeche': { source: 'Viva Real', filter: { label: 'Campeche', value: 'campeche' } },
  'vivaReal-corrego-grande': { source: 'Viva Real', filter: { label: 'Córrego Grande', value: 'corrego-grande' } },
  'vivaReal-itacorubi': { source: 'Viva Real', filter: { label: 'Itacorubi', value: 'itacorubi' } },
  'vivaReal-lagoa-da-conceicao': {
    source: 'Viva Real',
    filter: { label: 'Lagoa da Conceição', value: 'lagoa-da-conceicao' },
  },
  'vivaReal-santa-monica': { source: 'Viva Real', filter: { label: 'Santa Mônica', value: 'santa-monica' } },
  'vivaReal-trindade': { source: 'Viva Real', filter: { label: 'Trindade', value: 'trindade' } },
}

export class NewDBStructure implements MigrationInterface {
  public async up(db: Db): Promise<any> {
    const entries = await db.collection('entries').find({}).toArray()

    for (let entry of entries) {
      const newObject = {
        ...mapper[entry.filter],
        total_runs: 1,
        runs: [
          {
            entry_id: entry.last_id,
            status: 'unchanged',
            ranAt: Date.now(),
          },
        ],
      }

      const rows = await db.collection('entries').replaceOne({ filter: entry.filter }, newObject, { upsert: true })
    }
  }

  public async down(db: Db): Promise<any> {
    // throw new Error('no op')
  }
}
