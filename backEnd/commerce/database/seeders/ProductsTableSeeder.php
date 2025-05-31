<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Product;

class ProductsTableSeeder extends Seeder
{
    public function run(): void
    {
        Product::truncate(); // Vide la table avant de remplir

        $products = [
            [
                'images' => ['nike1_alt.png'],
                'prix' => 49.99,
                'marque' => 'Off-White',
                'description' => 'Out of Office "Ooo" sneakers'
            ],
            [
                'images' => ['adidas1.png'],
                'prix' => 59.99,
                'marque' => 'Nike',
                'description' => 'Nike Air Force Premium'
            ],
            [
                'images' => ['puma1.png'],
                'prix' => 44.50,
                'marque' => 'Nike',
                'description' => 'Nike Air Force Premium'
            ],
            [
                'images' => ['reebok1.png'],
                'prix' => 39.99,
                'marque' => 'adidas',
                'description' => 'DAILY 3.0 SHOES'
            ],
        ];

        foreach ($products as $product) {
            Product::create($product);
        }
    }
}
