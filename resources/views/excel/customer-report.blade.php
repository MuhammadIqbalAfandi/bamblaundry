<table>
    <thead>
        <tr>
            <th colspan="7">Detail History Transaksi Customer</th>
        </tr>
        <tr></tr>
        <tr>
            <th>#</th>
            <th>Id Customer</th>
            <th>Nama</th>
            <th>HP</th>
            <th>Total Transaksi</th>
            <th>Total Nilai</th>
            <th>Total Diskon didapat</th>
        </tr>
    </thead>
    <tbody>
        @foreach ($customers->chunk(100) as $chunk)
            @foreach ($chunk as $index => $customer)
                <tr>
                    <td>{{ ++$index }}</td>
                    <td>{{ $customer->customer_number }}</td>
                    <td>{{ $customer->name }}</td>
                    <td>{{ $customer->phone }}</td>
                    <td>{{ $customer->transaction->count() }}</td>
                    <td>
                        {{ (new App\Services\TransactionService())->totalPriceGroupAsString($customer->fresh()->transaction) }}
                    </td>
                    <td>
                        {{ (new App\Services\TransactionService())->totalDiscountGivenGroupAsString($customer->fresh()->transaction) }}
                    </td>
                </tr>
            @endforeach
        @endforeach
    </tbody>
</table>
