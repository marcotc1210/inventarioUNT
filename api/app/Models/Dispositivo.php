<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\Tipo;

class Dispositivo extends Model
{
    use HasFactory;

    protected $fillable = [
        'tipoId',
        'estadoId',
        'ubicacion',
        'fecha_ingreso',
        'habilitado',
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
        return $this->belongsTo(Tipo::class, 'tipoId');
    }

    public function estado()
    {
        return $this->belongsTo(Estado::class, 'estadoId');
    }
}
