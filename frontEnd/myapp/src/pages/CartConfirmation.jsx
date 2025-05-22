import React, { useEffect, useState } from 'react';

const CartConfirmation = () => {
  const [cart, setCart] = useState([]);
  const [subtotal, setSubtotal] = useState(0);

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem('cart')) || [];
    setCart(storedCart);

    const calculatedSubtotal = storedCart.reduce(
      (acc, item) => acc + item.prix * item.quantity,
      0
    );
    setSubtotal(calculatedSubtotal);
  }, []);

  const removeItem = (id) => {
    const updatedCart = cart.filter((item) => item.id !== id);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
    setCart(updatedCart);
    const newSubtotal = updatedCart.reduce(
      (acc, item) => acc + item.prix * item.quantity,
      0
    );
    setSubtotal(newSubtotal);
  };

  const shipping = 20;
  const tax = 6;
  const discount = 6;
  const total = subtotal + shipping + tax - discount;

  return (
    <div className="container-xl py-5">
      <div className="row justify-content-center">
        {/* Cart Items */}
        <div className="col-lg-8 mb-5">
          <h1 className="mb-4 fw-bold">Your Bag</h1>
          {cart.length === 0 ? (
            <p className="fs-5">Your cart is empty.</p>
          ) : (
            cart.map((item) => (
              <div key={item.id} className="d-flex align-items-center mb-4 p-4 rounded shadow-sm bg-white">
                <img src={item.image} alt={item.description} width="120" className="me-4 rounded"/>
                <div className="flex-grow-1">
                  <h4 className="mb-1">{item.marque}</h4>
                  <h4 className="mb-5">{item.description}</h4>
                  <div className="d-flex align-items-center">
                    <button className="btn btn-outline-secondary btn-sm me-2" disabled>-</button>
                    <span className="fs-5">{item.quantity}</span>
                    <button className="btn btn-outline-secondary btn-sm mx-2" disabled>+</button>
                    <button className="btn btn-link text-black ms-3" onClick={() => removeItem(item.id)}>
                      Remove
                    </button>
                  </div>
                </div>
                <h5 className="text-end mb-5">${(item.prix * item.quantity).toFixed(2)}</h5>
              </div>
            ))
          )}
        </div>
        {/* Summary */}
        <div className="col-lg-4">
          <div className="bg-light p-5 rounded shadow-lg sticky-top" style={{ top: '190px' }}>
            <h3 className="fw-bold">Summary</h3>
            <div className="d-flex justify-content-between mt-3">
              <span className="fs-6">Subtotal</span>
              <span className="fs-6">${subtotal.toFixed(2)}</span>
            </div>
            <div className="d-flex justify-content-between">
              <span className="fs-6">Shipping and delivery</span>
              <span className="fs-6">${shipping.toFixed(2)}</span>
            </div>
            <div className="d-flex justify-content-between">
              <span className="fs-6">Tax</span>
              <span className="fs-6">${tax.toFixed(2)}</span>
            </div>
            <div className="d-flex justify-content-between text-danger">
              <span className="fs-6">Discount</span>
              <span className="fs-6">-${discount.toFixed(2)}</span>
            </div>
            <hr />
            <div className="d-flex justify-content-between fw-bold fs-5">
              <span>Total</span>
              <span>${total.toFixed(2)}</span>
            </div>
            <button className="btn btn-dark w-100 mt-4 py-2 fs-5">Checkout →</button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default CartConfirmation;
