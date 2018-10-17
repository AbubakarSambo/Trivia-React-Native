import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Icon } from 'react-native-elements'
import entities from 'entities'
import { StyleSheet, Text, View, ActivityIndicator, WebView } from 'react-native';
import { setQuestions } from '../actions/questions'


export class Quiz extends Component {
  constructor(props) {
    super(props)
    this.state = {
      questionIndex: 0
    }
  }
  answered = (bool) => {
    let { questionIndex } = this.state
    let { questions } = this.props

    let updatedQuestions = questions.map((item, index) => {
      if (index === questionIndex) {
        return { ...item, selectedAnswer: bool }
      }
      return item
    })

    this.props.setQuestions(updatedQuestions)
    if (questionIndex + 1 === questions.length) {
      let totalScore = updatedQuestions.reduce((total, question) => {
        let value = 0
        if (question.correct_answer === question.selectedAnswer) {
          value = 1
        }
        return total + value
      }, 0)
      this.props.navigation.navigate('Results', {
        totalScore
      })
    }
    else {
      this.setState({ questionIndex: questionIndex + 1 })
    }
  }
  render() {
    const { questions } = this.props
    let { questionIndex } = this.state

    return (

      <View style={styles.container}>
        {this.props.loading ?
          <ActivityIndicator style={styles.loader} size="large" color="#000" /> :
          <View>
            <View style={styles.header}>
              <Text style={styles.headerText}>{questions.length > 0 && questions[questionIndex].category}</Text>
            </View>
            <View style={styles.body}>
              <View style={styles.questionBody}>
                <Text>{entities.decodeHTML(questions[questionIndex].question)}</Text>
              </View>
              <View >
                <Text style={styles.questionNumber}>{questionIndex + 1} out of {questions.length}</Text>
              </View>
            </View>
            <View style={styles.footer}>
              <View style={styles.selectAnswer}>
                <Icon
                  raised
                  name='times'
                  type='font-awesome'
                  color='#f50'
                  onPress={() => this.answered('False')} />
                <Text style={styles.bodyText}>False</Text>
              </View>
              <View style={styles.selectAnswer}>
                <Icon
                  raised
                  name='check'
                  type='font-awesome'
                  color='#00FF00'
                  onPress={() => this.answered('True')} />
                <Text style={styles.bodyText}>True</Text>
              </View>
            </View>
          </View>
        }
      </View>
    );
  }
}

function mapStateToProps(state) {
  return {
    questions: state.questions,
    loading: state.loading
  }
}
function mapDispatchToProps(dispatch) {
  return {
    setQuestions: (questions) => dispatch(setQuestions(questions))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Quiz)

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    margin: '1%',
    flex: 1,
    paddingTop: '15%',
  },
  headerText: {
    fontSize: 20
  },
  header: {
    flexGrow: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  body: {
    flexGrow: 1,
  },
  questionBody: {
    margin: 50,
    height: 100,
    borderWidth: 2,
    padding: 10
  },
  loader: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  questionNumber: {
    textAlign: 'center',
    fontSize: 20
  },
  bodyText: {
    fontSize: 20
  },
  footer: {
    flexGrow: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    margin: 50
  },
  selectAnswer: {
    display: 'flex',
    alignItems: 'center'
  }
});
