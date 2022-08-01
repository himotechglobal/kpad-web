import React,{useState} from "react";
import { Document, Page } from "react-pdf/dist/esm/entry.webpack";
const PDF1 = () => {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
    setPageNumber(1);
  }

  function changePage(offSet) {
    setPageNumber((prevPageNumber) => prevPageNumber + offSet);
  }

  function changePageBack() {
    changePage(-1);
  }

  function changePageNext() {
    changePage(+1);
  }
  return (
    <>
      <div className="bag-25">
        <Document file="/sample.pdf" onLoadSuccess={onDocumentLoadSuccess}>
          <Page height="600" width="500" pageNumber={pageNumber} externalLinkRel="_blank" />
        </Document>
        {/* <p>
          {" "}
          Page {pageNumber} of {numPages}
        </p> */}
        {/* {pageNumber > 1 && (
          <button onClick={changePageBack}>Previous Page</button>
        )}
        {pageNumber < numPages && (
          <button onClick={changePageNext}>Next Page</button>
        )} */}
        <Document file="/Kpadpitchdeck.pdf" onLoadSuccess={onDocumentLoadSuccess}>
          {Array.from(new Array(numPages), (el, index) => (
            <Page key={`page_${index + 1}`} pageNumber={index + 1} />
          ))}
        </Document>
      </div>
    </>
  );
};

export default PDF1;
