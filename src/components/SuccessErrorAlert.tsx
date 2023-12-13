import { useEffect, Dispatch, SetStateAction } from 'react';
import { SmilePlus } from 'lucide-react';
import React from 'react';
import { Alert, AlertTitle, AlertDescription } from './ui/alert';

const SuccessErrorAlert = ({
  show,
  setAlert,
}: {
  show: boolean;
  setAlert: Dispatch<SetStateAction<boolean>>;
}) => {
  useEffect(() => {
    setTimeout(() => {
      setAlert(false);
    }, 2000);
  }, [show, setAlert]);

  return (
    <>
      {show && (
        <div className="absolute max-w-[200px] ">
          <Alert variant="success">
            <SmilePlus className="h-4 w-4" />
            <AlertTitle>EXCELENTE!</AlertTitle>
            <AlertDescription>Usuario Agregado</AlertDescription>
          </Alert>
        </div>
      )}
    </>
  );
};

export default SuccessErrorAlert;
