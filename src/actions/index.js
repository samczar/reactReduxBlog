import jsonpalceholder from '../api/jsonplacholder'

export const fetchPosts = () => async dispatch => {
	const response = await jsonpalceholder.get('/posts')

	dispatch({ type: 'FETCH_POSTS', payload: response.data })
}

export const fetchUser = id => async dispatch => {
	const response = await jsonpalceholder.get(`/users/${id}`)

	dispatch({ type: 'FETCH_USER', payload: response.data })
}
