// Socket node
var socket = io();

const messageAdd = 'add'
const messageRemove = 'remove';
const messageMayoTeam = 'event-point-mayo';
const messageKetchupTeam = 'event-point-ketchup';
const messageReloadPart = 'event-reload-part';
const messageLockBuzz= 'event-lock-buzz';
const messageUnLockBuzz= 'event-unlock-buzz';
const messageNextTransition= 'event-next-transition';
const messageBuzzBadResponse = 'event-bad-response';

$buttonAddPointMayo = $('#button-add-point-mayo');
$buttonRemovePointMayo = $('#button-remove-point-mayo');
$buttonAddPointKetchup = $('#button-add-point-ketchup');
$buttonRemovePointKetchup = $('#button-remove-point-ketchup');
$buttonBuzzBadResponse = $('#button-buzz-bad-response');

$buttonLockBuzzer = $('#button-lock-buzz');
$buttonUnLockBuzzer = $('#button-unlock-buzz');
$buttonReloadPart = $('#button-reload-part');

$buttonNextTransition = $('#button-next-transition');
$buttonTransition1 = $('#button-transition-1');
$buttonTransition2 = $('#button-transition-2');
$buttonTransition3 = $('#button-transition-3');
$buttonTransition4 = $('#button-transition-4');
$buttonTransition5 = $('#button-transition-5');
$buttonTransition6 = $('#button-transition-6');

$modalReloadPartWarn = $('#modal-reload-part');

var initEvents = function () {
    $buttonAddPointMayo.click(function () {
        socket.emit(messageMayoTeam, messageAdd);
    });
    $buttonRemovePointMayo.click(function () {
        socket.emit(messageMayoTeam, messageRemove);
    });
    $buttonAddPointKetchup.click(function () {
        socket.emit(messageKetchupTeam, messageAdd);
    });
    $buttonRemovePointKetchup.click(function () {
        socket.emit(messageKetchupTeam, messageRemove);
    });
    $buttonReloadPart.click(function () {
        socket.emit(messageReloadPart);
        $modalReloadPartWarn.modal('hide');
    });
    $buttonLockBuzzer.click(function () {
        socket.emit(messageLockBuzz);
    });
    $buttonUnLockBuzzer.click(function () {
        socket.emit(messageUnLockBuzz);
    });
    $buttonNextTransition.click(function(){
        socket.emit(messageNextTransition);
    });

    $buttonTransition1.click(() => {
        socket.emit("event-transition", 1);
    });
    $buttonTransition2.click(() => {
        socket.emit("event-transition", 2);
    });
    $buttonTransition3.click(() => {
        socket.emit("event-transition", 3);
    });
    $buttonTransition4.click(() => {
        socket.emit("event-transition", 4);
    });
    $buttonTransition5.click(() => {
        socket.emit("event-transition", 5);
    });
    $buttonTransition6.click(() => {
        socket.emit("event-transition", 6);
    });

    $buttonBuzzBadResponse.click(function() {
        socket.emit(messageBuzzBadResponse);
    })
}

initEvents();
