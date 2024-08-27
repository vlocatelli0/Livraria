self.addEventListener('install', function (event) {
    event.waitUntil(
        caches.open('todo-cache').then(function (cache) {
            return cache.addAll([
                './',
                './cadastro.html',
                './cadastro.css',
                './livro.css',
                './livro.html',
                './login.css',
                './index.html',
                './obgcadastro.css',
                './obgcadastro.html',
                './senharedefinida.css',
                './senharedefinida.html',
                './trocarsenha.css',
                './trocarsenha.html',
                './manifest.json'
            ]);
        })
    );
});

self.addEventListener('fetch', function(event){
    event.respondWith(
        caches.match(event.request).then(function(response){
            return response || fetch(event.request);
        })
    );
});