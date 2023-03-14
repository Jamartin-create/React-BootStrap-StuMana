import { createSlice } from "@reduxjs/toolkit";

export const todolistSlice = createSlice({
  //切片命名空间
  name: "todolist",
  //初始仓库数据
  initialState: {
    list: [
      { content: "学习 React", status: false },
      { content: "复习 Vue", status: false },
      { content: "玩游戏", status: false },
      { content: "听歌", status: false },
    ],
  },
  //reducers
  reducers: {
    /**
     *
     * @param {*} state 上一次的仓库状态
     * @param {*} param1 传递过来的数据
     */
    add: (state, { payload }) => {
      //允许直接修改state
      //immer.js
      state.list.push({
        content: payload,
        status: false,
      });
    },
    del: (state, { payload }) => {
      state.list.splice(payload, 1);
    },
    change: (state, { payload }) => {
      state.list[payload].status = !state.list[payload].status;
    },
  },
});

console.log(todolistSlice);
export const { del, add, change } = todolistSlice.actions;

export default todolistSlice.reducer;
