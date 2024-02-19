
import React, { useEffect, useState } from "react";
import jsPDF from "jspdf";
import "jspdf-autotable";

const PdfGenerator = ({ title, headers, data }) => {
  const exportPDF = () => {
    const unit = "pt";
    const size = "A4";
    const orientation = "portrait";

    const marginLeft = 40;
    const doc = new jsPDF(orientation, unit, size);

    doc.setFontSize(15);

    doc.text(title, marginLeft, 40);
    doc.autoTable({ startY: 50, head: headers, body: data });
    doc.save("report.pdf");
  };

  return (
    <button
      className="p-2 m-2 bg-green-500 rounded-md text-white"
      onClick={exportPDF}
    >
      Generate Report
    </button>
  );
};
export default PdfGenerator