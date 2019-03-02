
export const SELECT_MODEL = 'SELECT_MODEL'

export function selectModel(models) {
    return {
        type: SELECT_MODEL,
        payload: models
    }
}