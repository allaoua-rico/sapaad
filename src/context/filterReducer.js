import moment from "moment";

const reducer = (state, action) => {
  switch (action.type) {
    case "SET_FILTER_DATE": {
      const { start, end } = action.payload;
      return {
        ...state,
        period: {
          start: start || state.period.start,
          end: end || state.period.end,
        },
      };
    }
    default:
      return state;
  }
};

export const initialState = {
  period: {
    start: moment().startOf("day"),
    end: moment().add(1, "day").startOf("day"),
  },
};

export default reducer;

