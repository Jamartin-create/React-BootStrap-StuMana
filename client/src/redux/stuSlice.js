import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {
  delStuByID,
  getStuList,
  saveStuList,
  updateStuByID,
} from "../api/student";

export const getStuListAsync = createAsyncThunk(
  "stu/getStuList",
  async (_, trunkApi) => {
    const res = await getStuList();
    console.log(res);
    trunkApi.dispatch(initialState(res));
  }
);

export const delStuAsync = createAsyncThunk(
  "stu/delStu",
  async (payload, trunkApi) => {
    await delStuByID(payload);
    trunkApi.dispatch(deleteState(payload));
  }
);

export const addStuAsync = createAsyncThunk(
  "stu/addStu",
  async (payload, trunkApi) => {
    const res = await saveStuList(payload);
    console.log(res);
    payload.id = res.id;
    trunkApi.dispatch(addState(payload));
  }
);

export const updateStuAsync = createAsyncThunk(
  "stu/updateStu",
  async (payload, trunkApi) => {
    await updateStuByID(payload, payload.id);
    trunkApi.dispatch(updateState(payload));
  }
);

export const stuSlice = createSlice({
  name: "stu",
  initialState: {
    list: [],
  },
  reducers: {
    initialState: (state, { payload }) => {
      state.list = payload;
    },
    deleteState: ({ list }, { payload }) => {
      for (let i = 0; i < list.length; i++) {
        if (list[i].id === ~~payload) {
          list.splice(i, 1);
        }
      }
    },
    addState: ({ list }, { payload }) => {
      list.push(payload);
    },
    updateState: ({ list }, { payload }) => {
      for (let i = 0; i < list.length; i++) {
        if (list[i].id === ~~payload.id) {
          list[i] = payload;
        }
      }
    },
  },
});

const { initialState, deleteState, addState, updateState } = stuSlice.actions;

export default stuSlice.reducer;
