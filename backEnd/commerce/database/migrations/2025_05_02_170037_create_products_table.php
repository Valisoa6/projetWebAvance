<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('products', function (Blueprint $table) {
            $table->id();
            $table->json('images')->nullable(); // Pour stocker plusieurs images
            $table->decimal('prix', 10, 2); // 10 chiffres au total, 2 après la virgule
            $table->string('marque');
            $table->text('description')->nullable();
            $table->timestamps(); // Ajoute created_at et updated_at automatiquement
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('products');
    }
};
