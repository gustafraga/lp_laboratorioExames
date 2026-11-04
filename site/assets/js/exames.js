/*
  ============================================================
  EXAMES E PREPARO — edite aqui
  ============================================================
  Esta lista alimenta a seção "Preparo de exames" do site:
  os botões de exame, o velocímetro de jejum e as orientações.

  Cada exame tem:
    nome        Nome que aparece no botão e na mensagem do WhatsApp.
    jejum       Horas de jejum (número de 0 a 12). Use 0 quando não precisa de jejum.
    observacao  Detalhe sobre o jejum (ex.: "Água é liberada."). Pode ficar vazio: ''.
    preparo     Orientação de preparo, em uma frase.
    resultado   Prazo do resultado (ex.: "Em 24 horas", "De 3 a 5 dias", "No mesmo dia").

  Para incluir um exame, copie um bloco { ... }, cole antes do ] final e troque os textos.
  Para remover, apague o bloco inteiro (incluindo a vírgula no fim).
  A ordem da lista é a ordem dos botões no site.
*/
window.EXAMES = [
  { nome: 'Hemograma completo',         jejum: 0,  observacao: '',                                            preparo: 'Evite exercícios intensos nas 24 horas anteriores à coleta.',                                   resultado: 'Em 24 horas' },
  { nome: 'Glicemia em jejum',          jejum: 8,  observacao: 'Água é liberada.',                            preparo: 'Mantenha a alimentação habitual no dia anterior.',                                               resultado: 'Em 24 horas' },
  { nome: 'Colesterol total e frações', jejum: 0,  observacao: 'Jejum não obrigatório, salvo pedido médico.', preparo: 'Evite bebida alcoólica nas 72 horas anteriores.',                                                resultado: 'Em 24 horas' },
  { nome: 'Triglicerídeos',             jejum: 12, observacao: 'Água é liberada.',                            preparo: 'Evite bebida alcoólica nas 72 horas e alimentos gordurosos na véspera.',                         resultado: 'Em 24 horas' },
  { nome: 'TSH e T4 livre',             jejum: 0,  observacao: '',                                            preparo: 'Se usa remédio para tireoide, colha antes da dose do dia, salvo orientação médica.',             resultado: 'Em 48 horas' },
  { nome: 'Urina tipo 1 (EAS)',         jejum: 0,  observacao: '',                                            preparo: 'Colha a primeira urina da manhã, jato médio, após higiene íntima, no frasco do laboratório.',   resultado: 'Em 24 horas' },
  { nome: 'Urocultura',                 jejum: 0,  observacao: '',                                            preparo: 'Colha a primeira urina da manhã, jato médio, antes de começar antibiótico.',                     resultado: 'De 3 a 5 dias' },
  { nome: 'Beta-HCG (gravidez)',        jejum: 0,  observacao: '',                                            preparo: 'Pode ser feito a qualquer hora, a partir do primeiro dia de atraso menstrual.',                  resultado: 'No mesmo dia' },
  { nome: 'PSA total',                  jejum: 0,  observacao: '',                                            preparo: 'Evite relação sexual e andar de bicicleta nas 48 horas anteriores.',                             resultado: 'Em 48 horas' },
  { nome: 'Vitamina D',                 jejum: 0,  observacao: '',                                            preparo: 'Informe se você usa suplemento de vitamina D.',                                                  resultado: 'Em 48 horas' }
];

/* Exame que aparece selecionado quando a página abre (use o nome exatamente como na lista). */
window.EXAME_INICIAL = 'Glicemia em jejum';
