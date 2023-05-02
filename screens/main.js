import { TouchableOpacity, StyleSheet, Text, View, Image } from 'react-native'
import React, { useState } from 'react'
import { collection, addDoc, getFirestore } from 'firebase/firestore'
import { db } from '../firebase/firebase'

// const db = getFirestore();

const FetchACat = ({ fetchACat }) => {
  return (
    <TouchableOpacity onPress={fetchACat} style={{ backgroundColor: '#d4a373', padding: 10, borderRadius: 10 }}>
      <Text style={{ color: '#fefae0', fontWeight: '700', fontSize: 15 }}>Fetch The Cats</Text>
    </TouchableOpacity>
  )
}

const ShowCats = ({ fetchACat, cat, addDataLove, addDataHate }) => {
  return (
    <View style={{ justifyContent: 'center', alignItems: 'center' }}>
      <Image
        source={{ uri: cat[0].url }} 
        style={{ height: 300, width: 300, borderRadius: 10,}}
      />
      <View style={{ flexDirection: 'row', marginVertical: 15, }}>
        <TouchableOpacity onPress={() => { fetchACat(); addDataLove(); }} style={styles.loveit}>
          <Text style={styles.text}>Love it</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => { fetchACat(); addDataHate(); }} style={[styles.loveit, { backgroundColor: '#d4a373' }]}>
          <Text style={styles.text}>Hate it</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

const Main = () => {

  const [cat, setCat] = useState(null);

    const addDataLove = async () => {
      const data = { 
        url: cat[0].url, 
        id: cat[0].id,
        status: 'love',
      };
      await addDoc(collection(db, 'users'), data);
      console.log('document added ')
    }

    const addDataHate = async () => {
      const data = { 
        url: cat[0].url, 
        id: cat[0].id,
        status: 'hate', 
      };
      await addDoc(collection(db, 'users'), data);
      console.log('document added ')
    }
  
    const fetchACat = () => {

      fetch('https://api.thecatapi.com/v1/images/search')
          .then(res => res.json())
          .then(data => setCat(data))
          .catch(err => console.error(err))
    }


  return (
    <View style={{ justifyContent: 'center', alignItems: 'center', backgroundColor: '#fefae0', height: '100%', width: '100%' }}>
      <Text style={{ fontSize: 40, textTransform: 'uppercase', fontWeight: '700', marginVertical: 15, color: '#d4a373' }}>Cat Tinder</Text>
      {cat == null ? <FetchACat fetchACat={fetchACat} /> : <ShowCats fetchACat={fetchACat} cat={cat} addDataLove={addDataLove} addDataHate={addDataHate} />}
    </View>
  )
}

export default Main

const styles = StyleSheet.create({
    loveit: {
        backgroundColor: '#ccd5ae',
        borderRadius: 10,
        width: 120,
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: 10,
    },
    text: {
      fontWeight: '500',
      color: '#fefae0',
    }
})