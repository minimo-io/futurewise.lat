---
title: "Promessas da IA: Hype, Realidade e Limites"
summary: "Exploração crítica das promessas da IA, destacando seus limites, o impacto do hype e como empresas priorizam investidores em vez de usuários (por NoBoilerplate)"
image:
    src: "/post-images/woman-with-ai.jpg"
    alt: "woman-with-ai"
    tool: "FLUX 4-bit Quantization(just 8GB VRAM)"
    prompt: "Create a photorealistic image with purple and yellow neon lights diffused by a 轻柔的雾气, creating a captivating and otherworldly atmosphere. The image must depict a mysterious woman in a room, dressed in yellow. She is in front of her persona computer, with drinks and empty bottles around her [...]"
created: "2024-12-05 12:50:00"
tags: [
"Inteligência Artificial",
"Tecnologia",
"Desafios da IA"
]
---

Em meio ao turbilhão de promessas e expectativas sobre Inteligência Artificial, é essencial ouvir vozes que abordam o tema com clareza e senso crítico.

O artigo de _No Boilerplate_ traz uma análise lúcida sobre os avanços reais e as limitações das ferramentas de IA, além de questionar o hype exagerado impulsionado pelas grandes empresas do setor.

Compartilho este texto porque acredito que ele oferece uma visão equilibrada e informada, ajudando-nos a entender o que a tecnologia realmente pode – e não pode – fazer.

Em tempos de deslumbramento, a reflexão é mais necessária do que nunca.

**Vamos ao vídeo, e para quem não entende inglês, abaixo fica a transcrição.**

<iframe width="100%" height="315" src="https://www.youtube.com/embed/6Lxk9NMeWHg?si=1lIzio2rtYsP9loS" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

Olá, amigos! Meu nome é Tris e este é o
[No Boilerplate](https://www.youtube.com/watch?v=6Lxk9NMeWHg), onde faço vídeos técnicos rápidos. Hoje, vou
explicar minha estrutura para pensar sobre as [ferramentas de IA](https://www.futurewise.lat/ferramentas): o que elas são boas, o que não são tão boas, por que não cumprem suas promessas e o que fazer a respeito disso. A inteligência artificial já está disponível há alguns meses, mas como muitas promessas de IA, ela ficou um pouco aquém das expectativas.

O trem de hype da IA é impulsionado pela tentadora promessa da AGI (inteligência geral), como vemos nos filmes: Maria, Hal, Marvin, Johnny 5, C3PO, Rachel, Dear Holly Jarvis e Wally. Mas, apesar de quatro anos de promessas, a [inteligência artificial](/noticias/seja-um-ninja-das-redes-neuronais) da Apple é o mais recente exemplo desses produtos que não cumprem o prometido.

As duas melhores coisas que Marquez tem a dizer sobre a inteligência artificial da Apple são: 1. o background Aras, como ferramenta, é bastante bom, e 2. ela aumentou a memória RAM base em toda a linha de hardware da Apple. Isso já estava muito atrasado, como mencionei em meu vídeo sobre a eficácia irracional das estações de trabalho Linux. A CES também não poupou críticas. A inteligência artificial da Apple foi anunciada no WWDC em junho de 2024, mas não veio junto com os novos iPhones e outros hardwares anunciados, e só depois de meses com recursos estranhamente medianos lançados para nós, prometendo que as coisas realmente boas estão por vir. E eu acredito que já ouvimos isso antes.

Meus roteiros de vídeo são dedicados ao domínio público. Tudo o que você vê aqui, roteiros, links e imagens, faz parte de um documento markdown disponível gratuitamente no GitHub no endereço acima.

## Parte 1

A linguagem é importante para entender o que está acontecendo com a IA. Vamos afinar nossas definições e dar crédito ao que funciona bem. A inteligência artificial é uma grande disciplina que contém muitos campos, com aplicações que já estão tão bem integradas às nossas ferramentas que esquecemos delas, como buscar nossas fotos pelo conteúdo em vez de nome ou data. Isso é IA.

Reconhecimento de voz também é IA. Preenchimento generativo para editar partes indesejadas de imagens também é IA. Essas ferramentas são todas de IA, mas normalmente não as chamamos assim. Quando a medicina alternativa se prova eficaz, chamamos de medicina. Quando a tecnologia de IA funciona, paramos de chamá-la de IA, ela desaparece no fundo do nosso uso cotidiano.

Este vídeo é sobre IA generativa, grandes modelos de linguagem e GPT, as tecnologias que as empresas prometem muito, mas entregam surpreendentemente pouco. Modelos de linguagem grandes, como o chat GPT, são ótimos para compreender a linguagem.

Por exemplo, nunca vi um dicionário de sinônimos tão bom. Você pode simplesmente descrever o sentimento que quer transmitir e obter 10 palavras ou frases razoáveis. Mas quando começa a usar para conhecimento e não para linguagem, você começa a se deparar com problemas.

O chat GPT 4 deu a resposta errada para esta pergunta, e o Claude também. Na época da escrita, o Gemini deu a resposta certa, um cravo, mas não identificou o segundo instrumento, um melron, que o chat GPT identificou.

Quanto mais específicas as respostas que você quer, menos confiáveis os grandes modelos de linguagem são. Isso me lembra do "demon cat" de Adventure Time, que tem um conhecimento aproximado de muitas coisas, é muito confiante, mas frequentemente impreciso. Essa tendência existe em todas as ferramentas GPT que testei, de provedores de nuvem como a Open AI até rodar e ajustar meus próprios modelos locais com o olama.

Mas tudo bem, há muito valor no lado esquerdo deste gráfico para pesquisa inicial e exploração superficial. Você pode absolutamente usar uma ferramenta GPT para rapidamente encontrar áreas que deseja explorar mais a fundo por conta própria. No entanto, há limites reais nessas técnicas generativas que você encontrará logo após começar a usá-las para trabalhos mais complexos. Vamos falar sobre de onde vêm esses limites e como evitá-los.

Sou apenas eu cuidando deste canal, e sou muito grato a todos que me apoiam nesta aventura maluca. Se você quiser ver e dar feedback nos meus vídeos até uma semana antes, além de ter acesso privado ao Discord e até seu nome nos créditos, seria muito gentil de sua parte conferir meu Patreon. Também estou oferecendo um número limitado de vagas para mentoria, caso queira uma orientação individual sobre organização pessoal, Rust, produção criativa, Web Tech ou qualquer coisa que eu mencione nos meus vídeos. Inscreva-se e vamos conversar!

## Parte 2

Os feijões mágicos não funcionam porque não precisam. GPT é uma maravilha do processamento de linguagem natural. A correção automática, treinada com a internet inteira, quase sempre oferece sugestões sensatas sobre o que vem a seguir em uma frase, mas habilidade linguística, como aprendemos em Star Wars, não é igual a inteligência. O problema é que somos criaturas extremamente centradas na linguagem e confundimos proficiência linguística com inteligência, o que nos leva a usar essa tecnologia de maneira equivocada, ou para essa tecnologia nos usar. Você não está conversando com um agente inteligente, está fazendo autocompletar suas perguntas como um sociopata, tocando sua pele dizendo o que acha que você quer ouvir.

Modelos grandes de linguagem só podem aprender tópicos onde existe uma grande quantidade de linguagem disponível para treiná-los. Por exemplo, a razão pela qual os LLMs não conseguem autocompletar matemática é porque, exceto em exemplos triviais, o espaço de números é grande demais para esperar muito treinamento existente. Compare como muitas vezes 1+1 = 2 é escrito em livros didáticos, fácil para o chat GPT completar, com quantas vezes 2e^2 + 5j = 0 aparece em livros. Um tem uma grande quantidade de dados de linguagem naturais para treinamento, o outro não. Isso é o que faz as ferramentas como o chat GPT parecerem boas no início, quando você faz perguntas simples, mas conforme você se aprofunda, elas se desfazem e ficam cada vez mais imprecisas ou atingem barreiras artificiais, oferecendo apenas respostas superficiais. Não é que a tecnologia seja nova e eventualmente melhore, é que essa incrível habilidade linguística só funciona depois de ser treinada com grandes quantidades de dados. Por definição, pode haver apenas um único doutorado escrito sobre um tópico muito específico, então o GPT nunca aprenderá essa informação, porque um único artigo de doutorado não é uma grande quantidade de linguagem, e se você não tem uma grande quantidade de linguagem, não pode treinar um modelo grande de linguagem. As empresas de IA não podem cumprir suas promessas extravagantes, então por que elas as fazem?

## Parte 3

Não somos o público. Eu estava confuso com a distância entre o hype e a realidade até perceber que não somos o público para todo esse hype frenético. Como mostrei, se você tomar as promessas ao pé da letra, essas tecnologias simplesmente não funcionam, e coisas que não funcionam não podem resolver problemas. E você não pode vender algo a alguém que não resolve seu problema, pelo menos não duas vezes.

Então, por que as empresas continuam fazendo essas promessas? Bem, não é por demanda dos clientes, nem por direção dos engenheiros, nem mesmo pelas escolhas dos seus CEOs. É porque os verdadeiros tomadores de decisão nessas empresas são seus investidores ricos. Ferramentas de IA quebradas ou medianas que todos nós odiamos foram enfiadas em tudo o que usamos agora, até nas nossas notificações, porque as empresas precisam impressionar os investidores com recursos de IA, mesmo que não funcionem bem. Quando você trabalha em startups de tecnologia, como eu fiz nos últimos 15 anos, você acaba conhecendo bem o Runway da startup. Eu nem sempre era um engenheiro humilde, mas todos nós podíamos sentir quando o fim do Runway estava próximo. Você pode geralmente estender o Runway de duas formas principais: 1. vendendo produtos e serviços para os usuários por dinheiro ou 2. persuadindo os investidores a desembolsarem mais dinheiro. Vender produtos é difícil, eles precisam funcionar.

Mas vender uma promessa é fácil. Talvez não esteja tão claro desta vez com a IA. IA generativa é essa ferramenta perfeita para enganar investidores e tirar o dinheiro deles, porque frequentemente os que pedem o dinheiro e seus clientes acham que funciona. LLMs são ótimos para coisas básicas, e no passado, quando um computador podia automatizar tarefas básicas de forma eficiente, isso só exigia tempo, melhorias e, claro, dinheiro para aperfeiçoar. Como investidor, certamente seria melhor entrar no início desta nova tecnologia maravilhosa, assim como você fez antes. O que posso concluir com isso? De colônias em Marte a democratizar o dinheiro, é sempre mais fácil prometer um futuro brilhante do que construir um presente melhor. O que me lembro de fazer sempre que vejo esses produtos bizarros que ninguém precisa é prestar menos atenção no que essas empresas dizem que sua tecnologia fará no futuro e muito mais no que ela realmente pode fazer hoje.
