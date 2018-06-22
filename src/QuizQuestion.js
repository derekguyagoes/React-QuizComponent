import React, { Component } from "react";
import QuizQuestionButton from "./QuizQuestionButton";

class QuizQuestion extends Component {
  handleClick(buttonText) {
    if (buttonText === this.props.quiz_question.answer)
      this.props.showNextQuestionHandler();
  }

  render() {
    let options = this.props.quiz_question.answer_options.map(
      (answer_options, index) => {
        return (
          <QuizQuestionButton
            key={index}
            button_text={answer_options}
            clickHandler={this.handleClick.bind(this)}
          />
        );
      }
    );
    return (
      <div>
        <main>
          <section>
            <p>{this.props.quiz_question.instruction_text}</p>
          </section>
          <section>
            <ul>{options}</ul>
          </section>
        </main>
      </div>
    );
  }
}

export default QuizQuestion;
