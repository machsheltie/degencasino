import re

# Read backup
with open('backup/styles.css', 'r', encoding='utf-8') as f:
    css = f.read()

# FIX 1: Ticker to 90s
css = css.replace('animation: ticker 60s linear infinite;', 'animation: ticker 90s linear infinite;')
css = css.replace('/* Slowed down significantly */', '/* Slower for better readability */')

# FIX 2: Runner name 2.5rem to 2rem  
css = re.sub(
    r'(\.runner-name \{[^}]*?font-size: )2\.5rem;',
    r'\g<1>2rem;\n    /* Still prominent, less overwhelming */',
    css
)

# FIX 3: Add mobile context labels
# Find the mobile section and add labels before .col-payout
mobile_marker = '@media (max-width: 900px)'
media_start = css.find(mobile_marker)
col_payout_in_media = css.find('    .col-payout {', media_start)

# Insert before .col-payout
mobile_labels = """    /* Add context labels for mobile */
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

"""
css = css[:col_payout_in_media] + mobile_labels + css[col_payout_in_media:]

# FIX 4 & 5: Add mobile toast and focus states after the 900px media query  
# Find end of @media (max-width: 900px) block
ticket_odds_block = css.find('    .ticket-odds-block {', media_start)
closing_brace = css.find('}', css.find('}', ticket_odds_block) + 1)

# Insert after the closing brace
new_sections = """

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
"""
css = css[:closing_brace + 1] + new_sections + css[closing_brace + 1:]

# Write corrected file
with open('styles.css', 'w', encoding='utf-8') as f:
    f.write(css)

print("✓ ISSUE 6: Ticker animation slowed to 90s")
print("✓ ISSUE 7: Mobile table context labels added")
print("✓ ISSUE 8: Mobile toast positioning fixed")
print("✓ ISSUE 9: Keyboard focus states added")  
print("✓ ISSUE 10: Runner name font size reduced to 2rem")
print("\nAll 5 CSS critique fixes applied successfully!")
