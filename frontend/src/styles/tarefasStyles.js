import { StyleSheet } from 'react-native';
import { CORES } from './globalStyles';

export const tarefaStyles = StyleSheet.create({
  topo: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  saudacao: {
    fontSize: 22,
    fontWeight: '700',
    letterSpacing: -0.3,
    color: CORES.textoEscuro,
  },
  contador: {
    fontSize: 13,
    color: CORES.textoCinza,
    marginTop: 2,
  },
  botaoPerfil: {
    backgroundColor: CORES.primariaSuave,
    paddingVertical: 9,
    paddingHorizontal: 16,
    borderRadius: 999,         // Formato de pílula
  },
  textoPerfil: {
    color: CORES.primaria,
    fontWeight: '700',
    fontSize: 13,
  },
  vazio: {
    textAlign: 'center',
    color: CORES.textoCinza,
    marginTop: 48,
    paddingHorizontal: 24,
    fontSize: 15,
    lineHeight: 22,
  },
  linhaCard: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  // A disciplina vira um "marca-texto": fundo âmbar claro com texto escuro
  disciplina: {
    fontSize: 12,
    fontWeight: '700',
    color: CORES.marcaTextoEscuro,
    backgroundColor: CORES.marcaTexto,
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 6,
    overflow: 'hidden',        // No iOS, o borderRadius em <Text> só vale com overflow hidden
    flexShrink: 1,             // Nomes longos de disciplina não empurram o status para fora
    marginRight: 12,
  },
  status: {
    fontSize: 12,
    fontWeight: '700',
    letterSpacing: 0.2,
  },
  tituloTarefa: {
    fontSize: 18,
    fontWeight: '700',
    lineHeight: 24,
    color: CORES.textoEscuro,
    marginBottom: 8,
  },
  notaResumo: {
    fontSize: 14,
    lineHeight: 20,
    color: CORES.textoCinza,
    backgroundColor: CORES.fundo,
    padding: 12,
    borderRadius: 10,
    overflow: 'hidden',
    marginBottom: 12,
  },
  acoes: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 4,
    paddingTop: 10,
    borderTopWidth: 1,         // Divisória entre o conteúdo do card e as ações
    borderTopColor: CORES.bordaSuave,
  },
  dicaEditar: {
    fontSize: 12,
    color: CORES.textoCinza,
  },
  textoExcluir: {
    color: CORES.perigo,
    fontWeight: '700',
    fontSize: 13,
    paddingVertical: 4,        // Aumenta a área de toque do botão Excluir
    paddingHorizontal: 4,
  },
});