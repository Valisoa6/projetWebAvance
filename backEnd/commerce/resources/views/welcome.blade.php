<!DOCTYPE html>
<html>
<head>
    <title>Liste des produits</title>
</head>
<body>
    <h1>Nos produits</h1>
    <ul>
        @foreach($products as $product)
            <li>
                <strong>{{ $product->marque }}</strong> - {{ $product->prix }} € <br>
                @foreach($product->images as $image)
                    <img src="{{ asset('storage/' . $image) }}" width="100" />
                @endforeach
                <p>{{ $product->description }}</p>
            </li>
        @endforeach
    </ul>
</body>
</html>
