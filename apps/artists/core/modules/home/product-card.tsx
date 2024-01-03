function ProductCard(): JSX.Element {
  return (
    <div className="card w-80 h-96 bg-base-100 shadow-xl m-auto">
      <figure>
        <img
          alt="Shoes"
          src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">Shoes!</h2>
        <p>If a dog chews shoes whose shoes does he choose?</p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary" type="button">
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
