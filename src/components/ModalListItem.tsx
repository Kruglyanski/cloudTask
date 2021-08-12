import React from 'react'
import { View } from 'react-native'
import Styles from '../styles/StyleSheets'
import { IconButton, Text } from 'react-native-paper'
import {DeleteList} from '../redux/AsyncActionCreators'
import {useDispatch} from 'react-redux'

type PropsType = {
  title: string
  id: number
}

export const ModalListItem:React.FC<PropsType> = ({title, id}) => {
  const dispatch = useDispatch()
  const deleteList = () => {
    dispatch(DeleteList(id))
  }
    return (
        <View style={Styles.modalListItem}>
            <Text>{title}</Text>
            <IconButton
                icon="trash-can-outline"
                color={"rgb(178,34,34)"}
                onPress={deleteList}
            />
        </View>
    )
}
