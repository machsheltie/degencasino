$css = Get-Content "styles.css" -Raw

# Add brand-quote after brand-sub
$css = $css -replace '(\.brand-sub \{[^\}]+\})', "`$1`r`n`r`n.brand-quote {`r`n    font-family: var(--font-body);`r`n    font-size: 0.65rem;`r`n    color: var(--accent-gold);`r`n    margin-top: 8px;`r`n    font-style: italic;`r`n    opacity: 0.9;`r`n    max-width: 320px;`r`n    line-height: 1.3;`r`n}"

# Add gold color to header icon
$css = $css -replace '(\.header-icon \{[^\}]+)(filter:[^\;]+;)', "`$1`$2`r`n    color: var(--accent-gold);`r`n    font-size: 1.2rem;"

# Fix meta-tag - remove green background, add border
$css = $css -replace '(\.meta-tag \{[^\}]*?)color: #fff;[^\}]*?background: var\(--bg-green\);([^\}]*?\})', "`$1color: var(--text-dark);`r`n    background: transparent;`r`n    border: 1px solid var(--text-dark);`$2"

Set-Content "styles.css" $css
Write-Host "CSS fixes applied successfully!"
