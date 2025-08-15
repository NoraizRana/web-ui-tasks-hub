import React, { useState } from "react";
import NFTCard from "./components/NFTCard";
import nftData from "./data/nftData";

export default function App() {
  const [filter, setFilter] = useState("");
  const [sort, setSort] = useState("");

  const filteredNFTs = nftData
    .filter((nft) => nft.name.toLowerCase().includes(filter.toLowerCase()))
    .sort((a, b) => {
      if (sort === "price-asc") return a.price - b.price;
      if (sort === "price-desc") return b.price - a.price;
      return 0;
    });

  return (
    <div className="p-6">
      <h1 className="text-4xl font-bold mb-6 text-center">NFT Gallery</h1>
      <div className="flex justify-center gap-4 mb-8">
        <input
          type="text"
          placeholder="Search NFTs..."
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          className="px-4 py-2 rounded bg-gray-800 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
        />
        <select
          value={sort}
          onChange={(e) => setSort(e.target.value)}
          className="px-4 py-2 rounded bg-gray-800 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
        >
          <option value="">Sort By</option>
          <option value="price-asc">Price: Low to High</option>
          <option value="price-desc">Price: High to Low</option>
        </select>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filteredNFTs.map((nft) => (
          <NFTCard key={nft.id} nft={nft} />
        ))}
      </div>
    </div>
  );
}
