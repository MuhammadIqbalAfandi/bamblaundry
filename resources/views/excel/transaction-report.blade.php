<table>
    <thead>
        <tr>
            <th colspan="4">Laporan Transaksi</th>
        </tr>
        <tr>
            <th colspan="4" rowspan="2">Periode {{ $transactions->first()['createdAt'] }} -
                {{ $transactions->last()['createdAt'] }} </th>
        </tr>
        <tr></tr>
        <tr>
            <th>#</th>
            <th>Tanggal</th>
            <th>Jumlah Transaksi</th>
            <th>Total Nilai</th>
        </tr>
    </thead>
    <tbody>
        @foreach ($transactions->chunk(100) as $chunk)
            @foreach ($chunk as $index => $transaction)
                <tr>
                    <td>{{ ++$index }}</td>
                    <td>{{ $transaction['createdAt'] }}</td>
                    <td>{{ $transaction['totalTransaction'] }}</td>
                    <td>{{ (new App\Services\CurrencyFormatService)->setRupiahFormat($transaction['totalPrice'], true) }}</td>
                </tr>
            @endforeach
        @endforeach
        <tr>
            <td colspan="2">Total</td>
        </tr>
        <tr>
            <td colspan="2">Transaksi / Nilai</td>
            <td>{{ $transactions->sum('totalTransaction') }}</td>
            <td>{{ (new App\Services\CurrencyFormatService)->setRupiahFormat($transactions->sum('totalPrice'), true) }}</td>
        </tr>
    </tbody>
</table>
