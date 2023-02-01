/**
* @license Apache-2.0
*
* Copyright (c) 2023 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/

'use strict';

var discreteUniform = require( '@stdlib/random-base-discrete-uniform' ).factory;
var filledarrayBy = require( '@stdlib/array-filled-by' );
var dswap = require( './../lib' );

var x = filledarrayBy( 10, 'float64', discreteUniform( 0, 500 ) );
console.log( x );

var y = filledarrayBy( x.length, 'float64', discreteUniform( 0, 255 ) );
console.log( y );

// Swap elements in `x` and `y` starting from the end of `y`:
dswap( x.length, x, 1, y, -1 );
console.log( x );
console.log( y );