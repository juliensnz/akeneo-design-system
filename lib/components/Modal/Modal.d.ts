import React, { ReactElement, ReactNode } from 'react';
import { IllustrationProps } from '../../illustrations/IllustrationProps';
import { Override } from '../../shared';
declare const SectionTitle: import("styled-components").StyledComponent<"div", any, {
    size?: "big" | "default" | "small" | undefined;
    color?: string | undefined;
} & Record<string, unknown> & import("styled-components").ThemeProps<import("../../theme/theme").Theme>, never>;
declare const Title: import("styled-components").StyledComponent<"div", any, Record<string, unknown>, never>;
declare const BottomButtons: import("styled-components").StyledComponent<"div", any, {}, never>;
declare const TopRightButtons: import("styled-components").StyledComponent<"div", any, {}, never>;
declare type ModalProps = Override<React.HTMLAttributes<HTMLDivElement>, {
    illustration?: ReactElement<IllustrationProps>;
    closeTitle: string;
    children?: ReactNode;
    onClose: () => void;
}>;
declare const Modal: React.FC<ModalProps> & {
    BottomButtons: typeof BottomButtons;
    TopRightButtons: typeof TopRightButtons;
};
export { Modal, SectionTitle, Title };
