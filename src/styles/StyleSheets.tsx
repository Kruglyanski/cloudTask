import {StyleSheet} from 'react-native'
import {ADDITIONAL_COLOR, ADDITIONAL_TEXT_COLOR} from '../utils/colors'

const Styles = StyleSheet.create({
  header: {
    marginTop: 50,
    height: 70,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingLeft: 60,
    paddingRight: 10,
  },
  headerTitle: {
    fontSize: 24
  },
  listItemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%'
  },
  list: {
    marginTop: 10
  },
  modalContainer: {
    flexDirection: 'column',
    alignContent: 'flex-start',
    backgroundColor: 'white',
    borderTopStartRadius: 10,
    borderTopEndRadius: 10,
    height: 'auto',
    width: '100%',
    position: 'absolute',
    bottom: 0
  },
  modalListItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: 'white',
    paddingLeft: 15,
    paddingRight: 10,
    borderTopEndRadius: 10,
    borderTopStartRadius: 10
  },
  modalInput: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingLeft: 15,
    paddingRight: 10
  },
  fab: {
    justifyContent: 'flex-end',
    alignSelf: 'flex-end',
    margin: 20,
    backgroundColor: ADDITIONAL_COLOR,
    color: 'white'
  },
  modalNewTask: {
    flex: 1,
    justifyContent: 'flex-start',
    width: '100%',
    backgroundColor: 'white',
    position: 'absolute',
    top: 0,
    left: 0,
    height: '100%'
  },
  newTaskElement: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingRight: 10
  },
  newTaskInput: {
    height: 70,
    paddingHorizontal: 15,
    fontSize: 22
  },
  newTaskCategory: {
    fontSize: 18,
    paddingLeft: 15,
    color: ADDITIONAL_TEXT_COLOR
  },
  todoTitleContainer: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  todoListTitle: {
    paddingTop: 10,
    marginLeft: 20,
    color: ADDITIONAL_TEXT_COLOR
  },
  todoText: {
    marginLeft: 10,
  },
  noTasksText: {
    marginLeft: 20,
    marginTop: 10,
    color: ADDITIONAL_TEXT_COLOR
  },
  addTaskCategoryItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginLeft: 15,
    marginRight: 15
  },
  todoListView: {
    marginLeft: 6
  },
  completedListToggle: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start'
  },
  completedListCompleted: {
    color: ADDITIONAL_TEXT_COLOR
  },
  completedListWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start'
  },
  completedListText: {
    textDecorationLine: 'line-through',
    textDecorationStyle: 'solid'
  },
  leftSwipeButton: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-end',
    borderRightWidth: 2,
    borderRightColor: ADDITIONAL_TEXT_COLOR,
    marginRight: 10
  },
  rightSwipeButton: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-start',
    borderLeftWidth: 2,
    borderLeftColor: ADDITIONAL_TEXT_COLOR
  },
  validationMessage: {
    height: 20,
    textAlign: 'center',
    color: 'red'
  }

})

export default Styles
