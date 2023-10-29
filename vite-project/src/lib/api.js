import axios from "axios";

export const instance = axios.create();

const adminProgramGet = ({ id }) => {
  return post(`/admin/program/${id}`);
};

const adminProgramList = () => {
  return get(`/admin/program/list`);
};

const adminProgramCreate = ({ name, description }) => {
  return post(`/admin/program/create`, {
    name,
    description,
  });
};

const adminProgramUpdate = ({ id, name, description }) => {
  return post(`/admin/program/update/${id}`, {
    name,
    description,
  });
};

const adminProgramDelete = ({ id }) => {
  return post(`/admin/program/delete/${id}`);
};

const api = {
  admin: {
    program: {
      get: adminProgramGet,
      list: adminProgramList,
      create: adminProgramCreate,
      update: adminProgramUpdate,
      delete: adminProgramDelete,
    },
  },
};

export default api;
