import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  agentInfo: {

    agentCode: "", 
    name: "",
    gender: "",
    age: "",
    birthdate: "",
    height: "",
    weight: "",
    address: "",
    tobaccoStatus: "",
  }
};

const agentSlice = createSlice({
  name: 'agent',
  initialState,
  reducers: {
    login: (state, action) => {
      console.log(action.payload);
      
      state.agentInfo = {...action.payload}
    },

    logout: (state) => {
      state.agentInfo = initialState.agentInfo;
    },
  },
});

export const { login, logout } = agentSlice.actions;
export default agentSlice.reducer;
