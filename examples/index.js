'use strict';

var sqrt = require( './../lib' );

var x;
var i;

for ( i = 0; i < 100; i++ ) {
	x = Math.round( Math.random() * 100 );
	console.log( sqrt( x ) );
}
