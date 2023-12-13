'use client';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useRouter } from 'next/navigation';
// post request
import { useMutation } from '@tanstack/react-query';
import axios from 'axios';
import { NewUser } from '@/lib/type';
import SuccessErrorAlert from './SuccessErrorAlert';

//NOTA: el modal cierra automaticamente si esta sencotro del <dialogoClose> , por eso se usa la propiedad de opne para manipular el evento cuando se necesite

export function AddUserModal() {
  const [open, setOpen] = useState(false);
  const [showSuccessAlert, setShowSuccessAlert] = useState(false);

  return (
    <>
      <SuccessErrorAlert
        show={showSuccessAlert}
        setAlert={setShowSuccessAlert}
      />
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild>
          <Button className="">Crear usuario</Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Edit profile</DialogTitle>
            <DialogDescription>Agrega un nuevo usuario</DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <AddUserModalForm
              closeModal={() => setOpen(false)}
              showAlert={() => setShowSuccessAlert(true)}
            />
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}

const AddUserModalForm = ({
  closeModal,
  showAlert,
}: {
  closeModal: () => void;
  showAlert: () => void;
}) => {
  const router = useRouter();

  //NOTA: este hook evita todo el uso de el useState y de los eventos de onChange
  //NOTA: este type es para decir que esa forma solo va a tner el NewUSEr, par amas seguridad de tipado

  const { register, handleSubmit } = useForm<NewUser>({});

  // funcion para mandar datos a la api
  // La api se hace  aqui mismo en el proyect de next js
  // la ruta es  un post a "api/users/create"

  // se usara reactquery y axios para simplificar mas el codigo

  const { mutate: createUser } = useMutation({
    // funcion  que hace la llamada a la api
    mutationFn: (newUser: NewUser) => {
      return axios.post('/api/users/create', newUser);
    },
    onSuccess: () => {
      closeModal();
      showAlert();
      router.refresh();
    },
  });

  const onAddUserSubmit: SubmitHandler<NewUser> = (data: NewUser) => {
    createUser(data);
  };

  return (
    <form onSubmit={handleSubmit(onAddUserSubmit)}>
      <div className="my-1">
        <label>Nombre</label>
        <input
          {...register('name', { required: true })}
          type="text"
          className="w-full p-1 rounded-md"
        />
      </div>
      <div className="my-1">
        <label>Email</label>
        <input
          {...register('email', { required: true })}
          type="Email"
          className="w-full p-1 rounded-md"
        />
      </div>
      <div>
        <Button type="submit" className="mt-2">
          Add
        </Button>
      </div>
    </form>
  );
};
