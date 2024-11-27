<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class DeviceController extends Controller
{

    public function index()
    {
        $dispositivos = Device::all();
        return $dispositivos;
    }

    public function store(Request $request)
    {
        $dispositivo = new Device();

        $dispositivo->tipoId = $request->tipo;
        $dispositivo->estado = $request->estado;
        $dispositivo->ubicacion = $request->ubicacion;
        $dispositivo->habilitado = $request->habilitado;
        $dispositivo->usuario = $request->usuario;
        $dispositivo->fecha = $request->fecha;

        $dispositivo->save();
        return $dispositivo;
    }

    public function show(string $id)
    {
        $dispositivo = Device::find($id);
        return $dispositivo;
    }

    public function update(Request $request, string $id)
    {
        $dispositivo = Device::findOrFail($request->id);
        
        $dispositivo->tipoId = $request->tipo;
        $dispositivo->estado = $request->estado;
        $dispositivo->ubicacion = $request->ubicacion;
        $dispositivo->habilitado = $request->habilitado;
        $dispositivo->usuario = $request->usuario;
        $dispositivo->fecha = $request->fecha;

        $dispositivo->save();
        return $dispositivo;
    }

    public function destroy(string $id)
    {
        $dispositivo = Device::destroy($id);
        return $dispositivo;
    }
}