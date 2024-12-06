<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;
use App\Models\Dispositivo;
use App\Models\Tipo;
use App\Models\Estado;
use Faker\Generator as Faker;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Dispositivo>
 */
class DispositivoFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = Dispositivo::class;

    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        
        // Definir una lista de ubicaciones posibles dentro de la universidad
        $ubicaciones = [
            'Aula 101',
            'Aula 102',
            'Biblioteca',
            'Oficina Administrativa',
            'Laboratorio de Computación',
            'Sala de Reuniones',
            'Pasillo Principal',
            'Auditorio',
            'Pasillo de Ciencias',
            'Área de Estudiantes',
        ];

        return [
            'tipoId' => rand(1, 5), // Asignar un valor aleatorio entre 1 y 4
            'estadoId' => rand(1, 3), // Asignar un valor aleatorio entre 1 y 4
            'ubicacion' => $this->faker->randomElement($ubicaciones), // Elegir aleatoriamente una ubicación
            'habilitado' => $this->faker->boolean(),
            'color' => $this->faker->optional()->safeColorName(),
            'marca' => $this->faker->optional()->company(),
            'modelo' => $this->faker->optional()->word(),
            'serie' => $this->faker->unique()->bothify('SERIE-###??'),  // Aquí hemos eliminado el uso de optional()
            'fecha_ingreso' => $this->faker->optional()->date(),
            'dimensionLargo' => $this->faker->optional()->randomFloat(2, 10, 200) . ' cm',
            'dimensionAlto' => $this->faker->optional()->randomFloat(2, 10, 200) . ' cm',
            'dimensionProfundidad' => $this->faker->optional()->randomFloat(2, 10, 200) . ' cm',
        ];
    }
}
