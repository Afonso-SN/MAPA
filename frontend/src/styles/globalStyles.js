import { StyleSheet } from 'react-native';

// Paleta de cores centralizada do aplicativo MAPA
export const CORES = {
  primaria: '#2563EB',    // Azul principal
  sucesso: '#16A34A',     // Verde (tarefa concluída / salvar)
  perigo: '#DC2626',      // Vermelho (excluir / sair)
  fundo: '#F3F4F6',       // Cinza bem claro para o fundo das telas
  branco: '#FFFFFF',
  textoEscuro: '#1F2937',
  textoCinza: '#6B7280',
  borda: '#D1D5DB',
};

// Estilos globais reutilizáveis em todas as telas
export const globalStyles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: CORES.fundo,
  },
  containerCentralizado: {
    flex: 1,
    justifyContent: 'center',
    padding: 24,
    backgroundColor: CORES.fundo,
  },
  titulo: {
    fontSize: 28,
    fontWeight: 'bold',
    color: CORES.primaria,
    textAlign: 'center',
  },
  subtitulo: {
    fontSize: 15,
    color: CORES.textoCinza,
    textAlign: 'center',
    marginBottom: 24,
  },
  label: {
    fontSize: 14,
    fontWeight: '600',
    color: CORES.textoEscuro,
    marginBottom: 6,
  },
  input: {
    backgroundColor: CORES.branco,
    padding: 14,
    borderRadius: 8,
    marginBottom: 14,
    borderWidth: 1,
    borderColor: CORES.borda,
    fontSize: 15,
    color: CORES.textoEscuro,
  },
  botao: {
    backgroundColor: CORES.primaria,
    padding: 16,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 8,
  },
  botaoPerigo: {
    backgroundColor: CORES.perigo,
    padding: 16,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 8,
  },
  textoBotao: {
    color: CORES.branco,
    fontWeight: 'bold',
    fontSize: 16,
  },
  link: {
    color: CORES.primaria,
    textAlign: 'center',
    marginTop: 20,
    fontWeight: '600',
  },
  card: {
    backgroundColor: CORES.branco,
    padding: 16,
    borderRadius: 10,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: CORES.borda,
  },
});