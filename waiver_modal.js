
/* ONBOARDING WAIVER LOGIC */
document.addEventListener('DOMContentLoaded', () => {
    const waiverOverlay = document.getElementById('waiver-overlay');
    const acceptBtn = document.getElementById('accept-waiver-btn');

    // Check if user has already signed the waiver
    const hasSignedWaiver = localStorage.getItem('degen_waiver_signed');

    if (!hasSignedWaiver) {
        // Show waiver with a slight delay for effect
        setTimeout(() => {
            waiverOverlay.classList.add('active');
        }, 500);
    }

    // Handle acceptance
    if (acceptBtn) {
        acceptBtn.addEventListener('click', () => {
            // Play Gold Glow Animation
            acceptBtn.classList.add('accepted');

            // Wait for animation to finish before closing
            setTimeout(() => {
                // Save to local storage
                localStorage.setItem('degen_waiver_signed', 'true');

                // Hide modal
                waiverOverlay.classList.remove('active');

                // Optional: Play a sound or show a toast
                if (typeof showToast === 'function') {
                    showToast('WAIVER ACCEPTED', 'Liability Discharged');
                }
            }, 600);
        });
    }
});
