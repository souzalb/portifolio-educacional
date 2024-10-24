const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

async function main() {
  // Criando usuários
  const users = await prisma.user.createMany({
    data: [
      {
        id: "1",
        name: "Alice",
        imageUrl:
          "https://media.istockphoto.com/id/1309328823/pt/foto/headshot-portrait-of-smiling-male-employee-in-office.jpg?s=1024x1024&w=is&k=20&c=3R9kDoCR3dBS-eS-bnX0oat3EUd2n3wG3H5ikVZ4-2w=",
      },
      {
        id: "2",
        name: "Bob",
        imageUrl:
          "https://media.istockphoto.com/id/1300972574/pt/foto/millennial-male-team-leader-organize-virtual-workshop-with-employees-online.jpg?s=1024x1024&w=is&k=20&c=hpcEe-lABirPmDzac5e8X5s10Hu-hE40OpQW395TLBI=",
      },
      {
        id: "3",
        name: "Charlie",
        imageUrl:
          "https://media.istockphoto.com/id/1407759041/pt/foto/confident-happy-beautiful-hispanic-student-girl-indoor-head-shot-portrait.jpg?s=1024x1024&w=is&k=20&c=LeC0g7sNOTrrXJE7EV1aCM6l2-NyLHuqGiobrDDj-BY=",
      },
      {
        id: "4",
        name: "Dave",
        imageUrl:
          "https://static9.depositphotos.com/1006708/1096/i/450/depositphotos_10962027-stock-photo-mid-adult-man-with-glasses.jpg",
      },
      {
        id: "5",
        name: "Eve",
        imageUrl:
          "https://img.freepik.com/fotos-gratis/homem-ridicularizando-um-urbano-bicicleta_23-2148138880.jpg",
      },
    ],
  });

  // Criando tecnologias
  const techs = await prisma.tech.createMany({
    data: [
      {
        id: "1",
        name: "React",
        rating: 4.5,
        description: "A JavaScript library for building user interfaces",
        imageUrl:
          "https://www.mundojs.com.br/wp-content/uploads/2019/03/react.png",
        access: "public",
        link: "https://reactjs.org",
        type: "library",
        area: "frontend",
      },
      {
        id: "2",
        name: "Node.js",
        rating: 4.7,
        description: "A JavaScript runtime built on Chrome's V8 engine",
        imageUrl:
          "https://miro.medium.com/v2/resize:fit:866/1*1UBNwRFaslvqt_G3Njw3pg.jpeg",
        access: "public",
        link: "https://nodejs.org",
        type: "runtime",
        area: "backend",
      },
      {
        id: "3",
        name: "GraphQL",
        rating: 4.6,
        description: "A query language for APIs",
        imageUrl: "https://www.gravitee.io/hubfs/graphql.png",
        access: "public",
        link: "https://graphql.org",
        type: "query language",
        area: "API",
      },
      {
        id: "4",
        name: "Docker",
        rating: 4.8,
        description:
          "A platform for developing, shipping, and running applications",
        imageUrl:
          "https://blog.codewithdan.com/wp-content/uploads/2023/06/Docker-Logo.png",
        access: "public",
        link: "https://docker.com",
        type: "container",
        area: "devops",
      },
      {
        id: "5",
        name: "PostgreSQL",
        rating: 4.9,
        description:
          "A powerful, open-source object-relational database system",
        imageUrl:
          "https://miro.medium.com/v2/resize:fit:610/1*lZrXmWJRDLqIImJThs5Lrw.png",
        access: "public",
        link: "https://postgresql.org",
        type: "database",
        area: "database",
      },
    ],
  });

  // Criando relações entre usuários e tecnologias
  const userTechRelations = await prisma.usersOnTechs.createMany({
    data: [
      { userId: "1", techId: "1" }, // Alice -> React
      { userId: "1", techId: "2" }, // Alice -> Node.js
      { userId: "2", techId: "3" }, // Bob -> GraphQL
      { userId: "3", techId: "4" }, // Charlie -> Docker
      { userId: "4", techId: "5" }, // Dave -> PostgreSQL
      { userId: "5", techId: "1" }, // Eve -> React
    ],
  });

  console.log({ users, techs, userTechRelations });
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
