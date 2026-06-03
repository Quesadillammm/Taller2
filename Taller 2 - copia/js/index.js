// Función para activar la música
        const reproducirMusica = () => {
            const musica = document.getElementById('miMusica');
            
            // Intentamos reproducir
            musica.play().then(() => {
                console.log("¡Música sonando!");
                // Una vez que suena, quitamos el "escuchador" para que no se reinicie en cada click
                document.removeEventListener('click', reproducirMusica);
            }).catch(error => {
                console.error("El navegador bloqueó el audio inicialmente:", error);
            });
        };

        // Escuchar el clic en cualquier parte del documento
        document.addEventListener('click', reproducirMusica);