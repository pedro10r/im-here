import { Text, View, TextInput, TouchableOpacity, FlatList } from 'react-native';

import { Participant } from '../../components/Participant';

import { styles } from './styles';

export function Home() {
  const participants = [
    'Pedro',
    'Adriara',
    'João',
    'Patricia',
    'Maik',
    'Jordan',
    'LeBron',
    'Durant',
    'Westbrook',
    'Curry',
    'Green',
    'Jota',
    'Quest',
    'Marcio',
  ];

  function handleParticipantAdd() {
    console.log('CLICOU NO BOTÃO!');
  }

  function handleParticipantRemove(name: string) {
    console.log(`CLICOU EM REMOVER ${name}`);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.eventName}>
        Nome do evento
      </Text>
      <Text style={styles.eventDate}>
        Sunday 16 Oct 2022
      </Text>

      <View style={styles.form}>
        <TextInput
          style={styles.input}
          placeholder="Nome do participante"
          placeholderTextColor="#6b6b6b"
        />

        <TouchableOpacity
          style={styles.button}
          onPress={handleParticipantAdd}
        >
          <Text style={styles.buttonText}>+</Text>
        </TouchableOpacity>
      </View>

      <FlatList
        data={participants}
        keyExtractor={item => item}
        renderItem={({ item }) => (
          <Participant
            key={item}
            name={item}
            onRemove={() => handleParticipantRemove("PEDRO")}
          />
        )}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={() => (
          <Text style={styles.listEmpty}>
            Ninguém chegou no envento ainda? Adicione participantes a sua lista de presença.
          </Text>
        )}
      />

    </View>
  );
}