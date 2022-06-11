import { Council } from '../model/council.js';

export function getCouncils(councilName) {
  
}

export async function createCouncil(req, res) {
  try {
    const { councilName } = req.body;
    const newCouncil = await Council.create({
      councilName,
    });
    res
      .status(200)
      .json({ newCouncil, alert: 'Successfully saved a new council!' });
  } catch (error) {
    res.status(401).json({ error: 'create failed!' });
  }
}
