import React from 'react';
import styled from 'styled-components';

interface IconProps {
  color?: string;
  size?: number;
  className?: string;
}

const IconSvg = styled.svg<{ size?: number }>`
  width: ${props => props.size ? `${props.size}px` : '16px'};
  height: ${props => props.size ? `${props.size}px` : '16px'};
  transition: stroke 0.3s ease;
`;

export const OrganizationsIcon: React.FC<IconProps> = ({ color = '#484848', size = 16, className }) => {
  return (
    <IconSvg 
      className={className}
      width={size} 
      height={size} 
      viewBox="0 0 16 16" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      size={size}
    >
      <g opacity="0.9">
        <path d="M13.5005 4.5H2.50049C2.22435 4.5 2.00049 4.72386 2.00049 5V13C2.00049 13.2761 2.22435 13.5 2.50049 13.5H13.5005C13.7766 13.5 14.0005 13.2761 14.0005 13V5C14.0005 4.72386 13.7766 4.5 13.5005 4.5Z" stroke={color} strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M10.5 4.5V3.5C10.5 3.23478 10.3946 2.98043 10.2071 2.79289C10.0196 2.60536 9.76522 2.5 9.5 2.5H6.5C6.23478 2.5 5.98043 2.60536 5.79289 2.79289C5.60536 2.98043 5.5 3.23478 5.5 3.5V4.5" stroke={color} strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M14.0005 7.89432C12.1769 8.94935 10.1067 9.50331 7.99996 9.5C5.89355 9.50331 3.82372 8.94954 2.00037 7.89485" stroke={color} strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M7.25 7.5H8.75" stroke={color} strokeLinecap="round" strokeLinejoin="round"/>
      </g>
    </IconSvg>
  );
};

export const ContractorsIcon: React.FC<IconProps> = ({ color = '#484848', size = 16, className }) => {
  return (
    <IconSvg 
      className={className}
      width={size} 
      height={size} 
      viewBox="0 0 16 16" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      size={size}
    >
      <path d="M9.33326 3.70663C10.5838 4.00724 11.697 4.71962 12.4938 5.72925C13.2906 6.73888 13.7248 7.98711 13.7266 9.2733V10.5466M2.27326 10.5466V9.2733C2.27148 7.9862 2.70435 6.7362 3.50174 5.72585C4.29913 4.71551 5.41431 4.004 6.66659 3.70663" stroke={color} strokeWidth="1.5" strokeMiterlimit="10"/>
      <path d="M13.7267 10.5467H2.27333C1.57009 10.5467 1 11.1168 1 11.82C1 12.5233 1.57009 13.0933 2.27333 13.0933H13.7267C14.4299 13.0933 15 12.5233 15 11.82C15 11.1168 14.4299 10.5467 13.7267 10.5467Z" stroke={color} strokeWidth="1.5" strokeMiterlimit="10"/>
      <path d="M9.90672 10.5466H6.09338L6.66588 3.64056C6.70026 3.22577 7.04694 2.90665 7.46314 2.90665H8.53696C8.95316 2.90665 9.29984 3.22577 9.33422 3.64056L9.90672 10.5466Z" stroke={color} strokeWidth="1.5" strokeMiterlimit="10"/>
    </IconSvg>


  );
};

export const ClientIcon: React.FC<IconProps> = ({ color = '#484848', size = 16, className }) => {
  return (
    <IconSvg 
      className={className}
      width={size} 
      height={size} 
      viewBox="0 0 16 16" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      size={size}
    >
      <path 
        d="M10.88 1.9522C11.9468 2.50663 12.68 3.6579 12.68 4.98824C12.68 6.31858 11.9468 7.46985 10.88 8.02428M12.32 11.9653C13.4082 12.4803 14.3882 13.3195 15.2 14.4M0.799988 14.4C2.20146 12.5347 4.1042 11.3882 6.19999 11.3882C8.29578 11.3882 10.1985 12.5347 11.6 14.4M9.43999 4.98824C9.43999 6.85951 7.98939 8.37648 6.19999 8.37648C4.41058 8.37648 2.95999 6.85951 2.95999 4.98824C2.95999 3.11697 4.41058 1.60001 6.19999 1.60001C7.98939 1.60001 9.43999 3.11697 9.43999 4.98824Z" 
        stroke={color} 
        strokeWidth="1.5" 
        strokeLinecap="round" 
        strokeLinejoin="round"
      />
    </IconSvg>
  );
};

export const DeleteIcon: React.FC<IconProps> = ({ color = '#484848', size = 32, className }) => {
  return (
    <IconSvg 
      className={className}
      width={size} 
      height={size} 
      viewBox="0 0 32 32" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      size={size}
    >
      <path 
        d="M22.8748 10.375L9.12476 10.375" 
        stroke={color} 
        strokeWidth="1.5" 
        strokeLinecap="round" 
        strokeLinejoin="round"
      />
      <path 
        d="M14.125 14.125V19.125" 
        stroke={color} 
        strokeWidth="1.5" 
        strokeLinecap="round" 
        strokeLinejoin="round"
      />
      <path 
        d="M17.875 14.125V19.125" 
        stroke={color} 
        strokeWidth="1.5" 
        strokeLinecap="round" 
        strokeLinejoin="round"
      />
      <path 
        d="M21.625 10.375V22.25C21.625 22.4158 21.5592 22.5747 21.4419 22.6919C21.3247 22.8092 21.1658 22.875 21 22.875H11C10.8342 22.875 10.6753 22.8092 10.5581 22.6919C10.4408 22.5747 10.375 22.4158 10.375 22.25V10.375" 
        stroke={color} 
        strokeWidth="1.5" 
        strokeLinecap="round" 
        strokeLinejoin="round"
      />
      <path 
        d="M19.125 10.375V9.125C19.125 8.79348 18.9933 8.47554 18.7589 8.24112C18.5245 8.0067 18.2065 7.875 17.875 7.875H14.125C13.7935 7.875 13.4755 8.0067 13.2411 8.24112C13.0067 8.47554 12.875 8.79348 12.875 9.125V10.375" 
        stroke={color} 
        strokeWidth="1.5" 
        strokeLinecap="round" 
        strokeLinejoin="round"
      />
    </IconSvg>
  );
};

export const AddPhotoIcon: React.FC<IconProps> = ({ color = '#484848', size = 16, className }) => {
  return (
    <IconSvg 
      className={className}
      width={size} 
      height={size} 
      viewBox="0 0 16 16" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      size={size}
    >
      <path 
        d="M14.667 7.66665V9.73331C14.667 11.2268 14.667 11.9735 14.3763 12.544C14.1206 13.0457 13.7127 13.4537 13.2109 13.7093C12.6405 14 11.8938 14 10.4003 14H5.60029C4.10681 14 3.36008 14 2.78964 13.7093C2.28788 13.4537 1.87993 13.0457 1.62427 12.544C1.33362 11.9735 1.33362 11.2268 1.33362 9.73331V6.26665C1.33362 4.77317 1.33362 4.02644 1.62427 3.45601C1.87993 2.95424 2.28788 2.54629 2.78964 2.29063C3.36008 1.99998 4.10681 1.99998 5.60029 1.99998H8.33362M12.667 5.33331V1.33331M10.667 3.33331H14.667M10.667 7.99998C10.667 9.47274 9.47305 10.6666 8.00029 10.6666C6.52753 10.6666 5.33362 9.47274 5.33362 7.99998C5.33362 6.52722 6.52753 5.33331 8.00029 5.33331C9.47305 5.33331 10.667 6.52722 10.667 7.99998Z" 
        stroke={color} 
        strokeLinecap="round" 
        strokeLinejoin="round"
      />
    </IconSvg>
  );
};

export const EditIcon: React.FC<IconProps> = ({ color = '#484848', size = 32, className }) => {
  return (
    <IconSvg 
      className={className}
      width={size} 
      height={size} 
      viewBox="0 0 32 32" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      size={size}
    >
      <path 
        d="M13.2411 22.875H9.75C9.58424 22.875 9.42527 22.8092 9.30806 22.6919C9.19085 22.5747 9.125 22.4158 9.125 22.25V18.7589C9.125 18.6768 9.14117 18.5955 9.17258 18.5197C9.20398 18.4439 9.25002 18.375 9.30806 18.3169L18.6831 8.94195C18.8003 8.82474 18.9592 8.75889 19.125 8.75889C19.2908 8.75889 19.4497 8.82474 19.5669 8.94195L23.0581 12.4331C23.1753 12.5503 23.2411 12.7092 23.2411 12.875C23.2411 13.0408 23.1753 13.1997 23.0581 13.3169L13.6831 22.6919C13.625 22.75 13.5561 22.796 13.4803 22.8274C13.4045 22.8588 13.3232 22.875 13.2411 22.875Z" 
        stroke={color} 
        strokeWidth="1.5" 
        strokeLinecap="round" 
        strokeLinejoin="round"
      />
      <path 
        d="M16.625 11L21 15.375" 
        stroke={color} 
        strokeWidth="1.5" 
        strokeLinecap="round" 
        strokeLinejoin="round"
      />
      <path 
        d="M13.4601 22.8351L9.16479 18.5397" 
        stroke={color} 
        strokeWidth="1.5" 
        strokeLinecap="round" 
        strokeLinejoin="round"
      />
    </IconSvg>
  );
}; 