// test.js
import React from 'react';

const products = [
  {
    brand: '브랜드A',
    desc: '편안하고 착용감이 좋은 신발',
    price: '35,000원',
  },
  {
    brand: '브랜드A',
    desc: '밝고 컬러가 매력적인 신발',
    price: '25,000원',
  },
  {
    brand: '브랜드B',
    desc: '편안하고 착용감이 좋은 신발',
    price: '35,000원',
  },
  {
    brand: '브랜드B',
    desc: '밝고 컬러가 매력적인 신발',
    price: '35,000원',
  },
  {
    brand: '브랜드C',
    desc: '편안하고 착용감이 좋은 신발',
    price: '35,000원',
  },
  {
    brand: '브랜드C',
    desc: '밝고 컬러가 매력적인 신발',
    price: '35,000원',
  },
];

function Test() {
  return (
    <div className="p-4 bg-white min-h-screen">
      {/* 상단 헤더 */}
      <header className="flex justify-between items-center mb-6 border-b pb-4">
        <h1 className="text-2xl font-bold">신발 상품 목록</h1>
        <button className="text-2xl">🛒</button>
      </header>

      <p className="mb-4 text-gray-600">현재 6개의 상품이 있습니다.</p>

      {/* 상품 목록 */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {products.map((item, index) => (
          <div key={index} className="border rounded-xl shadow-sm p-3 bg-white flex flex-col">
            {/* 이미지 영역 */}
            <div className="h-40 bg-gray-200 rounded mb-3 flex items-center justify-center text-gray-500 text-sm">
              이미지 없음
            </div>

            {/* 상품 정보 */}
            <div className="mb-2">
              <h2 className="text-lg font-semibold">{item.brand}</h2>
              <p className="text-sm text-gray-600">{item.desc}</p>
            </div>

            <div className="mt-auto">
              <p className="text-base font-bold mb-2">{item.price}</p>
              <button className="px-3 py-1 bg-black text-white text-sm rounded">담기</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Test;
