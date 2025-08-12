const ProductCard = ({ product, onAddToCart }) => (
    <div className="bg-white bg-opacity-20 shadow-md p-4 flex flex-col items-center rounded">
      <img src={product.image} alt={product.name} className="h-48 w-48 object-cover mb-2 rounded-full" />
      <h3 className="font-semibold text-lg mb-1">{product.name}</h3>
      <p className=" mb-2">${product.price.toFixed(2)}</p>
      {onAddToCart && (
        <button
          className="bg-yellow-400 hover:bg-yellow-500 text-white font-bold py-1 px-4 rounded"
          onClick={() => onAddToCart(product)}
        >
          Add to Cart
        </button>
      )}
    </div>
);

export default ProductCard; 