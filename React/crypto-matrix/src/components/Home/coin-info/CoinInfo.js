import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { CryptoState } from "../../Context";
// import ReactHtmlParser from "react-html-parser";
import { SingleCoin } from "../../configure/Api";
import { numberWithCommas } from "../banner/Curousel";

const CoinInfo = () => {
  const { id } = useParams();
  const [coin, setCoin] = useState();
  const { currency, symbol } = CryptoState();

  const ftchCoinData = async () => {
    const { data } = await axios.get(SingleCoin(id));
    console.log(data);
    setCoin(data);
  };

  useEffect(() => {
    ftchCoinData();
  }, []);
  return (
    <div className="w-[95%] mx-auto mt-6">
      <div>
        <img
          src={coin?.image.large}
          alt={coin?.name}
          height="200"
          style={{ marginBottom: 20 }}
        />
        <h1>{coin?.name}</h1>
        <p>{coin?.description.en.split(". ")[0]}.</p>
        <div>
          <span>
            Rank: <span> {coin?.market_cap_rank}</span>
          </span>
        </div>
        <div>
          <span>
            Current Price:{" "}
            <span>
              {symbol}{" "}
              {numberWithCommas(
                coin?.market_data.current_price[currency.toLowerCase()]
              )}
            </span>
          </span>
        </div>
        <div>
          <span>
            Market Cap:{" "}
            <span>
              {symbol}{" "}
              {numberWithCommas(
                coin?.market_data.market_cap[currency.toLowerCase()]
                  .toString()
                  .slice(0, -6)
              )}
              M
            </span>
          </span>
        </div>
      </div>
    </div>
  );
};

export default CoinInfo;
