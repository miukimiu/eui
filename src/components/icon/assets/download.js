import React from 'react';

const EuiIconDownload = ({ title, titleId, ...props }) => (
  <svg
    width={16}
    height={16}
    viewBox="0 0 16 16"
    xmlns="http://www.w3.org/2000/svg"
    aria-labelledby={titleId}
    {...props}>
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M16 14.006V11h-1v3.006a.995.995 0 01-.994.994H1.994A.995.995 0 011 14.006V11H0v3.006C0 15.106.893 16 1.994 16h12.012c1.1 0 1.994-.893 1.994-1.994z" />
    <path d="M7.99 11c.421.003.843-.17 1.165-.516l1.95-2.05a.617.617 0 000-.828.52.52 0 00-.77 0l-1.85 1.943V1.556c0-.307-.224-.556-.5-.556s-.5.249-.5.556v7.96l-1.82-1.91a.52.52 0 00-.77 0 .617.617 0 000 .829l1.95 2.05a1.574 1.574 0 001.14.515h.005z" />
  </svg>
);

export const icon = EuiIconDownload;
