$css = Get-Content "styles.css" -Raw
$waiverCss = @"

/* ONBOARDING WAIVER MODAL */
.waiver-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.85);
    backdrop-filter: blur(8px);
    z-index: 9999;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 20px;
    opacity: 0;
    pointer-events: none;
    transition: opacity 0.5s ease;
}

.waiver-overlay.active {
    opacity: 1;
    pointer-events: all;
}

.waiver-modal {
    background: var(--bg-parchment);
    border: 8px double var(--accent-gold);
    width: 100%;
    max-width: 500px;
    padding: 40px;
    box-shadow: 0 20px 60px rgba(0, 0, 0, 0.9);
    position: relative;
    transform: translateY(20px);
    transition: transform 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275);
}

.waiver-overlay.active .waiver-modal {
    transform: translateY(0);
}

.waiver-header {
    text-align: center;
    border-bottom: 2px solid #000;
    padding-bottom: 20px;
    margin-bottom: 20px;
    position: relative;
}

.waiver-header h2 {
    font-family: var(--font-display);
    font-size: 1.5rem;
    color: var(--text-dark);
    line-height: 1.2;
}

.waiver-stamp {
    position: absolute;
    top: -10px;
    right: -10px;
    border: 3px solid var(--accent-red);
    color: var(--accent-red);
    font-family: 'Courier New', monospace;
    font-weight: 900;
    font-size: 1.2rem;
    padding: 5px 10px;
    transform: rotate(-15deg);
    opacity: 0.8;
    text-transform: uppercase;
    letter-spacing: 2px;
    mask-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='1.5' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.5'/%3E%3C/svg%3E");
}

.waiver-body {
    font-family: 'Courier New', monospace;
    font-size: 0.95rem;
    color: #333;
    line-height: 1.6;
}

.waiver-body p {
    margin-bottom: 15px;
}

.waiver-divider {
    border: 0;
    border-top: 1px dashed #000;
    margin: 20px 0;
}

.instruction-text {
    font-size: 1.1rem;
    margin-bottom: 15px;
}

.waiver-body ol {
    padding-left: 25px;
    margin-bottom: 30px;
}

.waiver-body li {
    margin-bottom: 10px;
    font-weight: 700;
}

.waiver-btn {
    width: 100%;
    padding: 15px;
    background: var(--bg-green);
    color: var(--accent-gold);
    border: 2px solid var(--accent-gold);
    font-family: var(--font-header);
    font-size: 1.1rem;
    font-weight: 700;
    cursor: pointer;
    transition: all 0.2s;
    text-transform: uppercase;
    letter-spacing: 1px;
}

.waiver-btn:hover {
    background: var(--bg-green-light);
    box-shadow: 0 0 15px var(--gold-glow);
    transform: scale(1.02);
}
"@
Add-Content "styles.css" $waiverCss
Write-Host "✅ Waiver modal CSS added successfully!"
