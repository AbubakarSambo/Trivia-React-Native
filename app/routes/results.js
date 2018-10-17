import React, { Component } from 'react';
import { connect } from 'react-redux'
import { StyleSheet, Text, View, TouchableOpacity, FlatList } from 'react-native'
import { getQuestions } from '../actions/questions'
import { ResultRow } from '../components/resultrow'

class Results extends Component {

  goHome = () =>{
   this.props.getQuestions()
   this.props.navigation.navigate('Home')
  }
  
  render() {
    const { navigation, questions } = this.props;
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.headerText}>You Scored</Text>
          <Text style={styles.headerText}>{navigation.getParam('totalScore', 'Not Available')}/{questions.length}</Text>
        </View>
        <View style={styles.body}>
          
          <FlatList
            data={questions}
            renderItem={({ item }) => (
              <ResultRow item={item} />
            )}
            keyExtractor={(item, index) => index.toString()}
          />
        </View>
        <View style={styles.footer}>
          <TouchableOpacity style={styles.restart} onPress={() => this.goHome()}>
            <Text style={{ color: '#fff' }}>Play Again</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
function mapStateToProps(state) {
  return {
    questions: state.questions
  }
}
function mapDispatchToProps(dispatch) {
  return {
    getQuestions: () => dispatch(getQuestions())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Results)

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    marginTop: '10%',
    flex: 1,
  },
  headerText: {
    fontSize: 20
  },
  header: {
    flexGrow: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  body: {
    flexGrow: 1,
    flexDirection: 'column',
    display: 'flex',
    height: 250

  },
  footer: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',

  },
  restart: {
    borderRadius: 10,
    backgroundColor: '#68a0cf',
    paddingTop: 10,
    paddingBottom: 10,
    width: 100,
    alignItems: 'center',
  }
});
