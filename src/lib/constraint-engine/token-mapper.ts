import designSystem from "@/schemas/design-system.example.json";

export type DesignSystem = typeof designSystem;
export type ColorToken = keyof DesignSystem["colors"];
export type SpaceToken = keyof DesignSystem["spacing"];
export type TypeToken = keyof DesignSystem["typography"]["scale"];

const cssVariable = (group: string, token: string) => `var(--${group}-${token})`;

export function color(token: ColorToken) {
  return cssVariable("color", token);
}

export function space(token: SpaceToken) {
  return cssVariable("space", token);
}

export function typeScale(token: TypeToken) {
  return cssVariable("type", token);
}

export function designTokens() {
  return designSystem;
}