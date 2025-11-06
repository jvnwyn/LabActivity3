import React, { useState } from 'react';
import { View, Text, TextInput, Button, TouchableOpacity, FlatList, StyleSheet } from 'react-native';

export default function App() {
  const [item, setItem] = useState('');
  const [list, setList] = useState([]);

  const addItem = () => {
    if (item.trim() === '') return;
    setList([...list, { id: Date.now().toString(), value: item }]);
    setItem('');
  };

  const removeItem = (id) => {
    setList(list.filter((listItem) => listItem.id !== id));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>TO-DO LIST</Text>
      <Text style={styles.subtext}>Enter items then press ADD to add it to the list.</Text>

      <View style={styles.inputRow}>
        <TextInput
          style={styles.input}
          placeholder="Enter Item"
          value={item}
          onChangeText={setItem}
        />
        <Button title="ADD" onPress={addItem} />
      </View>

      <Text style={styles.listHeader}>List</Text>

      <FlatList
        data={list}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.listItem}>
            <Text style={styles.itemText}>{item.value}</Text>

            <TouchableOpacity onPress={() => removeItem(item.id)}>
              <Text style={styles.removeText}>Remove</Text>
            </TouchableOpacity>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    marginTop: 40,
  },
  header: {
    fontSize: 22,
    fontWeight: '600',
    marginBottom: 5,
  },
  subtext: {
    color: 'gray',
    marginBottom: 15,
  },
  inputRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    flex: 1,
    padding: 10,
    marginRight: 10,
  },
  listHeader: {
    marginTop: 20,
    fontSize: 18,
    fontWeight: '600',
  },
  listItem: {
    backgroundColor: '#fff',
    padding: 12,
    marginTop: 10,
    borderRadius: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    elevation: 2, 
    shadowColor: '#000', 
    shadowOpacity: 0.1,
    shadowRadius: 3,
  },
  itemText: {
    fontSize: 16,
  },
  removeText: {
    color: 'red',
    fontWeight: '600',
  },
});
