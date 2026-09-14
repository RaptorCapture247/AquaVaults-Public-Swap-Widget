# Styling and widget customization

AquaVaults injects its own widget CSS and scopes it under `.av-sdk-root`, so it does not apply global resets to the host page.

The stable customization surface is the widget's CSS custom properties.

## Full variable set

```css
#swap-widget {
  --av-bg-card: #1e293b;
  --av-bg-input: #0f172a;

  --av-border: #4f46e5;
  --av-border-subtle: rgba(99, 102, 241, 0.35);

  --av-text: #eaeaea;
  --av-text-muted: #94a3b8;

  --av-accent: #4f46e5;
  --av-accent-hover: rgba(99, 102, 241, 0.18);

  --av-success: #10b981;
  --av-error: #ef4444;
  --av-warning: #f59e0b;

  --av-radius: 16px;
  --av-radius-sm: 8px;
}
```

Only override the variables you want to change.

## Example brand theme

```css
#swap-widget {
  --av-bg-card: #0d1117;
  --av-bg-input: #111827;
  --av-accent: #00c2a8;
  --av-accent-hover: rgba(0, 194, 168, 0.14);
  --av-border: #00c2a8;
  --av-border-subtle: rgba(0, 194, 168, 0.30);
  --av-text: #e6edf3;
  --av-text-muted: #7d8590;
  --av-success: #3fb950;
  --av-error: #f85149;
  --av-warning: #d29922;
  --av-radius: 16px;
  --av-radius-sm: 8px;
}
```

## Width

The widget card is responsive and has a built-in maximum width of 480px.

To make it narrower, constrain the host container:

```css
#swap-widget {
  max-width: 420px;
  margin: 0 auto;
}
```

Setting the container wider than 480px does not make the built-in card wider than its internal 480px cap.

Avoid depending on internal `.av-*` class names for permanent styling. Those are implementation details and can change; CSS variables are the supported theming surface.

## Full example

See [`../examples/custom-theme.html`](../examples/custom-theme.html).
