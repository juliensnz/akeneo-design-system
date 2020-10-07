import { ThemedStyledProps } from 'styled-components';
declare type FontSize = {
    big: string;
    bigger: string;
    default: string;
    small: string;
    title: string;
};
declare type Color = {
    blue10: string;
    blue100: string;
    blue120: string;
    blue140: string;
    blue20: string;
    blue40: string;
    blue60: string;
    blue80: string;
    green100: string;
    green120: string;
    green140: string;
    green20: string;
    green40: string;
    green60: string;
    green80: string;
    grey100: string;
    grey120: string;
    grey140: string;
    grey20: string;
    grey40: string;
    grey60: string;
    grey80: string;
    purple100: string;
    purple120: string;
    purple140: string;
    purple20: string;
    purple40: string;
    purple60: string;
    purple80: string;
    red10: string;
    red100: string;
    red120: string;
    red140: string;
    red20: string;
    red40: string;
    red60: string;
    red80: string;
    white: string;
    yellow10: string;
    yellow100: string;
    yellow120: string;
    yellow140: string;
    yellow20: string;
    yellow40: string;
    yellow60: string;
    yellow80: string;
};
declare type Theme = {
    palette: {
        primary: string;
        secondary: string;
        tertiary: string;
        warning: string;
        danger: string;
        brand: string;
    };
    fontSize: FontSize;
    color: Color;
};
declare type Level = 'primary' | 'secondary' | 'tertiary' | 'warning' | 'danger';
declare const getColor: (color: string) => (props: AkeneoThemedProps) => string;
declare const getColorForLevel: (level: Level, gradient: number) => (props: AkeneoThemedProps) => string;
declare const getBrandColor: () => (props: AkeneoThemedProps) => string;
declare const getFontSize: (fontSize: string) => (props: AkeneoThemedProps) => string;
export declare type AkeneoThemedProps<P = Record<string, unknown>> = ThemedStyledProps<P, Theme>;
export type { Theme, FontSize, Color, Level };
export { getColor, getBrandColor, getColorForLevel, getFontSize };
