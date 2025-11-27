# Visual Garnish Proposal

Here are three distinct "flavor packs" for visual enhancements. We can implement one, all, or a mix-and-match selection. All options will include a **Performance Toggle** (e.g., "GRAPHICS: HIGH/LOW" or "RETRO MODE: ON/OFF") to disable them.

## Option A: The "Terminal Rot" (CRT & Scanlines)
*Best for: Making the whole site feel like an old betting terminal or hospital monitor.*
1.  **CRT Scanlines**: A subtle, moving horizontal line overlay to simulate an old tube TV.
2.  **Screen Curvature & Vignette**: Darker corners and a slight "fish-eye" warp to the container (optional, can be heavy).
3.  **Phosphor Bleed**: Text has a slight glow/bloom, making it look like light emitting from a screen rather than ink on paper.
4.  **Signal Noise**: Subtle static grain that shifts slightly (already partially implemented, but can be enhanced).

## Option B: The "Vegas Decay" (Neon & Flicker)
*Best for: Highlighting the "Casino" and "Degen" aspects.*
1.  **Neon Flicker**: The main "DEGEN LIFE CASINO" header and "LIVE ODDS" signs occasionally flicker, dim, or buzz like a dying neon sign.
2.  **Active Glow**: The "LIVE" indicators and high-value odds pulse with a "breathing" animation.
3.  **Win Flash**: When a bet is won (or a toast appears), the screen momentarily flashes or the borders glow gold.

## Option C: The "Panic Attack" (Glitch & Distortion)
*Best for: Emphasizing the "Caregiver Collapse" and chaotic mental state.*
1.  **Chromatic Aberration (RGB Split)**: On hover or during "high stress" scenarios, text splits slightly into red/blue/green channels.
2.  **Text Scramble**: "Decryption" effect where numbers or letters cycle rapidly before settling (great for the Odds Board updates).
3.  **Jitter**: Elements shake slightly when hovered or when "Threat Level" is high.

## Recommendation
I recommend a **Hybrid Approach**:
*   **Base Layer**: Option A's **Scanlines** (subtle) to unify the aesthetic.
*   **Accents**: Option B's **Neon Flicker** on the main headers only.
*   **Interaction**: Option C's **Text Scramble** specifically for the Odds Board updates (makes the numbers feel "calculated").

## The Toggle
A physical-looking toggle switch in the footer or header labeled **"REDUCE MOTION"** or **"RETRO FX"** that instantly disables these CSS animations for performance/accessibility.
