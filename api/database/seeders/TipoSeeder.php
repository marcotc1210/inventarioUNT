<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class TipoSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run()
    {
        // Insertar algunos tipos de ejemplo con sus ids
        DB::table('tipos')->insert([
            ['id' => 1, 'descripcion' => 'Router'],
            ['id' => 2, 'descripcion' => 'Laptop'],
            ['id' => 3, 'descripcion' => 'Switch'],
            ['id' => 4, 'descripcion' => 'Access Point'],
            ['id' => 5, 'descripcion' => 'Desktop'],
        ]);
    }
}
