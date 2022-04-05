import { useState, useEffect } from "react";
import Header from "./components/Header";
import CollectionCard from "./components/CollectionCard";
import PunkList from "./components/PunkList";
import Main from "./components/Main";
import axios from "axios";
import "./App.css";

function App() {
  const [punkListData, setPunkListData] = useState([]);
  const [selectedPunk, setSelectedPunk] = useState(0);

  useEffect(() => {
    const getMyNfts = async () => {
      const openseaData = await axios.get(
        "https://testnets-api.opensea.io/assets?asset_contract_address=0x850522a0Ff5532F557F01F9B23E1E67064c5cD3f&order_direction=asc"
      );
      setPunkListData(openseaData.data.assets);
    };

    return getMyNfts();
  }, []);
  return (
    <div className="app">
      <Header />
      {punkListData.length > 0 && (
        <>
        <Main punkListData={punkListData} selectedPunk={selectedPunk}/>
        <PunkList punkListData={punkListData} setSelectedPunk={setSelectedPunk} />
        </>
      )}

    </div>
  );
}

export default App;
