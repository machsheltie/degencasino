$css = Get-Content "styles.css" -Raw
$newAnimation = @"
@keyframes goldPulse {
    0% {
        transform: scale(1);
        box-shadow: 0 0 0 rgba(212, 175, 55, 0);
    }
    50% {
        transform: scale(1.05);
        /* Keep green background, just glow */
        background: var(--bg-green);
        color: #fff; /* Flash text white for extra pop */
        box-shadow: 0 0 20px var(--accent-gold), 0 0 40px var(--accent-gold);
        border-color: #fff;
        text-shadow: 0 0 10px var(--accent-gold), 0 0 20px var(--accent-gold);
    }
    100% {
        transform: scale(1.1);
        opacity: 0;
    }
}
"@

# Regex to replace the existing keyframes block
$css = $css -replace '@keyframes goldPulse\s*\{[\s\S]*?\}', $newAnimation

Set-Content "styles.css" $css
Write-Host "✅ Updated goldPulse animation to keep button green!"
