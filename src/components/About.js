import React, { useEffect, useState } from "react";
import jsPDF from "jspdf";
import "jspdf-autotable";
import PdfGenerator from "./usePdf";
const About = () => {
  const [datas, setData] = useState([]);
  const fetchdata = async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/todos");
    const json = await res.json();
    console.log(json);
    setData(json);
  };
  useEffect(() => {
    fetchdata();
  }, []);
  const headers = [["TITLE", "USERID", "ID"]]
  const dynamicKeys = ["title", "userId", "id"];
  const data = datas?.map((elt) => dynamicKeys.map((key) => elt[key]));
  return (
    <div>
      <h1>About</h1>
      <p>This is Ahosidk</p>
      <PdfGenerator title={"REport"} headers={headers} data={data}/>
    </div>
  );
};

export default About;
