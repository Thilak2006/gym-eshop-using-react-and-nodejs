const CartPage = ({ cart, onRemoveFromCart, onBuyNow }) => {
  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  return (
    <div className="p-6 min-h-screen bg-slate-600">
      <h1 className="text-3xl font-bold mb-4 text-white">Your Cart</h1>
      {cart.length === 0 ? (
        <p className="text-white">Your cart is empty.</p>
      ) : (
        <div className="space-y-4">
          {cart.map(item => (
            <div key={item.id} className="flex items-center justify-between bg-white bg-opacity-20 p-4 rounded shadow">
              <div className="flex items-center space-x-4">
                <img src={item.image} alt={item.name} className="h-16 w-16 object-cover" />
                <div>
                  <h2 className="font-semibold text-white">{item.name}</h2>
                  <p className="text-white">Qty: {item.quantity}</p>
                  <p className="text-white">${(item.price * item.quantity).toFixed(2)}</p>
                </div>
              </div>
              <button
                className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded"
                onClick={() => onRemoveFromCart(item.id)}
              >
                Remove
              </button>
            </div>
          ))}
          <div className="text-right font-bold text-xl mt-4 text-white">
            Total: ${total.toFixed(2)}
          </div>
          <div className="flex justify-end mt-4">
            <button
              className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded font-bold disabled:opacity-50"
              onClick={onBuyNow}
              disabled={cart.length === 0}
            >
              Buy Now
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CartPage; 