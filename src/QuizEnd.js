import React, {Component} from 'react';
import PropTypes from 'prop-types';

class QuizEnd extends Component {
    render() {
        return (
            <div>
                <p>Thanks for playing!</p>
                <a href=''>Reset Quiz</a>
            </div>
        );
    }
}

QuizEnd.propTypes = {};

export default QuizEnd;
