db.voos.findOne(
  { $and:
    [
      { "empresa.nome": { $in: ["DELTA AIRLINES", "AMERICAN AIRLINES"] } },
      { "aeroportoDestino.sigla": "SBGR" }, { "aeroportoOrigem.sigla": "KJFK" },
    ],
  },
  { vooId: 1, _id: 0 },
);