import AuthController from '@/utils/auth';
import React from 'react';
import { Navigate } from 'react-router-dom';

const authController = new AuthController(localStorage);

export default function Private({
  element,
}: {
  element: React.ReactNode;
}) {
  const token = authController.getToken();

  if (!token) {
    return <Navigate to={'/auth'} replace />;
  }

  return element;
}
