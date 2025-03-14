// Imports
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, Image} from 'react-native';


//Componente principal
//Ele deve retornar o quese´ra renderizado na tela(template feito com JSK)
export default function App() {
  // Lógica do meu componente
  const nome = "Kesia"

  function Alerta(){
    alert("Você clicou no botão")
  }
  
  //Retorno com JSX
  return (
    <View style={styles.container}>
     {/*comentario dentro do template JSX*/}

     {/* Código Javascript  */}
     <Text>(2 + 2)</Text>
    <Text>(nome)</Text>
      <Text>Bem vindo ao meu app</Text>

    <Button title='Alerta' onPress={Alerta}></Button>

    <Image
      source= {{uri:'https://www.filhao.com.br/noticia/adicionais/90-65-criando-arte-com-inteligencia-artificial-midjourney-e-outras.png'}}
        style={{
      height: 300,
        width: 300
    }}
    
    />

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
