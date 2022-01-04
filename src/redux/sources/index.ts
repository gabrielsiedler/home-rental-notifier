import { createAction, handleActions } from 'redux-actions'

export const analysisValidationResetAction: any = createAction('ANALYSIS_VALIDATION_RESET')
export const analysisValidationChangeStateAction: any = createAction('ANALYSIS_VALIDATION_CHANGE_STATE')
export const analysisValidationSetDataAction: any = createAction('ANALYSIS_VALIDATION_SET_DATA')

export const sourcesInitialState = {}

export const changeState = (state, { payload }: any) => ({
  ...state,
  state: payload,
})

export const setData = (state, { payload }: { payload }) => ({
  ...state,
  validation: payload,
})

export const sources = handleActions(
  {
    [analysisValidationChangeStateAction]: changeState,
    [analysisValidationSetDataAction]: setData,
    [analysisValidationResetAction]: () => sourcesInitialState,
  },
  sourcesInitialState,
)
