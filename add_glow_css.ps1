$css = Get-Content "styles.css" -Raw
$glowCss = @"

/* GOLD GLOW ANIMATION */
@keyframes goldPulse {
    0% {
        transform: scale(1);
        box-shadow: 0 0 0 rgba(212, 175, 55, 0);
    }
    50% {
        transform: scale(1.05);
        background: #fff;
        color: var(--accent-gold);
        box-shadow: 0 0 20px var(--accent-gold), 0 0 40px var(--accent-gold), 0 0 60px #fff;
        border-color: #fff;
        text-shadow: 0 0 10px var(--accent-gold);
    }
    100% {
        transform: scale(1.1);
        opacity: 0;
    }
}

.waiver-btn.accepted {
    animation: goldPulse 0.6s ease-out forwards;
    pointer-events: none; /* Prevent double clicks */
}
"@
Add-Content "styles.css" $glowCss
Write-Host "✅ Gold glow CSS added successfully!"
