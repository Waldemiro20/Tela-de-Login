import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity, Linking } from "react-native";

export default function App() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [mostrarSenha, setMostrarSenha] = useState(false);

  const usuario = {
    nome: "Miro",
    email: "miro@gmail.com",
    senha: "1234567",
  };

  function logar() {
    if (email === usuario.email && senha === usuario.senha) {
      alert(`Bem-vindo ao sistema, ${usuario.nome}`);
    } else {
      alert("Email ou senha incorretos. Tente novamente.");
    }
  }

  return (
    <View style={styles.container}>
      <Image style={styles.imagem} source={require("./src/pomodoro.png")} />

      <Text style={styles.TextPrincipal}>
        Bem Vindo(a)!
      </Text>

      <View>

        <TextInput
          style={styles.InputEmail}
          placeholder="Digite seu email"
          placeholderTextColor="#aaa"
          value={email}
          onChangeText={setEmail}
        />


        <View style={styles.InputSenha}>
          <TextInput
            style={styles.inputComIcone}
            placeholder="Digite sua senha"
            placeholderTextColor="#aaa"
            value={senha}
            onChangeText={setSenha}
            secureTextEntry={!mostrarSenha}
          />

          <Text
            style={styles.olho}
            onPress={() => setMostrarSenha(!mostrarSenha)}
          >
            {mostrarSenha ? "👁" : "🙈"}

          </Text>
        </View>

        {/* BOTÃO LOGIN */}
        <TouchableOpacity style={styles.botao} onPress={logar}>
          <Text style={styles.textoBotao}>Entrar</Text>
        </TouchableOpacity>


        <Text
          style={styles.TextLink}
          onPress={() => Linking.openURL("https://github.com/Waldemiro20/Tela-de-Login.git")}
        >
          Esqueci minha senha.
        </Text>
      </View>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#021123",
    gap: 90,
  },

  imagem: {
    width: 250,
    height: 250,
    marginBottom: -70,
  },

  TextPrincipal: {
    fontSize: 24,
    color: "#fff",
    marginBottom: 20,
  },

  InputEmail: {
    borderRadius: 10,
    backgroundColor: "#021123",
    width: 317,
    height: 53,
    borderWidth: 1,
    borderColor: "#fff",
    paddingHorizontal: 10,
    color: "#fff",
    fontSize: 16,
    marginBottom: 20,
    marginTop: -70,
  },

  InputSenha: {
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 10,
    backgroundColor: "#021123",
    width: 317,
    height: 53,
    borderWidth: 1,
    borderColor: "#fff",
    paddingHorizontal: 10,
    marginBottom: 20,

  },

  inputComIcone: {
    flex: 1,
    color: "#fff",
    fontSize: 16,

  },

  olho: {
    fontSize: 18,
    color: "#fff",
    marginLeft: 10,
  },

 botao: {
  width: 317,
  height: 53,
  backgroundColor: "#4da6ff",
  borderRadius: 10,
  justifyContent: "center",
  alignItems: "center",
},

textoBotao: {
  color: "#fff",
  fontSize: 18,
  fontWeight: "bold",
},

TextLink: {
  color: "#4da6ff",
  fontSize: 16,
  marginTop: 20,
  textAlign: "center",
},
});
