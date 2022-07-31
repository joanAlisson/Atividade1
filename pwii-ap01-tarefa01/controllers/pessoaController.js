const db = require('../config/db.config');
const Pessoa = db.pessoa;


exports.pessoasList = async(req, res) => {
  try {
    const pessoa = await Pessoa.findAll();
    res.json({ pessoa: pessoa });
  } catch(err) {
    res.send({ message: err.message });
  }
};

exports.pessoasRead = async(req, res) => {
  try {
    const pessoa = await Pessoa.findOne({
      where: {
        id: req.params.id
      }
    });
    res.json({ pessoa: pessoa });
  } catch(err) {
    res.send({ message: err.message });
  }
};


exports.pessoasCreate = async(req, res) => {
  try {
    const pessoa = await Pessoa.create(req.body);
    res.status(201).json({ pessoa: pessoa });
  } catch(err) {
    res.send({ message: err.message });
  }
};

exports.pessoasUpdate = async(req, res) => {
  try {
    const pessoa = await Pessoa.update(req.body, {
      where: {
        id: req.params.id
      }
    });
    res.status(204).send();
  } catch(err) {
    res.send({ message: err.message });
  }
};

exports.pessoasDelete = async(req, res) => {
  try {
    const pessoa = await Pessoa.destroy({
      where: {
          id: req.params.id
      }
    });
    res.status(204).send();
  } catch(err) {
    res.send({ message: err.message });
  }
};

