import { handleActions } from 'redux-actions'

export const musicList = handleActions(
  {
    'request music list': function(state, action) {
      return { ...state, loading: true }
    },
    'receive music list': function(state, action) {
      const { res } = action.payload
      return { data: res.song_list, loading: false }
    }
  },
  {}
)
