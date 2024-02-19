import React, { useState } from "react";

const Section = ({ title, description,isVisible,setIsVisible,setVisible }) => {
  return (
    <div className="border border-black p-2 m-2">
      <h1 className="font-bold text-xl">{title}</h1>
      {isVisible? <button onClick={()=>{setVisible("")}}>Hide</button>:<button onClick={()=>setIsVisible(true)}>Show</button>}
      {isVisible && <p>{description}</p>}
    </div>
  );
};
const ContactUs = () => {
  const [visisible,setVisible] = useState('team')
  return (
    <div>
      <h1>ContactUs</h1>
      <Section
        title={"About"}
        description={
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        }
        isVisible={visisible=== 'about'}
        setIsVisible={()=>setVisible('about')}
        setVisible={setVisible}
      />
       <Section
        title={"Team"}
        description={
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        }
        isVisible={visisible=== 'team'}
        setIsVisible={()=>setVisible('team')}
        setVisible={setVisible}
      />
       <Section
        title={"Careers"}
        description={
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        }
        isVisible={visisible === 'careers'}
        setIsVisible={()=>setVisible('careers')}
        setVisible={setVisible}
      />
    </div>
  );
};

export default ContactUs;
