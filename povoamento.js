db.dropDatabase();

db.createCollection("festivals");

db.festivals.insertMany([
    {
        name: "The Town",
        location: "São Paulo",
        startDate: new Date("2023-09-02"),
        endDate: new Date("2023-09-10")

    },
    {
        name: "Lollapalooza",
        location: "São Paulo",
        startDate: new Date("2023-10-31"),
        endDate: new Date("2023-11-06")

    },
    {
        name: "Rock in Rio",
        location: "Rio de Janeiro",
        startDate: new Date("2022-09-12"),
        endDate: new Date("2022-09-11")

    },
    {
        name: "Primavera Sound",
        location: "São Paulo",
        startDate: new Date("2022-09-12"),
        endDate: new Date("2022-09-11")

    },
    {
        name: "Coachella",
        location: "Indio",
        startDate: new Date("2023-04-14"),
        endDate: new Date("2023-04-23")

    }
]);

db.createCollection("stages");

db.stages.insertMany([
    {
        name: "Skyline",
        capacity: 100.000,
        festival: db.festivals.findOne({name: "The Town"})
    },
    {
        name: "The one",
        capacity: 100.000,
        festival: db.festivals.findOne({name: "The Town"})
    },
    {
        name: "Factory",
        capacity: 100.000,
        festival: db.festivals.findOne({name: "The Town"})
    },
    {
        name: "New Dance Order",
        capacity: 100.000,
        festival: db.festivals.findOne({name: "The Town"})
    },
    {
        name: "Perry's by Johnnie Walker Blonde",
        capacity: 100.000,
        festival: db.festivals.findOne({name: "Lollapalooza"})
    },
    {
        name: "Budweiser",
        capacity: 100.000,
        festival: db.festivals.findOne({name: "Lollapalooza"})
    },
    {
        name: "Adidas",
        capacity: 100.000,
        festival: db.festivals.findOne({name: "Lollapalooza"})
    },
    {
        name: "Chevrolet",
        capacity: 100.000,
        festival: db.festivals.findOne({name: "Lollapalooza"})
    },
    {
        name: "Palco Mundo",
        capacity: 100.000,
        festival: db.festivals.findOne({name: "Rock in Rio"})
    },
    {
        name: "Palco Sunset",
        capacity: 100.000,
        festival: db.festivals.findOne({name: "Rock in Rio"})
    },
    {
        name: "Palco Beck's",
        capacity: 100.000,
        festival: db.festivals.findOne({name: "Primavera Sound"})
    },
    {
        name: "Palco Primavera",
        capacity: 100.000,
        festival: db.festivals.findOne({name: "Primavera Sound"})
    },
    {
        name: "Main stage",
        capacity: 100.000,
        festival: db.festivals.findOne({name: "Coachella"})
    }
]);

db.createCollection("artists");

db.artists.insertMany([
    {
        name: 'Post Malone',
        type: 'Singer',
        genre: 'Hip-hop',
        festival: db.festivals.findOne({name: "The Town"}),
        schedule: {
            day: new Date("2023-09-02"),
            stage: db.stages.findOne({name: "Skyline"})            
        }
    },
    {
        name: 'Demi Lovato',
        type: 'Singer',
        genre: 'Pop',
        festival: db.festivals.findOne({name: "The Town"}),
        schedule: {
            day: new Date("2023-09-02"),
            stage: db.stages.findOne({name: "Skyline"})            
        }
    },
    {
        name: 'Teto',
        type: 'Singer',
        genre: 'Rap',
        festival: db.festivals.findOne({name: "The Town"}),
        schedule: {
            day: new Date("2023-09-02"),
            stage: db.stages.findOne({name: "Factory"})            
        }
    },
    {
        name: 'Seu Jorge',
        type: 'Singer',
        genre: 'MPB',
        festival: db.festivals.findOne({name: "The Town"}),
        schedule: {
            day: new Date("2023-09-03"),
            stage: db.stages.findOne({name: "The one"})            
        }
    },
    {
        name: 'Lion Babe',
        type: 'DJ',
        genre: 'Eletronic',
        festival: db.festivals.findOne({name: "The Town"}),
        schedule: {
            day: new Date("2023-09-10"),
            stage: db.stages.findOne({name: "New Dance Order"})            
        }
    },
    {
        name: 'Bruno Mars',
        type: 'Singer',
        genre: 'Pop',
        festival: db.festivals.findOne({name: "The Town"}),
        schedule: {
            day: new Date("2023-09-10"),
            stage: db.stages.findOne({name: "Skyline"})            
        }
    },
    {
        name: 'Bruno Mars',
        type: 'Singer',
        genre: 'Pop',
        festival: db.festivals.findOne({name: "The Town"}),
        schedule: {
            day: new Date("2023-09-10"),
            stage: db.stages.findOne({name: "Skyline"})            
        }
    },
    {
        name: 'KVSH',
        type: 'DJ',
        genre: 'Eletronic',
        festival: db.festivals.findOne({name: "Lollapalooza"}),
        schedule: {
            day: new Date("2023-03-26"),
            stage: db.stages.findOne({name: "Perry's by Johnnie Walker Blonde"})            
        }
    },
    {
        name: 'Liu',
        type: 'DJ',
        genre: 'Eletronic',
        festival: db.festivals.findOne({name: "Lollapalooza"}),
        schedule: {
            day: new Date("2023-03-25"),
            stage: db.stages.findOne({name: "Perry's by Johnnie Walker Blonde"})            
        }
    },
    {
        name: 'Sofi Tukker',
        type: 'DJ',
        genre: 'Eletronic',
        festival: db.festivals.findOne({name: "Lollapalooza"}),
        schedule: {
            day: new Date("2023-03-25"),
            stage: db.stages.findOne({name: "Adidas"})            
        }
    },
    {
        name: 'Tame Impala',
        type: 'Singer',
        genre: 'Indie',
        festival: db.festivals.findOne({name: "Lollapalooza"}),
        schedule: {
            day: new Date("2023-03-25"),
            stage: db.stages.findOne({name: "Chevrolet"})            
        }
    },
    {
        name: 'Twenty One Pilots',
        type: 'Band',
        genre: 'Rock',
        festival: db.festivals.findOne({name: "Lollapalooza"}),
        schedule: {
            day: new Date("2023-03-25"),
            stage: db.stages.findOne({name: "Budweiser"})            
        }
    },
    {
        name: 'Rosalía',
        type: 'Singer',
        genre: 'Reggaeton',
        festival: db.festivals.findOne({name: "Lollapalooza"}),
        schedule: {
            day: new Date("2023-03-26"),
            stage: db.stages.findOne({name: "Chevrolet"})            
        }
    },
    {
        name: 'Billie Ellish',
        type: 'Singer',
        genre: 'Pop',
        festival: db.festivals.findOne({name: "Lollapalooza"}),
        schedule: {
            day: new Date("2023-03-24"),
            stage: db.stages.findOne({name: "Budweiser"})            
        }
    },
    {
        name: 'Billie Ellish',
        type: 'Singer',
        genre: 'Pop',
        festival: db.festivals.findOne({name: "Lollapalooza"}),
        schedule: {
            day: new Date("2023-03-24"),
            stage: db.stages.findOne({name: "Budweiser"})            
        }
    },
    {
        name: 'Xamã',
        type: 'Singer',
        genre: 'Rap',
        festival: db.festivals.findOne({name: "Rock in Rio"}),
        schedule: {
            day: new Date("2022-09-03"),
            stage: db.stages.findOne({name: "Palco Sunset"})            
        }
    },
    {
        name: 'Gilberto Gil',
        type: 'Singer',
        genre: 'MPB',
        festival: db.festivals.findOne({name: "Rock in Rio"}),
        schedule: {
            day: new Date("2022-09-04"),
            stage: db.stages.findOne({name: "Palco Sunset"})            
        }
    },
    {
        name: 'Luísa Sonza',
        type: 'Singer',
        genre: 'Pop',
        festival: db.festivals.findOne({name: "Rock in Rio"}),
        schedule: {
            day: new Date("2022-09-04"),
            stage: db.stages.findOne({name: "Palco Sunset"})            
        }
    },
    {
        name: 'Emicida',
        type: 'Singer',
        genre: 'Rap',
        festival: db.festivals.findOne({name: "Rock in Rio"}),
        schedule: {
            day: new Date("2022-09-04"),
            stage: db.stages.findOne({name: "Palco Sunset"})            
        }
    },
    {
        name: 'Justin Bieber',
        type: 'Singer',
        genre: 'Pop',
        festival: db.festivals.findOne({name: "Rock in Rio"}),
        schedule: {
            day: new Date("2022-09-04"),
            stage: db.stages.findOne({name: "Palco Mundo"})            
        }
    },
    {
        name: 'Green Day',
        type: 'Band',
        genre: 'Rock',
        festival: db.festivals.findOne({name: "Rock in Rio"}),
        schedule: {
            day: new Date("2022-09-09"),
            stage: db.stages.findOne({name: "Palco Mundo"})            
        }
    },
    {
        name: 'Avril Lavigne',
        type: 'Singer',
        genre: 'Rock',
        festival: db.festivals.findOne({name: "Rock in Rio"}),
        schedule: {
            day: new Date("2022-09-09"),
            stage: db.stages.findOne({name: "Palco Sunset"})            
        }
    },
    {
        name: 'Coldplay',
        type: 'Band',
        genre: 'Pop',
        festival: db.festivals.findOne({name: "Rock in Rio"}),
        schedule: {
            day: new Date("2022-09-10"),
            stage: db.stages.findOne({name: "Palco Mundo"})            
        }
    },
    {
        name: 'Dua Lipa',
        type: 'Singer',
        genre: 'Pop',
        festival: db.festivals.findOne({name: "Rock in Rio"}),
        schedule: {
            day: new Date("2022-09-11"),
            stage: db.stages.findOne({name: "Palco Mundo"})            
        }
    },
    {
        name: 'Arctic Monkeys',
        type: 'Band',
        genre: 'Rock',
        festival: db.festivals.findOne({name: "Primavera Sound"}),
        schedule: {
            day: new Date("2022-11-05"),
            stage: db.stages.findOne({name: "Palco Beck's"})            
        }
    },
    {
        name: 'Arctic Monkeys',
        type: 'Band',
        genre: 'Rock',
        festival: db.festivals.findOne({name: "Primavera Sound"}),
        schedule: {
            day: new Date("2022-11-05"),
            stage: db.stages.findOne({name: "Palco Beck's"})            
        }
    },
    {
        name: 'Bjork',
        type: 'Singer',
        genre: 'Indie',
        festival: db.festivals.findOne({name: "Primavera Sound"}),
        schedule: {
            day: new Date("2022-11-05"),
            stage: db.stages.findOne({name: "Palco Primavera"})            
        }
    },
    {
        name: 'Beach House',
        type: 'Band',
        genre: 'Indie',
        festival: db.festivals.findOne({name: "Primavera Sound"}),
        schedule: {
            day: new Date("2022-11-05"),
            stage: db.stages.findOne({name: "Palco Primavera"})            
        }
    },
    {
        name: 'Charli XCX',
        type: 'Singer',
        genre: 'Pop',
        festival: db.festivals.findOne({name: "Primavera Sound"}),
        schedule: {
            day: new Date("2022-11-06"),
            stage: db.stages.findOne({name: "Palco Beck's"})            
        }
    },
    {
        name: 'Travis Scott',
        type: 'Singer',
        genre: 'Hip-hop',
        festival: db.festivals.findOne({name: "Primavera Sound"}),
        schedule: {
            day: new Date("2022-11-06"),
            stage: db.stages.findOne({name: "Palco Beck's"})            
        }
    },
    {
        name: 'Phoebe Bridgers',
        type: 'Singer',
        genre: 'Indie',
        festival: db.festivals.findOne({name: "Primavera Sound"}),
        schedule: {
            day: new Date("2022-11-06"),
            stage: db.stages.findOne({name: "Palco Primavera"})            
        }
    },
    {
        name: 'Phoebe Bridgers',
        type: 'Singer',
        genre: 'Indie',
        festival: db.festivals.findOne({name: "Primavera Sound"}),
        schedule: {
            day: new Date("2022-11-06"),
            stage: db.stages.findOne({name: "Palco Primavera"})            
        }
    },
    {
        name: 'Bad Bunny',
        type: 'Singer',
        genre: 'Reggaeton',
        festival: db.festivals.findOne({name: "Coachella"}),
        schedule: {
            day: new Date("2023-04-14"),
            stage: db.stages.findOne({name: "Main stage"})            
        }
    },
    {
        name: 'Gorillaz',
        type: 'Band',
        genre: 'Indie',
        festival: db.festivals.findOne({name: "Coachella"}),
        schedule: {
            day: new Date("2023-04-21"),
            stage: db.stages.findOne({name: "Main stage"})            
        }
    },
    {
        name: 'Blackpink',
        type: 'Band',
        genre: 'Kpop',
        festival: db.festivals.findOne({name: "Coachella"}),
        schedule: {
            day: new Date("2023-04-15"),
            stage: db.stages.findOne({name: "Main stage"})            
        }
    },
    {
        name: 'Remi Wolf',
        type: 'Singer',
        genre: 'Pop',
        festival: db.festivals.findOne({name: "Coachella"}),
        schedule: {
            day: new Date("2023-04-22"),
            stage: db.stages.findOne({name: "Main stage"})            
        }
    },
    {
        name: 'Frank Ocean',
        type: 'Singer',
        genre: 'Soul',
        festival: db.festivals.findOne({name: "Coachella"}),
        schedule: {
            day: new Date("2023-04-16"),
            stage: db.stages.findOne({name: "Main stage"})            
        }
    },
    {
        name: 'Kali Uchis',
        type: 'Singer',
        genre: 'R&B',
        festival: db.festivals.findOne({name: "Coachella"}),
        schedule: {
            day: new Date("2023-04-23"),
            stage: db.stages.findOne({name: "Main stage"})            
        }
    },
]);