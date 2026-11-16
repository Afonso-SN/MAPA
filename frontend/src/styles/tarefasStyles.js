import { StyleSheet } from 'react-native';
import { CORES } from './globalStyles';

export const tarefaStyles = StyleSheet.create({
  topo: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
  },
  saudacao: {
    fontSize: 20,
    fontWeight: 'bold',
    color: CORES.textoEscuro,
  },
  contador: {
    fontSize: 13,
    color: CORES.textoCinza,
  },
  botaoPerfil: {
    backgroundColor: CORES.branco,
    paddingVertical: 8,
    paddingHorizontal: 14,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: CORES.primaria,
  },
  textoPerfil: {
    color: CORES.primaria,
    fontWeight: 'bold',
  },
  vazio: {
    textAlign: 'center',
    color: CORES.textoCinza,
    marginTop: 40,
    fontSize: 15,
  },
  linhaCard: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 4,
  },
  disciplina: {
    fontSize: 12,
    fontWeight: 'bold',
    color: CORES.textoCinza,
    textTransform: 'uppercase',
  },
  status: {
    fontSize: 12,
    fontWeight: 'bold',
  },
  tituloTarefa: {
    fontSize: 17,
    fontWeight: 'bold',
    color: CORES.textoEscuro,
    marginBottom: 6,
  },
  notaResumo: {
    fontSize: 14,
    color: CORES.textoCinza,
    backgroundColor: CORES.fundo,
    padding: 8,
    borderRadius: 6,
    marginBottom: 8,
  },
  acoes: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 4,
  },
  dicaEditar: {
    fontSize: 12,
    color: CORES.textoCinza,
  },
  textoExcluir: {
    color: CORES.perigo,
    fontWeight: 'bold',
    fontSize: 14,
  },
});