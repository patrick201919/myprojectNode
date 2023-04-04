import Media from "../models/Media.js";
import { getCurrentDate } from "../utils/dateUtils.js";

const created = async (image, description) => {
  let result = null;
  let error = `${getCurrentDate()} : `;
  try {
    const newMedia = await Media.create({
      image,
      description,
    });

    error = newMedia ? null : error + `Media not find`;

    result = newMedia ? newMedia : null;
  } catch (e) {
    error = error + `${e.message}`;
  }
  console.log(error);
  return { result, error };
};

const updated = async (id, image, description) => {
  try {
    const media = await Media.findByPk(id);
    await media.update({
      image,
      description,
    });
    return media;
  } catch (e) {
    console.log(e.message);
  }
};
const deleted = async (id) => {
  try {
    const media = await Media.findByPk(id);
    await media.destroy();
    return media;
  } catch (e) {
    console.error(e.message);
  }
};
const readById = async (id) => {
  try {
    const media = await Media.findByPk(id);
    return media;
  } catch (e) {
    console.log(e.message);
  }
};

const readAll = async () => {
  try {
    const media = await Media.findAll();
    return media;
  } catch (e) {
    console.log(e.message);
  }
};

export const MediaDAO = {
  created,
  updated,
  deleted,
  readById,
  readAll,
};
