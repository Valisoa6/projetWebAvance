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
                'images' => ['nike1.jpg', 'nike1_alt.jpg'],
                'prix' => 49.99,
                'marque' => 'Nike',
                'description' => 'Chaussures de sport confortables.'
            ],
            [
                'images' => ['adidas1.jpg'],
                'prix' => 59.99,
                'marque' => 'Adidas',
                'description' => 'Chaussures légères pour la course.'
            ],
            [
                'images' => ['puma1.jpg'],
                'prix' => 44.50,
                'marque' => 'Puma',
                'description' => 'Design moderne pour le quotidien.'
            ],
            [
                'images' => ['reebok1.jpg'],
                'prix' => 39.99,
                'marque' => 'Reebok',
                'description' => 'Excellent maintien pour le sport.'
            ],
            [
                'images' => ['converse1.jpg'],
                'prix' => 35.00,
                'marque' => 'Converse',
                'description' => 'Style classique et intemporel.'
            ],
        ];

        foreach ($products as $product) {
            Product::create($product);
        }
    }
}
