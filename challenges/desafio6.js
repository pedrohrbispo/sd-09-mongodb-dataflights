db.voos.find({ vooId: 756807 },
  {
    _id: 0,
    "empresa.sigla": true,
    "empresa.nome": 1,
    passageiros: 1,
  });
