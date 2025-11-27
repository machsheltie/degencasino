$js = Get-Content "script.js" -Raw
# Replace the simple click handler with the animated one
$js = $js -replace 'acceptBtn.addEventListener\(''click'', \(\) => \{[\s\S]*?\}\);', @"
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
            showToast('WAIVER ACCEPTED', 'Liability Discharged');
        }, 600);
    });
"@
Set-Content "script.js" $js
Write-Host "✅ JS updated with glow animation logic!"
