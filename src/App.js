import { useState } from "react";
import DownloadIcon from "@mui/icons-material/Download";
import DownloadingIcon from "@mui/icons-material/Downloading";

import "./App.css";

const BOOKS = [
  { id: "book1", bookName: "Siddhartha" },
  { id: "book2", bookName: "Man's Search for Meaning" },
  { id: "book3", bookName: "Atomic Habits" },
  { id: "book4", bookName: "Harry Potter" },
  { id: "book5", bookName: "The Alchemist" },
];

function App() {
  const [downloading, setDownloading] = useState({
    book1: false,
    book2: false,
    book3: false,
    book4: false,
    book5: false,
  });

  const handleDownload = (id) => {
    setDownloading({ ...downloading, [id]: !downloading[id] });

    setTimeout(() => {
      setDownloading({ ...downloading, [id]: downloading[id] });
    }, [700]);
  };

  return (
    <div className="App">
      <table className="table">
        <div className="header col">
          <tr className="row">
            <td className="header-cell">
              <h4>Book Name</h4>
            </td>
            <td className="header-cell">
              <h4>Download</h4>
            </td>
          </tr>
        </div>
        <div className="content col">
          {BOOKS.map((book) => (
            <tr className="row">
              <td className="content-cell">{book.bookName}</td>
              <td className="content-cell">
                <button onClick={() => handleDownload(book.id)}>
                  {!downloading[book.id] ? (
                    <DownloadIcon />
                  ) : (
                    <DownloadingIcon />
                  )}
                </button>
              </td>
            </tr>
          ))}
        </div>
      </table>
    </div>
  );
}

export default App;
