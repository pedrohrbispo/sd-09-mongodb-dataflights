db.voos.find({ "aeroportoDestino.continent": { $nin: ["EUROPA", "ÁSIA", "OCEANIA"] } }).count();