<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class StoreDispositivoRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return false;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            'tipoId' => 'required',
            'estadoId' => 'required',
            'ubicacion' => 'required|string|max:255',
            'fecha_ingreso' => 'date',
            'habilitado' => 'required',
            'color' => 'string|max:255',
            'marca' => 'string|max:255',
            'modelo' => 'string|max:255',
            'serie' => 'string|max:255',
            'dimensionLargo' => 'string|regex:/^\d+(\.\d+)?$/',
            'dimensionAlto' => 'string|regex:/^\d+(\.\d+)?$/',
            'dimensionProfundidad' => 'string|regex:/^\d+(\.\d+)?$/',
        ];
    }

    public function messages(){
        return [
            'tipoId.required' => 'El campo tipo es necesario.',
            'estadoId.required' => 'El campo estado es necesario.',
            'ubicacion.required' => 'El campo ubicacion es necesario.',
            'ubicacion.string' => 'Formato incorrecto en ubicacion.',
            'fecha_ingreso.date' => 'Formato incorrecto en fecha_ingreso.',
            'habilitado.required' => 'El campo habilitado es necesario.',
            'color.string' => 'Formato incorrecto en color.',
            'marca.string' => 'Formato incorrecto en marca.',
            'modelo.string' => 'Formato incorrecto en modelo.',
            'serie.string' => 'Formato incorrecto en serie.',
            'dimensionLargo.string' => 'Formato incorrecto en dimensionLargo.',
            'dimensionLargo.regex' => 'Expresion incorrecta en dimensionLargo.',
            'dimensionAlto.string' => 'Formato incorrecto en dimensionAlto.',
            'dimensionAlto.regex' => 'Expresion incorrecta en dimensionAlto.',
            'dimensionProfundidad.string' => 'Formato incorrecto en dimensionProfundidad.',
            'dimensionProfundidad.regex' => 'Expresion incorrecta en dimensionProfundidad.',
        ];
    }
}
