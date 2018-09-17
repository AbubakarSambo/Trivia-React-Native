import React, { Component } from 'react'
import { connect } from 'react-redux'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import {getQuestions} from '../actions/questions'

export class Home extends Component {
  componentWillMount () {
    this.props.getQuestions()
  }

  render () {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={[styles.font, styles.headerText]}>Welcome to the Trivia Challenge</Text>
        </View>
        <View style={styles.body}>
          <View >
            <Text style={[styles.font, styles.bodyText]}>Your mission should you choose to accept it </Text>
            <Text style={[styles.font, styles.bodyText]}>will be to answer 10 True/False questions </Text>
          </View>
          <Text style={[styles.font, styles.score]}>Can you score 100%</Text>
        </View>
        <View style={styles.footer}>
          <TouchableOpacity style={styles.begin} onPress={() => this.props.navigation.navigate('Quiz')}>
            <Text style={{ color: '#fff' }}>Begin</Text>
          </TouchableOpacity>
        </View>
      </View>
    )
  }
}

function mapDispatchToProps (dispatch) {
  return {
    getQuestions: () => dispatch(getQuestions())
  }
}

export default connect(null, mapDispatchToProps)(Home)

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    margin: '1%',
    flex: 1,
    paddingTop: '15%'
  },
  font: {
    fontFamily: 'Roboto'
  },
  headerText: {
    fontSize: 20
  },
  bodyText: {
    fontSize: 15
  },
  score: {
    fontSize: 25
  },
  header: {
    flexGrow: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  body: {
    flexGrow: 1,
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  footer: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  begin: {
    borderRadius: 10,
    backgroundColor: '#68a0cf',
    paddingTop: 10,
    paddingBottom: 10,
    width: 100,
    alignItems: 'center'

  }
})
