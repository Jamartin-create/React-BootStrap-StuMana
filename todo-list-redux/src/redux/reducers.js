//用于计算最新状态
//引入 Action Type
import { ADD, CHANGE, DEL } from "./actionType";

//state 的默认值（仓库默认数据）
let defaultState = {
  list: [
    { content: "学习 React", status: false },
    { content: "复习 Vue", status: false },
    { content: "玩游戏", status: false },
    { content: "听歌", status: false },
  ],
};

/**
 * 通过纯函数计算出最新的状态，描述了我要做什么以及带来的额外数据
 * @param {*} state 仓库数据
 * @param {*} action 描述对象{type: ADD, data: "学习Redux"}
 */
export function todoReducer(state = defaultState, action) {
  //有了描述对象后，就可以根据旧的状态计算出新的状态，并返回
  switch (action.type) {
    case ADD: {
      //新增操作
      const arr = [...state.list];
      arr.push({
        content: action.data,
        status: false,
      });
      return { list: arr };
    }
    case DEL: {
      const arr = [...state.list];
      arr.splice(action.data, 1);
      return { list: arr };
    }
    case CHANGE: {
      const arr = [...state.list];
      const oldV = arr[action.data]["status"];
      arr[action.data]["status"] = !oldV;
      return { list: arr };
    }
    //第一次引入todoReducer就会触发该函数，此时参数无法进入前面几个入口，到默认入口
    default:
      return state;
  }
}
