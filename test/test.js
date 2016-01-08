'use strict';

// MODULES //

var test = require( 'tape' );
var sqrt = require( './../lib' );


// TESTS //

test( 'main export is a function', function test( t ) {
	t.ok( typeof sqrt === 'function', 'main export is a function' );
	t.end();
});

test( 'the function computes the principal square root of a nonnegative number', function test( t ) {
	t.equal( sqrt( 4 ), 2, 'equals 2' );
	t.equal( sqrt( 9 ), 3, 'equals 3' );
	t.equal( sqrt( 0 ), 0, 'equals 0' );
	t.end();
});

test( 'the function returns `NaN` if provide a negative number', function test( t ) {
	var val = sqrt( -4 );
	t.ok( val !== val, 'returns NaN' );
	t.end();
});
