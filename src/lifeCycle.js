import React, {Component} from 'react';
import PropTypes from 'prop-types';

class MyComponent extends Component {
    constructor(props) {
        super(props);
    }
    //will 접두사가 붙은 메서드는 어떤 작업을 작동하기 전에 실행되는 메서드
    componentWillMount() {

    }

    //did 접두사가 붙은 메서드는 어떤 작업을 작동한 후 실행되는 메서드
    componentDidMount() {

    }

    componentWillReceiveProps(nextProps) {

    }

    shouldComponentUpdate(nextProps, nextState) {

    }

    componentWillUpdate(nextProps, nextState) {

    }

    componentDidUpdate(prevProps, prevState) {

    }

    componentWillUnmount() {

    }

    render() {
        return (
            <div>
                
            </div>
        );
    }
}

MyComponent.propTypes = {};

export default MyComponent;
