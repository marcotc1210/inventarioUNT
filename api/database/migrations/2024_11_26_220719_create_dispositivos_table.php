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

            $table->foreignId('tipoId')->constrained('tipos')->onDelete('cascade');
            $table->string('ubicacion');
            // $table->string('habilitado'); varia con el tiempo
            $table->string('color');
            $table->string('marca');
            $table->string('modelo');
            $table->string('serie');

            $table->string('dimensionLargo');
            $table->string('dimensionAlto');
            $table->string('dimensionProfundidad');

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
