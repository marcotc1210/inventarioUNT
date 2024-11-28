<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use App\Models\Tipo;

class Dispositivo extends Model
{
    protected $fillable = [
        'tipoId',
        // 'estado',
        'ubicacion',
        'fecha_ingreso',
        // 'habilitado',
        // 'usuario',
        'color',
        'marca',
        'modelo',
        'serie',
        'dimensionLargo',
        'dimensionAlto',
        'dimensionProfundidad',
    ];

    public function tipo()
    {
        return $this->belongsTo(Tipo::class);
    }
}
