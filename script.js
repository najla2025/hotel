// script.js

/// S'assurer que le DOM est entièrement chargé avant d'exécuter le script
document.addEventListener("DOMContentLoaded", function() {
    const contactForm = document.getElementById('contact-form');
    
    // Vérifier si l'élément existe dans le DOM
    if (contactForm) {
        contactForm.addEventListener('submit', function(event) {
            event.preventDefault();  // Empêche la soumission du formulaire

            // Récupération des valeurs du formulaire
            const nom = document.getElementById('nom').value;
            const email = document.getElementById('email').value;
            const message = document.getElementById('message').value;

            // Affichage d'un message de confirmation
            const responseMessage = document.getElementById('response-message');
            responseMessage.textContent = `Merci ${nom} ! Votre message a bien été envoyé.`;
            responseMessage.style.color = 'green';

            // Réinitialisation du formulaire
            document.getElementById('contact-form').reset();
        });
    } else {
        console.error("Le formulaire #contact-form n'a pas été trouvé.");
    }
});






// script.js
const btnReserver = document.getElementById("btnReserver");
const messageElement = document.getElementById("response-message");

btnReserver.addEventListener("click", function() {
    const chambre = document.getElementById("chambre").value;
    const arrivee = document.getElementById("arrivee").value;
    const depart = document.getElementById("depart").value;
    const adultes = document.getElementById("adultes").value;
    const enfants = document.getElementById("enfants").value;
    const spa = document.getElementById("spa").checked;
    const bar = document.getElementById("bar").checked;
    const petitDejeuner = document.getElementById("Petit Déjeuner").checked;
    const paymentCard = document.getElementById("payment-card").checked;
            const paymentCash = document.getElementById("payment-cash").checked;

    if (!chambre || !arrivee || !depart || !adultes) {
        messageElement.innerHTML = "<p style='color: red;'>Veuillez remplir tous les champs obligatoires.</p>";
        messageElement.style.display = "block";
        return;
    }
    const paymentMethod = paymentCard ? "Carte bancaire" : "Espèces";
    messageElement.style.display = "block";
    messageElement.innerHTML = `
        <p>✅ <strong>Réservation confirmée !</strong></p>
        <p><strong>Type de chambre :</strong> <span>${chambre}</span></p>
        <p><strong>Date d'arrivée :</strong> <span>${arrivee}</span></p>
        <p><strong>Date de départ :</strong> <span>${depart}</span></p>
        <p><strong>Nombre d'adultes :</strong> <span>${adultes}</span></p>
        <p><strong>Nombre d'enfants :</strong> <span>${enfants}</span></p>
        <p><strong>Accès au Spa :</strong> <span>${spa ? "Oui" : "Non"}</span></p>
        <p><strong>Accès au Bar :</strong> <span>${bar ? "Oui" : "Non"}</span></p>
        <p><strong>Petit Déjeuner :</strong> <span>${petitDejeuner ? "Oui" : "Non"}</span></p>
                        <p><strong>Mode de paiement :</strong> <span>${paymentMethod}</span></p>

    `;
});