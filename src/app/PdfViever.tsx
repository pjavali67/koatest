"use client";

import { useState } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import "./AnnotationLayer.css"; // ✅ this brings annotation styling
// Optional: also add TextLayer if needed
// import "react-pdf/dist/Page/TextLayer.css";

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

const PdfViewer = () => {
  const [numPages, setNumPages] = useState<number | null>(null);
  const [pageNumber, setPageNumber] = useState(1);

  const onDocumentLoadSuccess = ({ numPages }: { numPages: number }) => {
    setNumPages(numPages);
    setPageNumber(1);
  };

  return (
    <div className="flex flex-col items-center gap-4 p-6">
      <h1 className="text-xl font-bold">PDF Viewer with Annotations</h1>

      <div className="border shadow-md">
        <Document
          file="/one.pdf" // ✅ Place your PDF inside the public/ folder
          onLoadSuccess={onDocumentLoadSuccess}
        >
          <Page
            pageNumber={pageNumber}
            renderAnnotationLayer={true} // ✅ Renders the annotation layer
          />
        </Document>
      </div>

      <div className="flex items-center gap-4 mt-2">
        <button
          className="px-3 py-1 bg-gray-200 rounded"
          onClick={() => setPageNumber((p) => Math.max(p - 1, 1))}
          disabled={pageNumber <= 1}
        >
          Prev
        </button>
        <span>
          Page {pageNumber} of {numPages}
        </span>
        <button
          className="px-3 py-1 bg-gray-200 rounded"
          onClick={() => setPageNumber((p) => Math.min(p + 1, numPages || 1))}
          disabled={pageNumber >= (numPages || 1)}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default PdfViewer;
