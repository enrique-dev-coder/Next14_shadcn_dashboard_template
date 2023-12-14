import prisma from '../../prisma';
import { AddUserModal } from '@/components/AddUserModal';
import SearchBar from '@/components/SearchBar';
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

// TODO agegar search query como el lama dev a la tabla (ya)
// con server components usando los SeatchParams es super facil y rapido hcer esto
// TODO agregar filas personalizadas a la tabla como en https://ui.shadcn.com/examples/tasks

export default async function Home({
  params,
  searchParams,
}: {
  params: string;
  searchParams: { q: string };
}) {
  // get single user or if its undefined all users
  // prims maneja la query donde simplemente si esta indefinido te trae todos
  // esto está muy bien porque no es necesario entonces  hacer malabares con si hay parametros de query o no
  const allUsersSearched: UserData[] = await prisma.user.findMany({
    where: {
      name: {
        contains: searchParams.q || undefined,
      },
    },
    include: {
      posts: true,
    },
  });

  // // GET USERS
  // const allUsers: UserData[] = await prisma.user.findMany({
  //   include: {
  //     posts: true,
  //   },
  // });

  return (
    <DashboardLayout>
      <div>
        <div className="p-2 flex justify-between">
          <SearchBar />
          <AddUserModal />
        </div>
        <DataTable columns={columns} data={allUsersSearched} />
      </div>
    </DashboardLayout>
  );
}
