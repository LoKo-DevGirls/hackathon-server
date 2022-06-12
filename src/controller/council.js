import { Council } from '../model/council.js';

export async function getCouncils(req, res) {
  try {
    const councils = await Council.findAll();
    res.status(200).json(councils);
  } catch (error) {
    res.status(500).json(error);
  }
}

export async function createCouncil(req, res) {
  try {
    const { councilName } = req.body;
    const newCouncil = await Council.create({
      councilName,
    });
    res
      .status(201)
      .json({ newCouncil, alert: 'Successfully saved a new council!' });
  } catch (error) {
    res.status(500).json({ error: 'create failed!' });
  }
}

export async function getCouncilbyId(req, res) {
  try {
    const { id } = req.params;
    const council = await Council.findByPk(id);
    res.status(200);
    res.send(council);
    res.end();
  } catch (error) {
    res.status(500);
    res.send(error);
    res.end();
  }
}
