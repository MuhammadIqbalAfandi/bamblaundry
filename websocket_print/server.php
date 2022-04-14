<?php

require_once __DIR__ . '/vendor/autoload.php';

try {

    echo '> Starting server on ws://103.157.96.20:5544 ...', "\n";

    $websocket = new Hoa\Websocket\Server(
        new Hoa\Socket\Server('ws://103.157.96.20:5544')
    );

    $websocket->on('open', function (Hoa\Event\Bucket$bucket) {
        echo '> Connected', "\n";
        return;
    });

    $websocket->on('message', function (Hoa\Event\Bucket$bucket) {
        $data = $bucket->getData();
        echo '> Received request ', $data['message'], "\n";
        $bucket->getSource()->send($data['message']);
        $bucket->getSource()->broadcast($data['message']);

        return;
    });

    $websocket->on('close', function (Hoa\Event\Bucket$bucket) {
        echo '> Disconnected', "\n";
        return;
    });

    try {
        echo '> Server started', "\n";
        $websocket->run();
    } catch (Exception $e) {
        echo '> Error occurred, server stopped. ', $e->getMessage(), "\n";
    }
} catch (Exception $e) {
    echo '> Error: ', $e->getMessage(), "\n";
}
