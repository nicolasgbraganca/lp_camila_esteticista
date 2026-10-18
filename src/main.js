/**
 * CAMILA MIRELLA — ESTÉTICA & BIOMEDICINA
 * JavaScript Interativo & Catálogo de Procedimentos (Vanilla JS)
 */

// Constantes Oficiais de Contato
const WHATSAPP_NUMBER = '5512988642559';

/**
 * Catálogo dos 13 Procedimentos Oficiais (8 Corporais + 5 Faciais)
 * Cada item contém dados para o card e para a janela modal interativa.
 */
export const SERVICES_DATABASE = [
  // --- PROCEDIMENTOS CORPORAIS (8) ---
  {
    id: 'corrente-russa',
    name: 'Corrente Russa',
    category: 'corporal',
    tag: 'Tônus Muscular',
    duration: '50 min / sessão',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDeFEvJ0Py8zytWPgmFYouHZX8xcDgMduEytBtQTCc6wWqJhZ3XWY6eOOBP_3DyGl5pceNM2bOCH3VSj94kT_6RshKAptovnWqnGkZ2Fs6gK0PksB3GnzvIthoPM8Dc-O9x9nysPjBfFulJj1WvwMYWaSoxrY25EqK7j5UFwdwLxKTIo9AJ3jkjAE_PxLKg_Er_wBBzTHsiZFL19RpQcqSZNlDspt9t8wN_7oP5uvnluCP5iwpyZa2kJxkXKKKDr8e6rgs-ZKEBMA',
    shortDesc: 'Estímulo neuromuscular profundo que recruta fibras musculares, combatendo a flacidez tecidual e tonificando abdômen, glúteos e pernas.',
    fullDesc: 'A Corrente Russa utiliza estímulos elétricos de média frequência para gerar contrações musculares involuntárias e sincronizadas. O procedimento potencializa a oxigenação dos tecidos, estimula a circulação sanguínea e melhora a firmeza dérmica sem sobrecarga para as articulações.\n\n[CONFIRMAR COM CAMILA: parâmetros de frequência e associações recomendadas].',
    benefits: [
      'Fortalecimento e definição muscular progressiva',
      'Combate à flacidez pós-emagrecimento ou pós-parto',
      'Ativação da circulação local e drenagem tecidual',
      'Procedimento confortável e não invasivo'
    ],
    indications: 'Indicado para quem busca firmeza muscular em abdômen, glúteos, coxas e braços.'
  },
  {
    id: 'lipocavitacao',
    name: 'Lipocavitação',
    category: 'corporal',
    tag: 'Adiposidade',
    duration: 'Focalizado por área',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDQj93-gKtP6YyFEvShH2wYjyPKD7rxgCbWq6ZPSVO1x3Z1iBaavQZ69XMkEFc2Gig3ZAsxNyfJU22BTDb8BZRrtYKxk-puUdVvIaRtjqWTXAaKtUPFoY6JC1Wv3YgaPTdgIEH85Q4UQbmDEXewhsrqgx2V_JbEwo3btwmmnr01mREkluPCH65sJZlBF2fUP9VL2CuLhUklfNvoFOowusH6OeQsp909Sj_NSQzsRpgG33Vb278WjXMmH05fyCteujfm2SP2kzyPLg',
    shortDesc: 'Ondas de ultrassom cavitacional que desestruturam as células de gordura em áreas resistentes para posterior metabolização e drenagem.',
    fullDesc: 'Popularmente conhecida como a lipo sem cortes, a lipocavitação emite ondas ultrassônicas que geram microbolhas no interior dos adipócitos (células de gordura), rompendo suas membranas de forma seletiva sem danificar vasos ou nervos adjacentes.\n\n[CONFIRMAR COM CAMILA: orientações de exercícios e hidratação pós-procedimento].',
    benefits: [
      'Redução de medidas em regiões de gordura localizada',
      'Aprimoramento do contorno corporal',
      'Procedimento totalmente indolor e sem tempo de recuperação',
      'Resultados complementados com drenagem mecânica/manual'
    ],
    indications: 'Flancos, abdômen, culotes e áreas com adiposidade resistente à dieta e atividade física.'
  },
  {
    id: 'massagem-modeladora',
    name: 'Massagem Modeladora',
    category: 'corporal',
    tag: 'Contorno Corporal',
    duration: 'Técnica Manual Especializada',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD4Cdj3_ZK-NXi1RWiGGGq0SOiNf2RSwrEh1Z28bF7KUdPS3AP6ZlzYVnwKGKNu8kGKx30-hwzKT-X_aGdqyRrMVITJqjlK5sca2g9FSWYiiXcotXySdazZ9DniNeNFl4ac8tiJre5Q7JLqxy0tQeH3wQuoqjjY5krrXs6Hcvc9DtpIYf1I111XTPT8Dt0ybnuP6BEbP0a2x4aIcwwtjJcb-WB31eq71DvYhIFHv3fMctjWLKj2mRdyLqkfs1h2iEo-R_D1z5DHlA',
    shortDesc: 'Manobras manuais rítmicas e vigorosas que ativam a microcirculação periférica e auxiliam no alinhamento das curvas da silhueta.',
    fullDesc: 'Executada com movimentos rápidos de amassamento, deslizamento e pinçamento sobre o tecido adiposo, a massagem modeladora acelera o metabolismo local e reorganiza as fibras teciduais. Na abordagem de Camila Mirella, a técnica é aplicada sem causar hematomas ou agressões.\n\n[CONFIRMAR COM CAMILA: cremes e princípios ativos termogênicos utilizados].',
    benefits: [
      'Ativação intensa da circulação sanguínea e oxigenação celular',
      'Auxílio na redução do aspecto de celulite',
      'Sensação imediata de corpo mais compacto e alinhado',
      'Técnica que respeita os limites da pele'
    ],
    indications: 'Mulheres que buscam afinamento da cintura, definição de curvas e combate à celulite.'
  },
  {
    id: 'drenagem-linfatica',
    name: 'Drenagem Especializada (Foco em Lipedema)',
    category: 'corporal',
    tag: 'Protocolo Lipedema',
    duration: 'Indispensável / 60 min',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBWcN5EjUGh4TAvkLqXKzryXdjJqLnOYeS215YvThXBlV4Dei3z5ympErp8OwyXwWghKGo_8RzyBQ-6AvADLEnXEug40rHR0GWkJ6FCw-ilSCJL5J1GPnxoWcO7MLJyIYSLclzkfVcfxehYMhLlQgnYz_mHZJyMEUF0qR3w8fDZFMsRe9RyCUPIHsF9zekdIBzQq_p65X6-mfuyiKeaYDxxnXoO1NvXfzn2GRIg1pNPf5EFyyO1v-BpvbVYma2TdrFvJppXtMvpsQ',
    shortDesc: 'Protocolo de baixa pressão e manobras delicadas para desobstrução linfática, alívio da dor e sensação de peso nas pernas causados pelo Lipedema.',
    fullDesc: 'O Lipedema é uma condição inflamatória que requer extremo cuidado no toque. Este protocolo de drenagem é baseado em diretrizes fisiológicas suaves, direcionando o excesso de líquidos intersticiais para os gânglios sem provocar dor ou desconforto.\n\n[CONFIRMAR COM CAMILA: detalhes do protocolo de suporte e acompanhamento de Lipedema].',
    benefits: [
      'Alívio sensível do peso, dor e cansaço nos membros inferiores',
      'Descongestão dos tecidos edemaciados',
      'Melhora da microcirculação e drenagem de toxinas',
      'Toque respeitoso, sem pressão excessiva ou hematomas'
    ],
    indications: 'Portadoras de Lipedema, edemas crônicos, pós-operatório e retenção hídrica severa.'
  },
  {
    id: 'manta-termica',
    name: 'Manta Térmica & Termoterapia',
    category: 'corporal',
    tag: 'Detox Corporal',
    duration: 'Ativação Metabólica',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDQT4pTX8XYoYQkHmf86CO1D_n94xAfx5luqUaOoSLAXcXSPRHQQKpXKBUr7n7pUmbRnKb7UGD5IjbW8dQOg1_U2whb1vARyq7TXa3leE-LRErhgr1-etROMoEIsOfjfG9DkoMOnC3emYrhuHWQwVhEmF2qxDYY9Cn1SL6mgUwEwFZO_ZVMcReLfv-q1LGBzrs3uJ61I4caGxn0rbValkME3MLimhvX8g1V_zRFeAtIl6sHN-VZov6fo2WgvGWOub0KU7L6X4udJg',
    shortDesc: 'Emissão controlada de calor por infravermelho associada a cosméticos termogênicos, impulsionando a sudorese e a eliminação de toxinas.',
    fullDesc: 'A termoterapia por infravermelho longo eleva suavemente a temperatura corporal local, promovendo vasodilatação e acelerando as reações enzimáticas celulares. Quando associada a argilas ou cremes com cafeína e ativos lipolíticos, potencializa a permeação de ativos.\n\n[CONFIRMAR COM CAMILA: ativos corporais aplicados em conjunto com a manta].',
    benefits: [
      'Estímulo ao processo de desintoxicação tecidual',
      'Relaxamento profundo da musculatura e alívio do estresse',
      'Aceleração do metabolismo celular basal',
      'Preparação da pele para absorção de cosméticos avançados'
    ],
    indications: 'Retenção de líquidos, desintoxicação corporal e potencialização de protocolos redutores.'
  },
  {
    id: 'cintura-slim',
    name: 'Cintura Slim®',
    category: 'corporal',
    tag: 'Protocolo Exclusivo',
    duration: 'Método Autoral Camila Mirella',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAjVKqojYA2ltVr7SkDqVFthZ7OMc32nIvYz5MI2Ir1stWwVlxG3kZYBUQIBiYZU05wwmX7F9J_aAKsElOkVwCrwCXqqgleB_NHXgjPrNf0RS66UYn1P2cNO3RX2X040EQbk6ry7Bk_PDI5D1ZNZzVD-W-cey3YmZ9GabvMPRVNcYnrx2A_0-2ewDNFc3N-sJo9tfSP_pK_PYT6OUjLWWTKkpQMb_5CVBSOZKrZcIINQBw1HyugvGp-L4rhfeA823Q_xzBuAyfIhw',
    shortDesc: 'Método autoral que associa reposicionamento fascial, drenagem reversa e cosmecêuticos lipolíticos para afinamento visual da silhueta.',
    fullDesc: 'O Cintura Slim® é uma metodologia refinada e patenteada desenvolvida para reposicionar as estruturas teciduais do abdômen e flancos. Combina técnicas manuais biométricas a produtos de alta absorção para entregar redução visível de medidas de forma imediata e duradoura.\n\n[CONFIRMAR COM CAMILA: média de redução em cm e etapas do protocolo Cintura Slim®].',
    benefits: [
      'Afinamento visível da cintura e contorno abdominal',
      'Redução de medidas comprovada por fita métrica',
      'Desinchaço abdominal rápido',
      'Técnica confortável, sem dor e sem marcas roxas'
    ],
    indications: 'Mulheres que desejam cintura delineada, preparação para eventos ou remodelagem do tronco.'
  },
  {
    id: 'projeto-corpo-livre',
    name: 'Projeto Corpo Livre®',
    category: 'corporal',
    tag: 'Jornada Integrada',
    duration: 'Programa de 6 a 10 sessões',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAdsuvnZK4j-ROp-JxbnRGPo9OuMVCz-b_-59czq9IrdAIBX7h9ih0kukSDUZ6Qha4qtcio1Tu_9YOOKujnBCPn825DVngLPiJeSkUN3m7Vvp7OujWe-nUJvmhbGVxEVzHTn7Ocw_8UYYtwIKzPWVMs-g2bhwtLBBUkeNRrI-jPburQwolQJ88fCSYo-1aIEPmkYeOQ4C3K0ugVd1lw7dvblnM7n5_uojt8tXF1XYLFJcopiLqm7LWS_7Uzc6KaiPRYnxn3MVO8IQ',
    shortDesc: 'Jornada integrada de sessões combinadas para mulheres que buscam reabilitação do bem-estar, desinflamação profunda e leveza.',
    fullDesc: 'O Projeto Corpo Livre® é um plano terapêutico completo de acompanhamento. Une drenagens personalizadas, termoterapia, remodelagem manual e orientações de rotina fisiológica para reestruturar a relação da paciente com seu corpo, promovendo saúde duradoura e liberdade.\n\n[CONFIRMAR COM CAMILA: estrutura de consultas de acompanhamento e suporte contínuo].',
    benefits: [
      'Tratamento global para desinflamação tecidual profunda',
      'Acompanhamento contínuo da evolução semana a semana',
      'Melhora expressiva da disposição e autoestima',
      'Alívio consistente das queixas de peso e retenção'
    ],
    indications: 'Mulheres com queixas crônicas de inchaço, Lipedema ou que desejam uma transformação completa e orientada.'
  },
  {
    id: 'massagem-relaxante',
    name: 'Massagem Relaxante',
    category: 'corporal',
    tag: 'Descompressão & Spa',
    duration: '60 min',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB2kSy-lHCGiagea1yPZzztvuKsXPtM8mDY70NHIEPF3W5tEAnHGrtB2FiOPTdxjKb0rwHbdHw96vozd-CBWhDaZOn7bSnWjMNgqoC8wCKEUfYkp4mbX4suqUHO-W1yf3WD_3Q9zC1WwtjUQFjgYVs38fY6v2iBE61fBV_Mig-RsRZeL_76ca1ZmUtjPylhr87DBzAUF8nymecJgB9N8rOVOAZYAe73jRVymz1JxGGhIp6bqN5_L3HEBsKkosxJwlxMcpjktndzIQ',
    shortDesc: 'Manobras suaves e fluidas focadas no alívio de contraturas miofasciais, redução do cortisol circulante e relaxamento pleno.',
    fullDesc: 'Realizada em ambiente privativo com aromaterapia e toques contínuos de deslizamento profundo e amassamento suave. Promove liberação de endorfinas, alívio de nós de tensão nas costas, pescoço e ombros, e desaceleração do sistema nervoso simpático.\n\n[CONFIRMAR COM CAMILA: óleos essenciais e técnicas de aromaterapia utilizadas].',
    benefits: [
      'Alívio imediato de dores musculares e tensões emocionais',
      'Redução da ansiedade e melhora da qualidade do sono',
      'Estímulo suave da circulação sistêmica',
      'Sensação de renovação física e mental profunda'
    ],
    indications: 'Estresse, sobrecarga na rotina diária, dores posturais e necessidade de pausa restauradora.'
  },

  // --- PROCEDIMENTOS FACIAIS (5) ---
  {
    id: 'limpeza-de-pele',
    name: 'Limpeza de Pele Profunda',
    category: 'facial',
    tag: 'Cuidado Essencial',
    duration: 'Assepsia & Extração Confortável',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB-Rig24vMrhGMoETXrgxIJvvuYM-TCnqZ18oGPAGznIdsUmtuJuOXpJnw6erbpsblUJdsC7-y89CtIO5hRZhYd4MF9YW61SWRPN7cqP6uuU8_r7tf__RBY-V1430IA-d1Oqy2sU7qi_mn_CZ8qyRlJB1yeP9EE-8_H1PAgHTCXg1LRDDWjZker5J8F5RbKy56avXVlR2yhFpDqegtXP6Cz2eMunZA4Oc2m6_0McU5t37y7aOVeuIEBNG82DEZ4yOLB_oLhRLJiMA',
    shortDesc: 'Extração indolor com emoliência biocompatível, alta frequência bactericida e máscara calmante regeneradora para pureza e equilíbrio dos poros.',
    fullDesc: 'Um protocolo facial completo que remove cravos (comedões), miliuns e excesso de sebo sem agredir o tecido. Inclui higienização profunda, esfoliação suave, emoliência por calor úmido, extração delicada, aparelho de alta frequência cicatrizante e máscara calmante de alta absorção.\n\n[CONFIRMAR COM CAMILA: cosméticos dermatológicos e máscaras pós-extração].',
    benefits: [
      'Desobstrução dos poros e prevenção de acnes e cravos',
      'Textura da pele mais uniforme e sedosa',
      'Controle efetivo da oleosidade sem ressecar',
      'Recuperação rápida, sem marcas vermelhas severas'
    ],
    indications: 'Todos os tipos de pele; recomendada a cada 30 a 45 dias para manutenção de saúde cutânea.'
  },
  {
    id: 'peeling-diamante',
    name: 'Peeling de Diamante',
    category: 'facial',
    tag: 'Renovação Celular',
    duration: 'Microdermoabrasão',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAwnVn4-E9UJdsJ6BDfN6VcYXxY19SK691nF2MsGUjuY66bOGf3QcX-4qhkJ8ycaIMamsO_eQLeLOxkng1VKS0WJdXiz5aAOlWTff4-6l_9z3JtWBy8dT_W_Uh0hi2rxK_0ceNs7yNAy5D67a2jSAkprzfMwKAedcuiiOnFDCrNAGUk0lxBdNHPBX5w84A1noO74Z595SSlMlSC3WUzaEl4GfscxldMb2gMBk81dV1YdSpOINFy4jPjSYz_mlGmvmxCimx1XiNg0Q',
    shortDesc: 'Microdermoabrasão mecânica que remove células mortas da camada superficial, uniformiza a textura e atenua linhas finas e manchinhas.',
    fullDesc: 'Utiliza uma ponteira diamantada com sistema de sucção a vácuo para realizar uma esfoliação física precisa. Estimula a renovação mitótica da epiderme e induz a síntese de colágeno jovem, conferindo um toque aveludado instantâneo.\n\n[CONFIRMAR COM CAMILA: número de sessões sugeridas para manchas solares].',
    benefits: [
      'Renovação imediata do viço e brilho natural da pele',
      'Atenuação de linhas de expressão finas e manchas superficiais',
      'Estímulo suave à produção de colágeno',
      'Sem descamação agressiva ou necessidade de repouso'
    ],
    indications: 'Peles opacas, desvitalizadas, com textura áspera ou manchas solares leves.'
  },
  {
    id: 'hidratacao-facial',
    name: 'Hidratação Profunda & Barreira Cutânea',
    category: 'facial',
    tag: 'Nutrição & Glow',
    duration: 'Restauração Lipídica',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBVvZyR-DlcToM0yQHE1ut4b3BmLNkPxXwtIcG36bYMSMkk4wO6zCqQ2Lxpelfv2ZPA2ynYj0lqnyrp9ij9fADxjrblb-rYd-Bg1i7S-id4JXNcmWf1_yYZDc0z1CJDfoQSjLzGt7BCf7qLwTJWJRVS8FEKocaDPsF3B68y6iox6TXpQEND2yvblPao6AD6XQpb8KHzeQNsiJtGVaRVzZOvIoQwb45652vVGdaRqdCTMtrZYju-3yiPvj9IrT5c8_oomvRgTFQZdQ',
    shortDesc: 'Infusão de ácido hialurônico fracionado, peptídeos e ceramidas para restaurar o manto lipídico, conferindo viço luminoso e proteção.',
    fullDesc: 'Desenvolvido especialmente para peles desidratadas, sensibilizadas pelo clima ou que perderam o brilho saudável. O protocolo deposita moléculas higroscópicas de ácido hialurônico em diferentes profundidades da epiderme, selando a barreira contra perda transepidérmica de água.\n\n[CONFIRMAR COM CAMILA: formulação dos séruns e protocolos de massagem facial].',
    benefits: [
      'Devolução imediata do viço, maciez e luminosidade ("glow")',
      'Fortalecimento da barreira biológica da pele',
      'Alívio de irritações, repuxamento e descamações',
      'Melhor fixação e acabamento de maquiagens'
    ],
    indications: 'Peles secas, ressecadas, sensibilizadas ou pós-exposição solar e climas secos.'
  },
  {
    id: 'microagulhamento',
    name: 'Microagulhamento & Drug Delivery',
    category: 'facial',
    tag: 'Indução de Colágeno',
    duration: 'Protocolo Avançado',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAPogqSs1egpnil0pZ4pEzVbe7WLtnZ8Vrf4Rc3F_fnOwXumR8p51Ij4UHKiaiPoeJe75laG3CPARD7GFBBqnbkZUyUh2tgsI9EFkVema_k9pdbeyX9qoy0R1JoKizXj9UdzEwmsv_Vj15rUM7Ea1uOTXuj5vXv1WgQh2bVwL9zXLXYrhCnqd9oyXVfq164Ug_4jefm061nnexyNPUF8Om9_C8nD9sEc8DspO6sbuT84IB5m2_4HqpMTnBnc5IArgIyK9wuPeOevQ',
    shortDesc: 'Microperfurações cirúrgicas controladas associadas à entrega imediata de fatores de crescimento e ativos clareadores para regeneração profunda.',
    fullDesc: 'Com agulhas estéreis descartáveis, o equipamento cria microcanais dérmicos que estimulam a cascata inflamatória fisiológica de produção de colágeno e elastina. Simultaneamente, aplica-se a técnica de Drug Delivery, infundindo ativos estéreis de alto peso biológico diretamente na derme.\n\n[CONFIRMAR COM CAMILA: ativos utilizados no drug delivery como fatores de crescimento/vitamina C].',
    benefits: [
      'Estímulo biológico poderoso à produção de colágeno novo',
      'Suavização de cicatrizes de acne e poros dilatados',
      'Clareamento gradual de manchas e uniformização do tom',
      'Rejuvenescimento dérmico com segurança biomédica'
    ],
    indications: 'Cicatrizes de acne, flacidez facial leve/moderada, linhas de expressão e manchas resistentes.'
  },
  {
    id: 'jato-de-plasma',
    name: 'Jato de Plasma',
    category: 'facial',
    tag: 'Retração Cutânea',
    duration: 'Sublimação Dérmica Pontual',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuASaTo06KkXI6PIVIoStejUb-MH_dCyFHt-5eotg3uU7DVy3vJYcC7_KQCYsL_fsFR5ltgVMsdw9vGAaQSLcpLM_QdA3z7hhmNw7qSc6ph_gZRqkRQ0RIqRWKbDif8FwLeW6-jLv0V9vMeUcjpDO8mq0Fixajtu812zOVwvGugWqYHUu7xBA1zlYzyZrT32N9hMZ58EF5D6CCUkGi2BCMOdP0472AMu5jrXm6btWYiVPspb2ot8T5MpDduFZae4MBrGfRGG8-vgug',
    shortDesc: 'Tecnologia de plasma fracionado voltada para blefaroplastia sem cortes, amenização de rugas estáticas e retração da flacidez periocular.',
    fullDesc: 'O arco de plasma ioniza os gases do ar, provocando uma sublimação precisa e micrométrica do excesso de tecido epidérmico flácido. Induz uma retração imediata da pele e uma potente reestruturação de fibras elásticas nas semanas seguintes ao procedimento.\n\n[CONFIRMAR COM CAMILA: orientações de cicatrização e proteção solar indispensável].',
    benefits: [
      'Alternativa não cirúrgica para excesso de pele nas pálpebras',
      'Atenuação de rugas periorais ("código de barras") e perioculares',
      'Retração localizada de tecido flácido',
      'Resultados de longa duração com poucas sessões'
    ],
    indications: 'Flacidez de pálpebras (blefaro sem cortes), rugas estáticas e linhas profundas.'
  }
];

/**
 * Renderiza os cards de serviços no DOM
 */
function renderServices() {
  const containerCorporal = document.getElementById('services-grid-corporal');
  const containerFacial = document.getElementById('services-grid-facial');

  if (!containerCorporal || !containerFacial) return;

  const corporais = SERVICES_DATABASE.filter(s => s.category === 'corporal');
  const faciais = SERVICES_DATABASE.filter(s => s.category === 'facial');

  const createCardHtml = (service, index, isHighlight = false) => `
    <article class="service-card ${isHighlight ? 'highlight' : ''}" data-service-id="${service.id}" data-reveal data-reveal-delay="${(index % 3) * 70}">
      <div class="service-media">
        <img class="service-img" src="${service.image}" alt="${service.name}" loading="lazy" />
        <span class="service-tag">${service.tag}</span>
      </div>
      <div class="service-body">
        <div>
          <h3 class="service-title">${service.name}</h3>
          <p class="service-desc">${service.shortDesc}</p>
        </div>
        <div class="service-footer">
          <span class="service-meta">${service.duration}</span>
          <button type="button" class="service-details-btn" data-action="open-modal" data-id="${service.id}" aria-label="Ver detalhes de ${service.name}">
            Saiba mais <span class="material-symbols-outlined" style="font-size: 16px;">chevron_right</span>
          </button>
        </div>
      </div>
    </article>
  `;

  containerCorporal.innerHTML = corporais.map((s, idx) => createCardHtml(s, idx, idx === 3)).join('');
  containerFacial.innerHTML = faciais.map((s, idx) => createCardHtml(s, idx)).join('');
}

/**
 * Revela os elementos marcados conforme entram na área visível
 */
function setupScrollReveal() {
  const revealSelector = '[data-reveal]';
  const reducedMotion = window.matchMedia?.('(prefers-reduced-motion: reduce)');
  if (typeof window.IntersectionObserver !== 'function' || typeof window.MutationObserver !== 'function') return;

  let intersectionObserver = null;
  let mutationObserver = null;

  function stopObserving() {
    intersectionObserver?.disconnect();
    mutationObserver?.disconnect();
    intersectionObserver = null;
    mutationObserver = null;
    document.documentElement.classList.remove('has-scroll-reveal');
  }

  function revealAll() {
    document.querySelectorAll(revealSelector).forEach(element => element.classList.add('is-visible'));
  }

  function observeElements(elements) {
    if (!intersectionObserver || reducedMotion?.matches) return;
    elements.forEach(element => {
      if (!element.classList.contains('is-visible')) intersectionObserver.observe(element);
    });
  }

  function startObserving() {
    stopObserving();
    if (reducedMotion?.matches) {
      revealAll();
      return;
    }

    try {
      intersectionObserver = new window.IntersectionObserver((entries, activeObserver) => {
        if (reducedMotion?.matches) return;
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          entry.target.classList.add('is-visible');
          activeObserver.unobserve(entry.target);
        }
      }, {
        threshold: 0.12,
        rootMargin: '0px 0px -36px 0px'
      });

      document.documentElement.classList.add('has-scroll-reveal');
      observeElements(document.querySelectorAll(revealSelector));

      mutationObserver = new window.MutationObserver(records => {
        const addedElements = [];
        records.forEach(record => record.addedNodes.forEach(node => {
          if (node.nodeType !== 1) return;
          if (node.matches(revealSelector)) addedElements.push(node);
          addedElements.push(...node.querySelectorAll(revealSelector));
        }));
        observeElements(addedElements);
      });
      mutationObserver.observe(document.body, { childList: true, subtree: true });
    } catch {
      stopObserving();
      revealAll();
    }
  }

  startObserving();
  const handleMotionPreferenceChange = event => {
    if (event.matches) {
      stopObserving();
      revealAll();
    } else {
      startObserving();
    }
  };

  if (typeof reducedMotion?.addEventListener === 'function') {
    reducedMotion.addEventListener('change', handleMotionPreferenceChange);
  } else {
    reducedMotion?.addListener?.(handleMotionPreferenceChange);
  }
}

/**
 * Gerenciamento do Modal de Detalhes
 */
function setupModal() {
  const overlay = document.getElementById('service-modal-overlay');
  const closeBtn = document.getElementById('service-modal-close');
  const modalImg = document.getElementById('modal-img');
  const modalBadge = document.getElementById('modal-badge');
  const modalTitle = document.getElementById('modal-title');
  const modalDesc = document.getElementById('modal-desc');
  const modalList = document.getElementById('modal-benefits-list');
  const modalWpBtn = document.getElementById('modal-whatsapp-btn');

  if (!overlay) return;

  function openServiceModal(serviceId) {
    const service = SERVICES_DATABASE.find(s => s.id === serviceId);
    if (!service) return;

    modalImg.src = service.image;
    modalImg.alt = service.name;
    modalBadge.textContent = `${service.tag} · ${service.duration}`;
    modalTitle.textContent = service.name;
    modalDesc.innerText = service.fullDesc;

    modalList.innerHTML = service.benefits.map(b => `
      <li>
        <span class="material-symbols-outlined">check_circle</span>
        <span>${b}</span>
      </li>
    `).join('');

    const message = encodeURIComponent(`Olá, Camila! Gostaria de saber mais e agendar o procedimento de ${service.name}.`);
    modalWpBtn.href = `https://wa.me/${WHATSAPP_NUMBER}?text=${message}`;

    overlay.classList.add('open');
    document.body.style.overflow = 'hidden';
  }

  function closeModal() {
    overlay.classList.remove('open');
    document.body.style.overflow = '';
  }

  // Event Delegation para cliques nos botões "Saiba mais"
  document.addEventListener('click', (e) => {
    const btn = e.target.closest('[data-action="open-modal"]');
    if (btn) {
      const id = btn.getAttribute('data-id');
      openServiceModal(id);
    }
  });

  closeBtn?.addEventListener('click', closeModal);

  // Fecha clicando no fundo escuro
  overlay.addEventListener('click', (e) => {
    if (e.target === overlay) closeModal();
  });

  // Fecha com tecla ESC
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && overlay.classList.contains('open')) {
      closeModal();
    }
  });
}

/**
 * Alternância das Abas (Corporais vs Faciais)
 */
function setupTabs() {
  const btnCorp = document.getElementById('tab-btn-corporal');
  const btnFac = document.getElementById('tab-btn-facial');
  const gridCorp = document.getElementById('services-grid-corporal');
  const gridFac = document.getElementById('services-grid-facial');

  if (!btnCorp || !btnFac || !gridCorp || !gridFac) return;

  btnCorp.addEventListener('click', () => {
    btnCorp.classList.add('active');
    btnFac.classList.remove('active');
    gridCorp.style.display = 'grid';
    gridFac.style.display = 'none';
  });

  btnFac.addEventListener('click', () => {
    btnFac.classList.add('active');
    btnCorp.classList.remove('active');
    gridCorp.style.display = 'none';
    gridFac.style.display = 'grid';
  });
}

/**
 * Acordeão de FAQ
 */
function setupFaq() {
  const faqItems = document.querySelectorAll('.faq-item');
  faqItems.forEach(item => {
    const trigger = item.querySelector('.faq-trigger');
    trigger?.addEventListener('click', () => {
      const isActive = item.classList.contains('active');
      // Opcional: fechar outros itens para comportamento harmônico
      faqItems.forEach(other => other.classList.remove('active'));
      if (!isActive) {
        item.classList.add('active');
      }
    });
  });
}

/**
 * Menu Mobile Drawer
 */
function setupMobileMenu() {
  const toggleBtn = document.getElementById('menu-toggle-btn');
  const mobileNav = document.getElementById('mobile-nav');

  if (!toggleBtn || !mobileNav) return;

  toggleBtn.addEventListener('click', () => {
    mobileNav.classList.toggle('open');
  });

  mobileNav.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
      mobileNav.classList.remove('open');
    });
  });
}

/**
 * Navbar com efeito translúcido ao rolar
 */
function setupHeaderScroll() {
  const header = document.querySelector('.site-header');
  if (!header) return;

  window.addEventListener('scroll', () => {
    if (window.scrollY > 20) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  }, { passive: true });
}

/**
 * Inicialização ao carregar a página
 */
document.addEventListener('DOMContentLoaded', () => {
  renderServices();
  setupScrollReveal();
  setupModal();
  setupTabs();
  setupFaq();
  setupMobileMenu();
  setupHeaderScroll();
});
