import re

# Read the backup file
with open('backup/styles.css', 'r', encoding='utf-8') as f:
    css = f.read()

# FIX 1: Header grid - make ticker wider
css = css.replace(
    'grid-template-columns: auto 1fr auto;',
    'grid-template-columns: 350px 1fr 180px;'
)

# FIX 2: Add brand-quote styling
brand_sub_end = css.find('.ticker-display {')
insertion_point = css.rfind('}', 0, brand_sub_end) + 1

brand_quote_css = '''

.brand-quote {
    font-family: var(--font-body);
    font-size: 0.65rem;
    color: var(--accent-gold);
    margin-top: 8px;
    font-style: italic;
    opacity: 0.9;
    max-width: 320px;
    line-height: 1.3;
}
'''
css = css[:insertion_point] + brand_quote_css + css[insertion_point:]

# FIX 3: Ticker speed from 60s to 120s
css = css.replace(
    'animation: ticker 60s linear infinite;',
    'animation: ticker 120s linear infinite;'
)
css = css.replace(
    '/* Slowed down significantly */',
    '/* Slowed down even more */'
)

# FIX 4: Runner name 2.5rem to 2rem
css = re.sub(
    r'(\.runner-name \{[^}]*?)font-size: 2\.5rem;',
    r'\1font-size: 2rem; /* Still prominent, less overwhelming */',
    css,
    flags=re.DOTALL
)

# FIX 5-7: Add mobile context labels, toast positioning, and focus states
# Find the media query section
media_900 = css.find('@media (max-width: 900px)')
col_payout = css.find('    .col-payout {', media_900)

# Add mobile labels before .col-payout
mobile_labels = '''    /* Add context labels for mobile */
    .col-hours::before {
        content: "HOURS: ";
        font-weight: 700;
    }

    .col-odds::before {
        content: "ODDS: ";
        font-weight: 700;
    }

    .col-payout::before {
        content: "PAYOUT: ";
        font-weight: 700;
    }

'''
css = css[:col_payout] + mobile_labels + css[col_payout:]

# Find end of 900px media query
ticket_odds = css.find('    .ticket-odds-block {', media_900)
closing = css.find('}', css.find('}', ticket_odds) + 1)

# Add toast and focus states after media query
additions = '''

/* Mobile toast positioning */
@media (max-width: 600px) {
    .toast {
        bottom: 20px;
        right: 20px;
        left: 20px;
        max-width: calc(100% - 40px);
    }
}

/* Focus states for keyboard navigation */
.bet-btn:focus,
.cancel-btn:focus,
.wallet-item:focus,
.table-row:focus {
    outline: 2px solid var(--accent-gold);
    outline-offset: 2px;
}
'''
css = css[:closing + 1] + additions + css[closing + 1:]

# Write the final CSS
with open('styles.css', 'w', encoding='utf-8') as f:
    f.write(css)

print("✅ All fixes applied successfully!")
print("")
print("1. Header grid: Ticker width increased (350px brand, 180px wallet)")
print("2. Brand quote: Added styling (0.65rem, compact, max-width 320px)")
print("3. Ticker speed: Slowed to 120s")
print("4. Runner name: Reduced to 2rem")
print("5. Mobile labels: Added HOURS/ODDS/PAYOUT context")
print("6. Mobile toast: Centered positioning")
print("7. Focus states: Added keyboard navigation support")
