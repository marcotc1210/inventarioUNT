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
        Schema::create('dispositivos', function (Blueprint $table) {
            $table->id();

            $table->foreignId('tipoId')->nullable()->constrained('tipos')->nullOnDelete();
            $table->foreignId('estadoId')->nullable()->constrained('estados')->nullOnDelete();
            $table->string('ubicacion');
            $table->boolean('habilitado'); //varia con el tiempo
            $table->string('color')->nullable();
            $table->string('marca')->nullable();
            $table->string('modelo')->nullable();
            $table->string('serie')->nullable();
            $table->date('fecha_ingreso')->nullable();

            $table->string('dimensionLargo')->nullable();
            $table->string('dimensionAlto')->nullable();
            $table->string('dimensionProfundidad')->nullable();

            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('dispositivos');
    }
};
