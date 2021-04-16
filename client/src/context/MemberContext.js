import React, { useState } from "react";
export const MemberContext = React.createContext(null);

export const MemberProvider = ({ children }) => {
  const [memberData, setMemberData] = useState(null);
  return (
    <MemberContext.Provider value={{ memberData, setMemberData }}>
      {children}
    </MemberContext.Provider>
  );
};
