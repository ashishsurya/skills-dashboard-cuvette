import React, { useContext, useReducer } from 'react';

const initialState = {
  rank: 12890,
  percentile: 37,
  correctAnswers: 7,
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'SET_DATA':
      return { ...state, ...action.payload };

    default:
      return state;
  }
};

const StatsContext = React.createContext(initialState);

const StatsContextProvider = ({ children }) => {
  return (
    <StatsContext.Provider value={useReducer(reducer, initialState)}>
      {children}
    </StatsContext.Provider>
  );
};

export const useStats = () => {
  return useContext(StatsContext);
};

export default StatsContextProvider;
