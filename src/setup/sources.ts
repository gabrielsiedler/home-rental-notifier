import { Source } from '../services/Source'
import * as sources from '../sources'

let sourcesObj = {}

export const setupSources = async () => {
  for (let source in sources) {
    sourcesObj[source] = new Source(sources[source].source)

    await sourcesObj[source].setup()
  }

  console.log('Sources loaded.')
}

export default sourcesObj
