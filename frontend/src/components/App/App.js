import './App.css';
import {useEffect, useMemo, useState} from "react";
import {formatNumber} from "../../utils/general";
import {initWeb3} from "../../utils/web3";

function App() {
  const [cdpData, setCdpData] = useState();

  const web3 = useMemo(() => initWeb3(), [])

  // This will run on 1st load
  useEffect(() => {
    (async () => {

      // Let's fetch CDP data here

      // const data = await getCdpFromContract();
      // setCdpData(data)

    })();
  }, [])

  return (
    <div className="App">
      {!cdpData && <p>No CDP data fetched</p>}
      {cdpData && (
        <div>
          <h1>CDP {cdpData.id}</h1>
          <h2>{cdpData.ilk}</h2>
          <p>Collateral: {formatNumber(cdpData.collateral)} {cdpData.asset}</p>
          <p>Debt: {formatNumber(cdpData.debt)} DAI</p>
        </div>
      )}
    </div>
  );
}

export default App;
