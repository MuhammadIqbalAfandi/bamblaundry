<?php

require_once __DIR__ . '/vendor/autoload.php';
require_once __DIR__ . '/ThermalPrinting.php';

try {
    $socket = new Hoa\Websocket\Client(
        new Hoa\Socket\Client('ws://43.230.131.149:5544')
    );
    $socket->setHost('escpos-server');
    $socket->on('message', function (\Hoa\Event\Bucket $bucket) {
        $data = $bucket->getData();
        $response = $data['message'];
        $rdata = json_decode($data['message']);
        echo '> Received request ', $data['message'], "\n";

        $thermalPrinting = new ThermalPrinting($rdata);
        $thermalPrinting->startPrinting(2);
        // return $response;
     });
    $socket->run();
    $socket->receive();
} catch (Exception $e) {
    echo '> Error: ', $e->getMessage(), "\n";
}
