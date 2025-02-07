import React, { useState, useEffect } from "react";
import millify from "millify";
import { Link } from "react-router-dom";
import { useGetCryptosQuery } from "../services/CryptoApi";
import { Card, Col, Row } from "antd";
const Cryptocurrencies = ({ simplified }) => {
  const count = simplified ? 10 : 100;
  console.log(count)
  const { data: CryptoList, isFetching,refetch } = useGetCryptosQuery(count);
  console.log(CryptoList)
  const [cryptos, getCryptos] = useState([]);
  const [SearchTerm, setSearchTerm] = useState(" ");

  useEffect(() => {
    const filteredData = CryptoList?.data?.coins.filter((coin) =>
      coin.name.toLowerCase().includes(SearchTerm.toLowerCase())
    );
    getCryptos(filteredData || []); // Handle cases where filteredData might be undefined
  }, [CryptoList, SearchTerm]);
  if (isFetching) return "...Loading";

  return (
    <>
      {!simplified && (
        <div className="search-crypto">
          <input
            placeholder="SearchCryptoCurrency"
            onChange={(e) => {
              setSearchTerm(e.target.value);
            }}
          />
        </div>
      )}
      <Row gutter={[35, 35]} className="crypto-card-container">
        {cryptos?.map((currency) => (
          <Col xs={24} sm={12} lg={6} className="crypto-card" key={currency.id}>
            <Link to={`/crypto/${currency.id}`}>
              <Card
                title={`${currency.rank}.${currency.name}`}
                extra={<img className="crypto-image" src={currency.iconUrl} />}
                hoverable
              >
                <p>Price: {millify(currency.price)}</p>
                <p>Market Cap: {millify(currency.marketCap)}</p>
                <p>Daily Changes: {millify(currency.change)}%</p>
              </Card>
            </Link>
          </Col>
        ))}
      </Row>
    </>
  );
};

export default Cryptocurrencies;
