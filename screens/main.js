import { TouchableOpacity, StyleSheet, Text, View, Image } from 'react-native'
import React, { useState } from 'react'


const FetchACat = ({ fetchACat }) => {
  return (
    <TouchableOpacity onPress={fetchACat} style={{ backgroundColor: 'black', padding: 10, borderRadius: 10 }}>
      <Text style={{ color: 'white' }}>Fetch The Cats</Text>
    </TouchableOpacity>
  )
}

const ShowCats = ({ fetchACat, cat }) => {
  return (
    <View style={{ justifyContent: 'center', alignItems: 'center' }}>
      <Image
        source={{ uri: cat[0].url }} 
        style={{ height: 300, width: 300, borderRadius: 10,}}
      />
      <View style={{ flexDirection: 'row', marginVertical: 15, }}>
        <TouchableOpacity onPress={fetchACat} style={styles.loveit}>
          <Text style={styles.text}>Love it</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={fetchACat} style={[styles.loveit, { backgroundColor: '#d4a373' }]}>
          <Text style={styles.text}>Hate it</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

const Main = () => {

  const [cat, setCat] = useState(null);
  
    const fetchACat = () => {
        fetch('https://api.thecatapi.com/v1/images/search')
            .then(res => res.json())
            .then(data => setCat(data))
            .catch(err => console.error(err))
    }


  return (
    <View style={{ justifyContent: 'center', alignItems: 'center', backgroundColor: '#fefae0', height: '100%', width: '100%' }}>
      <Text style={{ fontSize: 30, textTransform: 'uppercase', fontWeight: '700', marginVertical: 15, color: '#d4a373' }}>Cat Tinder</Text>
      {cat == null ? <FetchACat fetchACat={fetchACat} /> : <ShowCats fetchACat={fetchACat} cat={cat} />}
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