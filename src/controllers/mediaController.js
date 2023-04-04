import { MediaDAO } from "../daos/mediaDao.js";

const createM = async (req, res) => {
  const { image, description } = req.body;

  const media = await MediaDAO.created(image, description);
  if (!media) {
    return res.status(400).json({ message: `Not successful media` });
  }
  return res.status(201).json({ message: `Successful media`, data: media });
};

const updateM = async (req, res) => {
  const id = parseInt(req.params.id);
  const { image, description } = req.body;
  const media = await MediaDAO.updated(id, image, description);
  if (media) {
    return res
      .status(200)
      .json({ message: `Media ${id} updated`, data: media });
  } else {
    return res.status(404).json({ message: "Error updating media" });
  }
};

const deleteM = async (req, res) => {
  const id = parseInt(req.params.id);
  const media = await MediaDAO.deleted(id);
  if (media) {
    return res
      .status(200)
      .json({ message: `media ${id} deleted`, data: media });
  } else {
    return res.status(404).json({ message: "Error deleting media", data: id });
  }
};

const readOneM = async (req, res) => {
  const id = parseInt(req.params.id);
  const media = await MediaDAO.readById(id);
  if (!media) {
    return res.status(404).json({ message: "Media not found" });
  }
  return res.status(200).json({ data: media });
};

const readAllM = async (req, res) => {
  const media = await MediaDAO.readAll();
  if (!media) {
    return res.status(404).json({ message: "media not found" });
  }
  return res.status(200).json({ data: media });
};

export const MediaController = {
  createM,
  updateM,
  deleteM,
  readOneM,
  readAllM,
};
