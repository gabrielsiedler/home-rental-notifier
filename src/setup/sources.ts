import { Source } from '../services/Source'
import { update } from '../services/source-manager'
import * as sources from '../sources'

export const setupSources = async () => {
  let sourcesObj = {}
  for (let source in sources) {
    sourcesObj[source] = new Source(sources[source].source)

    await sourcesObj[source].setup()
  }

  update(sourcesObj)
}
