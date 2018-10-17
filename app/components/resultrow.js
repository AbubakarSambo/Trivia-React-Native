import React from 'react'
import { Icon } from 'react-native-elements'
import { StyleSheet, View, Text } from 'react-native'
import entities from 'entities'
import PropTypes from 'prop-types'

export const ResultRow = ({ item }) => {
  let correct = item.correct_answer === item.selectedAnswer
  return (
    <View style={correct ? styles.correctRow : styles.wrongRow}>
      <Icon
        raised
        size={15}
        name={correct ? 'check' : 'times'}
        type='font-awesome'
        color='#f50' />
      <Text style={{width: 300}} >{entities.decodeHTML(item.question)}</Text>
    </View>
  )
}
ResultRow.propTypes = {
  item: PropTypes.object.isRequired
}
const styles = StyleSheet.create({
  wrongRow: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    height: 100,
    backgroundColor: 'red',
    borderRadius: 15,
    marginBottom: 10,
    marginRight: 5
  },
  correctRow: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    width: 'auto',
    height: 100,
    backgroundColor: 'green',
    borderRadius: 15,
    marginBottom: 10,
    marginRight: 5,
    padding: 10,
  }
})
