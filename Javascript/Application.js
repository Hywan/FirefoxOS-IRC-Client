window.addEventListener('DOMContentLoaded', function( ) {

    'use strict';

    var socket = navigator.mozTCPSocket.open('chat.freenode.org', 6667);

    console.log(socket);

    socket.onopen = function ( event ) {

        console.log('// open');
    };

    socket.onclose = function ( event ) {

        console.log('// close');
    };

    socket.onerror = function ( event ) {

        console.log('// error');
        console.group();
        console.debug(event.type);
        console.debug(event.data);
        console.groupEnd();
    };

    socket.ondata = function ( event ) {

        if(typeof event.data === 'string') {

            console.debug(event.data);
        }
        else {

            console.log('Get a Uint8Array');
        }
    };
});
