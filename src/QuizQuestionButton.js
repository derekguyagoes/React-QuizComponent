import React, {Component} from 'react';
import PropTypes from 'prop-types';

class QuizQuestionButton extends Component {
    render() {
        return (
            <div>
                <li><button>{this.props.button_text}</button></li>
            </div>
        );
    }
}

QuizQuestionButton.propTypes = {};

export default QuizQuestionButton;
