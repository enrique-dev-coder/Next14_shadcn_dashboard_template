import { User } from '@prisma/client';
import prisma from '../../prisma';
import DashboardLayout from '@/components/DashboardLayout';

export default async function Home() {
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

  const allUsers: User[] = await prisma.user.findMany({
    include: {
      posts: true,
    },
  });

  return (
    <DashboardLayout>
      <div>
        {allUsers.map((user) => (
          <div key={user.id}>{user.name}</div>
        ))}
      </div>
    </DashboardLayout>
  );
}
