import { Flex } from '@chakra-ui/react';
import * as React from 'react';
import * as Styles from '../Styles/MyStyles';

export const H1 = ({ children }: React.PropsWithChildren<React.ReactNode>) => {
    return (<h1 style={Styles.h1Styles}>{children}</h1>);
};
export const H2 = ({ children }: React.PropsWithChildren<React.ReactNode>) => {
    return (<h2 style={Styles.h2Styles}>{children}</h2>);
};
export const H3 = ({ children }: React.PropsWithChildren<React.ReactNode>) => {
    return (<h3 style={Styles.h3Styles}>{children}</h3>);
};
export const H4 = ({ children }: React.PropsWithChildren<React.ReactNode>) => {
    return (<h4 style={Styles.h4Styles}>{children}</h4>);
};
export const H5 = ({ children }: React.PropsWithChildren<React.ReactNode>) => {
    return (<h5 style={Styles.h5Styles}>{children}</h5>);
};
export const PageDiv = ({ children }: React.PropsWithChildren<React.ReactNode>) => {
    return (<Flex flexDirection='column' maxW='60%' p={5}>{children}</Flex>);
};
export const P = ({ children }: React.PropsWithChildren<React.ReactNode>) => {
    return (<p style={Styles.pStyles}>{children}</p>);
};
export const Ul = ({ children }: React.PropsWithChildren<React.ReactNode>) => {
    return (<ul style={Styles.ulStyles}>{children}</ul>);
};
export const Ol = ({ children }: React.PropsWithChildren<React.ReactNode>) => {
    return (<ol style={Styles.ulStyles}>{children}</ol>);
};
export const Li = ({ children }: React.PropsWithChildren<React.LiHTMLAttributes<string>>) => {
    return (<li style={Styles.ulStyles}>{children}</li>);
};
export const Table = ({ children }: React.PropsWithChildren<React.TableHTMLAttributes<string>>) => {
    return (<table style={Styles.tabelStyles}>{children}</table>);
};
export const Th = ({ children }: React.PropsWithChildren<React.ThHTMLAttributes<string>>) => {
    return (<th style={Styles.thStyles}>{children}</th>);
};
export const Tr = ({ children }: React.PropsWithChildren<React.ReactNode>) => {
    return (<tr>{children}</tr>);
};
export const Td = ({ children }: React.PropsWithChildren<React.TdHTMLAttributes<string>>) => {
    return (<td style={Styles.tdStyles}>{children}</td>);
};
export const Dl = ({ children }: React.PropsWithChildren<React.ReactNode>) => {
    return (<dl style={Styles.ulStyles}>{children}</dl>);
};
export const Dt = ({ children }: React.PropsWithChildren<React.ReactNode>) => {
    return (<dt style={Styles.ulStyles}><b>{children}</b></dt>);
};
export const Dd = ({ children }: React.PropsWithChildren<React.ReactNode>) => {
    return (<dd style={Styles.ulStyles}>{children}</dd>);
};
export const A = ({ href, children }: React.PropsWithChildren<React.AnchorHTMLAttributes<string>>) => {
    return (<a href={href}>{children}</a>);
};