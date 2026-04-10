import {Text} from 'react-native'

function GerenciarDespesa() {
    return(
        <Text>GerenciarDespesa</Text>
    )
}import {Text, View, TextInput, StyleSheet, Pressable} from 'react-native'
import React, { useState } from 'react';
import DateTimePicker from '@react-native-community/datetimepicker';


function GerenciarDespesa() {

    const [data, setData] = useState(new Date());
    const [valor, setValor] = useState('');
    const [descricao, setDescricao] = useState('');

const [showPicker, setShowPicker] = useState(false);
const onChange = (event, selectedDate) => { const currentDate = selectedDaate || data;
setShowPicker(false);
setData(currentDate);
};

 const handChangeValor = (text) => {
    const cleanText = text.replace (',','.');
const match = cleanText.match(/^\d*.?\d{o,2}$/);

if (match) {
    setValor(cleanText);
    }
};

 

    <View style={styles.inputContainer}>
    <Text style={styles.label}>Valor da Despesa</Text>
    <TextInput style={styles.input} 
    keyboardType={'decimal-pad'} maxLenght={10}
    value = {valor} onChangeText={handleChangeValor}></TextInput>
    </View>
   
return(
        <View style={styles.inputContainer}>   
        <Text style={styles.label}>Data da Despesa</Text>
<Pressable onPress={() => setShowPicker(true)} style={styles.input}>
<Text>{data.toLocaleDateString('pt-BR')}</Text>
</Pressable>
{showPicker && (
    <DateTimePicker value={data} mode="date"
display="default" onChange={onChange}
/>
)}
</View>
)
return(
    <View style={styles.inputContainer}>
    <Text style={styles.label}>Data da Despesa</Text>
    <TextInput style={styles.input}></TextInput>
    </View>
  )      

return(
<View style={styles.inputContainer}>
    <Text style={styles.label}>Descrição</Text>
    <TextInput style={styles.input} maxLength={20}
    value = {descricao} onChangeText={setDescricao}></TextInput>
</View>

);    
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        margin: 20,
    },

        itemContainer: {
            marginVertical: 16,
            marginHorizontal: 4,
        },
        label: {
            fontsize: 12,
            marginBottom: 4,
        },
        input: {
          borderWidth: 1,
          borderColor: '#ccc',
          padding: 8,
        },
    });




    
export default GerenciarDespesa
