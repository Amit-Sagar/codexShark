import React, { useEffect, useState } from "react";
import { CoinList } from "../../configure/Api";
import { CryptoState } from "../../Context";
import axios from "axios";
import { numberWithCommas } from "../banner/Curousel";
import { useNavigate } from "react-router-dom";

const CoinTable = () => {
  const [coins, setCoins] = useState([]);
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState("");
  const { currency, symbol } = CryptoState();
  const navigate = useNavigate();

  const fetchCoins = async () => {
    setLoading(true);
    const { data } = await axios.get(CoinList(currency));
    setCoins(data);
    setLoading(false);
  };

  useEffect(() => {
    fetchCoins();
  }, [currency]);

  const handleSearch = () => {
    return coins.filter(
      (coin) =>
        coin.name.toLowerCase().includes(search) ||
        coin.symbol.toLowerCase().includes(search)
    );
  };

  return (
    <div className="home">
      <div className="mt-10 w-11/12 mx-auto">
        <div className="flex flex-col">
          <h1 className="text-4xl font-bold">Cryptocurrencies</h1>
          <div className="w-full mt-2">
            <input
              type="search"
              className="pl-2 border w-full py-2 mt-3 bg-black"
              placeholder="search your favourite crypto"
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
        </div>
        {loading ? (
          <h1>Loading...</h1>
        ) : (
          <table className="w-full mx-auto mt-3">
            <thead className="bg-[#EEBC1D] h-[60px]">
              <tr>
                {["Coin", "Price", "24h Change", "Market Cap"].map((head) => (
                  <td
                    key={head}
                    className={`text-black font-bold ${
                      head === "Coin" ? "ml-10" : ""
                    }`}
                  >
                    {head}
                  </td>
                ))}
              </tr>
            </thead>
            <tbody>
              {handleSearch().map((item) => {
                const profit = item.price_change_percentage_24h > 0;
                return (
                  <tr
                    className="bg-[#16171a] text-sm md:text-base cursor-pointer hover:bg-[#131111]"
                    key={item.name}
                    onClick={() => navigate(`/coins/${item.id}`)}
                  >
                    <td className="flex gap-4">
                      <img
                        src={item?.image}
                        alt={item.name}
                        className="h-[50px] md:m-3 my-3"
                      />
                      <div className="flex flex-col justify-center">
                        <span className="uppercase text-xl">{item.symbol}</span>
                        <span className="text-slate-600">{item.name}</span>
                      </div>
                    </td>
                    <td className="text-sm">
                      {symbol} {numberWithCommas(item.current_price.toFixed(2))}
                    </td>
                    <td
                      style={{
                        color: profit > 0 ? "rgb(14, 203, 129)" : "red",
                        fontWeight: 500,
                      }}
                    >
                      {profit && "+"}
                      {item.price_change_percentage_24h.toFixed(2)}%
                    </td>
                    <td>
                      {symbol}{" "}
                      {numberWithCommas(
                        item.market_cap.toString().slice(0, -6)
                      )}
                      M
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
};

export default CoinTable;
