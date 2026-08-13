import { useState } from "react";

import "./App.css";

function App() {
  const [cart, setCart] = useState([]);
  const product = [
    { id: 1, name: "Apple", price: 50 },
    { id: 2, name: "Mango", price: 80 },
    { id: 3, name: "Milk", price: 60 },
    { id: 4, name: "Bread", price: 40 },
  ];

  const addInToItem = (item) => {
    const newcart = {
      id: item.id,
      name: item.name,
      price: item.price,
      quantity:1
    };

    setCart((prev) => [...prev, newcart]);
  };

  const clearCartBtn = () => {
    setCart([]);
  };
  const increment = (id) => {
    setCart((prev)=>prev.map((i)=>i.id===id ?{...i,quantity:i.quantity+1}:i))
  }
  const decremnet = (id) => {
    setCart((prev) => prev.map((i) => i.id === id && i.quantity > 1 ? { ...i, quantity : i.quantity-1}:i))
  }
  
  const deleteItem = (id) => {
    // console.log("id",id);
    
    setCart((prev)=>prev.filter((i)=>i.id!==id))
  }
  return (
    <div className="min-h-screen bg-black text-white flex justify-center py-12 px-4">

      <div className="w-full max-w-2xl">

        {/* Heading */}
        <h1 className="text-4xl font-bold text-center mb-10">
          🛒 Shopping Cart
        </h1>

        {/* Products */}
        <div className="bg-zinc-950 border border-zinc-800 rounded-2xl p-6 shadow-2xl">

          <h2 className="text-xl font-semibold mb-5">
            Products
          </h2>

          <ul className="space-y-3">
            {product.map((i) => (
              <li
                key={i.id}
                className="flex items-center justify-between bg-zinc-900 border border-zinc-800 rounded-xl p-4 hover:border-zinc-600 transition"
              >
                <div>
                  <p className="font-medium text-lg">
                    {i.name}
                  </p>

                  <p className="text-zinc-400">
                    ₹{i.price}
                  </p>
                </div>

                <button
                  onClick={() => addInToItem(i)}
                  disabled={cart.some((item) => item.id === i.id)}
                  className="px-4 py-2 rounded-lg bg-white text-black font-medium hover:bg-zinc-200 transition disabled:bg-green-500 disabled:text-white disabled:cursor-not-allowed"
                >
                  {cart.some((item) => item.id === i.id)
                    ? "Added ✓"
                    : "Add"}
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* Cart */}
        <div className="mt-6 bg-zinc-950 border border-zinc-800 rounded-2xl p-6">

          <div className="flex justify-between items-center mb-5">
            <h2 className="text-xl font-semibold">
              Your Cart
            </h2>

            <span className="bg-zinc-800 px-3 py-1 rounded-full text-sm">
              {cart.length} Items
            </span>
          </div>

          {cart.length === 0 ? (
            <p className="text-zinc-500 text-center py-6">
              Your cart is empty 🛒
            </p>
          ) : (
            <ul className="space-y-2">
              {cart.map((i) => (
                <li
                  key={i.id}
                  className="flex justify-between bg-zinc-900 p-3 rounded-lg"
                >
                  <span>{i.name}</span>

                  <span className="text-zinc-300">
                    ₹{i.price}
                  </span>
                 
                  <button
                    className="w-8 h-8 rounded-lg bg-zinc-800 border border-zinc-700 text-white text-lg font-bold hover:bg-zinc-700 active:scale-90 transition"
                    onClick={() => increment(i.id)}
                  >+</button>
                   <span className="w-8 text-center text-white font-semibold">{ i.quantity}</span>
                  <button
                    className="w-8 h-8 rounded-lg bg-zinc-800 border border-zinc-700 text-white text-lg font-bold hover:bg-zinc-700 active:scale-90 transition"
                    onClick={() => decremnet(i.id)}>-</button> 
                  <button
                     onClick={()=>deleteItem(i.id)}
                    className="px-4 py-2 rounded-lg border border-red-500/40 bg-red-500/10 text-red-400 font-medium hover:bg-red-500 hover:text-white transition duration-200"
                  >Delete
                  </button>
                </li>
              ))}
            </ul>
          )}

          {/* Total */}
          <div className="border-t border-zinc-800 mt-5 pt-5 flex justify-between items-center">
            <h3 className="text-lg font-semibold">
              Total
            </h3>

            <h3 className="text-2xl font-bold">
              ₹{cart.reduce(
                (total, item) => total + Number(item.price)* item.quantity,
                0
              )}
            </h3>
          </div>

          {/* Clear Cart */}
          <button
            onClick={clearCartBtn}
            disabled={cart.length === 0}
            className="w-full mt-5 py-3 rounded-lg bg-red-600 hover:bg-red-700 transition font-semibold disabled:bg-zinc-800 disabled:text-zinc-500 disabled:cursor-not-allowed"
          >
            Clear Cart
          </button>

        </div>
      </div>
    </div>
  );
}

export default App;