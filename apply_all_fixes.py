import re

# Read backup
with open('backup/styles.css', 'r', encoding='utf-8') as f:
    css = f.read()

# ISSUE 6: Ticker animation 60s -> 90s  
css = css.replace('animation: ticker 60s linear infinite;', 'animation: ticker 90s linear infinite;')
css = css.replace('/* Slowed down significantly */', '/* Slower for better readability */')

# ISSUE 10: Runner name 2.5rem -> 2rem
css = re.sub(
    r'\.runner-name \{([^}]*?)font-size: 2\.5rem;',
    r'.runner-name {\g<1>font-size: 2rem;\n    /* Still prominent, less overwhelming */',
    css,
    flags=re.DOTALL
)

# ISSUE 7: Add mobile context labels - find exact location
# Search for the @media (max-width: 900px) section and .col-payout  
mobile_start = css.find('@media (max-width: 900px)')
col_payout_pos = css.find('    .col-payout {', mobile_start)

# Insert the pseudo-element labels before .col-payout
labels = '''    /* Add context labels for mobile */
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
css = css[:col_payout_pos] + labels + css[col_payout_pos:]

# ISSUE 8 & 9: Add mobile toast positioning and focus states
# Find the end of the @media (max-width: 900px) block
ticket_odds = css.find('    .ticket-odds-block {', mobile_start)
# Find the closing brace of .ticket-odds-block
closing_pos = css.find('}', ticket_odds)
# Find the closing brace of the @media block  
media_close = css.find('\n}', closing_pos)

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

css = css[:media_close + 2] + additions + css[media_close + 2:]

# Write final CSS
with open('styles.css', 'w', encoding='utf-8') as f:
    f.write(css)

print("✅ All 5 CSS critique fixes applied successfully!")
print("")
print("ISSUE 6: Ticker animation slowed from 60s to 90s")
print("ISSUE 7: Mobile table context labels added (HOURS/ODDS/PAYOUT)")
print("ISSUE 8: Mobile toast positioning fixed for better visibility")
print("ISSUE 9: Keyboard navigation focus states added")
print("ISSUE 10: Runner name font size reduced from 2.5rem to 2rem")
