import './header.css';
export type HeaderProps = {
    user: {
        name: string;
    };
    onLogout: () => void;
    onLogin: () => void;
    onCreateAccount: () => void;
};
export declare const createHeader: ({ user, onLogout, onLogin, onCreateAccount }: HeaderProps) => HTMLElement;
