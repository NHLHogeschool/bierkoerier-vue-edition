<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('welcome');
});


Route::get('/order', function () {
    return view('orders.new');
});

Route::group(['prefix' => 'beheer', 'middleware' => 'auth'], function () {
  Route::get('/home', 'HomeController@index');
  Route::get('/products', 'ProductsController@index')->name('products');
  Route::get('/products/new', 'ProductsController@create')->name('create-product');
  Route::post('products/new', 'ProductsController@store');
});

Route::get('/home', 'HomeController@index');
