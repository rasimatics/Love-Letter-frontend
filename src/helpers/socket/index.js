import socketIOClient from 'socket.io-client'

const ENDPOINT = "http://104.248.20.1:8080";
export const socket = socketIOClient(ENDPOINT,{
    'reconnection': true,
    'reconnectionDelay':500,
    'reconnectionAttempts':10
});
