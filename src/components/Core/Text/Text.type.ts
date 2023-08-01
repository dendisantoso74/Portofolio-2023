import { HTMLAttributes, ReactNode } from "react";

export const TextVariant = [
  "headline-1",
  "headline-2",
  "headline-3",
  "body",
  "label",
  "label-b",
  "caption",
  "subtitle",
] as const;

export type TagType =
  | "h1"
  | "h2"
  | "h3"
  | "h4"
  | "h5"
  | "h6"
  | "p"
  | "span"
  | "div"
  | "address"
  | "small"
  | "label"
  | "legend";

export interface TextTypes extends HTMLAttributes<Element> {
  children: string | ReactNode | ReactNode[] | number;
  tag?: TagType;
  variant?: (typeof TextVariant)[number];
}
