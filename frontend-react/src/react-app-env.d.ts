/// <reference types="react-scripts" />
import '@emotion/react'

declare module '@emotion/react' {
export interface Theme {
    bg: string;
    bgLighter: string;
    text: string;
    textSoft: string;
    soft: string;
}}
