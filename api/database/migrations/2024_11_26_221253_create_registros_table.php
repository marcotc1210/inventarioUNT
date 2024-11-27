<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('registros', function (Blueprint $table) {
            $table->id();

            $table->foreignId('usuarioId')->constrained('users')->onDelete('cascade');
            $table->foreignId('dispositivoId')->constrained('dispositivos')->onDelete('cascade');
            $table->foreignId('estadoId')->constrained('estados')->onDelete('cascade');
            $table->boolean('habilitado');       

            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('registros');
    }
};
