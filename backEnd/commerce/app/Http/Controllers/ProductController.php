<?php

namespace App\Http\Controllers;

use App\Models\Product;

/**
 * @OA\Info(
 *     title="API Commerce",
 *     version="1.0.0"
 * )
 */
class ProductController extends Controller
{
    /**
     * @OA\Get(
     *     path="/api/products",
     *     summary="Lister tous les produits",
     *     tags={"Produits"},
     *     @OA\Response(
     *         response=200,
     *         description="Succès"
     *     )
     * )
     */
    public function index()
    {
        return Product::all();
    }
}
