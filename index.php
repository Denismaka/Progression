<!DOCTYPE html>
<html lang="fr">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Composant Web de Compteur en Pourcentage</title>
    <script src="https://cdn.tailwindcss.com"></script>
</head>

<body class="min-h-screen bg-gradient-to-br from-indigo-700 to-indigo-300 flex items-center justify-center">
    <div class="w-full max-w-4xl mx-auto mt-8">
        <h1 class="text-center text-white font-bold text-3xl mb-8 drop-shadow-lg tracking-widest font-mono">Progression
        </h1>
        <div class="flex flex-wrap justify-center items-center gap-8 bg-white/10 backdrop-blur-md p-8 shadow-lg rounded-2xl">
            <counter-percent value="33">HTML</counter-percent>
            <counter-percent value="60">CSS</counter-percent>
            <counter-percent value="99">JS</counter-percent>
        </div>
    </div>
    <script src="app.js"></script>
</body>

</html>