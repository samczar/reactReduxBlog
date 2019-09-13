import React, { Component } from 'react'
import { connect } from 'react-redux'

import { fetchPostsandUsers } from '../actions'
import UserHeader from './UserHeader'

class PostList extends Component {
	componentDidMount() {
		this.props.fetchPostsandUsers()
	}

	renderList = () => {
		return this.props.posts.map(({ id, title, body, userId }, key) => {
			return (
				<li key={key}>
					<h3>{title} </h3>
					<br />
					{body}

					<h4>
						<b>
							<UserHeader userId={userId} />
						</b>
					</h4>
				</li>
			)
		})
	}

	render() {
		return (
			<div>
				<h5>Post List</h5>
				<ul>{this.renderList()}</ul>
			</div>
		)
	}
}

const mapStateToProps = state => {
	return { posts: state.posts }
}

export default connect(
	mapStateToProps,
	{ fetchPostsandUsers }
)(PostList)
