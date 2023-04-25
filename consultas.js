//FIND e PRETTY: retorna todos os festivais no banco de dados de forma elegante
db.festivals.find().pretty();

//FINDONE: retorna um artista que toca Indie
db.artists.findOne({ genre: "Indie" });

//COUNT: retorna a quantidade de festivais que vão ocorrer
db.festivals.count();

//SET e UPDATE: Twenty one pilots trocou o genero mais uma vez...
db.artists.updateOne(
	{ name: "Twenty One Pilots" },
	{ $set: { genre: "Indie Pop" } }
);

//SORT: ordenando os artistas por ordem alfabetica.
db.artists.find().sort({ name: 1 }).pretty();

//RENAMECOLLECTION: mudando o nome da coleção artists para performers
db.artists.renameCollection("performers");

//GROUP, SUM e AGGREGATE: agrupa todos os palcos e calcula a soma de sua capacidade
db.stages.aggregate([
	{
		$group: {
			_id: "$festival",
			total_capacity: {
				$sum: "$capacity",
			},
		},
	},
]);

//GTE: retorna todas os palcos com 100.000 ou mais de capacidade
db.stages.find({ capacity: { $gte: 100000 } }).pretty();

//TEXT e SEARCH: lista todos os artistas que possuem email do google
db.performers.createIndex({ contactInfo: "text" });
db.performers.find({ $text: { $search: '"gmail"' } }).pretty();

//EXISTS: o palco Budweiser nao vai mais ser usado no festival, vamos remove-lo e lista-lo novamente
db.stages.updateOne({ name: "Budweiser" }, { $unset: { festival: null } });
db.stages.find({ festival: { $exists: false } }).pretty();

//SIZE: lista os artistas que se apresentaram em 3 shows
db.performers.find({ festivals: { $size: 3 } }).pretty();

//AVG: retorna a media da capacidade dos palcos
db.stages.aggregate([
	{
		$group: {
			_id: null,
			avg_capacity: { $avg: "$capacity" },
		},
	},
]);

//MAX: retorna o palco com a maior capacidade
db.stages.aggregate([
	{
		$group: {
			_id: null,
			biggest: { $max: "$capacity" },
		},
	},
]);

//MATCH: retorna todos os festivais que sao em São Paulo
db.festivals.aggregate({ $match: { location: "São Paulo" } }).pretty();

//PROJECT e COND: classificando os palcos em grandes (lotação de > 150.000) e medianos (lotação <= 150.000)
db.stages.aggregate([
	{
		$project: {
			_id: 0,
			name: 1,
			capacity: {
				$cond: {
					if: { $gte: ["$capacity", 150000] },
					then: "Big",
					else: "Average",
				},
			},
		},
	},
]);

//ALL: lista os festivais com os seguintes patrocinadores
db.festivals.find({sponsors: {$all: ["Apple", "Coca-Cola"]}}).pretty();

//LOOKUP e LIMIT: lista 1 palco e quais outros palcos tem a mesma capacidade
db.stages.aggregate([
		{
			$lookup: {
				from: "stages",
				localField: "capacity",
				foreignField: "capacity",
				as: "Same capacity stages",
			},
		},
		{ $limit: 1 },
	]).pretty();

//ADDTOSET: Twenty One Pilots agora vai tocar no coachella e no primavera sound
db.performers.updateMany(
	{ name: "Twenty One Pilots" },
	{
		$addToSet: {
			festivals: {
				$each: [
					db.festivals.findOne({ name: "Coachella" })._id,
					db.festivals.findOne({ name: "Primavera Sound" })._id,
				],
			},
		},
	}
);

//WHERE e FUNCTION: lista o festival de nome Coachella
db.festivals.find({
		$where: function () {
			return this.name == "Coachella";
		},
	}).pretty();

//MAPREDUCE: criando duas funções, uma map e uma reduce, para listar os palcos e suas respectivas capacidades
var mapFunction2 = function () {
	emit(this.name, this.capacity);
};
var reduceFunction2 = function (name, capacity) {
	return Array.sum(capacity);
};
db.stages.mapReduce(mapFunction2, reduceFunction2, { out: "mapReduce_ex" });
db.mapReduce_ex.find().sort({ _id: 1 });

//FILTER: lista os ultimos shows agendados para um artista
db.performers.aggregate([
	{
		$project: {
			_id: 0,
			name: 1,
			festivals: {
				$filter: {
					input: "$festivals",
					as: "last_festivals",
					cond: { $gte: ["$$last_festivals.festival_id", 2] },
				},
			},
		},
	},
]);

//INSERTONE: Função save foi depreciada e não funciona mais
db.festivals.insertOne({
	name: "Numanice",
	location: "São Paulo",
	festival_id: 6,
	sponsors: [
		"Anitta",
		"Boninho",
		"Pic-Pay",
		"SA BETesports"
	],
	startDate: new Date("2023-11-12"),
	endDate: new Date("2023-11-15"),
});
