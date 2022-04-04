<?php

namespace App\Http\Controllers;

use App\Ads;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;

class AdsController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return Ads::all();
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        if ($request->hasFile('filepond')) {
            /* Handle pictures upload */
            $pictures = $request->file('filepond')->store('public/ad-pictures');
            $pictures = substr($pictures, 7);

            return $pictures;
        } else {
            // Handle form for video
            $this->validate($request, [
                'title' => 'required|string',
                'features' => 'required|string',
                'category' => 'required|string',
                'description' => 'required|string',
                'price' => 'required',
                // 'thumbnail' => 'required',
            ]);

            /* Create new ad song */
            $video = new Ads;
            $video->title = $request->input('title');
            $video->features = $request->input('features');
            // $video->user_id = auth()->user()->id;
            $video->category = $request->input('category');
            $video->description = $request->input('description');
            $video->price = $request->input('price');
            $video->pictures = $request->input('pictures');
            $video->save();

            return response('Ad Uploaded', 200);
        }
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Ads  $ads
     * @return \Illuminate\Http\Response
     */
    public function show(Ads $ads)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Ads  $ads
     * @return \Illuminate\Http\Response
     */
    public function edit(Ads $ads)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Ads  $ads
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Ads $ads)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Ads  $ads
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        Storage::delete('public/ads/' . $id);

        return response("Picture deleted", 200);
    }
}
