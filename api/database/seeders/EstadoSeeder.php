<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class EstadoSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        // Insertar algunos estados de ejemplo
        DB::table('estados')->insert([
            ['id' => 1, 'descripcion' => 'Bueno'],
            ['id' => 2, 'descripcion' => 'Regular'],
            ['id' => 3, 'descripcion' => 'Malo'],
        ]);
    }
}
