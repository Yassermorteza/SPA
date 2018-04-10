import React, { Component } from 'react';
import Col from 'antd/lib/col';
import Row from 'antd/lib/row';
import 'antd/dist/antd.css';

class App extends Component {
	render(){
		return (
				<div>
					<Row>
					  <Col span={18} push={6}>col-18 col-push-6</Col>
					  <Col span={6} pull={18}>col-6 col-pull-18</Col>
					</Row>
				</div>
			)
	};
};

export default App;


