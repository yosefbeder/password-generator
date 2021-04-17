import React from 'react';
export default React.createContext({
  length: 0,
  changeLength: () => {},
  configs: {},
  toggleConfig: name => {},
});
