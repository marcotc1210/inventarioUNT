<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

use App\Models\Dispositivo;

class DataController extends Controller
{
    public function getDashboardData()
    {
        // Total de dispositivos
        $totalDevices = Dispositivo::count();

        // Dispositivos inactivos (habilitado = 'inactivo')
        $inactiveDevices = Dispositivo::where('habilitado', '1')->count();

        // Dispositivos en estado regular
        $regularStateDevices = Dispositivo::where('estadoId', '2')->count();

        //Dispositivos por tipo
        $devicesByType = Dispositivo::select('tipoId', \DB::raw('COUNT(*) as count'))
            ->groupBy('tipoId')
            ->pluck('count', 'tipoId');

        // Dispositivos por año de registro
        // $devicesByYear = Dispositivo::selectRaw('YEAR(created_at) as year, COUNT(*) as count')
        //     ->groupBy('year')
        //     ->pluck('count', 'year');

        // Estructura de la respuesta
        $data = [
            'total_devices' => $totalDevices,
            'inactive_devices' => $inactiveDevices,
            'regular_state_devices' => $regularStateDevices,
            'devices_by_type' => $devicesByType,
            // 'devices_by_year' => $devicesByYear,
        ];

        return response()->json($data);
    }
}
