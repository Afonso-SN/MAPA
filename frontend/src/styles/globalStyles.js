import { StyleSheet } from 'react-native';

// Paleta de cores centralizada do aplicativo MAPA
// Conceito: "tinta de caneta" (azul-índigo) + "marca-texto" (âmbar) para o universo de estudos
export const CORES = {
  primaria: '#4338CA',         // Azul-índigo (tinta de caneta)
  primariaSuave: '#EEF2FF',    // Versão bem clara da primária, para fundos de destaque
  sucesso: '#047857',          // Verde (tarefa concluída / salvar)
  perigo: '#DC2626',           // Vermelho (excluir / sair)
  fundo: '#F4F6FB',            // Cinza-azulado bem claro para o fundo das telas
  branco: '#FFFFFF',
  textoEscuro: '#1E293B',
  textoCinza: '#5B6577',
  borda: '#CBD5E1',            // Borda dos inputs (contraste suficiente para enxergar o campo)
  bordaSuave: '#E6EAF2',       // Borda discreta de cards e divisórias
  marcaTexto: '#FEF3C7',       // Âmbar claro (efeito marca-texto)
  marcaTextoEscuro: '#92400E', // Texto sobre o marca-texto
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
    padding: 28,
    backgroundColor: CORES.fundo,
  },
  titulo: {
    fontSize: 34,
    fontWeight: '800',
    letterSpacing: -0.5,
    color: CORES.primaria,
    textAlign: 'center',
    marginBottom: 6,
  },
  subtitulo: {
    fontSize: 15,
    lineHeight: 22,
    color: CORES.textoCinza,
    textAlign: 'center',
    marginBottom: 32,
  },
  label: {
    fontSize: 13,
    fontWeight: '600',
    letterSpacing: 0.2,
    color: CORES.textoEscuro,
    marginBottom: 6,
  },
  input: {
    backgroundColor: CORES.branco,
    minHeight: 52,             // Todos os inputs de uma linha ficam com 52; o multiline pode crescer
    paddingHorizontal: 16,     // Garante o espaçamento nas laterais do placeholder
    borderRadius: 12,
    marginBottom: 16,
    borderWidth: 1,
    borderColor: CORES.borda,
    fontSize: 15,
    color: CORES.textoEscuro,
  },
  botao: {
    backgroundColor: CORES.primaria,
    paddingVertical: 16,
    paddingHorizontal: 20,
    borderRadius: 12,
    alignItems: 'center',
    marginTop: 8,
    // Sombra neutra: funciona com qualquer cor passada pela prop "cor" do Botao
    shadowColor: '#0F172A',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.18,
    shadowRadius: 6,
    elevation: 3,              // Equivalente da sombra no Android
  },
  botaoPerigo: {
    backgroundColor: CORES.perigo,
    paddingVertical: 16,
    paddingHorizontal: 20,
    borderRadius: 12,
    alignItems: 'center',
    marginTop: 8,
    shadowColor: '#0F172A',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.18,
    shadowRadius: 6,
    elevation: 3,
  },
  textoBotao: {
    color: CORES.branco,
    fontWeight: '700',
    fontSize: 16,
    letterSpacing: 0.3,
  },
  link: {
    color: CORES.primaria,
    textAlign: 'center',
    marginTop: 24,
    fontWeight: '600',
    fontSize: 14,
  },
  card: {
    backgroundColor: CORES.branco,
    padding: 18,
    borderRadius: 16,
    marginBottom: 14,
    borderWidth: 1,
    borderColor: CORES.bordaSuave,
    shadowColor: '#0F172A',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.06,
    shadowRadius: 8,
    elevation: 2,
  },
});