const { PrismaClient } = require("@prisma/client") // eslint-disable-line

const prisma = new PrismaClient()

async function main() {
  // Criando usuários
  const users = await prisma.user.createMany({
    data: [
      {
        id: "1",
        email: "douglas@sp.senai.br",
        name: "Douglas Reis",
        image:
          "https://drive.google.com/uc?export=view&id=1PlOzAsDjDjYwPdA8h_G5tcylBMXZ5Te3",
      },
      {
        id: "2",
        email: "jaco@sp.senai.br",
        name: "Vagner Jacó",
        image:
          "https://drive.google.com/uc?export=view&id=13oB-7OMIxaD9rrZ82sbc_28qghXZmfr4",
      },
      {
        id: "3",
        email: "thales@sp.senai.br",
        name: "Thales Santos",
        image:
          "https://drive.google.com/uc?export=view&id=1NXXYpJ2PPFkansYYRVfGM0L8hjq1ClYS",
      },
      {
        id: "4",
        email: "ronaldo@sp.senai.br",
        name: "Ronaldo Esperandio",
        image:
          "https://drive.google.com/uc?export=view&id=1MM6WNo8Gz3Q5AWm2ZBAhibiz4jL5gjZ_",
      },
      {
        id: "5",
        email: "paulo@sp.senai.br",
        name: "Paulo Matos",
        image:
          "https://drive.google.com/uc?export=view&id=1T3HIqqzU9l7RTjPnA8D1fARCB2Ii6yDY",
      },
      {
        id: "6",
        email: "lucas@sp.senai.br",
        name: "Lucas Flores",
        image:
          "https://drive.google.com/uc?export=view&id=1uL0Z1l75JpvmynN7Zu4R1_We3N89FgdI",
      },
      {
        id: "7",
        email: "leonardo@sp.senai.br",
        name: "Leonardo de Paula",
        image:
          "https://drive.google.com/uc?export=view&id=1k0srAX4EIqSi6pLLCCUmNK1WZUxl_fYW",
      },
      {
        id: "8",
        email: "gustavo@sp.senai.br",
        name: "Gustavo Feriani",
        image:
          "https://drive.google.com/uc?export=view&id=1ANWLf36CFmwZOU5XTcEgpCzUVKhZl4pj",
      },
      {
        id: "9",
        email: "mayke@sp.senai.br",
        name: "Mayke Pinheiro",
        image:
          "https://drive.google.com/uc?export=view&id=1Kk7Pqnua0eNJIVB3NCCTWGP5T0BO8cqD",
      },
      {
        id: "10",
        email: "celso@sp.senai.br",
        name: "Celso Pinto",
        image:
          "https://drive.google.com/uc?export=view&id=1cCK2hUNy_U00ZHu4jwMr4JB7y6DGpgzo",
      },
      {
        id: "11",
        email: "alexandro@sp.senai.br",
        name: "Alexandro Cruz",
        image:
          "https://drive.google.com/uc?export=view&id=1WlWsiyiLen4dQiG0i41CcpuMTbmgSeyk",
      },
    ],
  })

  // Criando tecnologias
  const techs = await prisma.tech.createMany({
    data: [
      {
        id: "1",
        name: "Vida",
        rating: 4.5,
        description:
          "A comunicação permite fazer a detecção de falhas e diagnosticar os veículos, bem como efetuar o download de software.",
        imageUrl:
          "https://drive.google.com/uc?export=view&id=14hdMsh53qZg0W6CzhiHF48tM8ICVMkyP",
        access: "Digital",
        link: "https://vidaresources.volvocars.biz/",
        type: "Software",
        area: "Automotiva",
      },
      {
        id: "2",
        name: "Trello",
        rating: 4.7,
        description:
          "O Trello reúne as tarefas, colegas de equipe e ferramentas, mantendo tudo em um só lugar, mesmo se o time for distribuído.",
        imageUrl:
          "https://drive.google.com/uc?export=view&id=1MtM-tq30RJejy8EdYB5k_A0YAtnp6fxH",
        access: "Digital",
        link: "https://trello.com/pt-BR",
        type: "Site",
        area: "Gestão",
      },
      {
        id: "3",
        name: "Socrative",
        rating: 4.6,
        description:
          "O Socrative é uma aplicação simples de elaboração de questionários (preparação de testes, quizzes etc.) que pode ser usada em sala de aula para receber feedback em tempo real da aprendizagem do aluno.",
        imageUrl:
          "https://drive.google.com/uc?export=view&id=1cOl95cDYVO9ddw0Zdy2kSCB8T_U_gvlb",
        access: "Digital",
        link: "https://socrative.com/",
        type: "Site",
        area: "Transversal",
      },
      {
        id: "4",
        name: "Simplo",
        rating: 4.8,
        description:
          "O acervo tem informações técnicas simplificadas para cerca de 22 mil veículos, mais de 60 montadoras nacionais e importadas.",
        imageUrl:
          "https://drive.google.com/uc?export=view&id=1hYHXC4lu8esegdfIjqiaTXLKl8Sja3_a",
        access: "Digital",
        link: "https://www.simplusbr.com/",
        type: "Site",
        area: "Automotiva",
      },
      {
        id: "5",
        name: "Figma",
        rating: 4.9,
        description:
          "Plataforma online para criação de interfaces, wireframes e protótipos. É muito utilizado para design de interface, design de experiência do usuário ou design de produto, mas oferece recursos de colaboração, personalização, componentização e prototipagem, tornando-o uma ferramenta versátil para ideação, gestão de projetos, registro de ideias, entre outros.",
        imageUrl:
          "https://drive.google.com/uc?export=view&id=1gNDPB4YB_zvPqll3SE-ovd69ir560Zio",
        access: "Digital",
        link: "https://www.figma.com/pt-br/",
        type: "Site",
        area: "Tecnologia da Informação",
      },
      {
        id: "6",
        name: "ABNT Coleção",
        rating: 4.9,
        description:
          "Base de dados online de normas técnicas da ABNT (Associação Brasileira de Normas Técnicas). O ABNT Coleção oferece acesso a um vasto acervo de normas, desde as mais gerais até as específicas para áreas como construção civil, segurança, saúde, meio ambiente e indústria. A plataforma permite pesquisa por palavras-chave, filtros por categorias e download de normas",
        imageUrl:
          "https://drive.google.com/uc?export=view&id=1H2R6kw7OphLK8SPr7_keXZ9u4m-uAnQF",
        access: "Digital",
        link: "https://abntcolecao.com.br/",
        type: "Site",
        area: "Transversal",
      },
      {
        id: "7",
        name: "Arduino IDE",
        rating: 4.5,
        description:
          "A IDE Arduino é um ambiente de desenvolvimento integrado usado para programar microcontroladores da plataforma Arduino. Ela permite escrever, compilar e carregar código em placas Arduino de forma simples, com suporte para uma vasta biblioteca de funções e exemplos, tornando o desenvolvimento de projetos eletrônicos acessível tanto para iniciantes quanto para profissionais.",
        imageUrl:
          "https://drive.google.com/uc?export=view&id=1mYfiKSfoRYboYEZVRIJZfFXgFybJ8S49",
        access: "Digital",
        link: "https://www.arduino.cc/",
        type: "Software",
        area: "Eletroeletrônica",
      },
      {
        id: "8",
        name: "AutoCAD",
        rating: 4.7,
        description:
          "Software de desenho 2D e 3D amplamente utilizado em projetos de arquitetura, engenharia e construção. Oferece ferramentas para criação de desenhos precisos, modelagem de objetos complexos, geração de documentação técnica e muito mais. Possui uma interface amigável e personalizável, além de uma vasta biblioteca de recursos e plugins.",
        imageUrl:
          "https://drive.google.com/uc?export=view&id=1YvGyyxCR6KIVr82RZzEiTY3wDJkWyIpC",
        access: "Digital",
        link: "https://web.autocad.com/",
        type: "Software",
        area: "Transversal",
      },
      {
        id: "9",
        name: "Canva",
        rating: 4.8,
        description:
          "Plataforma online de design gráfico intuitiva e fácil de usar, com ferramentas para criação de apresentações, cartões, posts para mídias sociais, logos e outros materiais visuais. Canva oferece uma biblioteca de templates, imagens, fontes e elementos gráficos para ajudar os usuários a criar designs profissionais, mesmo sem experiência prévia.",
        imageUrl:
          "https://drive.google.com/uc?export=view&id=1BvIZE6lzcxX4v5BlBh4hUQHcqqp_75qY",
        access: "Digital",
        link: "https://www.canva.com/",
        type: "Site",
        area: "Transversal",
      },
      {
        id: "10",
        name: "Bearing Doctor-NSK",
        rating: 4.5,
        description:
          "Aplicativo móvel desenvolvido pela NSK para auxiliar na diagnose de rolamentos. Permite que os usuários identifiquem os tipos de rolamentos, verifiquem suas características e encontrem soluções para problemas comuns. Além disso, o aplicativo oferece acesso a um banco de dados com informações técnicas e recursos de diagnóstico.",
        imageUrl:
          "https://drive.google.com/uc?export=view&id=1ItAAqTW91rlBjQc6NS0wD-MLqo0w6Wpa",
        access: "Digital",
        link: "https://play.google.com/store/apps/details?id=com.nsk.android.jp.sixteen.bearingdoc&hl=pt_BR",
        type: "Aplicativo",
        area: "Metalmecânica",
      },
      {
        id: "11",
        name: "Google Classroom",
        rating: 4.9,
        description:
          "O Google Classroom é uma plataforma de gerenciamento de aulas que facilita a comunicação e organização entre professores e alunos. Ele permite a criação e distribuição de tarefas, envio de feedback, e integração com outras ferramentas do Google, como Drive e Meet, em um ambiente digital acessível e fácil de usar.",
        imageUrl:
          "https://drive.google.com/uc?export=view&id=1fcLtSOlzb4yLzwxL9EWJeb7l7KLezxdS",
        access: "Digital",
        link: "https://classroom.google.com/",
        type: "Site",
        area: "Transversal",
      },
      {
        id: "12",
        name: "Google Docs",
        rating: 4.7,
        description:
          "O Google Docs é um editor de texto online que permite criar, editar e compartilhar documentos em tempo real. Ele oferece recursos de formatação, comentários e sugestões, além de integração com outras ferramentas do Google, facilitando a colaboração entre vários usuários em um único documento.",
        imageUrl:
          "https://drive.google.com/uc?export=view&id=1fRHwCq7ow1dFwrNV_oew4ST3oauYdsCD",
        access: "Digital",
        link: "https://docs.google.com/",
        type: "Site",
        area: "Transversal",
      },
      {
        id: "13",
        name: "Ferramentas Inteligentes",
        rating: 4.9,
        description:
          "O Aplicativo Ferramentas Inteligentes é uma aplicação da PC Mehanik que inclui mais de 40 ferramentas e utilitários para carpintaria, construção e medição. A aplicação utiliza os sensores do dispositivo para funcionar como uma caixa de ferramentas, como um canivete suíço.",
        imageUrl:
          "https://drive.google.com/uc?export=view&id=1QYTsOnRG31CPTo3aTKNkMNXPSYiFgSqt",
        access: "Digital",
        link: "https://play.google.com/store/apps/details?id=com.pcmehanik.smarttoolbox&hl=pt_BR",
        type: "Aplicativo",
        area: "Transversal",
      },
      {
        id: "14",
        name: "Kahoot",
        rating: 4.9,
        description:
          "Plataforma online para criação e realização de quizzes interativos para aprendizado. O Kahoot! permite que professores e educadores criem quizzes gamificados para envolver os alunos, testar seus conhecimentos e promover a interação em sala de aula.",
        imageUrl:
          "https://drive.google.com/uc?export=view&id=19Jsf_XOlv_f2d-rAjdLZcpz81jNgkYtN",
        access: "Digital",
        link: "https://kahoot.com",
        type: "Site",
        area: "Aulas Online",
      },
      {
        id: "15",
        name: "Office",
        rating: 4.9,
        description:
          "O Pacote Office é um conjunto de softwares de produtividade desenvolvido pela Microsoft, que inclui programas como Word, Excel, PowerPoint, Outlook, entre outros. Ele oferece ferramentas essenciais para criar documentos de texto, planilhas, apresentações e gerenciar e-mails, sendo amplamente utilizado em ambientes corporativos, acadêmicos e pessoais.",
        imageUrl:
          "https://drive.google.com/uc?export=view&id=1QA1sQIRhutwPEK2iAom0iraQriPh3iqh",
        access: "Digital",
        link: "https://www.office.com/",
        type: "Site/Software",
        area: "Transversal",
      },
    ],
  })

  // Criando relações entre usuários e tecnologias
  const userTechRelations = await prisma.usersOnTechs.createMany({
    data: [
      { userId: "2", techId: "1" },
      { userId: "9", techId: "1" },
      { userId: "7", techId: "2" },
      { userId: "4", techId: "3" },
      { userId: "5", techId: "3" },
      { userId: "3", techId: "4" },
      { userId: "5", techId: "4" },
      { userId: "6", techId: "4" },
      { userId: "10", techId: "4" },
      { userId: "2", techId: "4" },
      { userId: "11", techId: "4" },
      { userId: "8", techId: "5" },
      { userId: "1", techId: "5" },
      { userId: "1", techId: "6" },
      { userId: "2", techId: "6" },
      { userId: "3", techId: "7" },
      { userId: "4", techId: "7" },
      { userId: "5", techId: "8" },
      { userId: "6", techId: "8" },
      { userId: "7", techId: "9" },
      { userId: "8", techId: "9" },
      { userId: "9", techId: "10" },
      { userId: "1", techId: "10" },
      { userId: "2", techId: "11" },
      { userId: "3", techId: "11" },
      { userId: "4", techId: "12" },
      { userId: "5", techId: "12" },
      { userId: "6", techId: "13" },
      { userId: "7", techId: "13" },
      { userId: "8", techId: "14" },
      { userId: "9", techId: "14" },
      { userId: "1", techId: "15" },
      { userId: "2", techId: "15" },
    ],
  })

  console.log({ users, techs, userTechRelations })
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })
