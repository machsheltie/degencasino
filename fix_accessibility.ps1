$css = Get-Content "styles.css" -Raw
$css = $css -replace '(\.meta-tag \{[^\}]+)font-size: 0\.75rem;', '$1font-size: 0.85rem;'
$css = $css -replace '(\.meta-tag \{[^\}]+)padding: 4px 10px;', '$1padding: 6px 12px;'
$css = $css -replace '(\.meta-tag \{[^\}]+)border: 1px solid', '$1border: 2px solid'
Set-Content "styles.css" $css
Write-Host "✅ Accessibility fixes applied: meta-tag font increased to 0.85rem, border thickened to 2px"
