//生产 action 对象的函数，一般称之为 actionCreator
import { ADD, CHANGE, DEL } from "./actionType";

export const addListAction = (newItem) => ({
  type: ADD,
  data: newItem,
});

export const delListAction = (id) => ({
  type: DEL,
  data: id,
});

export const changeListAction = (id) => ({
  type: CHANGE,
  data: id,
});
