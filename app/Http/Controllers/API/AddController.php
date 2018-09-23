<?php

namespace App\Http\Controllers\API;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class AddController extends Controller
{
    public function send(Request $request)
    {
        $this->validate($request, [
            'name' => 'required',
            'price' => 'required',
        ]);

        $data = json_decode(file_get_contents(storage_path('data/data.json')));

        $newObject = new \stdClass();

        $newObject->name = $request->name;
        $newObject->price = $request->price;

        $data[] = $newObject;

        file_put_contents(storage_path('data/data.json'), json_encode($data));

        return response()->json(['message' => 'data has been added'], 200);

    }

    public function show()
    {
        return response(file_get_contents(storage_path('data/data.json')));
    }
}
