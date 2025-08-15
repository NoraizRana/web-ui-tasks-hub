import React from "react";

export default function NFTCard({ nft }) {
  return (
    <div className="bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:scale-105 transition-transform duration-300 hover:shadow-xl">
      <img src={nft.image} alt={nft.name} className="w-full h-56 object-cover" />
      <div className="p-4">
        <h2 className="text-xl font-semibold mb-2">{nft.name}</h2>
        <p className="text-sm text-gray-400 mb-1">Artist: {nft.artist}</p>
        <p className="text-lg font-bold">${nft.price}</p>
      </div>
    </div>
  );
}
