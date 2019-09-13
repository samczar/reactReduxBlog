import _ from 'lodash'

import jsonpalceholder from '../api/jsonplacholder'

export const fetchPostsandUsers = () => async (dispatch, getState) => {
	await dispatch(fetchPosts())

	const userIds = [...new Set(getState().posts.map(post => post.userId))]
	userIds.forEach(id => dispatch(fetchUser(id)))
}

export const fetchPosts = () => async dispatch => {
	const response = await jsonpalceholder.get('/posts')

	dispatch({ type: 'FETCH_POSTS', payload: response.data })
}

export const fetchUser = id => async dispatch => {
	const response = await jsonpalceholder.get(`/users/${id}`)

	dispatch({ type: 'FETCH_USER', payload: response.data })
}

// export const fetchUser = id => async dispatch => {
// 	_fetchUser(id, dispatch)
// }

// const _fetchUser = _.memoize(async (id, dispatch) => {
// 	const response = await jsonpalceholder.get(`/users/${id}`)

// 	dispatch({ type: 'FETCH_USER', payload: response.data })
// })
