'use client';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';

export function AddUserModal() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="">Crear usuario</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Edit profile</DialogTitle>
          <DialogDescription>Agrega un nuevo usuario</DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <AddUserModalForm />
        </div>
        <DialogFooter>
          <Button type="submit">Save changes</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

const AddUserModalForm = () => {
  return (
    <form>
      <div className="my-1">
        <label>Nombre</label>
        <input type="text" className="w-full p-1 rounded-md" />
      </div>
      <div className="my-1">
        <label>Email</label>
        <input type="Email" className="w-full p-1 rounded-md" />
      </div>
    </form>
  );
};
