/**
* @license Apache-2.0
*
* Copyright (c) 2020 The Stdlib Authors.
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

#include "stdlib/blas/base/dswap.h"
#include <stdio.h>

int main( void ) {
	// Create strided arrays:
	double x[] = { 1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 7.0, 8.0 };
	double y[] = { 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 };

	// Specify the number of elements:
	const int N = 4;

	// Specify stride lengths:
	const int strideX = 2;
	const int strideY = -2;

	// Interchange elements:
	c_dswap( N, x, strideX, y, strideY );

	// Print the result:
	for ( int i = 0; i < 8; i++ ) {
		printf( "x[ %i ] = %lf\n", i, x[ i ] );
		printf( "y[ %i ] = %lf\n", i, y[ i ] );
	}

	// Interchange elements:
	c_dswap_ndarray( N, x, strideX, 0, y, strideY, 6 );

	// Print the result:
	for ( int i = 0; i < 8; i++ ) {
		printf( "x[ %i ] = %lf\n", i, x[ i ] );
		printf( "y[ %i ] = %lf\n", i, y[ i ] );
	}
}
