import { StyleSheet, Text, View, Image, FlatList } from 'react-native'
import React, { cloneElement, useState } from 'react'
import { collection, doc, getDocs } from "firebase/firestore"; 
import { db } from '../firebase/firebase';

const RenderItem = ({ id, url }) => {
    return(
        <View>
            <Text>{id}</Text>
            <Image source={{ uri: url}} />
        </View>
    )
}

const All = async () => {
    const [myData, setMyData] = useState([]);

    useEffect(() => {
      const fetchData = async () => {
        const data = [];
        const querySnapshot = await getDocs(collection(db, 'users'));
        querySnapshot.forEach((doc) => {
          data.push({ id: doc.id, ...doc.data() });
        });
        setMyData(data);
      };
      fetchData();
    }, []);

  return (
    <View>
      <Text>All</Text>
      {myData.map((item) => (
        <RenderItem id={item.id} url={item.url} />
      ))}
    </View>
  )
}

export default All

const styles = StyleSheet.create({})