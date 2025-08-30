import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { removeFromCart, increaseQuantity, decreaseQuantity } from '../redux/cartSlice';

const ShoppingCart = () => {
  const dispatch = useDispatch();
  const { items, totalQuantity, totalAmount } = useSelector(state => state.cart);

  const handleIncrease = (id) => {
    dispatch(increaseQuantity(id));
  };

  const handleDecrease = (id) => {
    dispatch(decreaseQuantity(id));
  };

  const handleDelete = (id) => {
    dispatch(removeFromCart(id));
