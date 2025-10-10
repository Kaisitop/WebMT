/**
 * tradiciones.js
 * Funcionalidad de ACORDEÓN para expandir/contraer himnos y tradiciones.
 */

document.addEventListener('DOMContentLoaded', () => {

    /**
     * Configura la funcionalidad de acordeón para un conjunto específico de elementos.
     * Cierra todas las demás tarjetas en el mismo grupo al abrir una nueva.
     * @param {string} buttonSelector Selector CSS del botón de expansión (e.g., '.btn-expandir-himno').
     * @param {string} cardSelector Selector CSS del contenedor de la tarjeta (e.g., '.himno-card').
     * @param {string} expandedClass Clase CSS que marca una tarjeta como expandida (e.g., 'expanded').
     */
    const setupAccordion = (buttonSelector, cardSelector, expandedClass) => {
        const expandButtons = document.querySelectorAll(buttonSelector);
        const allCards = document.querySelectorAll(cardSelector);

        expandButtons.forEach(button => {
            button.addEventListener('click', () => {
                const currentCard = button.closest(cardSelector);
                if (!currentCard) return;

                const wasExpanded = currentCard.classList.contains(expandedClass);
                
                // 1. Cierra TODAS las tarjetas de este mismo grupo (Acordeón)
                allCards.forEach(card => {
                    card.classList.remove(expandedClass);
                    
                    // Actualiza el texto de los botones al estado 'Cerrado'
                    const otherButton = card.querySelector(buttonSelector);
                    if (otherButton) {
                        otherButton.querySelector('.text-mostrar').style.display = 'inline';
                        otherButton.querySelector('.text-ocultar').style.display = 'none';
                        otherButton.querySelector('i').classList.remove('fa-rotate-180');
                    }
                });

                // 2. Si la tarjeta NO estaba expandida, la abrimos
                if (!wasExpanded) {
                    currentCard.classList.add(expandedClass);
                    
                    // 3. Actualiza el texto del botón actual a 'Ocultar'
                    button.querySelector('.text-mostrar').style.display = 'none';
                    button.querySelector('.text-ocultar').style.display = 'inline';
                    button.querySelector('i').classList.add('fa-rotate-180');
                }
            });
        });
    };

    // Inicializar el Acordeón para la sección de HIMNOS
    // Selectores: .btn-expandir-himno | .himno-card | 'expanded'
    setupAccordion(
        '.btn-expandir-himno', 
        '.himno-card', 
        'expanded'
    );

    // Inicializar el Acordeón para la sección de TRADICIONES
    // Selectores: .btn-expandir-tradicion | .tradicion-card | 'expanded-tradicion'
    setupAccordion(
        '.btn-expandir-tradicion', 
        '.tradicion-card', 
        'expanded-tradicion'
    );
});