<?php

namespace Database\Seeders;

use App\Models\User;
use App\Models\Dispositivo;
use App\Models\Tipo;
use App\Models\Estado;
// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        User::factory(20)->create();

        User::factory()->create([
            'name' => 'Test User',
            'email' => 'test@example.com',
        ]);

        // Llamar a otros seeders
        $this->call([
            EstadoSeeder::class,
            TipoSeeder::class,
        ]);

        Dispositivo::factory(30)->create();
    }
}
