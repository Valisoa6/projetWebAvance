<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ProductController;
use App\Models\Product;

Route::get('/products', function () {
    return Product::all(); // Il renverra JSON automatiquement
});

Route::get('/products', [ProductController::class, 'index']);
