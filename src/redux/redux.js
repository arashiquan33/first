


const  createStore=function(reducer){
      let state;
      let listeners = [];

      function subscribe(listener) {
          listeners.push(listener);
      }

      const dispatch=function(action){
           state=reducer(undefined,action);
           for (let i = 0; i < listeners.length; i++) {
                const listener = listeners[i];
                listener();
          }
      }
      const getState=function(){
          return state;
      }
     

      dispatch({type:'undefained'});

      return {
          dispatch:dispatch,
          getState:getState,
          subscribe:subscribe
      }
}

export default createStore;


