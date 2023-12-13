import prisma from '../../prisma';
import { AddUserModal } from '@/components/AddUserModal';
import DashboardLayout from '@/components/DashboardLayout';
import { DataTable } from '@/components/MainTable';
import { columns } from '@/components/Columns';
import { UserData } from '@/lib/type';

// NOTA : las funciones como crear es algo complejo ponerlas de lado del servidor porque se tendrian que ejecutar automaticamente

// const createUser = await prisma.user.create({
//   data: {
//     name: 'Rich',
//     email: 'hello2@prisma.com',
//     posts: {
//       create: {
//         title: 'My first post',
//         body: 'Lots of really interesting stuff',
//         slug: 'my-first-post-2',
//       },
//     },
//   },
// });

//NOTa: por ejemplo una de get users se ejecuta automaticamente al cargar la page.tsx entonces esta muy eficiente para obtener datos

export default async function Home() {
  // GET USERS
  const allUsers: UserData[] = await prisma.user.findMany({
    include: {
      posts: true,
    },
  });

  return (
    <DashboardLayout>
      <div>
        <div className="p-2 flex justify-end">
          <AddUserModal />
        </div>
        <DataTable columns={columns} data={allUsers} />
      </div>
    </DashboardLayout>
  );
}
