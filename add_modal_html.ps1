$html = Get-Content "index.html" -Raw
$modalHtml = @"
    <!-- ONBOARDING WAIVER MODAL -->
    <div class="waiver-overlay" id="waiver-overlay">
        <div class="waiver-modal">
            <div class="waiver-header">
                <h2>PATIENT INTAKE / LIABILITY WAIVER</h2>
                <div class="waiver-stamp">APPROVED</div>
            </div>
            <div class="waiver-body">
                <p><strong>NOTICE TO ENTRANT:</strong></p>
                <p>You have entered <strong>DEGEN LIFE CASINO</strong>.</p>
                <p>By proceeding, you acknowledge that sleep is optional and caffeine is a food group.</p>
                <hr class="waiver-divider">
                <p class="instruction-text"><strong>PROTOCOL:</strong></p>
                <ol>
                    <li>Review the <strong>LIVE ODDS BOARD</strong>.</li>
                    <li>Select a <strong>SCENARIO</strong> to view details.</li>
                    <li>Place your wager and accept the consequences.</li>
                </ol>
            </div>
            <button class="waiver-btn" id="accept-waiver-btn">I ACCEPT THE CHAOS</button>
        </div>
    </div>

    <!-- DETAILED TICKET MODAL -->
"@
$html = $html -replace '<!-- DETAILED TICKET MODAL -->', $modalHtml
Set-Content "index.html" $html
Write-Host "✅ Waiver modal HTML added successfully!"
