import { createRoot } from "react-dom/client";

import Header from "./Navbar";
import MainContent from "./Main";


const root = createRoot(document.getElementById("root"));


export default function Page() {
  return (
    <>
      <Header />
      <MainContent />
    </>
  );
}

root.render(<Page />);
