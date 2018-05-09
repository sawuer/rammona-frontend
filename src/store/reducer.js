import initialState from './state.js';

export default (state = initialState, action) => {
  switch (action.type) {

    case 'SIGNUP':
      console.log(this.state);
      return { ...state, user: { ...state.user } }

    // case 'CREATE_MEMBER':
    //   return { ...state, members: [...state.members, action.val] }


    // case 'REMOVE_MEMBER_FROM_TASK':
    //   var tasks = state.tasks, specTask;
    //   state.tasks.forEach((it, idx) => {
    //     if (idx === action.taskIdx) specTask = it;
    //   });
    //   tasks[action.taskIdx] = {
    //     ...specTask,
    //     members: specTask.members.filter(i => i !== action.name)
    //   }
    //   return { ...state, tasks: [...tasks] }


    // case 'ADD_MEMBER_INTO_TASK':
    //   var tasks = state.tasks, specTask;
    //   state.tasks.forEach((it, idx) => {
    //     if (idx === action.taskIdx) specTask = it;
    //   });
    //   tasks[action.taskIdx] = { ...specTask, members: [...specTask.members, action.name] }
    //   return { ...state, tasks: [...tasks] }


    // case 'DELETE_MEMBER':
    //   return { ...state, members: state.members.filter(i => i.name !== action.name) }


    // case 'CREATE_TASK':
    //   return { ...state, tasks: [...state.tasks, action.val] };


    // case 'DONE_TASK':
    //   return {
    //     ...state,
    //     doneTasks: [state.tasks[action.idx], ...state.doneTasks],
    //     tasks: state.tasks.filter((task, idx) => idx !== action.idx)
    //   };


    // case 'RETURN_TASK':
    //   return {
    //     ...state,
    //     tasks: [...state.tasks, state.doneTasks[action.idx]],
    //     doneTasks: state.doneTasks.filter((task, idx) => idx !== action.idx)
    //   };


    // case 'DELETE_TASK':
    //   return { ...state, tasks: state.tasks.filter((task, idx) => idx !== action.idx) }


    // case 'DELETE_DONE_TASK':
    //   return { ...state, doneTasks: state.doneTasks.filter((task, idx) => idx !== action.idx) }
    default:
      
  }

  return state;
}