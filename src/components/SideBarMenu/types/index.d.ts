export interface MenuSectionProps {
  titleSection?: string;
  children: React.ReactNode;
}

export interface MenuLinkProps {
  name: string;
  icon: ReactElement<any, any>;
  link: string;
}
